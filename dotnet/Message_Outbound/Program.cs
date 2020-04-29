using System;
using SignalWire.Relay;
using SignalWire.Relay.Messaging;
//using SignalWire.Relay.Messaging.SendSource;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;

namespace Message_Outbound
{
    internal class ExampleConsumer : Consumer
    {
        protected override void Setup()
        {
            Project = "YOU_PROJECT_ID";
            Token = "YOU_PROJECT_ID";
        }

        protected override void Ready()
        {

	    SendResult resultSend = Client.Messaging.Send("joshebosh", "+19312989898", "+13342120123", new SendSource("My Test Message"));
            if (resultSend.Successful)
            {


	        Console.WriteLine(resultSend.MessageID);
                // Message has been queued, you can subscribe to MessagingAPI.OnMessageStateChange to receive further updates
            }
        }
    }

    internal class Program
    {
        public static void Main()
        {
            new ExampleConsumer().Run();
        }
    }
}
