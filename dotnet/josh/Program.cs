
//https://pastebin.freeswitch.org/view/91886aa9

using SignalWire.Relay;
using SignalWire.Relay.Calling;
using SignalWire.Relay.Messaging;
using System;
using System.Threading.Tasks;

namespace josh
{
    internal class Program
    {
        public static void Main()
        {
            using (Client client = new Client("YOU_PROJECT_ID", "YOU_PROJECT_ID"))
            {

                // Assign callbacks
                client.OnReady += c =>
                {
                    // This callback cannot block, so create a threaded task
                    Task.Run(() =>
                    {
		    /*
			SendResult resultSend = client.Messaging.Send("joshebosh", "+19312989898", "+13342120123");

			if (resultSend.Successful)
			{
				// Message has been queued, you can subscribe to MessagingAPI.OnMessageStateChange to receive further updates

			}
			*/
                        DialResult resultDial = client.Calling.DialPhone("+19312989898", "+13342120123");

                        if (resultDial.Successful)
                        {
                            // Your call has been answered, use resultDial.Call to access it
			    Console.Write(resultDial.Call);
			    // Play an audio file, block until it's finished or an error occurs
            		    resultDial.Call.PlayAudio("https://cdn.signalwire.com/default-music/welcome.mp3");
                        }
                    });
                };

                // Connect the client
                client.Connect();

                // Prevent exit until a key is pressed
                Console.Write("Press any key to exit...");
                Console.ReadKey(true);
            }
        }
    }
}
