using SignalWire.Relay;
using SignalWire.Relay.Calling;
using System;
using System.Collections.Generic;

namespace Calling_InboundCall
{
    internal class TestConsumer : Consumer
    {
        protected override void Setup()
        {
            Project = "YOU_PROJECT_ID";
            Token = "YOU_PROJECT_ID";
            Contexts = new List<string> { "joshebosh" };
        }

        // This is executed in a new thread each time, so it is safe to use blocking calls
        protected override void OnIncomingCall(Call call)
        {
            // Answer the incoming call, block until it's answered or an error occurs
            AnswerResult resultAnswer = call.Answer();

            if (!resultAnswer.Successful)
            {
                // The call was not answered successfully, stop the consumer and bail out
                Stop();
                return;
            }

            // Prompt with TTS and collect the PIN, block until it's finished or an error occurs
            PromptResult resultPrompt = call.PromptTTS(
                "Welcome to SignalWire! Please enter your PIN",
                new CallCollect
                {
                    InitialTimeout = 10,
                    Digits = new CallCollect.DigitsParams { Max = 4, DigitTimeout = 5 }
                });

            if (resultPrompt.Successful)
            {
                // Play back what was collected
                call.PlayTTS("You entered " + resultPrompt.Result + ". Thanks and good bye!");
            }

            // Play an audio file, block until it's finished or an error occurs
	    Console.Write("call has been answered, playing mp3 now...");
            call.PlayAudio("https://cdn.signalwire.com/default-music/welcome.mp3");

            // Hangup
            call.Hangup();

            // Stop the consumer
            Stop();
        }
    }

    internal class Program
    {
        public static void Main()
        {
            // Create the TestConsumer and run it
            new TestConsumer().Run();

            // Prevent exit until a key is pressed
            Console.Write("Press any key to exit...");
            Console.ReadKey(true);
        }
    }
}
