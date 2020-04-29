using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

class Program
{
    static void Main(string[] args)
    {
        TwilioClient.Init("YOU_PROJECT_ID",
                          "YOU_PROJECT_ID",
                           new Dictionary<string, object> { ["signalwireSpaceUrl"] = "joshebosh.signalwire.com" });

	string toNumber = "+19312989898";

        var message = MessageResource.Create(
            to: new Twilio.Types.PhoneNumber(toNumber),
            //to: new Twilio.Types.PhoneNumber("+19312989898"),
            from: new Twilio.Types.PhoneNumber("+13342120123"),
            body: "Hello World!"
        );

        Console.WriteLine(message.Sid);
    }
}
