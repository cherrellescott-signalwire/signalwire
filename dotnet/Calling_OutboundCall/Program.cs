using SignalWire.Relay;
using SignalWire.Relay.Calling;
using System;

namespace Calling_OutboundCall
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
            // Create a new phone call and dial it immediately, block until it's answered, times out,
            // busy, or another error occurs
            DialResult resultDial = Client.Calling.DialPhone("+19312989898", "+17742989898");

            // Prompt with TTS and collect the PIN, block until it's finished or an error occurs
            PromptResult resultPrompt = resultDial.Call.PromptTTS(
                "Welcome to SignalWire! Please enter your PIN",
                new CallCollect
                {
                    InitialTimeout = 10,
                    Digits = new CallCollect.DigitsParams { Max = 4, DigitTimeout = 5 }
                });

            if (resultPrompt.Successful)
            {
                // Play back what was collected
                resultDial.Call.PlayTTS("You entered " + resultPrompt.Result + ". Thanks and good bye!");
            }

            // Hangup
            resultDial.Call.Hangup();
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
