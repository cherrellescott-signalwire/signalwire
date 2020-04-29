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
using sTask = System.Threading.Tasks;
using Twilio.TwiML;
using Twilio.TwiML.Voice;
using Newtonsoft.Json.Linq;

namespace LaMLTest
{
    static class Program
    {
        private static bool sShutdown = false;

        internal static void Main(string[] args)
        {
            using (IWebHost webHost = new WebHostBuilder()
                // Use the Kestrel server, listen on port 3000
                .UseKestrel(o => o.ListenAnyIP(3000))
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
                System.Threading.Tasks.Task webHostRunTask = webHost.RunAsync();

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

    [Route("call")]
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

        // This endpoint routes via GET to /test
        [HttpGet()]
        public LaMLResult Get(VoiceRequest request)
        {
            var response = new VoiceResponse();
            response.Say($"Welcome. Are you from {request.FromCity}?");
            Console.WriteLine("YOUR RESPONSE IS: ", response.ToString());
            return LaML(response);
        }

        // This endpoint routes via POST to /test
        [HttpPost()]
        public LaMLResult Post(VoiceRequest request)
        {
            var response = new VoiceResponse();
            var dial = new Dial();
            dial.Queue("joshebosh", url: new Uri("http://ezra.joshebosh.com:3000/status"));
            //response.Say($"Welcome. Are you from");
            response.Say("You're being connected to customer");
            response.Append(dial);
            Console.WriteLine("YOUR RESPONSE IS: ", response.ToString());
            return LaML(response);
        }
    }

    [Route("status")]
    public class Test2Controller : Controller
    {
        private readonly ILogger mLogger = null;
        public Test2Controller(ILogger<Test2Controller> logger)
        {
            // Store the TestController Logger provided by automatic service dependency injection
            mLogger = logger;
        }
        public void Log(LogLevel level, Exception exception, string output, [CallerMemberName] string callerName = "", [CallerFilePath] string callerFile = "", [CallerLineNumber] int lineNumber = 0)
        {
            if (!mLogger.IsEnabled(level)) return;
            mLogger.Log(level, exception, string.Format("{0} [{1,11}] ({2} @ {3}:{4}) {5}", DateTime.UtcNow.ToString("yyyy/MM/dd HH:mm:ss.fff"), level, callerName, Path.GetFileName(callerFile), lineNumber, output));
        }
        // This endpoint routes via GET to /test2
        [HttpGet()]
        public IActionResult Get()
        {
            string output = "";
            foreach (var kv in Request.Headers)
            {
                output += string.Format("Header: {0} = {1}\n", kv.Key, kv.Value);
            }
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                output += "\nBody:\n" + reader.ReadToEnd();
            }
            mLogger.Log(LogLevel.Information, output);
            return Ok(output);
        }

        // This endpoint routes via POST to /test2
        [HttpPost()]
        public IActionResult Post()
        {
            /*
            string output = "";
            foreach (var kv in Request.Headers)
            {
                output += string.Format("Header: {0} = {1}\n", kv.Key, kv.Value);
            }
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                output += "\nBody:\n" + reader.ReadToEnd();
            }
            mLogger.Log(LogLevel.Information, output);
            //return Ok(output);
            return Ok("<Response><Say>connecting you to agent now</Say></Response>");
            */
	    string swRawData = "";
	    using (StreamReader reader = new StreamReader(Request.Body))
	    {
		swRawData  += reader.ReadToEnd();
		}
//		dynamic swParams = JObject.Parse(swRawData);
        Console.WriteLine("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        Console.WriteLine(swRawData);
        Console.WriteLine("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        //return Ok("<Response><Say>Your dequeing call sid is "+ swParams.DequeingCallSid + "</Say></Response>");
        return Ok("<Response><Say>Your dequeing call sid is not found</Say></Response>");
        }
    }
}
