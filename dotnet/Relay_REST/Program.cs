using System;
using System.IO;
using System.Net.Http;

class Program
{
    static void Main(string[] args)
    {
        SignalwireAPI signalwireAPI = new SignalwireAPI();
        String numResult = signalwireAPI.numberLookup("+18448375267");// Replace with your number for number lookup
        Console.Write(numResult);
        Console.Read();
    }
}

class SignalwireAPI
{
    //private int _encoding;
    public string numberLookup(string number)
    {
	int _encoding;
        var pojectId = "YOU_PROJECT_ID"; //Replace your API here
        var apiToken = "YOU_PROJECT_ID"; //Replace your Token here
        var url = "http://joshebosh.signalwire.com/api/relay/rest/lookup/phone_number/" + number;

        var httpClient = new HttpClient(new HttpClientHandler())
        {
            BaseAddress = new Uri(url),
            Timeout = new TimeSpan(0, 2, 0)
        };

        httpClient.DefaultRequestHeaders.Add("ContentType", "application/json");
        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(pojectId+":"+ apiToken);
        string val = System.Convert.ToBase64String(plainTextBytes);
        httpClient.DefaultRequestHeaders.Add("Authorization", "Basic " + val);
        HttpResponseMessage response = httpClient.GetAsync(url).Result;

        string content = string.Empty;
        using (StreamReader stream = new StreamReader(response.Content.ReadAsStreamAsync().Result, System.Text.Encoding.GetEncoding(_encoding)))
        {
            content = stream.ReadToEnd();
        }
        return content;
    }
}
