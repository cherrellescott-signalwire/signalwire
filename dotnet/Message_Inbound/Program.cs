using System;
using SignalWire.Relay;
using SignalWire.Relay.Messaging;
using System.Collections.Generic;

namespace Message_Inbound
{
    internal class ExampleConsumer : Consumer
    {
        protected override void Setup()
        {
            Project = "YOU_PROJECT_ID";
            Token = "YOU_PROJECT_ID";
            Contexts = new List<string> { "joshebosh" };
        }

        protected override void OnIncomingMessage(Message message)
        {
            base.OnIncomingMessage(message);
            Console.WriteLine(message.Body);
            Console.WriteLine(message.To);
            Console.WriteLine(message.From);
            //Console.ReadLine();

            if (message.Body == "Help") {
                SendResult resultSend = Client.Messaging.Send("joshebosh", message.From, message.To, new SendSource("My Test Message"));
                if (resultSend.Successful)
                {
                    // Message has been queued, you can subscribe to MessagingAPI.OnMessageStateChange to receive further updates
                }
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
