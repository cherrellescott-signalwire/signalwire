using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SignalWire.AspNet.Common;
using SignalWire.AspNet.Core;
using System;
using System.IO;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Twilio.TwiML;

namespace LaMLTest
{
    static class Program
    {
        private static bool sShutdown = false;
        internal static void Main(string[] args)
        {
            using (IWebHost webHost = new WebHostBuilder()
                // Use the Kestrel server, listen on port 1234
                .UseKestrel(o => o.ListenAnyIP(1234))
                .UseSetting(WebHostDefaults.SuppressStatusMessagesKey, "True")
                // Set the internal web host logging
                .ConfigureLogging(b => b.AddConsole().SetMinimumLevel(LogLevel.Debug))
                // Add MVC service and logging service to make logging dependency injection available to the MVC controllers
                .ConfigureServices(s => s.AddLogging().AddMvc())
                // Add MVC to the request pipeline
                .Configure(b => b.UseMvc())
                .Build())
            {
                // Startup
                // Run the web host, the resulting task completes when the web host is stopped
                Task webHostRunTask = webHost.RunAsync();
                // Running
                while (!sShutdown)
                {
                    // Do other stuff with the main thread
                    if (!sShutdown) Thread.Sleep(1000);
                }
                // Shutdown
                // On shutdown, stop the web host gracefully
                webHost.StopAsync();
                // And wait for the task to complete that denotes it has shutdown
                webHostRunTask.Wait();
            }
        }
    }
    [Route("test")]
    [ApiController]
    public class TestController : SignalWireController
    {
        private readonly ILogger mLogger = null;
        public TestController(ILogger<TestController> logger)
        {
            // Store the TestController Logger provided by automatic service dependency injection
            mLogger = logger;
        }
        public void Log(LogLevel level, Exception exception, string output, [CallerMemberName] string callerName = "", [CallerFilePath] string callerFile = "", [CallerLineNumber] int lineNumber = 0)
        {
            if (!mLogger.IsEnabled(level)) return;
            mLogger.Log(level, exception, string.Format("{0} [{1,11}] ({2} @ {3}:{4}) {5}", DateTime.UtcNow.ToString("yyyy/MM/dd HH:mm:ss.fff"), level, callerName, Path.GetFileName(callerFile), lineNumber, output));
        }
        // This endpoint routes via POST to /test
        [HttpPost()]
        public LaMLResult Post(VoiceRequest request)
        {
            var response = new VoiceResponse();
            response.Say($"Welcome. Are you from {request.FromCity}?");
            return LaML(response);
        }
        // This endpoint routes via GET to /test/{token}
        [HttpGet("{token}")]
        public IActionResult GetToken(string token)
        {
            Log(LogLevel.Information, null, string.Format("Token {0} was passed", token));
            return Ok(token);
        }
    }
}
