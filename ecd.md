# Code: 10001
Log Level: ERROR  
Message: Account is not active  
Secondary Message: This account has been disabled and may not be used until it is reactived.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 10001 

### Account is not active

This account has been disabled and may not be used until it is reactivated.

#### Possible Causes 
*  Lack of funds
*   Violation of the Terms of Service or Acceptable Use Policy


#### Possible Solutions
*  Check your account balance.  Refill funds if necessary.	
*  Contact SignalWire <a href="https://signalwire.com/support">customer support</a> to inquire further.








# Code: 10002
Log Level: ERROR  
Message: Trial account does not support this feature  
Secondary Message: Your account is currently in Trial mode and does not have access to this feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 10002 

### Trial account does not support this feature

Your account is currently in Trial mode and does not have access to this
feature.

#### Possible Causes

* Attempting to use a premium feature with a trial account
* Attempting to place too many verification calls in a 72 hour period


#### Possible Solutions

*  Upgrade to a full account to use premium features, and remove the
   restrictions on verification calls per day.






# Code: 10003
Log Level: error  
Message: Incoming call rejected due to inactive account  
Secondary Message: An incoming call was made to your application, but was not answered because your account was not active at the time.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 10003 

### Incoming call rejected due to inactive account

An incoming call was made to your application, but was not answered because your account was not active at the time.

#### Possible Causes 
*  Lack of funds
*   Violation of the Terms of Service or Acceptable Use Policy


#### Possible Solutions
*  Check your account balance.  Refill funds if necessary.	
*   Contact SignalWire <a href="https://signalwire.com/support">customer support</a> to inquire further.








# Code: 10004
Log Level: ERROR  
Message: Call concurrency limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 10004

### Call concurrency limit exceeded

The call was rejected because you reached the maximum limit of concurrent calls available for your account.



# Code: 11100
Log Level: ERROR  
Message: Invalid URL format  
Secondary Message: The format of the provided URL is invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11100 

### Invalid URL format

The format of the provided URL is invalid.

#### Possible Causes 

*   Bad URL for phone number configuration
*   Bad URL passed to outgoing call REST request
*   Bad URL in Play or Redirect Verb Body
*   Bad URL provided for a verb's action attribute
*   Unsupported characters in auth portion of URL


#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.





# Code: 11200
Log Level: ERROR  
Message: HTTP retrieval failure  
Secondary Message: There was a failure attempting to retrieve the contents of this URL.    
Description: An 11200 error is an indicator of a connection failure between SignalWire and your  
service. When SignalWire requests a page from your server, we wait a maximum of
15 seconds for a response. A connection failure will occur if no response is
returned in that time.

There are many reasons a connection timeout can occur; common causes are long
running database queries or outside processes and calls to external systems
taking a long time to return. It may be possible your application experienced
one of these issues. If you are encountering this error only intermittently, it
is possible that your web server was temporarily unavailable or experiencing a
network outage.

### 502 Bad Gateway errors

If your [debugger](/user/account/debugger) is reporting a 502 Bad
Gateway error, this may mean that SignalWire’s internal server had trouble
retrieving content from your website. Your request must contain a
[Content-Type](/docs/errors/12300) that is valid. SignalWire may also have had
problems resolving your DNS name to an IP address, or issues with the network
connection. Check that your web server is started, and is available over the
public Internet.
Cause: * Web server returned a 4xx or 5xx HTTP response to SignalWire  
* Misconfigured Web Server
* Network disruptions between SignalWire and your web server
* No Content-Type header attached to response
* Content-Type doesn’t match actual content, e.g. an MP3 file that is being
served with `Content-Type: audio/x-wav`, instead of `Content-Type: audio/mpeg`
Solutions: * Double check that your LaML URL does not return a 4xx or 5xx error  
* Make certain that the URL does not perform a 302 redirect to an invalid URL
* Confirm the URL requested is not protected by HTTP Auth
* Make sure your web server allows HTTP POST requests to static resources (if
the URL refers to .xml or .html files)
* Verify your web server is up and responsive
* Check to see that the URL host is not a private or local IP address
* Verify the ping times and packet loss between your web server and https://signalwire.com 
Docs:
## ERROR - 11200

### HTTP retrieval failure

There was a failure attempting to retrieve the contents of this URL. An 11200 error is an indicator of a connection failure between SignalWire and your
service. When SignalWire requests a page from your server, we wait a maximum of
15 seconds for a response. A connection failure will occur if no response is
returned in that time.

There are many reasons a connection timeout can occur; common causes are long
running database queries or outside processes and calls to external systems
taking a long time to return. It may be possible your application experienced
one of these issues. If you are encountering this error only intermittently, it
is possible that your web server was temporarily unavailable or experiencing a
network outage.

### 502 Bad Gateway errors

If your [debugger](/user/account/debugger) is reporting a 502 Bad
Gateway error, this may mean that SignalWire’s internal server had trouble
retrieving content from your website. Your request must contain a
[Content-Type](/docs/errors/12300) that is valid. SignalWire may also have had
problems resolving your DNS name to an IP address, or issues with the network
connection. Check that your web server is started, and is available over the
public Internet.

#### Possible Causes
* Web server returned a 4xx or 5xx HTTP response to SignalWire
* Misconfigured Web Server
* Network disruptions between SignalWire and your web server
* No Content-Type header attached to response
* Content-Type doesn’t match actual content, e.g. an MP3 file that is being
served with `Content-Type: audio/x-wav`, instead of `Content-Type: audio/mpeg`

#### Possible Solutions
* Double check that your LaML URL does not return a 4xx or 5xx error
* Make certain that the URL does not perform a 302 redirect to an invalid URL
* Confirm the URL requested is not protected by HTTP Auth
* Make sure your web server allows HTTP POST requests to static resources (if
the URL refers to .xml or .html files)
* Verify your web server is up and responsive
* Check to see that the URL host is not a private or local IP address
* Verify the ping times and packet loss between your web server and https://signalwire.com 



# Code: 11201
Log Level: ERROR  
Message: TCP connection timed out  
Secondary Message: SignalWire cannot establish a TCP connection to your web server. The two attempts to connect to your web server were timed out. Each connection attempt has a 5 second timeout.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11201
### TCP connection timed out
SignalWire cannot establish a TCP connection to your web server. The two attempts to connect to your web server were timed out. Each connection attempt has a 5 second timeout.

#### Possible Causes
* firewall in your network blocking incoming TCP traffic
* network outage between SignalWire and your web server
* invalid host part in the HTTP URL pointing to non-existing host or private IP address

#### Possible Solutions
* verify firewall configuration in your network or on the web server
* verify network connectivity to your web server
* verify the HTTP URL provided is accessible to the public Internet



# Code: 11202
Log Level: ERROR  
Message: TCP connection refused  
Secondary Message: SignalWire cannot establish a TCP connection to your web server. Your web server rejected our two connection attempts.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11202
### TCP connection refused
SignalWire cannot establish a TCP connection to your web server. Your web server rejected our two connection attempts.

#### Possible Causes
* invalid port number in the HTTP URL
* your web server process is down so no process is listening on the port
* your web server is in a degraded state and is not accepting new connections (e.g., overloaded)

#### Possible Solutions
* verify the HTTP URL provided has the correct host and port number of your web server
* verify your web server is running and listening on the correct port
* verify your web server is properly provisioned to handle all requests



# Code: 11203
Log Level: ERROR  
Message: HTTP communication total time out triggered  
Secondary Message: All attempts to communicate with your web server were timed out.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11203

### HTTP communication total time out triggered
All attempts to communicate with your web server were timed out. You set the total timeout using the tt parameter in the URL fragment identifier.

#### Possible Solutions
*  Adjust the 'tt' (total timeout) parameter in the fragment part of the URL, the one after '#'.



# Code: 11205
Log Level: ERROR  
Message: HTTP connection failure  
Secondary Message: There was a network failure attempting to connect to this URL    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11205 

### HTTP connection failure

There was a network failure attempting to connect to this URL. SignalWire will try for 10 seconds to establish a TCP connection to your URL (two 5 second attempts). SignalWire will wait for a total of 15 seconds to receive an HTTP response, this includes the TCP connection time, so if it took six seconds to establish a TCP connection, your server would have 9 seconds to deliver an HTTP response. If either of those timers expire we fail the request, fire a notification, and try your Fallback URL, if one is specified.

#### Possible Causes 
*  network outages between SignalWire and your web server
*  URLs that reference private IP addresses or localhost
*  SignalWire's TCP timeout is 10 seconds; so if you see an error in Request Inspector after > 10000 milliseconds SignalWire could locate your server, but could not establish a TCP connection with it. 
*  SignalWire's HTTP timeout is 15 seconds; if you see an error in Request Inspector returned after > 15000 milliseconds, SignalWire was able to establish a TCP connection with your server, but the HTTP response from the server failed.


#### Possible Solutions
*  verify the URL provided is accessible to the public internet	
*  verify network connectivity to your web server
*  check your TCP logs to verify inbound connection attempts are successful
*  check HTTP server logs to verify a response was generated and returned within the timeout
*  check your edge element logs to verify responses are making it out of your infrastructure



# Code: 11206
Log Level: error  
Message: HTTP protocol violation  
Secondary Message: There was an error speaking HTTP to the target URL.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11206 

### HTTP protocol violation

There was an error speaking HTTP to the target URL.

#### Possible Causes 
*  Server misconfiguration
*   Network disruption
*   Making HTTP connections to an HTTPS port


#### Possible Solutions
*  verify your web server is serving valid HTTP for the URL	
*   verify the network connection to your server is stable	
*   verify the URL is not directing you to an SSL port	








# Code: 11210
Log Level: error  
Message: HTTP bad host name  
Secondary Message: The DNS entry for the URL's host cannot be resolved.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11210 

### HTTP bad host name

The DNS entry for the URL's host cannot be resolved.

#### Possible Causes 
*  URL references a locally defined hostname (/etc/hosts)
*   URL references an undefined hostname


#### Possible Solutions
*  verify the hostname of the URL has a valid DNS record the can be resolved by the public	








# Code: 11215
Log Level: error  
Message: HTTP too many redirects  
Secondary Message: this request has been redirected too many times and may be in a loop.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11215 

### HTTP too many redirects

this request has been redirected too many times and may be in a loop.

#### Possible Causes 
*  SignalWire received too many HTTP redirect messages in a row for this request.


#### Possible Solutions
*  Make certain your code is not stuck in an infinite loop.





# Code: 11220
Log Level: ERROR  
Message: SSL/TLS Handshake Error  
Secondary Message: During SSL/TLS negotiation, SignalWire experienced a connection reset.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11220

### SSL/TLS Handshake Error

During SSL/TLS negotiation, SignalWire experienced a connection reset.

#### Possible Causes
*  Incompatible cipher suites in use by the client and the server. This would require the client to use (or enable) a cipher suite that is supported by the server.


#### Possible Solutions
*  Verify cipher suites in-use are up to date. SignalWire-supported ciphers can be found [here](https://signalwire.force.com/help/s)
*  Use compatible version of TLS, SignalWire supports TLS 1.0,1.1,1.2.



# Code: 11235
Log Level: error  
Message: Certificate Invalid - Domain Mismatch  
Secondary Message: SignalWire tried to validate your SSL certificate but your certificate has a domain name that does not match the domain we requested.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11235

### Certificate Invalid - Domain Mismatch

SignalWire tried to validate your SSL certificate but your certificate has a domain name that does not match the domain we requested.

#### Possible Causes
*  Your Certificate Name or Certificate Alternate Name on your SSL certificate does not match the domain SignalWire requested.


#### Possible Solutions
*  Obtain a SSL certificate with a Certificate Name or Certificate Alternate Name that matches this domain.




# Code: 11236
Log Level: error  
Message: Certificate Invalid - Certificate Expired  
Secondary Message: SignalWire tried to validate your SSL certificate but your certificate has expired.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11236

### Certificate Invalid - Certificate Expired

SignalWire tried to validate your SSL certificate but your certificate has expired.

#### Possible Causes
*  Your SSL certificate has expired.

#### Possible Solutions
*  Renew your SSL certificate.




# Code: 11237
Log Level: ERROR  
Message: Certificate Invalid - Could not find path to certificate  
Secondary Message: SignalWire tried to validate your SSL certificate but was unable to find it in our certificate store.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11237

### Certificate Invalid - Could not find path to certificate

SignalWire tried to validate your SSL certificate but was unable to find it in our certificate store.

#### Possible Causes
*  You are using a self signed certificate.
*  The certificate authority you are using is not on our list of approved certificate authorities.
* Your certificate chain is incomplete and requires an additional download.

#### Possible Solutions
*  Do not use a self signed certificate.
* Concatenate your certificate chain so that no additional download is required.
*  SignalWire uses CAs that are approved by Mozilla, you can find the full list [here](https://ccadb-public.secure.force.com/mozilla/IncludedCACertificateReport).
* For testing purposes you can [disable SSL Certificate Validation in Console](https://signalwire.com).




# Code: 11240
Log Level: ERROR  
Message: HTTP connection edge location is invalid  
Secondary Message: null    
Description: There was an error connecting to the URL due to an invalid edge location parameter.  
Cause: * The edge location(s) specified in the 'e' parameter of your connection settings are not valid  
Solutions: * Correct the 'e' parameter in the fragment part of the URL, the one after '#'.  
Docs:
## ERROR - 11240

### HTTP connection edge location is invalid

 There was an error connecting to the URL due to an invalid edge location parameter.

#### Possible Causes
* The edge location(s) specified in the 'e' parameter of your connection settings are not valid

#### Possible Solutions
* Correct the 'e' parameter in the fragment part of the URL, the one after '#'.



# Code: 11241
Log Level: ERROR  
Message: HTTP connection edge location is not supported  
Secondary Message: null    
Description: There was an error connecting to the URL due to an unsupported edge location parameter.  
Cause: * The edge location(s) specified in the 'e' parameter of your connection settings are not currently supported by SignalWire.  
Solutions: * Correct the 'e' parameter in the fragment part of the URL, the one after '#'.  
Docs:
## ERROR - 11241

### HTTP connection edge location is not supported

 There was an error connecting to the URL due to an unsupported edge location parameter.

#### Possible Causes
* The edge location(s) specified in the 'e' parameter of your connection settings are not currently supported by SignalWire.

#### Possible Solutions
* Correct the 'e' parameter in the fragment part of the URL, the one after '#'.



# Code: 11242
Log Level: ERROR  
Message: HTTP connection over SignalWire Interconnect is not allowed  
Secondary Message: Your account has not been enabled for HTTP connections over SignalWire Interconnect.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11242

### HTTP connection over SignalWire Interconnect is not allowed

Your account has not been enabled for HTTP connections over SignalWire Interconnect.

#### Possible Solutions
* Correct the 'r' (region) parameter in the fragment part of the URL, the one after '#'. Remove those with the '-ix' suffix.
* Contact SignalWire <a href="https://signalwire.com/support">customer support</a> to inquire further.




# Code: 11243
Log Level: ERROR  
Message: HTTP retry policy is invalid  
Secondary Message: One or more retry policies specified in the ‘rp’ parameter of your connection settings are invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11243

### HTTP retry policy is invalid
One or more retry policies specified in the ‘rp’ parameter of your connection settings are invalid.

#### Possible Solutions
*  Correct the 'rp' (retry policy) parameter in the fragment part of the URL, the one after '#'.



# Code: 11251
Log Level: error  
Message: Fatal protocol violation  
Secondary Message: There was an HTTP protocol violation speaking to the target URL.    
Description: null  
Cause: null  
Solutions: null  
Docs:
null



# Code: 11300
Log Level: error  
Message: Invalid template URL  
Secondary Message: The provided URL template has an invalid format. Please check to see if you have unclosed brackets.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11300 

### Invalid template URL

The provided URL template has an invalid format. Please check to see if you have unclosed brackets.









# Code: 11310
Log Level: error  
Message: Invalid template token  
Secondary Message: The provided URL template references a nonexistent token.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11310 

### Invalid template token

The provided URL template references a nonexistent token.









# Code: 11320
Log Level: error  
Message: Invalid template unclosed brackets  
Secondary Message: The provided URL template has an invalid format. Please check to see if you have unclosed brackets.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11320 

### Invalid template unclosed brackets

The provided URL template has an invalid format. Please check to see if you have unclosed brackets.









# Code: 11750
Log Level: ERROR  
Message: LaML response body too large  
Secondary Message: In your response to SignalWire’s request, the response body is larger than 64 kB.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11750

## LaML response body too large

In your response to SignalWire's request, the response body is larger than 64 kB.

### Possible Causes 

*   The LaML that you are serving is larger than 64 kB
*   You are serving non-LaML content in your response

### Possible Solutions

*  Verify that you are serving LaML in your response to SignalWire's request. 
*  Verify that you are including this header in your LaML response: `<?xml version="1.0" encoding="UTF-8"?>`  
*  Limit your LaML response to 64 kB or less.
*  Does your LaML include the [Play verb](https://docs.signalwire.com/topics/laml-xml)? Double-check the size of the MP3 file you include and ensure it is 64kb or less.
*  Check that your LaML is formatted properly. To quickly verify your LaML, you can copy and paste it into a new [LaML bin in the SignalWire Console](https://docs.signalwire.com/topics/laml-xml).
*   Check to see if your application is throwing errors. This may cause your application to send a large debug output as HTML back to SignalWire instead of the expected LaML.
*  If you are trying to send a `200` response in a status callback, use an empty LaML response: `<Response/>`



# Code: 11751
Log Level: ERROR  
Message: MMS -> Media exceeds mobile operator size limit  
Secondary Message: The combined size of the media in the message exceeds the maximum size limit for that number's mobile operator. #### Possible Solutions  Verify that the specified media is less than 500 KB    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11751

### MMS -> Media exceeds mobile operator size limit

The specified message media exceeds the maximum size limit for that number's mobile operator.

For more details, see [
SignalWire Programmable SMS Supported File Types and Size Limits for MMS Media Messages
](https://signalwire.force.com/help/s).

#### Possible Solutions

*   Verify that the specified media is less than 600 KB




# Code: 11770
Log Level: error  
Message: Empty response body  
Secondary Message: SignalWire received a HTTP response with Transfer-encoding: chunked but an empty body.  #### Possible Causes  *   Server misconfiguration *   Network disruptions   #### Possible Solutions  *   Verify that the server is serving a non-empty HTTP response *   Verify that the network connection is stable    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 11770

### Empty response body

SignalWire received a HTTP response with Transfer-encoding: chunked but an empty body.

#### Possible Causes 

*   Server misconfiguration
*   Network disruptions


#### Possible Solutions

*   Verify that the server is serving a non-empty HTTP response
*   Verify that the network connection is stable





# Code: 12100
Log Level: error  
Message: Document parse failure  
Secondary Message: SignalWire was unable to parse the provided XML Document.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12100

### Document parse failure

SignalWire was unable to parse the provided XML Document.

Your LaML document must be a valid XML Document, or SignalWire will not
be able to read your document. You can debug XML parsing errors by
getting the response body in the [debugger](/user/account/debugger),
and then using an online validation tool like the
[W3C Validation Service](http://validator.w3.org/#validate_by_input).

#### Possible Causes
*   There is a leading space, or an empty line, before the XML type header (i.e. ` <?xml version="1.0" encoding="UTF-8"?>`)
*   The root `<Response>` element is missing
*   There is an unclosed element
*   There is an unquoted attribute
*   There is an improperly nested element

#### Possible Solutions
*   Make sure there is no extra space or line at the beginning of the file before the type header
*   Make sure your root element is &lt;Response&gt;
*   XML is case sensitive, make sure your start and end elements match case. (SignalWire elements begin with a capital letter)
*   Make sure characters such as &lt; &gt; and &amp; are escaped properly, as `&lt; &gt; and &amp;`.

[redirect]:https://docs.signalwire.com/topics/laml-xml




# Code: 12101
Log Level: error  
Message: Invalid SignalWire Markup XML version  
Secondary Message: The version attribute of the Response root element is not valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12101 

### Invalid SignalWire Markup XML version

The version attribute of the Response root element is not valid.

#### Possible Causes 
*  an invalid value was provided for the "version" attribute of the <a href='https://docs.signalwire.com/topics/laml-xml/#laml-xml-specification-laml-syntax-response-element'>Response</a> root element.


#### Possible Solutions
*  refer to the <a href="https://docs.signalwire.com/topics/laml-xml/#laml-xml-specification-laml-syntax-response-element">versions</a> documentation for information on valid version values.	








# Code: 12102
Log Level: error  
Message: The root element must be Response  
Secondary Message: The root element of a SignalWire Markup XML document *must* be <a href="https://docs.signalwire.com/topics/laml-xml/#laml-xml-specification-laml-syntax-response-element">Response</a>    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12102 

### The root element must be Response

The root element of a SignalWire Markup XML document *must* be <a href="https://docs.signalwire.com/topics/laml-xml/#laml-xml-specification-laml-syntax-response-element">Response</a>









# Code: 12200
Log Level: ERROR  
Message: Schema validation warning  
Secondary Message: The provided XML does not conform to the SignalWire Markup XML schema.  Please refer to the specific error and correct the problem.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 12200 

### Schema validation warning

The provided XML does not conform to the SignalWire Markup XML schema.  Please refer to the specific error and correct the problem.

#### Possible Causes 
*  misspelled verbs
*   incorrect case for verbs; LaML is case-sensitive, so &lt;Say&gt; works, but &lt;say&gt; will not
*   misspelled or unknown attributes
*   unknown or unexpected nested elements.


#### Possible Solutions
*  check the line and column reported by the warning to see what part of your XML response caused the complaint
*  verify that your application server is accepting and properly responding to any [custom parameters](https://signalwire.force.com/help/s) you may be passing








# Code: 12300
Log Level: ERROR  
Message: Invalid Content-Type  
Secondary Message: SignalWire is unable to process the Content-Type of the provided URL. Please see the <a href="https://docs.signalwire.com/topics/laml-xml/#laml-xml-specification">SignalWire LaML Documentation</a> for more information on valid Content-Types.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12300

### Invalid Content-Type

SignalWire is unable to process the Content-Type of the provided URL. Please see
the <a href="https://docs.signalwire.com/topics/laml-xml/">SignalWire Markup XML Documentation</a> for more
information on valid Content-Types.

You must return a Content-Type for all requests. Requests without a
Content-Type will appear in the [Debugger](/console/runtime/debugger) as a
502 Bad Gateway error.

#### Possible Causes
* Having a phone number, outgoing call request or action attribute refer to a non-XML or audio resource.
* Having a Play verb attempt to play non-audio content, such as XML or text.

#### Possible Solutions
* Verify that that your web server is returning a Content-Type and it is the expected value
* Make sure the URL noted refers to a valid resource





# Code: 12301
Log Level: ERROR  
Message: Invalid Upload Content-Type  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12301

### Invalid Upload Content-Type

SignalWire is unable to process the Content-Type of the uploaded file. Please make sure the uploaded file is valid and supported.

#### Possible Causes
* Unsupported file format
* File is malformed





# Code: 12400
Log Level: ERROR  
Message: Internal Failure  
Secondary Message: An internal error has occurred that prevented SignalWire from processing your response.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 12400 

### Internal Failure

An internal error has occurred that prevented SignalWire from processing your response.

#### Possible Causes 
*  We screwed up. Sorry!


#### Possible Solutions
*   If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it.
*   Note the time of the error and what you were trying to do when it occurred.








# Code: 13000
Log Level: warning  
Message: Conference Noun cannot be mixed with Number nouns  
Secondary Message: The Conference noun can only be used once inside a Dial verb    
Description: null  
Cause: null  
Solutions: null  
Docs:
null



# Code: 13110
Log Level: error  
Message: Annotate: Annotate must contain one valid nested element  
Secondary Message: Annotate must contain one valid nested element    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13110 

### Annotate: Annotate must contain one valid nested element

Annotate must contain one valid nested element









# Code: 13111
Log Level: error  
Message: Annotate: Annotate must contain only one of element X  
Secondary Message: Annotate must contain only one of element X    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13111 

### Annotate: Annotate must contain only one of element X

Annotate must contain only one of element X









# Code: 13112
Log Level: warning  
Message: Annotate: Invalid nested element  
Secondary Message: You may only nest BillingReferenceTag elements in Annotate    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13112 

### Annotate: Invalid nested element

You may only nest BillingReferenceTag elements in Annotate









# Code: 13120
Log Level: error  
Message: Annotate->BillingReferenceTag cannot be over 128 characters  
Secondary Message: BillingReferenceTag cannot be over 128 characters    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13120 

### Annotate->BillingReferenceTag cannot be over 128 characters

BillingReferenceTag cannot be over 128 characters









# Code: 13201
Log Level: error  
Message: Dial: Cannot Dial out from a Dial Call Segment  
Secondary Message: LaML documents that execute on the called party's end (via the Dial->Number url attribute, before the parties are bridged) cannot issue a new Dial.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13201 

### Dial: Cannot Dial out from a Dial Call Segment

LaML documents that execute on the called party's end (via the Dial->Number URL attribute, before the parties are bridged) cannot issue a new Dial.









# Code: 13210
Log Level: warning  
Message: Dial: Invalid method value  
Secondary Message: You have provided an invalid value for the "method" attribute.  Valid values are GET or POST.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13210 

### Dial: Invalid method value

You have provided an invalid value for the "method" attribute.  Valid values are GET or POST.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13211
Log Level: warning  
Message: Dial: Invalid ifMachine value  
Secondary Message: ifMachine must be either "hangup","continue", or "false".    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13211 

### Dial: Invalid ifMachine value

ifMachine must be either "hangup","continue", or "false".









# Code: 13212
Log Level: warning  
Message: Dial: Invalid timeout value  
Secondary Message: timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13212 

### Dial: Invalid timeout value

timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13213
Log Level: warning  
Message: Dial: Invalid hangupOnStar value  
Secondary Message: hangupOnStar must be "true" or "false". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13213 

### Dial: Invalid hangupOnStar value

hangupOnStar must be "true" or "false". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13214
Log Level: warning  
Message: Dial: Invalid callerId value  
Secondary Message: callerId must be the calling number, called number, or a validated outgoing number. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13214 

### Dial: Invalid callerId value

callerId must be the calling number, called number, or a validated outgoing number.  Additionally,
if the calling leg is a client leg, the caller ID is required and must be a validated outgoing number. 
See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13215
Log Level: warning  
Message: Dial: Invalid nested element  
Secondary Message: The only valid nested element for Dial is Number. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13215 

### Dial: Invalid nested element

The only valid nested element for Dial is Number. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13216
Log Level: warning  
Message: Dial: Invalid timeLimit value  
Secondary Message: timeLimit must be a positive integer, in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13216 

### Dial: Invalid timeLimit value

timeLimit must be a positive integer, in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13217
Log Level: warning  
Message: Dial: Invalid record value  
Secondary Message: record must be "true" or "false".    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13217 

### Dial: Invalid record value

record must be "true" or "false".





# Code: 13221
Log Level: warning  
Message: Dial->Number: Invalid method value  
Secondary Message: The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13221 

### Dial->Number: Invalid method value

The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13222
Log Level: warning  
Message: Dial->Number: Invalid sendDigits value  
Secondary Message: sendDigits attribute may only contain the following characters "0123456789*#w". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13222 

### Dial->Number: Invalid sendDigits value

sendDigits attribute may only contain the following characters "0123456789*#w". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Dial Verb</a> API Reference for more information.









# Code: 13223
Log Level: warning  
Message: Dial: Invalid phone number format  
Secondary Message: Phone Numbers must be in the format XXXXXXXXXX, or 1XXXXXXXXXX, +1international    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13223 

### Dial: Invalid phone number format

Phone Numbers must be in the format XXXXXXXXXX, or 1XXXXXXXXXX, +1international









# Code: 13224
Log Level: ERROR  
Message: Dial: SignalWire does not support calling this number or the number is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13224 

### Dial: SignalWire does not support calling this number or the number is invalid

This error occurs when the provided number is not in E.164 format; for example using local dialing pattern 01234567890 instead of the full E.164 address +441234567890. This can also occur when calls are attempted to non-existent country codes, area codes, or exchanges. For example, there is no +693 country code, no +1238 US area code, and no 555 US exchange.

This can also occur with properly-formatted, valid destinations if none of SignalWire’s carrier partners are able to deliver the call; for example a telecom network outage in the phone number’s local area.



# Code: 13225
Log Level: ERROR  
Message: Dial: Call blocked by SignalWire blacklist  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13225 

### Dial: Call blocked by SignalWire blacklist

The destination number is blocked by SignalWire because this destination has a high-risk of fraud or due to regulatory reasons cannot be enabled by default. If you have a legitimate need to call this number, please email support@signalwire.com with an explanation of your use case.









# Code: 13226
Log Level: warning  
Message: Dial: Invalid country code  
Secondary Message: The country code of the provided phone number is unknown    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13226 

### Dial: Invalid country code

The country code of the provided phone number is unknown









# Code: 13227
Log Level: ERROR  
Message: Geo Permission configuration is not permitting call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13227 

### Dial: Geo Permission configuration is not permitting call

You attempted to initiate an outbound phone call to a phone number that is not enabled on your account. Please check your [Geographic Permissions](https://signalwire.com), fix it, and try
again.




# Code: 13230
Log Level: warning  
Message: Dial->Conference: Invalid muted value  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13230 

### Dial->Conference: Invalid muted value

muted must be either "true" or false".




# Code: 13231
Log Level: ERROR  
Message: Dial->Conference: Invalid endConferenceOnExit value  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13231

### Dial->Conference: Invalid endConferenceOnExit value

endConferenceOnExit must be either "true" or false".




# Code: 13232
Log Level: warning  
Message: Dial->Conference: Invalid startConferenceOnEnter value  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13232

### Dial->Conference: Invalid startConferenceOnEnter value

startConferenceOnEnter must be either "true" or false".




# Code: 13233
Log Level: warning  
Message: Dial->Conference: Invalid waitUrl  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13233

### Dial->Conference: Invalid waitUrl value

waitUrl must be either a well formed URL or the empty string ""




# Code: 13234
Log Level: warning  
Message: Dial->Conference: Invalid waitMethod  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13234

### Dial->Conference: Invalid waitMethod value

waitMethod must be either GET or POST




# Code: 13235
Log Level: warning  
Message: Dial->Conference: Invalid beep value  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13235

### Dial->Conference: Invalid beep value

beep must be either "true" or false".




# Code: 13236
Log Level: warning  
Message: Dial->Conference: Invalid Conference Sid  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13236

### Dial->Conference: Invalid Conference Sid value

You attempted to dial a Conference Sid that does not exist or has already been completed. 




# Code: 13237
Log Level: warning  
Message: Dial->Conference: Invalid Conference Name  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13237

### Dial->Conference: Invalid conference name 

The conference name you attempted to Dial is invalid.  Conference names must be between 1 and 128 characters. 




# Code: 13238
Log Level: warning  
Message: Dial->Conference: Invalid Verb used in waitUrl LaML  
Secondary Message: placeholder    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13238

### Dial->Conference: Invalid verb for waitUrl LaML

The LaML that executes via the waitUrl can only contain Say, Play, and Redirect verbs.  Dial, Gather, and Record are not allowed. 





# Code: 13239
Log Level: ERROR  
Message: Dial->Conference: Invalid Trim Value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13239

### Dial->Conference: Invalid Trim Value

The trim parameter you entered is invalid. Acceptable values are trim-silence, do-not-trim, true and false.



# Code: 13240
Log Level: ERROR  
Message: Dial->Conference: Invalid Whisper SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13240

### Dial->Conference: Invalid Whisper SID

The call SID specified by the whisper parameter is invalid. This may because the specified call is no longer connected to the conference. Validate that this call is connecting to the correct conference and the call SID specified is also in the conference.



# Code: 13241
Log Level: warning  
Message: Dial->SIP: Invalid method value  
Secondary Message: The method attribute of Number must be GET or POST    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13241 

### Dial->SIP: Invalid method value

The method attribute of Number must be GET or POST









# Code: 13242
Log Level: warning  
Message: Dial->SIP: Invalid sendDigits value  
Secondary Message: sendDigits attribute may only contain the following characters "0123456789*#w"    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13242 

### Dial->SIP: Invalid sendDigits value

sendDigits attribute may only contain the following characters "0123456789*#w"









# Code: 13243
Log Level: warning  
Message: Dial->SIP: Invalid SIP URI  
Secondary Message: The provided SIP URI is not formatted properly.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13243 

### Dial->SIP: Invalid SIP URI

The provided SIP URI is not formatted properly.









# Code: 13244
Log Level: warning  
Message: Dial: No SIP Authorization  
Secondary Message: Your account is not authorized to make SIP calls    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13244 

### Dial: No SIP Authorization

Your account is not authorized to make SIP calls









# Code: 13245
Log Level: warning  
Message: Dial: Not allowed in this API version  
Secondary Message: Your version of the API does not support this feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13245 

### Dial: Not allowed in this API version.

Your version of the API does not support this feature.








# Code: 13246
Log Level: warning  
Message: Dial: SIP dialing not enabled for this account  
Secondary Message: Your account is not enabled for SIP dialing.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13246

### Dial: SIP dialing not enabled for this account.

Your account is not enabled for SIP dialing.








# Code: 13247
Log Level: warning  
Message: Dial: Invalid callerID, invalid characters  
Secondary Message: Your callerID contains unsupported characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13247 

### Dial: Invalid callerID, invalid characters

Your callerID contains unsupported characters.







# Code: 13248
Log Level: warning  
Message: Dial: Invalid callerID, too long  
Secondary Message: Your callerID contains too many characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13248 

### Dial: Invalid callerID, too long

Your callerID contains too many characters.







# Code: 13249
Log Level: warning  
Message: Dial: Invalid username or password attribute  
Secondary Message: Your username or password are invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13249 

### Dial: Invalid username or password attribute

Your username or password are invalid.






# Code: 13250
Log Level: warning  
Message: Dial: Too many URIs passed  
Secondary Message: You specified too many URI elements.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13250 

### Dial: Too many URIs passed

You specified too many URI elements.






# Code: 13251
Log Level: warning  
Message: Dial: Too many headers passed  
Secondary Message: You sent too many header elements.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13251 

### Dial: Too many headers passed

You sent too many header elements.






# Code: 13252
Log Level: warning  
Message: Dial: Invalid header name  
Secondary Message: You named your header something invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13252

### Dial: Invalid header name

You named your header something invalid.





# Code: 13253
Log Level: warning  
Message: Dial: Header is too long  
Secondary Message: You sent a header that is too long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13253

### Dial: Header is too long

You sent a header that is too long.





# Code: 13254
Log Level: warning  
Message: Dial->Sip: SIP URI DNS does not resolve or resolves to an non-public IP address  
Secondary Message: Please check your DNS record to ensure it is properly configured. Alternatively, you can use a specific public IP address in your URI rather than specifying a domain.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13254

### Dial->Sip: SIP URI DNS does not resolve or resolves to an non-public IP address

Please check your DNS record to ensure it is properly configured. Alternatively, you can use a specific public IP address in your URI rather than specifying a domain.




# Code: 13255
Log Level: warning  
Description: null  
Cause: null  
Solutions: null  
Docs:
# Warning - 13255





# Code: 13299
Log Level: ERROR  
Message: 2010 Conference API feature requested using 2008 API  
Secondary Message: A feature added to the 2010 Conference API was requested via the 2008 SignalWire API. Please upgrade to the latest version of the conference API.    
Description: A feature added to the 2010 Conference API was requested via the 2008 SignalWire API. Please upgrade to the latest version of the conference API.  
Cause: -   
Solutions: -   
Docs:
## ERROR - 13299

### 2010 Conference API feature requested using 2008 API

A feature added to the 2010 Conference API was requested via the 2008 SignalWire API. Please upgrade to the latest version of the conference API. A feature added to the 2010 Conference API was requested via the 2008 SignalWire API. Please upgrade to the latest version of the conference API.

#### Possible Causes
- 

#### Possible Solutions
- 



# Code: 13310
Log Level: warning  
Message: Gather: Invalid finishOnKey value  
Secondary Message: The value of the finishOnKey attribute must be one of the following characters "0123456789#*". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13310 

### Gather: Invalid finishOnKey value

The value of the finishOnKey attribute must be one of the following characters "0123456789#*". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13311
Log Level: warning  
Message: Gather: Invalid finishOnKey value  
Secondary Message: The value of the finishOnKey attribute must be a single character. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13311 

### Gather: Invalid finishOnKey value

The value of the finishOnKey attribute must be one of the following characters "0123456789#*". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13312
Log Level: warning  
Message: Gather: Invalid method value  
Secondary Message: The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13312 

### Gather: Invalid method value

The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13313
Log Level: warning  
Message: Gather: Invalid timeout value  
Secondary Message: timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13313 

### Gather: Invalid timeout value

timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13314
Log Level: warning  
Message: Gather: Invalid numDigits value  
Secondary Message: The numDigits attribute must be a positive integer. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13314 

### Gather: Invalid numDigits value

The numDigits attribute must be a positive integer. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13320
Log Level: warning  
Message: Gather: Invalid nested verb  
Secondary Message: The only valid nested elements of the Gather Verb are Say and Play. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13320 

### Gather: Invalid nested verb

The only valid nested elements of the Gather Verb are Say and Play. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Gather Verb</a> API Reference for more information.









# Code: 13321
Log Level: warning  
Message: Gather->Say: Invalid voice value  
Secondary Message: The value of the voice attribute must be "man" or "woman". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13321 

### Gather->Say: Invalid voice value

The value of the voice attribute must be "man" or "woman". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.









# Code: 13322
Log Level: warning  
Message: Gather->Say: Invalid loop value  
Secondary Message: The value of the loop attribute must be an integer greater or equal to zero.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13322 

### Gather->Say: Invalid loop value

The value of the loop attribute must be an integer greater or equal to zero.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.









# Code: 13325
Log Level: error  
Message: Gather->Play: Invalid Content-Type  
Secondary Message: Play requires an audio Content-Type    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13325 

### Gather->Play: Invalid Content-Type

Play requires an audio Content-Type

#### Possible Causes 
*  Play references a URL that does not return audio or is returning an invalid Content-Type.


#### Possible Solutions
*  Make certain the URL returns an audio file	
*   See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information on valid Content-Types.	








# Code: 13326
Log Level: WARNING  
Message: Gather: Invalid input value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13326 

### Gather: Invalid input value



# Code: 13327
Log Level: WARNING  
Message: Gather: Invalid speechTimeout value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13327 

### Gather: Invalid speechTimeout value



# Code: 13328
Log Level: WARNING  
Message: Gather: Invalid maxSpeechTime value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13328 

### Gather: Invalid maxSpeechTime value



# Code: 13329
Log Level: WARNING  
Message: Gather: Invalid partialResultCallbackMethod value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13329

### Gather: Invalid partialResultCallbackMethod value



# Code: 13330
Log Level: WARNING  
Message: Gather: Invalid hints value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13330

### Gather: Invalid hints value



# Code: 13331
Log Level: WARNING  
Message: Gather: Invalid language value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13331

### Gather: Invalid language value



# Code: 13332
Log Level: WARNING  
Message: Gather: Invalid bargeIn value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13332

### Gather: Invalid bargeIn value



# Code: 13333
Log Level: WARNING  
Message: Gather: Invalid profanityFilter value  
Secondary Message: null    
Description: ## Warning - 13333  

### Gather: Invalid profanityFilter value
Cause: Profanity filter is invalid  
Solutions: Enter valid profanity filter  
Docs:
## WARNING - 13333

### Gather: Invalid profanityFilter value

 ## Warning - 13333

### Gather: Invalid profanityFilter value

#### Possible Causes
Profanity filter is invalid

#### Possible Solutions
Enter valid profanity filter



# Code: 13334
Log Level: WARNING  
Message: Gather: Invalid model value  
Secondary Message: null    
Description: ## Warning - 13334  

### Gather: Invalid model value
Cause: Invalid model  
Solutions: Enter a valid model  
Docs:
## WARNING - 13334

### Gather: Invalid model value

 ## Warning - 13334

### Gather: Invalid model value

#### Possible Causes
Invalid model

#### Possible Solutions
Enter a valid model



# Code: 13410
Log Level: warning  
Message: Play: Invalid loop value  
Secondary Message: The value of the loop attribute must be an integer greater or equal to zero. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13410 

### Play: Invalid loop value

The value of the loop attribute must be an integer greater or equal to zero. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information.









# Code: 13420
Log Level: error  
Message: Play: Invalid Content-Type  
Secondary Message: Play requires an audio Content-Type    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 13420 

### Play: Invalid Content-Type

Play requires an audio Content-Type

#### Possible Causes 
*  Play references a URL that does not return audio or is returning an invalid Content-Type.


#### Possible Solutions
*  Make certain the URL returns an audio file	
*   See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information on valid Content-Types.	








# Code: 13510
Log Level: warning  
Message: Say: Invalid loop value  
Secondary Message: The value of the loop attribute must be an integer greater or equal to zero. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13510 

### Say: Invalid loop value

The value of the loop attribute must be an integer greater or equal to zero. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Play Verb</a> API Reference for more information.









# Code: 13511
Log Level: warning  
Message: Say: Invalid voice value  
Secondary Message: The value of the voice attribute must be "man" or "woman". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13511 

### Say: Invalid voice value

The value of the voice attribute must be "man" or "woman". See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.









# Code: 13512
Log Level: warning  
Message: Gather element has an invalid "lang" parameter  
Secondary Message: A Gather element cannot have a "lang" parameter setting    
Description: null  
Cause: null  
Solutions: null  
Docs:
null



# Code: 13520
Log Level: warning  
Message: Say: Invalid text  
Secondary Message: The text of the Say verb was empty or un-parsable. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13520 

### Say: Invalid text

The text of the Say verb was empty or un-parsable. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Say Verb</a> API Reference for more information.









# Code: 13521
Log Level: warning  
Message: Say element cannot exceed 4096 characters  
Secondary Message: The maximum text length inside a Say verb is 4096 characters    
Description: null  
Cause: null  
Solutions: null  
Docs:
null



# Code: 13610
Log Level: warning  
Message: Record: Invalid method value  
Secondary Message: The method attribute of Record must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13610 

### Record: Invalid method value

The method attribute of Record must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.









# Code: 13611
Log Level: warning  
Message: Record: Invalid timeout value  
Secondary Message: timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13611 

### Record: Invalid timeout value

timeout must be a positive integer, in seconds.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.









# Code: 13612
Log Level: warning  
Message: Record: Invalid maxLength value  
Secondary Message: The maxLength attribute must be a positive integer in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13612 

### Record: Invalid maxLength value

The maxLength attribute must be a positive integer in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.









# Code: 13613
Log Level: warning  
Message: Record: Invalid finishOnKey value  
Secondary Message: The value of the finishOnKey attribute must be one of the following characters "0123456789#*".  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13613 

### Record: Invalid finishOnKey value

The value of the finishOnKey attribute must be one of the following characters "0123456789#*".  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.









# Code: 13614
Log Level: warning  
Message: Record: Invalid transcribe value  
Secondary Message: The transcribe attribute of Record must be FAST or ACCURATE. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13614 

### Record: Invalid transcribe value

The transcribe attribute of Record must be TRUE or FALSE. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.









# Code: 13615
Log Level: warning  
Message: Record: maxLength too high for transcription  
Secondary Message: If maxLength must be less than or equal to 120 seconds (2 minutes) if transcribe or transcribeCallback attributes are specified, otherwise transcription is disabled.  See the <a href="https://docs.signalwire.com/topics/laml-xml/">Record Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13615 

### Record: transcribeCallback URL is invalid

The transcribeCallback URL provided in the `<Record>` verb is not valid.


#### Possible Solutions
Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.
 	








# Code: 13616
Log Level: warning  
Message: Record: playBeep must be true or false  
Secondary Message: The playBeep attribute must have a value of "true" or "false"    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13616 

### Record: playBeep must be true or false

The playBeep attribute must have a value of "true" or "false"





# Code: 13617
Log Level: warning  
Message: Record: Recording length is out of range for transcription  
Secondary Message: SignalWire could not process the transcription because the duration of the recording is either too short or too long. The recording itself will not be affected.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13617

### Record: Recording length is out of range for transcription

SignalWire could not process the transcription because the duration of the recording is either too short or too long. The recording itself will not be affected. 


#### Possible Solutions
*  Transcription is currently limited to recordings with a duration greater than 2 seconds and less than 120 seconds. Consider using the maxLength parameter for `<Record>` to limit the duration of the recording. See <a href="https://docs.signalwire.com/topics/laml-xml/">transcription LaML reference</a> for more information. 





# Code: 13618
Log Level: warning  
Message: Record: Recording not available for transcription  
Secondary Message: The recording was not available when SignalWire fetched the recording for transcription    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13618

### Record: Recording not available for transcription

#### Possible Causes 
* The recording was deleted before before SignalWire was able to fetch the recording for transcription.

#### Possible Solutions
* Make a request to delete the recording once you receive the transcribe callback instead of the record callback. This ensures that the recording is available for SignalWire to transcribe and still allows you to delete recordings from SignalWire.




# Code: 13619
Log Level: WARNING  
Message: Record: Transcription feature not available for this type of recording.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
Warning - 13619 Record: Transcription feature not available for this type of recording. Possible Causes The transcription attribute was specified for a type of recording that does not currently support transcription. Possible Solutions: Check in the LaML or API docs whether the recording type you specified allows transcription.  



# Code: 13620
Log Level: WARNING  
Message: Record: Transcription not available for this recording  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Warning - 13620   

Record: Transcription feature not available for this recording.  

#### Possible Causes 
Transcription feature not supported for recordings when your account has client side Recording Encryption enabled.

#### Possible Solutions:   
Contact support to disable client side Recording Encryption feature on your account.



# Code: 13621
Log Level: ERROR  
Message: Invalid 'recordingStatusCallbackEvent'  
Secondary Message: One or more of the recordingStatusCallbackEvents provided were invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13621

### Invalid 'recordingStatusCallbackEvent'

One or more of the recordingStatusCallbackEvents provided were invalid.



# Code: 13710
Log Level: warning  
Message: Redirect: Invalid method value  
Secondary Message: The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Redirect Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13710 

### Redirect: Invalid method value

The method attribute of Number must be GET or POST. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Redirect Verb</a> API Reference for more information.









# Code: 13750
Log Level: ERROR  
Message: LaML verb not supported by this API version.  
Secondary Message: Your version of the API does not support this feature. Please use version 2010-04-01 or later.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## ERROR - 13750

### LaML verb not supported in this version of the API
Your version of the API does not support this feature. Please use version 2010-04-01 or later.



# Code: 13910
Log Level: warning  
Message: Pause: Invalid length value  
Secondary Message: The length attribute must be a positive integer, in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Pause Verb</a> API Reference for more information.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 13910 

### Pause: Invalid length value

The length attribute must be a positive integer, in seconds. See the <a href="https://docs.signalwire.com/topics/laml-xml/">Pause Verb</a> API Reference for more information.









# Code: 14101
Log Level: warning  
Message: Invalid "To" attribute  
Secondary Message: The To attribute does not appear to be a phone number that you can SMS    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14101 

### "To" Attribute is Invalid

The To attribute does not appear to be a phone number that you can SMS

#### Possible Causes 
*  Invalid formatted number
*  SMSing an un-validated number while using a Trial Account


#### Possible Solutions
*  Check the number and make sure it is a valid 10 digit domestic phone number  
*  Confirm you have validated this number, if you are still using a Trial account, or upgrade your account
*  Contact SignalWire <a href="https://signalwire.com/support">customer support</a> to inquire further.




# Code: 14102
Log Level: warning  
Message: Invalid "From" attribute  
Secondary Message: The From phone number does not appear to be a phone number that you can SMS from    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14102 

### Message "From" Attribute is Invalid

The From phone number does not appear to be a phone number that you can message from

#### Possible Causes 
*  Using a ‘From’ number that is not assigned to your account
*  Using a ‘From’ number that is not SMS/MMS enabled


#### Possible Solutions
*  Check to make sure the number is correct
*  Check to make sure the number is an SMS/MMS enabled SignalWire Incoming number assigned to your account





# Code: 14103
Log Level: warning  
Message: Invalid Body  
Secondary Message: The SMS body does not contain valid text    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14103 

### Message Invalid Body

The Message body does not contain valid text or a media URL

#### Possible Causes 
*  Empty SMS body with no media URL specified
*  SMS Body exceeding 1600 characters 


#### Possible Solutions
*  Make sure you're not sending a blank message
*  Make sure the text of the message you are sending is 1600 characters or less.





# Code: 14104
Log Level: warning  
Message: Invalid Method attribute  
Secondary Message: method attribute may only be "GET" or "POST"    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14104 

### Message method attribute invalid

Method attribute may only be "GET" or "POST"





# Code: 14105
Log Level: warning  
Message: Invalid statusCallback attribute  
Secondary Message: The Sms Verb's statusCallback attribute must be a valid URL    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14105 

### Message statusCallback attribute Invalid

The Message Verb's statusCallback attribute must be a valid URL





# Code: 14106
Log Level: warning  
Message: Document retrieval limit reached  
Secondary Message: Your SMS Reply session has requested too many documents. The limit is 50    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14106 

### Message Reply LaML document retrieval limit reached

Your Message Reply session has requested too many documents. The limit is 50

#### Possible Causes 
*  infinite loop caused by self referencing Message verb action URL
*  infinite loop caused by self referencing Redirect verb URL

#### Possible Solutions
*  make certain any action or Redirect URLs do not loop back to the same LaML document.




# Code: 14107
Log Level: ERROR  
Message: SMS send rate limit exceeded  
Secondary Message: Too many messages have been sent between two numbers within a short time period, possibly indicating a runaway job or infinite loop. There is a limit of 20 outbound replies between two phone numbers in a short period.    
Description:   
A counter is set for each outbound LaML reply in a conversation (between two numbers). When the first reply occurs, the counter starts at 1. If the next reply is sent less than 15 seconds after the prior reply, then the counter goes to 2. This will continue if each reply is less than 15 seconds, until the counter surpasses 20; at this time, SignalWire will set any further messages in the loop to "failed" status for 30 seconds, with this error code. Messages with the "failed" status are not charged against your account balance.

Cause: *  repeated rapid responses by the end user (less than 15 seconds)  
*  infinite loop caused by self referencing Sms or Message verb action URL
*  infinite loop caused by self referencing Redirect verb URL
*  runaway process making repeated outgoing REST API requests
Solutions: *  make certain any action or Redirect URL's do not loop back to the same LaML document.  
*  make sure you are not inadvertently sending a large quantity of messages to the same phone number, e.g. a script caught in a loop
Docs:
## ERROR - 14107

### SMS send rate limit exceeded

Too many messages have been sent between two numbers within a short time period, possibly indicating a runaway job or infinite loop. There is a limit of 20 outbound replies between two phone numbers in a short period. 
A counter is set for each outbound LaML reply in a conversation (between two numbers). When the first reply occurs, the counter starts at 1. If the next reply is sent less than 15 seconds after the prior reply, then the counter goes to 2. This will continue if each reply is less than 15 seconds, until the counter surpasses 20; at this time, SignalWire will set any further messages in the loop to "failed" status for 30 seconds, with this error code. Messages with the "failed" status are not charged against your account balance.


#### Possible Causes
*  repeated rapid responses by the end user (less than 15 seconds)
*  infinite loop caused by self referencing Sms or Message verb action URL
*  infinite loop caused by self referencing Redirect verb URL
*  runaway process making repeated outgoing REST API requests

#### Possible Solutions
*  make certain any action or Redirect URL's do not loop back to the same LaML document.
*  make sure you are not inadvertently sending a large quantity of messages to the same phone number, e.g. a script caught in a loop



# Code: 14108
Log Level: warning  
Message: From phone number not SMS capable  
Secondary Message: The From phone number does not appear to be a phone number that you can SMS from    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14108 

### Message "From" Phone Number not message capable

The From phone number does not appear to be a phone number that you can Message from

#### Possible Causes 
*  Sending from a number that is not SMS or MMS capable


#### Possible Solutions
*  Check to make sure the number is correct
*  Check to make sure the number is an SMS or MMS capable SignalWire Incoming number assigned to your account




# Code: 14109
Log Level: warning  
Message: SMS Reply message limit exceeded  
Secondary Message: Too many messages have been sent in reply to an incoming message. The current is 10    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14109 

### Message Reply message limit exceeded

Too many messages have been sent in reply to an incoming message. The current is 10








# Code: 14110
Log Level: warning  
Message: Invalid Verb for SMS Reply  
Secondary Message: An Invalid Verb has been passed back in an SMS reply.  Valid Verbs are Sms and Redirect    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14110 

### Invalid Verb for Message Reply

An Invalid Verb has been passed back in a Message reply.  Valid Verbs are Message, Sms and Redirect





# Code: 14111
Log Level: warning  
Message: Invalid To phone number for Trial mode  
Secondary Message: To field must be a validated caller ID while in Trial mode    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 14111

### Invalid To phone number for Trial mode

'To' field must be a validated caller ID while in Trial mode




# Code: 14201
Log Level: error  
Message: Enqueue: Invalid method value  
Secondary Message: The method is invalid. You must specify one of 'GET' or 'POST'.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14201

### Enqueue: Invalid method value

The method is invalid. You must specify one of 'GET' or 'POST'.




# Code: 14202
Log Level: error  
Message: Enqueue: Invalid waitUrl  
Secondary Message: The waitUrl for the Enqueue verb is invalid.  #### Possible Solutions  Make sure you submit a fully qualified URL including:  *   protocol (http:// or https://) *   hostname *   file path *   properly url-encoded query parameters  SignalWire must be able to reach this URL over the public Internet.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14202

### Enqueue: Invalid waitUrl

The waitUrl for the Enqueue verb is invalid.

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 14203
Log Level: error  
Message: Enqueue: Invalid Enqueue action url  
Secondary Message: The action URL for the Enqueue verb is invalid.  #### Possible Solutions  Make sure you submit a fully qualified URL including:  *   protocol (http:// or https://) *   hostname *   file path *   properly url-encoded query parameters  SignalWire must be able to reach this URL over the public Internet.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14203

### Enqueue: Invalid Enqueue action url

The action URL for the Enqueue verb is invalid.

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 14204
Log Level: error  
Message: Enqueue: Queue name too short  
Secondary Message: The queue name must be at least one character long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14204

### Enqueue: Queue name too short

The queue name must be at least one character long.




# Code: 14205
Log Level: error  
Message: Enqueue: Queue name too long  
Secondary Message: The queue name must be less than 64 characters in length.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14205

### Enqueue: Queue name too long

The queue name must be less than 64 characters in length.




# Code: 14206
Log Level: error  
Message: Enqueue: Invalid waitUrlMethod value  
Secondary Message: The waitUrlMethod value is invalid. You must specify one of 'GET' or 'POST'.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14206

### Enqueue: Invalid waitUrlMethod value

The waitUrlMethod value is invalid. You must specify one of 'GET' or 'POST'.




# Code: 14210
Log Level: error  
Message: Dial->Queue: Invalid whisper method  
Secondary Message: The whisper method is invalid. You must specify one of 'GET' or 'POST'.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14210

### Dial->Queue: Invalid whisper method

The whisper method is invalid. You must specify one of 'GET' or 'POST'.





# Code: 14211
Log Level: error  
Message: Dial->Queue: Invalid whisper url  
Secondary Message: The whisper url is invalid.  #### Possible Solutions  Make sure you submit a fully qualified URL including:  *   protocol (http:// or https://) *   hostname *   file path *   properly url-encoded query parameters  SignalWire must be able to reach this URL over the public Internet.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14211

### Dial->Queue: Invalid whisper url

The whisper url is invalid.

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 14212
Log Level: error  
Message: Dial->Queue: queue name too short  
Secondary Message: The name of the queue must be at least 1 character long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14212

### Dial->Queue: queue name too short

The name of the queue must be at least 1 character long.




# Code: 14213
Log Level: error  
Message: Dial->Queue: queue name too long  
Secondary Message: The name of the queue must be shorter than 64 characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14213 

### Dial->Queue: queue name too long

The name of the queue must be shorter than 64 characters.




# Code: 14215
Log Level: error  
Message: Dial->Queue: Invalid ReservationSid. Unable to dequeue  
Secondary Message: Provided ReservationSid is invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14215

### Dial->Queue: Invalid ReservationSid. Unable to dequeue

Provided ReservationSid is invalid.




# Code: 14217
Log Level: ERROR  
Message: Dial->Queue: Could not find or accept provided reservationSid  
Secondary Message: Provided ReservationSid could not be found or has been canceled / rescinded.    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Dial->Queue: Could not find or accept provided reservationSid

Provided ReservationSid could not be found or has been canceled / rescinded.



# Code: 14220
Log Level: error  
Message: Enqueue: Provided Workflow was not a valid sid  
Secondary Message: Provided workflow sid was not valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14220

### Enqueue: Provided Workflow was not a valid sid

Provided Workflow is invalid.




# Code: 14221
Log Level: error  
Message: Enqueue: Provided Attributes JSON was not valid  
Secondary Message: Provided Attributes is not valid JSON.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14221

### Enqueue: Provided Attributes JSON was not valid

Provided Attributes is not valid JSON.




# Code: 14222
Log Level: ERROR  
Message: Enqueue: Could not create Task  
Secondary Message: The Task attributes could not be matched a Workflow.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14222

### Enqueue: Could not create Task

Could not match the task to a target given the defined attributes.




# Code: 14223
Log Level: error  
Message: Enqueue: Unable to cleanup task  
Secondary Message: Unable to cancel the task created by Enqueue upon a LaML error or task hangup.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14223

### Enqueue: Unable to cleanup task

Unable to cancel the task created by Enqueue upon a LaML error or task hangup.




# Code: 14230
Log Level: ERROR  
Message: Dial->Conference: Invalid WorkflowSid  
Secondary Message: Provided workflow sid was not valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14230

### Conference: Provided WorkflowSid was not valid

Provided Workflow is invalid.




# Code: 14231
Log Level: ERROR  
Message: Dial->Conference: Provided Attributes was not valid JSON   
Secondary Message: Provided attributes is not valid JSON    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14231

### Conference: Provided Attributes JSON was not valid

Provided Attributes is not valid JSON.




# Code: 14232
Log Level: ERROR  
Message: Dial->Conference: Invalid Priority  
Secondary Message: Provided priority is not a valid integer    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14232

### Conference: Provided Priority was not a valid integer

Provided Priority is invalid.




# Code: 14233
Log Level: ERROR  
Message: Dial->Conference: Invalid Timeout  
Secondary Message: Provided timeout is not a valid integer    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14233

### Conference: Provided Timeout was not a valid integer

Provided Timeout is invalid.




# Code: 14234
Log Level: ERROR  
Message: Dial->Conference: Unable to create task  
Secondary Message: Unable to create the task created by Conference    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14234

### Conference: Unable to create Task

Unable to create the Task specified under Conference upon a LaML error.




# Code: 14235
Log Level: ERROR  
Message: Dial->Conference: Unable to cleanup task  
Secondary Message: Unable to cancel the task created by Conference upon a LaML error or task hangup.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14235

### Conference: Unable to cleanup Task

Unable to cancel the Task created by Conference upon a LaML error or task hangup.




# Code: 14236
Log Level: ERROR  
Message: Dial->Conference: Invalid ReservationSid  
Secondary Message: Provided ReservationSid on Conference is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14236

### Conference: Invalid ReservationSid

The provided ReservationSid on the Conference LaML was invalid.




# Code: 14237
Log Level: ERROR  
Message: Dial->Conference: Invalid PostWorkActivitySid  
Secondary Message: Provided PostWorkActivitySid on Conference is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14237

### Conference: Invalid PostWorkActivitySid

The provided PostWorkActivitySid on the Conference LaML was an invalid ActivitySid.




# Code: 14238
Log Level: ERROR  
Message: Dial->Conference: Unable to accept Reservation  
Secondary Message: Unable to accept the Reservation    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14238

### Conference: Unable to accept or find the Reservation

Unable to accept or find the provided Reservation.




# Code: 14239
Log Level: ERROR  
Message: Dial->Conference: Unable to update Worker  
Secondary Message: Unable to update Worker to provided PostWorkActivitySid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 14239

### Conference: Unable to update Worker's activity

Unable to update the Worker to the provided ActivitySid. 



# Code: 15000
Log Level: error  
Message: Call Progress: Internal SignalWire Error  
Secondary Message: An internal error has occurred that prevented SignalWire from processing your Call Progress Event.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 15000

### Call Progress: Internal SignalWire Error

An internal error has occurred that prevented SignalWire from processing your Call Progress Event.

#### Possible Solutions

*   If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
*   Note the time of the error and what you were trying to do when it occurred!



# Code: 15002
Log Level: error  
Message: Call Progress: Queue Timeout  
Secondary Message: A callback request timed out in the callback queue.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 15002

### Call Progress: Queue Timeout

A callback request timed out in the callback queue.

#### Possible Causes

*  Your application is not responding to Call Progress Events in a timely manner leading to queued callbacks expiring before they are sent.
*  There was a network disruption between SignalWire and your web server.

#### Possible Solutions

*   Please ensure your application is responding to callbacks in a timely manner.



# Code: 15003
Log Level: ERROR  
Message: Call Progress: Error Response to Callback URL  
Secondary Message: Got an HTTP error in response to the callback URL    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 15003

### Call Progress: Error Response to Callback URL

Got an HTTP error in response to the callback URL

#### Possible Causes

*  Your application returned a 4xx or 5xx HTTP response to SignalWire.

#### Possible Solutions

Ensure your application responds to callbacks with: 

*  200 OK  
*  Content-Type: text/xml 
*  Valid LaML

Or respond with 204 No Content and an empty response body.



# Code: 16000
Log Level: ERROR  
Message: Whisper Not Available on SignalWire Conference  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16000

### Whisper Not Available on SignalWire Conference

Whisper is only available on Agent Conference, to create an Agent Conference configure your account to use Agent Conference in the [conference settings page](https://signalwire.com)



# Code: 16001
Log Level: ERROR  
Message: Conference is not bridged  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16001

### Conference is not bridged

The conference you have tried to access is not currently active.



# Code: 16002
Log Level: ERROR  
Message: Failed to validate conference attributes  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16002

### Failed to validate conference attributes

The provided conference attributes are invalid.



# Code: 16003
Log Level: ERROR  
Message: Could not recognize conference sid or friendly name  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16003

### Could not recognize conference sid or friendly name

SignalWire could not recognize the provided conference sid or friendly name.  Please see https://docs.signalwire.com/topics/laml-xml for more documentation.



# Code: 16010
Log Level: ERROR  
Message: Conference Event: Internal SignalWire Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16010

### Conference Event: Internal SignalWire Error

SignalWire experienced an unexpected internal error in attempting to deliver a conference event to the provided call back URL.



# Code: 16011
Log Level: ERROR  
Message: Conference Event: Error Response to Callback URL  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16011

### Conference Event: Error Response to Callback URL

SignalWire received an error response when attempting to send a conference event to the provided callback URL.



# Code: 16020
Log Level: ERROR  
Message: Conference is full  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16020

### Conference is full

A participant has attempted to join a conference that has reached its maximum participant capacity.

Please refer to https://docs.signalwire.com/topics/laml-xml for documentation on conference participant capacity.



# Code: 16021
Log Level: ERROR  
Message: Failed to join conference due to account concurrency limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16021

### Failed to join conference due to account concurrency limit exceeded

A conference participant could not be created, as the account is currently at or above its concurrency limit.



# Code: 16022
Log Level: ERROR  
Message: Conference does not exist or is completed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16022

### Conference does not exist or is completed

The requested conference sid or friendly name refers to a non-existent or completed conference.



# Code: 16099
Log Level: ERROR  
Message: Unexpected conference status  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16099

### Unexpected conference status

The requested conference is in an unexpected state for the desired operation.



# Code: 16101
Log Level: WARNING  
Message: Voice Recording : Unavailable because duration is too short  
Secondary Message: Recording is unavailable because the duration was shorter than the minimum required duration.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 16101

### Voice Recording : Unavailable because duration is too short

Recording is unavailable because the duration was shorter than the minimum required duration.



# Code: 16102
Log Level: WARNING  
Message: Voice Recording: Unavailable because recording is silent  
Secondary Message: Recording was detected as silent and not stored.  As a result, it is unavailable for access.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 16102

### Voice Recording: Unavailable because recording is silent

Recording was detected as silent and not stored.  As a result, it is unavailable for access.



# Code: 16104
Log Level: ERROR  
Message: Voice Recording: Unavailable due to encryption failure  
Secondary Message: Recording was not stored due to a public key encryption failure.  (only applicable if call recording encryption feature enabled)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16104

### Voice Recording: Unavailable due to encryption failure

Recording was not stored due to a public key encryption failure.  (only applicable if call recording encryption feature enabled)



# Code: 16105
Log Level: ERROR  
Message: Voice Recording: Unavailable due to no valid public keys  
Secondary Message: Recording was not stored due to no valid public keys on the account  (only applicable if call recording encryption feature enabled)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16105

### Voice Recording: Unavailable due to no valid public keys

Recording was not stored because there were no valid public keys on the account  (only applicable if call recording encryption feature enabled)



# Code: 16106
Log Level: ERROR  
Message: Voice Recording: Unavailable due to internal encryption error  
Secondary Message: Recording was not stored due to a transient internal encryption error  (only applicable if call recording encryption feature enabled)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16106

### Voice Recording: Unavailable due to internal encryption error

Recording was not stored due to a transient internal encryption error  (only applicable if call recording encryption feature enabled)



# Code: 16107
Log Level: ERROR  
Message: Voice Recording: Encrypted with alternate public key  
Secondary Message: Recording was encrypted with alternate public key because the one configured on the account is invalid or deleted. (only applicable if call recording encryption feature enabled)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16107

### Voice Recording: Encrypted with alternate public key

Recording was encrypted with alternate public key because the one configured on the account is invalid or deleted. (only applicable if call recording encryption feature enabled)



# Code: 16108
Log Level: ERROR  
Message: Voice Recording: Request failed due to concurrent recordings  
Secondary Message: The request failed because there is more than one active recording for the provided CallSID    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16108

### Voice Recording: Request failed due to concurrent recordings

The request failed because there is more than one active recording for the provided Call SID



# Code: 16109
Log Level: ERROR  
Message: Voice Recording: Cannot fetch .mp3 encrypted recording  
Secondary Message: Recording cannot be retrieved in .mp3 format when call recording encryption feature is enabled on the account.  Please request with .wav format.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 16109

### Voice Recording: Cannot fetch .mp3 encrypted recording

Recording cannot be retrieved in .mp3 format when call recording encryption feature is enabled on the account.  Please re-request with .wav format.



# Code: 20001
Log Level: warning  
Message: Unknown parameters  
Secondary Message: One or more parameters you sent the REST API were not recognized and were ignored.  No harm done, but make sure that you didn't mis-type the parameter you really wanted to send.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 20001 

### Unknown parameters

One or more parameters you sent the REST API were not recognized and were ignored.  No harm done, but make sure that you didn't mis-type the parameter you really wanted to send.









# Code: 20002
Log Level: error  
Message: Invalid FriendlyName  
Secondary Message: Many SignalWire resources take descriptive names to help you remember what they are.  However, such "FriendlyNames" must be between 1 and 64 characters long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20002 

### Invalid FriendlyName

Many SignalWire resources take descriptive names to help you remember what they are.  However, such "FriendlyNames" must be between 1 and 64 characters long.









# Code: 20003
Log Level: ERROR  
Message: Permission Denied  
Secondary Message: You lack permission to the resource and method you requested.    
Description:   
#### Authenticating requests to the SignalWire API

All requests to sensitive areas of the SignalWire API must use [HTTP Basic
Authentication][auth]. Authenticate using your Account SID as the username,
and your Auth Token as the password. Both can be found in the [SignalWire
Console](/console/account/settings).

You can also generate revocable [API Keys](/docs/api/rest/keys) to authenticate.

You may want to consider using a [SignalWire helper library](/docs/libraries)
(available in PHP, .NET, Java, Ruby, Python and Node.js) as they will take care of
authentication for you.

[auth]: http://en.wikipedia.org/wiki/Basic_access_authentication
Cause: * Using the wrong combination of Account SID and Auth Token   
* Using Test Credentials to access your Live Account
* Using subaccount credentials to access master account
* Previous Auth Token has been deleted
* Attempted API Key has been deleted
* Account is suspended or closed
* Extra characters or spaces in the supplied credentials
* Web proxy is stripping out credentials before forwarding to SignalWire
* Using JWT with Auth Token rather than API Key
Solutions: * Verify the Account SID and Auth Token are correct  
* Verify the correct Account is being accessed
* Ensure the Account is active, not suspended or closed
* Ensure no extra characters or spaces are being included
* Ensure JWT is only used with API Key
Docs:
## ERROR - 20003

### Permission Denied

You lack permission to the resource and method you requested. 
#### Authenticating requests to the SignalWire API

All requests to sensitive areas of the SignalWire API must use [HTTP Basic
Authentication][auth]. Authenticate using your Account SID as the username,
and your Auth Token as the password. Both can be found in the [SignalWire
Console](/console/account/settings).

You can also generate revocable [API Keys](/docs/api/rest/keys) to authenticate.

You may want to consider using a [SignalWire helper library](/docs/libraries)
(available in PHP, .NET, Java, Ruby, Python and Node.js) as they will take care of
authentication for you.

[auth]: http://en.wikipedia.org/wiki/Basic_access_authentication

#### Possible Causes
* Using the wrong combination of Account SID and Auth Token 
* Using Test Credentials to access your Live Account
* Using subaccount credentials to access master account
* Previous Auth Token has been deleted
* Attempted API Key has been deleted
* Account is suspended or closed
* Extra characters or spaces in the supplied credentials
* Web proxy is stripping out credentials before forwarding to SignalWire
* Using JWT with Auth Token rather than API Key

#### Possible Solutions
* Verify the Account SID and Auth Token are correct
* Verify the correct Account is being accessed
* Ensure the Account is active, not suspended or closed
* Ensure no extra characters or spaces are being included
* Ensure JWT is only used with API Key



# Code: 20004
Log Level: error  
Message: Method not allowed  
Secondary Message: The resource you accessed is valid, but the HTTP method you attempted to use is not supported for the resource.  For example, you cannot DELETE your own account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20004 

### Method not allowed

The resource you accessed is valid, but the HTTP method you attempted to use is not supported for the resource.  For example, you cannot DELETE your own account.









# Code: 20005
Log Level: error  
Message: Account not active  
Secondary Message: Your SignalWire account is not active, potentially because you ran out of funds, or you have not yet activated your free trial.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20005 

### Account not active

Your SignalWire account is not active, potentially because you ran out of funds, or you have not yet activated your free trial.




# Code: 20006
Log Level: error  
Message: Access Denied  
Secondary Message: You don't have sufficient privileges to access the requested resource. The user on whose behalf you are attempting to access the API may have revoked your privileges, or you may need to request greater privileges from the user.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20006

### Access Denied

You don't have sufficient privileges to access the requested resource. The user
on whose behalf you are attempting to access the API may have revoked your
privileges, or you may need to request greater privileges from the user.





# Code: 20007
Log Level: error  
Message: Page size too large  
Secondary Message: You’ve requested a page size that is too large. The maximum page size is 1000.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20007

### Page size too large

You've requested a page size that is too large. The maximum page size is 1000.

#### Possible solutions

* Decrease the page size in your request.




# Code: 20008
Log Level: error  
Message: Test Credentials  
Secondary Message: Currently only a handful of API resources can be tested with your test credentials. Trying to authenticate with your test credentials to other resources will return a Forbidden error message. For a full list of supported resources, please see our [Test Credentials](/docs/api/rest/test-credentials) page.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20008

#### Cannot access this resource with Test Credentials

Currently only a handful of API resources can be tested with your test
credentials. Trying to authenticate with your test credentials to other
resources will return a Forbidden error message. For a full list of supported
resources, please see our [Test Credentials](/docs/api/rest/test-credentials)
page.




# Code: 20009
Log Level: ERROR  
Message: Cannot delete this resource before it is complete  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20009

#### Cannot delete this resource before it is complete

You attempted to delete a call or message resource before it was completed. Wait until the call or message is completed and try your request again.



# Code: 20010
Log Level: ERROR  
Message: Action disabled for account  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20010

#### Action disabled for account

 The action you attempted to perform has been disabled for your account. Please contact Customer Support for assistance.



# Code: 20011
Log Level: ERROR  
Message: Invalid TLS version  
Secondary Message: Service requires TLSv1.2     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error Code 20011

### Invalid TLS version

The request was rejected because it was not correctly configured to use TLSv1.2. All new accounts are [required to use TLSv1.2 with supported ciphers suites](https://signalwire.force.com/help/s). 

#### Possible Solutions:  
* Reconfigure request to use a supported cipher suite for TLSv1.2
* Review these [tips for upgrading your environment to TLSv1.2](https://signalwire.force.com/help/s)



# Code: 20012
Log Level: ERROR  
Message: Invalid TLSv1.2 Cipher Suite  
Secondary Message: Request is not configured with a PCI compliant cipher suite    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error Code 20012

### Invalid TLSv1.2 Cipher Suite

The request was rejected because it was not correctly configured to use TLSv1.2. All new accounts are [required to use TLSv1.2 with supported ciphers suites](https://signalwire.force.com/help/s). 

#### Possible Solutions:  
* Reconfigure request to use a supported cipher suite for TLSv1.2
* Review these [tips for upgrading your environment to TLSv1.2](https://signalwire.force.com/help/s)

#### Supported Cipher Suites:
* ECDHE-RSA-AES128-GCM-SHA256
* ECDHE-RSA-AES128-SHA256
* ECDHE-ECDSA-AES256-GCM-SHA384
* ECDHE-RSA-AES256-GCM-SHA384
* ECDHE-ECDSA-AES256-SHA384
* ECDHE-RSA-AES256-SHA384
* AES128-GCM-SHA256
* AES128-SHA256
* AES256-GCM-SHA384
* AES256-SHA256



# Code: 20101
Log Level: ERROR  
Message: Invalid Access Token  
Secondary Message: SignalWire was unable to validate your Access Token    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20101

## SignalWire was unable to validate your Access Token

The Access Token provided to the SignalWire API was invalid.

To check whether the Access Token is structurally correct,
you can use the tools available at [jwt.io](https://jwt.io/).

For the details of SignalWire's specific Access Token implementation, see
[the documentation](/docs/api/rest/access-tokens).




# Code: 20102
Log Level: ERROR  
Message: Invalid Access Token header  
Secondary Message: Invalid Access Token header    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20102

## Invalid Access Token header

The header of the Access Token provided to the SignalWire API was
invalid.

To check whether the Access Token is structurally correct,
you can use the tools available at [jwt.io](https://jwt.io/).

For the details of SignalWire's specific Access Token implementation and the header
requirements, see [the documentation](/docs/api/rest/access-tokens).




# Code: 20103
Log Level: ERROR  
Message: Invalid Access Token issuer/subject  
Secondary Message: Invalid Access Token issuer or subject    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20103

## Invalid Access Token issuer or subject

The issuer or subject of the Access Token provided to the SignalWire API was
invalid.

**Issuer:** The [API Key](/docs/api/rest/keys) used to sign the the token.

**Subject:** The SignalWire Account SID from your [Live Credentials](/console/account/settings).

### Possible Causes
* Account is inactive or suspended.
* Account SID is incorrect.
* API Key is incorrect or has been deleted.

### Possible Solutions

* Ensure the account is active and there are enough funds available.
* Ensure the Account SID is correct and is from your Live Credentials.
* Make sure that the API Key used to sign the request is correct and associated with the supplied Account SID.

To check whether the Access Token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).

Access Tokens are used by multiple SignalWire SDKs, including Programmable Voice, Programmable Video, and Programmable Chat. For the details of SignalWire's specific Access Token implementation and the requirements of the issuer and subject fields, see [the documentation](/docs/api/rest/access-tokens).



# Code: 20104
Log Level: WARNING  
Message: Access Token expired or expiration date invalid  
Secondary Message: Access Token has expired or expiration date is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Warning - 20104

## Access Token has expired or expiration date is invalid

The Access Token provided to the SignalWire API has expired, the expiration time
specified in the token was invalid, or the expiration time specified was too
far in the future.

Access Token expiration times can be set up to 24 hours in the future.

To check whether the Access Token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).

Access Tokens are used by multiple SignalWire SDKs, including Programmable Voice, Programmable Video, and Programmable Chat. For the details of SignalWire's specific Access Token implementation, see [the documentation](/docs/api/rest/access-tokens).



# Code: 20105
Log Level: ERROR  
Message: Access Token not yet valid  
Secondary Message: Access Token not yet valid    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20105

## Access Token not yet valid

The Access Token provided to the SignalWire API is not yet valid.

SignalWire Access Tokens are generated with a `nbf` field that determines the
start of the token's lifetime. Normally this is set to the current time
when the token is generated; check whether your computer's clock has drifted.

To check whether the Access Token is structurally correct,
you can use the tools available at [jwt.io](https://jwt.io/).

For the details of SignalWire's specific Access Token implementation and the
requirements of the issuer and subject fields, see [the
documentation](/docs/api/rest/access-tokens).



# Code: 20106
Log Level: ERROR  
Message: Invalid Access Token grants  
Secondary Message: Invalid Access Token grants    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20106

## Invalid Access Token grants

The Access Token signature and issuer were valid, but the grants specified
in the token were invalid, unparseable, or did not authorize the action
being requested.

To check whether the Access Token is structurally correct,
you can use the tools available at [jwt.io](https://jwt.io/).

For the details of SignalWire's specific Access Token implementation including the
grant format, see
[the documentation](/docs/api/rest/access-tokens).



# Code: 20107
Log Level: ERROR  
Message: Invalid Access Token signature  
Secondary Message: Invalid Access Token signature    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20107

## Invalid Access Token signature

The signature for the Access Token provided was invalid.

Check that your code is correctly generating signatures using the algorithm and format expected by the SignalWire API.

To check whether the Access Token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).

Access Tokens are used by multiple SignalWire SDKs, including Programmable Voice, Programmable Video, and Programmable Chat. For the details of SignalWire's specific Access Token implementation, see [the documentation](/docs/api/rest/access-tokens).

### Possible Causes

* The supplied Account SID, API Key or API Secret is incorrect.

### Possible Solutions

* Ensure you're using the correct Account SID for your [Live API Credentials](/console/account/settings).
* Verify the API Key was generated for the same account as the supplied Account SID. (The API Secret is not the same as the Account Auth Token.)
* Verify the API Secret is correct for the API Key being used and that no extra characters are included.
* Check if the API Secret passes signature validation when used at [jwt.io](https://jwt.io/).
* Generate a new API Key and Secret for the Account SID and try again.



# Code: 20151
Log Level: ERROR  
Message: Authentication Failed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20151

### Authentication Failed
The Authentication with the provided JWT failed.


#### Possible Causes 
* The system could not perform the authorization for the given request.

#### Possible Solution:
* Retry, if this keeps happening, please contact the SignalWire Support
* To check whether the JWT is structurally correct, you can use the tools available at jwt.io.



# Code: 20152
Log Level: ERROR  
Message: Invalid Header  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20152

### Invalid Header
The header of the JWT provided to the SignalWire API was invalid.

#### Possible Causes 
* The structure of the header was invalid.
* Required header values not provided
* Provided header values invalid.

#### Possible Solution:
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)
* To check whether the JWT is structurally correct, you can use the tools available at jwt.io.



# Code: 20153
Log Level: ERROR  
Message: Invalid Issuer Or Subject  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20153 

### Invalid Issuer Or Subject
The issuer or subject of the JWT provided to the SignalWire API was invalid.

#### Possible Causes 
* The issuer is missing from JWT
* The issuer entity is suspended in SignalWire.
* The subject is missing from JWT
* The subject entity is suspended in SignalWire.
* The issuer and subject are not related.

#### Possible Solution:
* In case of Public Key Client Validation, make sure the account and the API key are valid and not suspended.
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)
* To check whether the JWT is structurally correct, you can use the tools available at jwt.io.



# Code: 20154
Log Level: ERROR  
Message: Invalid Claim Set  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20154 

### Invalid Claim Set
The JWT could be parsed, but the claims in the payload section are invalid.

#### Possible Causes 
* One of the required claims is missing.
* For JWTs used as part of Public Key Client Validation, we require two custom claims:
  * “hrh” - HTTP headers that were included when calculating the request hash
  * “rqh” - The hash of the HTTP request

#### Possible Solution:
* Make sure you are using the latest SignalWire Helper Library
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)
* To check whether the JWT is structurally correct, you can use the tools available at jwt.io.




# Code: 20155
Log Level: ERROR  
Message: Expiration Time In The Future  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20155 

### Expiration Time In The Future
The JWT provided to the SignalWire API is not yet valid.

#### Possible Causes 
* The client system that generates the JWT might have issues with system time.



# Code: 20156
Log Level: ERROR  
Message: Expired or Invalid Expiration in Token  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20156

### Expired or Invalid Expiration in Token
The JWT provided to the SignalWire API has expired, or the expiration time specified in the JWT was invalid.


#### Possible Causes 
* The client system that generates the JWT might have issues with system time.
* To check whether the JWT is structurally correct, you can use the tools available at jwt.io.



# Code: 20157
Log Level: ERROR  
Message: Expiration Time Exceeds Maximum Time Allowed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20157 

### Expiration Time Exceeds Maximum Time Allowed
The expiration time provided when creating the JWT exceeds 24 hours, which is the maximum duration allowed.

#### Possible Solution:
* Provide a shorter expiration time, which does not exceed the maximum.

See [the capability token docs](https://signalwire.com) to learn more.



# Code: 20159
Log Level: ERROR  
Message: Invalid Signature  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20159 

### Invalid Signature
The JWT provided to the SignalWire API has an invalid or mismatching signature.

#### Possible Causes 
* Public key in the JWT does not match the actual private key used for signing the request.

#### Possible Solution:
* Make sure the private key used for signing the JWT matches the public key identifier in JWT.
* To check whether the JWT is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).



# Code: 20160
Log Level: ERROR  
Message: Invalid Token  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20160 

### Invalid Token
The JWT provided to the SignalWire API is not a valid JWT.

#### Possible Solution:
* Make sure you are using the latest version of SignalWire Helper libraries
* To check whether the JWT is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).



# Code: 20403
Log Level: ERROR  
Message: 403 Forbidden  
Secondary Message: Forbidden    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20403

## Forbidden

The account lacks permission to access the SignalWire API. Typically this means
the account has been suspended or closed. For assistance, [please contact support](mailto:support@signalwire.com).



# Code: 20404
Log Level: ERROR  
Message: Not Found  
Secondary Message: The resource was not found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Not Found

The resource was not found. Here are some examples of cases that may trigger
a 404 error.

- Requesting a resource for a sid that does not exist, for example

        GET /2010-04-01/Accounts/AC123/Calls/CA123

    where CA123 is not a call sid that exists for your account

- Trying to retrieve a resource that doesn't exist, for example

        GET /2010-04-01/Accounts/AC123/SignalWireCalls/CA123

    where the resource name is Calls, not SignalWireCalls. Note that the API is
    case sensitive, so requesting "calls" instead of "Calls" will also return a
    404.

- Missing a sid in the request path. For example, let's say I accidentally
don't set a value for a call sid, using the PHP helper library:

        $callSid = null;
        $client->account->calls->get($callSid);

    This may turn into

        GET /2010-04-01/Accounts/AC123/Calls/.json

    because of the nonexistent sid, which may 404 your request or give you back
    a result you were not expecting. Or, you may initialize the client with an
    empty string for an account sid, which means the URL will get truncated in
    the middle (note the consecutive slashes):

        GET /2010-04-01/Accounts//Calls/CA123.json




# Code: 20413
Log Level: ERROR  
Message: Request Entity Too Large  
Secondary Message: Request entity is larger than limits defined    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Request Entity Too Large

### Request entity is larger than limits defined

Request entity is larger than limits defined by the server. 



# Code: 20422
Log Level: ERROR  
Message: Invalid Parameter  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20422

### Invalid Parameter

The request contained malformed or semantically incorrect parameters.

Common occurrences:

* Lacking a specified `Content-Type` header field
* Invalid or missing XML data
* Invalid parameter type or value

#### Is the request safe to retry?

A 422 request is never processed and is always safe to retry.



# Code: 20423
Log Level: ERROR  
Message: Invalid SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20423

### Invalid SID

The request contained at least one parameter what is incorrect SID but has to be.

#### Is the request safe to retry?

A 422 request is never processed and is always safe to retry.



# Code: 20426
Log Level: ERROR  
Message: Upgrade Required  
Secondary Message: The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20426

## Upgrade Required
The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

### TLS and cipher suite upgrade requirements
In moving towards a more secure posture with regards to [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), we require that all new accounts must use TLS v1.2 or later. All customers must use TLS > 1.2 starting June 26, 2019.

Customers running older operating systems or legacy network software may need to upgrade their systems to be compatible with these changes. If you've received Error 20426, you likely need to upgrade your system.

To learn more about these changes, see our support site's FAQ on [SignalWire REST API’s TLS and Cipher Suite Security Changes](https://signalwire.force.com/help/s)

### Tips for upgrading your environment
To learn more about SignalWire's TLS and cipher requirements, please reference [this support article](https://signalwire.force.com/help/s) where you can learn more about understanding failure signatures, which components to upgrade, and verifying your upgrade.



# Code: 20429
Log Level: error  
Message: Too Many Requests  
Secondary Message: Your account is sending too many concurrent requests to the SignalWire API. Please wait for a short period of time and make the request again, or alter your client's settings to issue fewer concurrent requests to the SignalWire API. SignalWire Support can provide advice for architecting your application to avoid 429 errors. For more information, contact support. A 429 request is never processed and is always safe to retry.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 20429

## Too Many Requests

Your account is sending too many concurrent requests to the SignalWire API. Please
wait for a short period of time and make the request again, or alter your
client's settings to issue fewer concurrent requests to the SignalWire API.

SignalWire Support can provide advice for architecting your application to avoid
429 errors. For more information, [contact support](https://signalwire.com/support).

A 429 request is never processed and is always safe to retry.




# Code: 20500
Log Level: ERROR  
Message: Internal Server Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 20500 

### Internal Server Error

The SignalWire API encountered an error when processing your request. This generally indicates an error in the server handling logic or a timeout in the API. We apologize for the inconvenience.

#### I'm seeing a lot of these


#### Is the request safe to retry?

GET and DELETE requests are always safe for you to retry as they are idempotent. Some POST requests are idempotent by nature - purchasing a specific phone number, or hanging up a call - and while these may return different HTTP status codes on each attempt, the end state of the system will be the same whether you make the request one time or ten.

Other POST requests - sending an SMS or triggering an outbound call - are not idempotent. If you get a 500 Server Error on these requests, and you retry the request, it is possible for a customer to receive multiple messages or calls from your application.



# Code: 20503
Log Level: ERROR  
Message: Service unavailable  
Secondary Message: Service is unavailable    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 20503

### Service unavailable

The requested SignalWire Service is temporarily unavailable.

### Possible Solutions
- Try again a few times with exponential back-off
- If the problem persists, please [contact support](https://signalwire.com/support).



# Code: 21100
Log Level: error  
Message: Accounts Resource  
Secondary Message: Errors related to the Accounts resource    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21100 

### Accounts Resource

Errors related to the Accounts resource









# Code: 21101
Log Level: error  
Message: Subaccounts cannot contain subaccounts  
Secondary Message: A subaccount cannot contain nested subaccounts.  Only a root account may contain subaccounts.    
Description: null  
Cause: null  
Solutions: null  
Docs:
null



# Code: 21102
Log Level: ERROR  
Message: Reached maximum number of Services  
Secondary Message: Reached maximum number of Services per parent account and product    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21102

### Reached maximum number of Services

#### Possible Causes
You have attempted to create a Service, but your parent account already has the maximum amount for this product.

#### Possible Solutions
* Contact support to increase your Service limit
* Delete some of your Services



# Code: 21200
Log Level: error  
Message: Calls Resource  
Secondary Message: Errors related to the Calls resource    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21200 

### Calls Resource

Errors related to the Calls resource









# Code: 21201
Log Level: error  
Message: No Called number specified  
Secondary Message: You attempted to initiate an outbound phone call, but you did not specify what number to call in the <span class='rest-attribute'>Called</span> POST parameter    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21201 

### No 'To' number specified

You attempted to initiate an outbound phone call, but you did not specify what number to call in the 'To' POST parameter




# Code: 21202
Log Level: error  
Message: Called number is a premium number  
Secondary Message: You attempted to initiate an outboud phone call to a "premium" phone number, such as a toll 976 line.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21202 

### 'To' number is a premium number

You attempted to initiate an outbound phone call to a "premium" phone number, such as a toll 976 line.




# Code: 21203
Log Level: error  
Message: International calling not enabled  
Secondary Message: You attempted to initiate an outbound phone call to an international phone number, which is not currently supported.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21203 

### International calling not enabled

You attempted to initiate an outbound phone call to an international phone number, which is not currently supported.









# Code: 21204
Log Level: error  
Message: Call already initiated  
Secondary Message: You should never receive this error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21204 

### Call already initiated

You should never receive this error









# Code: 21205
Log Level: error  
Message: Invalid URL  
Secondary Message: You attempted to initiate an outbound phone call, but the URL you specified to handle the call was not a valid URL.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21205

### Invalid URL

You attempted to initiate an outbound phone call, but the URL you specified to
handle the call was not a valid URL.

If you specified an Application Sid for your outbound phone call, the
application must have a valid VoiceUrl or the call will fail.

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 21206
Log Level: error  
Message: Invalid SendDigits  
Secondary Message: You attempted to initiate an outbound phone call, and you included a <span class='rest-attribute'>SendDigits</span> parameter that wasn't valid. <span class='rest-attribute'>SendDigits</span> is optional, and specifies that SignalWire should simulate sending keypad digits when the party answers.  It is useful for navigating a phone tree, reaching an extension or entering a password in a voicemail system.  <span class='rest-attribute'>SendDigits</span> may contain numbers, the # and * characters, as well as the "w" character to "wait" for half a second.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21206 

### Invalid SendDigits

You attempted to initiate an outbound phone call, and you included a <span class='rest-attribute'>SendDigits</span> parameter that wasn't valid. <span class='rest-attribute'>SendDigits</span> is optional, and specifies that SignalWire should simulate sending keypad digits when the party answers.  It is useful for navigating a phone tree, reaching an extension or entering a password in a voicemail system.  <span class='rest-attribute'>SendDigits</span> may contain numbers, the # and * characters, as well as the "w" character to "wait" for half a second.









# Code: 21207
Log Level: error  
Message: Invalid IfMachine  
Secondary Message: You attempted to initiate an outbound phone call, but you sent an invalid <span class='rest-attribute'>IfMachine</span> parameter.  SignalWire can determine if an answering machine or voicemail has answered the call, and behave differently if it has.  Valid options for <span class='rest-attribute'>IfMachine</span> are "Continue" (continue with the call, progressing after the beep), "Hangup" (immediately hangup the call) or "False" (don't determine if a machine has answered).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21207 

### Invalid IfMachine

You attempted to initiate an outbound phone call, but you sent an invalid <span class='rest-attribute'>IfMachine</span> parameter.  SignalWire can determine if an answering machine or voicemail has answered the call, and behave differently if it has.  Valid options for <span class='rest-attribute'>IfMachine</span> are "Continue" (continue with the call, progressing after the beep), "Hangup" (immediately hangup the call) or "False" (don't determine if a machine has answered).









# Code: 21208
Log Level: error  
Message: Invalid Timeout  
Secondary Message: You attempted to initiate an outbound phone call, but you sent an invalid <span class='rest-attribute'>Timeout</span> parameter.  The timeoutspecifes how long SignalWire should let the phone ring before giving up, and is useful if you want to have SignalWire hangup before an answering machine picks up.  You may specify any positive, whole integer for the <span class='rest-attribute'>Timeout</span> parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21208 

### Invalid Timeout

You attempted to initiate an outbound phone call, but you sent an invalid <span class='rest-attribute'>Timeout</span> parameter. The timeout specifes how long SignalWire should let the phone ring before giving up, and is useful if you want to have SignalWire hangup before an answering machine picks up. You may specify any positive, whole integer for the <span class='rest-attribute'>Timeout</span> parameter.





# Code: 21209
Log Level: error  
Message: Invalid Method  
Secondary Message: You attempted to initiate an outbound phone call, but you sent a <span class='rest-attribute'>Method</span> paramter that was invalid.  <span class='rest-attribute'>Method</span> specifies what HTTP method SignalWire should use in contacting your web server.  Possible values are GET and POST.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21209 

### Invalid Method

You attempted to initiate an outbound phone call, but you sent a <span class='rest-attribute'>Method</span> parameter that was invalid.  <span class='rest-attribute'>Method</span> specifies what HTTP method SignalWire should use in contacting your web server.  Possible values are GET and POST.









# Code: 21210
Log Level: ERROR  
Message: Caller phone number not verified  
Secondary Message: You attempted to initiate an outbound phone call, but the <span class='rest-attribute'>Caller</span> you specified is not a verified Outgoing Caller ID for your account.  In order to use a phone number as the Caller ID on outgoing calls, you must first validate your ownership of that phone number.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21210

### 'From' phone number not verified

You attempted to initiate an outbound phone call, but the
'From' number you specified is not a verified
number for your account. In order to use a phone number as the Caller ID on
outgoing calls, you must first verify your ownership of that phone number.

You can verify phone numbers from the [phone number verification section](https://signalwire.com) of your account portal.

### Test Credentials

If you received this error while trying to authenticate with your Test
Credentials, you probably tried to make a test call with a `From` number from
your live account. The only number that can be used to queue `successful`
calls with your Test Credentials is `+15005550006`. For more information,
read our documentation on [the `From` number for making calls with your test
credentials][from-test-credentials].

[from-test-credentials]: /docs/api/rest/test-credentials#test-calls-parameters-From




# Code: 21211
Log Level: ERROR  
Message: Invalid Called Phone Number  
Secondary Message: You attempted to initiate an outbound phone call, but the <span class='rest-attribute'>Called</span> phone number you supplied was not a valid phone number.  SignalWire accepts only 10 digit US domestic and Canadian phone numbers, with or without a leading "1" or "+1", with any combination of character separators.  For example, these are all valid: 415-867-5309, 4158675309, +1 (415) 867 5309.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21211 

### Invalid 'To' Phone Number

You attempted to initiate an outbound phone call, but the `To` phone number you
supplied was not a valid phone number. 

SignalWire accepts phone numbers in [E164
format](https://signalwire.com): `[+] [country code] [subscriber number including area code]`

You can find a full list of country codes for phone numbers on [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_country_calling_codes#Alphabetical_listing_by_country_or_region).




# Code: 21212
Log Level: error  
Message: Invalid Caller Phone Number  
Secondary Message: You attempted to initiate an outbound phone call, but the <span class='rest-attribute'>Caller</span> phone number you supplied was not a valid phone number.  SignalWire accepts only 10 digit US domestic and Canadian phone numbers, with or without a leading "1" or "+1", with any combination of character separators.  For example, these are all valid: 415-867-5309, 4158675309, +1 (415) 867 5309.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21212

### Invalid 'From' Parameter

You attempted to initiate an outbound phone call or message, but the 'From' parameter
you supplied was not a valid phone number or alphanumeric sender ID. SignalWire accepts phone numbers in [E.164
format](http://en.wikipedia.org/wiki/E.164) (i.e. "+1 format"), 10-digit US
and Canadian numbers with any combination of non-digit separators, or up to 11 alphanumeric characters [a-zA-Z0-9].



# Code: 21213
Log Level: error  
Message: Caller phone number is required  
Secondary Message: You attempted to initiate an outbound phone call, but you forgot to send a <span class='rest-attribute'>Caller</span> parameter.  <span class='rest-attribute'>Caller</span> is required, and tells SignalWire what Caller ID to use for the phone call.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21213 

### 'From' phone number is required

You attempted to initiate an outbound phone call, but you forgot to include a
'From' parameter. The 'From' parameter is required, and tells SignalWire what Caller
ID to use for the phone call.









# Code: 21214
Log Level: error  
Message: 'To' phone number cannot be reached  
Secondary Message: You attempted to initiate an outbound phone call to a phone number that cannot be reached. Please check the number and try again.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21214 

### 'To' phone number cannot be reached

You attempted to initiate an outbound phone call to a phone number that cannot
be reached. Please check the number and try again.  




# Code: 21215
Log Level: ERROR  
Message: Geo Permission configuration is not permitting call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21215

### Geo Permission configuration is not permitting call

You attempted to initiate an outbound phone call to a phone number that is not enabled on your account. Please check your [Geographic Permissions](https://signalwire.com), fix it, and try
again.

#### Enable international calling permissions

SignalWire supports calling over 200 countries worldwide.



# Code: 21216
Log Level: ERROR  
Message: API: Call blocked by SignalWire blacklist  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21216

### API: Call blocked by SignalWire blacklist
The destination number is blocked by SignalWire because this destination has a high-risk of fraud or due to regulatory reasons cannot be enabled by default. If you have a legitimate need to call this number, please email support@signalwire.com with an explanation of your use case.





# Code: 21217
Log Level: error  
Message: Phone number does not appear to be valid  
Secondary Message: You attempted to initiate an outbound phone call to an invalid phone number. Please check the phone number and try again.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21217

### Phone number does not appear to be valid 

You attempted to initiate an outbound phone call to an invalid phone number.  
Please check the phone number and try again.  




# Code: 21218
Log Level: error  
Message: Invalid ApplicationSid  
Secondary Message: You attempted to initiate an outbound phone call with an invalid ApplicationSid. The application may not exist anymore or may not be available within your account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21218

### Invalid ApplicationSid

You attempted to initiate an outbound phone call with an invalid ApplicationSid.
The application may not exist anymore or may not be available within your
account.




# Code: 21219
Log Level: error  
Message: 'To' phone number not verified  
Secondary Message: You attempted to initiate an outbound phone call from a trial account, but the 'To' number you specified is not a verified number for your account. In order to make calls during a free trial, you must first verify your ownership of the phone number being called.  You can verify phone numbers from the [phone numbers section](/user/account/phone-numbers) of your account portal.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21219

### 'To' phone number not verified

You attempted to initiate an outbound phone call from a trial account, but the
'To' number you specified is not a verified number for your account. In order
to make calls during a free trial, you must first verify your ownership of the
phone number being called.

You can verify phone numbers from the [phone numbers
section](/user/account/phone-numbers) of your account portal.




# Code: 21220
Log Level: error  
Message: Invalid call state  
Secondary Message: You attempted a realtime operation on a Call that was not in-progress.  Calls that have completed cannot be recorded or redirected.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21220 

### Invalid call state

You attempted a realtime operation on a Call that was not in-progress.  Calls that have completed cannot be recorded or redirected.  









# Code: 21221
Log Level: warning  
Message: Invalid SipAuthUsername. Must be fewer than 256 chars  
Secondary Message: The SipAuthUsername you specified was longer than 255 characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21221

### Invalid SipAuthUsername. Must be fewer than 256 chars

The SipAuthUsername you specified was longer than 255 characters.




# Code: 21222
Log Level: warning  
Message: Invalid SipAuthUsername. Illegal chars  
Secondary Message: The SipAuthUsername you specified contained characters not allowed in SIP.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21222

### Invalid SipAuthUsername. Illegal chars

The SipAuthUsername you specified contained characters not allowed in SIP.




# Code: 21223
Log Level: warning  
Message: Invalid SipAuthPassword. Must be fewer than 256 chars  
Secondary Message: The SipAuthPassword you specified contained too many characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21223

### Invalid SipAuthPassword. Must be fewer than 256 chars

The SipAuthPassword you specified contained too many characters.




# Code: 21224
Log Level: warning  
Message: Invalid SipAuthPassword. Illegal chars  
Secondary Message: The SipAuthUsername you specified contained characters not allowed in SIP.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21224

### Invalid SipAuthPassword. Illegal chars

The SipAuthUsername you specified contained characters not allowed in SIP.




# Code: 21225
Log Level: warning  
Message: SipAuthPassword is required when providing SipAuthUsername  
Secondary Message: You must specify a SipAuthPassword if you are also using SipAuthUsername.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21225

### SipAuthPassword is required when providing SipAuthUsername

You must specify a SipAuthPassword if you are also using SipAuthUsername.



# Code: 21226
Log Level: warning  
Message: SIP calling not enabled for this account  
Secondary Message: Your account is not enabled for SIP calling.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21226

### SIP calling not enabled for this account

Your account is not enabled for SIP calling.



# Code: 21227
Log Level: warning  
Message: Headers portion of SIP URI must be fewer than 1024 chars  
Secondary Message: The headers you are sending must be fewer than 1024 characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21227

### Headers portion of SIP URI must be fewer than 1024 chars

The headers you are sending must be fewer than 1024 characters.



# Code: 21228
Log Level: warning  
Message: Invalid SIP Header. Illegal chars in header name  
Secondary Message: The header you passed has characters not allowed in SIP.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21228

### Invalid SIP Header. Illegal chars in header name

The header you passed has characters not allowed in SIP.



# Code: 21229
Log Level: warning  
Message: Invalid SIP Header. Illegal chars in header value  
Secondary Message: The header value you passed has characters not allowed in SIP.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 21229

### Invalid SIP Header. Illegal chars in header value

The header value you passed has characters not allowed in SIP.



# Code: 21230
Log Level: error  
Message: Maximum Domains Reached  
Secondary Message: An account cannot have more than 100 domains.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 21230

### Maximum Domains Reached

An account cannot have more than 100 domains.



# Code: 21231
Log Level: error  
Message: Domain Validation Error  
Secondary Message: One of the parameters passed when creating or updating a SIP domain was incorrect.  Please see the response body for more details.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 21231

### Domain Validation Error

One of the parameters passed when creating or updating a SIP domain was incorrect.  This may be caused by the IP Access Control List SID already being associated with the Domain.  




# Code: 21232
Log Level: error  
Message: Invalid Domain  
Secondary Message: The domain name requested is invalid, already in use or a subdomain of a domain you do not control.  Please see the response body for more details.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 21232

### Invalid Domain

The domain name requested is invalid, already in use or a subdomain of a domain you do not control.  This is likely because the parent domain does not exist or because neither the account sid or its parent account controls the parent domain.




# Code: 21233
Log Level: error  
Message: Domain still has subdomains  
Secondary Message: You cannot delete a domain while subdomains of it exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
# Error - 21233

### Domain still has subdomains  

You cannot delete a domain while subdomains of it exist.  




# Code: 21234
Log Level: ERROR  
Message: Invalid Machine Detection configuration value  
Secondary Message: You attempted to initiate an outbound call, but you provided a Machine Detection configuration value that is not allowed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21234

### Invalid Machine Detection configuration value

You attempted to initiate an outbound call, but you provided a Machine Detection configuration value that is not allowed



# Code: 21244
Log Level: ERROR  
Message: Maximum Number of Trunks reached  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   Maximum Number of Trunks reached.

#### Possible Solutions
*  Please see limits allowed, visit [Trunking Key Concepts](/docs/api/sip-trunking/key-concepts).




# Code: 21245
Log Level: ERROR  
Message: Trunk Validation Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
* Cannot use another account's SID as the Termination URI for this Trunk
* Cannot create more than one Trunk with the same Termination URI
* Credential List or IP-ACL already associated with Trunk

#### Possible Solutions
*  Please update your Trunk settings to avoid the conditions stated above. Learn more: [Configure Trunks](/docs/api/sip-trunking/getting-started#configure-trunks).




# Code: 21247
Log Level: ERROR  
Message: Trunk Dependencies  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  Cannot create subdomain because parent domain does not exist/account does not own it
* Cannot delete trunk while it has subdomains
* Cannot rename subdomain because parent domain does not exist/account doesn't own it
* Cannot rename domain while it has subdomains

#### Possible Solutions
*  One of these constraints in the "Possible Causes" has been be violated, please review your Termination URI (Domain name).




# Code: 21248
Log Level: ERROR  
Message: Trunk Domain already taken  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   This Termination URI (Domain) is not available.

#### Possible Solutions
*  Please review your Termination URI (Domain name) and select a different one.




# Code: 21249
Log Level: ERROR  
Message: Maximum Origination URIs reached    
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   You've configured the maximum number of Origination URIs allowed for your Trunk.

#### Possible Solutions
* Please see [Multiple Origination URIs](/docs/api/sip-trunking/getting-started#multiple-orig-uris) for more information.




# Code: 21251
Log Level: ERROR  
Message: Trunking CPS change not allowed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   This CPS change is not allowed.

#### Possible Solutions
*  This CPS change is not allowed, kindly contact [SignalWire Support](mailto:support@signalwire.com).




# Code: 21252
Log Level: ERROR  
Message: Invalid Region  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   The Region requested is not valid.

#### Possible Solutions
*  Please see [Localized Termination URIs](/docs/api/sip-trunking/getting-started#localized-termination-uris) for more information on the valid Elastic SIP Trunking Regions.




# Code: 21401
Log Level: error  
Message: Invalid Phone Number  
Secondary Message: The phone number you specified was not a valid North American (US or Canadian) number.  SignalWire accepts only 10 digit US domestic and Canadian phone numbers, with or without a leading "1" or "+1", with any combination of character separators.  For example, these are all valid: 415-867-5309, 4158675309, +1 (415) 867 5309.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21401

### Invalid Phone Number

The phone number you specified was not a valid SMS-enabled phone number or alphanumeric sender ID.

If a phone number was used, this number must be one you have purchased from or ported to SignalWire in [E.164 format][e164].

Alphanumeric sender IDs can only be used with [accepted characters][alpha-sender-id] when messaging [countries where this feature is supported][alphanumeric-countries].

[e164]: http://en.wikipedia.org/wiki/E.164
[alpha-sender-id]: /docs/api/rest/sending-messages#alpha-sender-id



# Code: 21402
Log Level: error  
Message: Invalid Url  
Secondary Message: You attempted to update the URL handler associated with a phone number, but the URL you specified was not valid.  You must specify a valid URL, beginning with http or https, such as http://mycompany.com/callHandler    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21402 

### Invalid URL

You attempted to update the URL handler associated with a phone number, but the URL you specified was not valid. 

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 21403
Log Level: error  
Message: Invalid Method  
Secondary Message: You attempted to update the HTTP method that SignalWire uses when somebody calls your phone number, but the <span class='rest-attribute'>Method</span> you supplied was not valid.  Valid <span class='rest-attribute'>Method</span> values are GET or POST.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21403 

### Invalid Method

You attempted to update the HTTP method that SignalWire uses when somebody calls your phone number, but the <span class='rest-attribute'>Method</span> you supplied was not valid.  Valid <span class='rest-attribute'>Method</span> values are GET or POST.









# Code: 21404
Log Level: error  
Message: Inbound Phone number not available to trial account  
Secondary Message: You attempted to get a phone number using the REST API, but your SignalWire Free Trial Account does not support having your own phone number.  Please upgrade to a Full SignalWire Account in order to enable this feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21404

### Inbound phone numbers not available to trial accounts

Purchasing phone numbers is a feature that is only available for upgraded
accounts. Please upgrade to a Full SignalWire Account in order to purchase numbers.

You can upgrade from the [billing section](/user/billing) of your account
portal. 




# Code: 21405
Log Level: error  
Message: Cannot set VoiceFallbackUrl without setting Url  
Secondary Message: You cannot set a fallback URL without specifying a primary URL    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21405 

### Cannot set VoiceFallbackUrl without setting Url

You cannot set a fallback URL without specifying a primary URL








# Code: 21406
Log Level: error  
Message: Cannot set SmsFallbackUrl without setting SmsUrl  
Secondary Message: You cannot set a fallback URL without specifying a primary URL    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21406 

### Cannot set SmsFallbackUrl without setting SmsUrl

You cannot set a fallback URL without specifying a primary URL








# Code: 21407
Log Level: error  
Message: This Phone Number type does not support SMS  
Secondary Message: This phone number type does not support SMS.  You cannot set SmsUrl, SmsMethod, SmsFallbackUrl, or SmsFallbackMethod    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21407 

### This Phone Number type does not support SMS

This phone number type does not support SMS.  You cannot set SmsUrl, SmsMethod, SmsFallbackUrl, or SmsFallbackMethod





# Code: 21408
Log Level: error  
Message: Permission to send an SMS has not been enabled for the region indicated by the 'To' number  
Secondary Message: You have attempted to send an SMS to a region that has not been enabled. If you wish to send messages to this region, please enable the relevant permissions on your account in the [Global Permissions](/user/account/international/sms) page.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21408 

### Permission to send an SMS has not been enabled for the region indicated by the 'To' number

You have attempted to send an SMS to a region that has not been enabled. If you wish to send messages 
to this region, please enable the relevant permissions on your account in the [Global Permissions](/user/account/international/sms) page.




# Code: 21409
Log Level: error  
Message: VoiceCallerIdLookup cannot be set for this phone number  
Secondary Message: You attempted to set the VoiceCallerIdLookup for a phone number using the REST API, but the number does not support this feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21409

### VoiceCallerIdLookup cannot be set for this phone number

You attempted to set the VoiceCallerIdLookup for a phone number using the REST API, but the number does not support this feature.




# Code: 21420
Log Level: error  
Message: ApplicationSid is not accessible  
Secondary Message: You specified a VoiceApplicationSid or SmsApplicationSid for a new phone number that is not controlled by your account, or is invalid. Please specify an ApplicationSid that you've created in your [Account Dashboard](/user/account/apps).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21420

### ApplicationSid is not accessible

You specified a VoiceApplicationSid or SmsApplicationSid for a new phone number
that is not controlled by your account, or is invalid. Please specify an
ApplicationSid that you've created in your [Account
Dashboard](/user/account/apps).




# Code: 21421
Log Level: error  
Message: PhoneNumber is invalid  
Secondary Message: You tried to purchase a phone number for your account that was an invalid number. Please specify a valid phone number in E.164 format.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21421

### PhoneNumber is invalid

You tried to purchase or lookup a phone number that is invalid. Please specify a
valid phone number in E.164 format.




# Code: 21422
Log Level: error  
Message: PhoneNumber is not available  
Secondary Message: You tried to purchase a phone number that is not available for purchase.  This error can be triggered in a few ways:  - SignalWire does not own the phone number in question. - SignalWire owns the number, but it is reserved for another account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21422

### PhoneNumber is not available

You tried to purchase a phone number that is not available for purchase. 

This error can be triggered in a few ways:

- SignalWire does not own the phone number in question.
- SignalWire owns the number, but it is reserved for another account.





# Code: 21449
Log Level: ERROR  
Message: Number already can be used for outgoing calls and messages  
Secondary Message: The number you attempted to add as an Outgoing Caller ID to your account already can be used for outgoing calls and messages.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21449

### Number already can be used for outgoing calls and messages

The number you attempted to add as an Outgoing Caller ID to your account already can be used for outgoing calls and messages.




# Code: 21450
Log Level: error  
Message: Phone number already validated on your account  
Secondary Message: You attempted to add an Outgoing Caller ID to your account, but that number is already verified as an Outgoing Caller ID on your account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21450

### Phone number already verified for your account

You attempted to verify a phone number for your account, but that number is
already verified for your account.




# Code: 21451
Log Level: error  
Message: Invalid area code  
Secondary Message: You attempted to get a phone number for your account, but the <span class='rest-attribute'>AreaCode</span> parameter you specified was not a valid North American area code.  <span class='rest-attribute'>AreaCode</span> is optional, and for Local phone numbers, may be any US or Canadian area code, or for TollFree numbers, may be one of 800,888,877 or 866.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21451 

### Invalid area code

You attempted to get a phone number for your account, but the <span class='rest-attribute'>AreaCode</span> parameter you specified was not a valid North American area code.  <span class='rest-attribute'>AreaCode</span> is optional, and for Local phone numbers, may be any US or Canadian area code, or for TollFree numbers, may be one of 800,888,877 or 866.









# Code: 21452
Log Level: error  
Message: No phone numbers found in area code  
Secondary Message: You attempted to get a phone number for your account, but SignalWire couldn't find any numbers in the area you specified.  You may try again with a different <span class='rest-attribute'>AreaCode</span> or contact us to request a number in a certain area.  We can usually accommodate such requests within a few days.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21452 

### No phone numbers found in area code

You attempted to get a phone number for your account, but SignalWire couldn't find any numbers in the area you specified.  You may try again with a different <span class='rest-attribute'>AreaCode</span> or contact us to request a number in a certain area.  We can usually accommodate such requests within a few days.









# Code: 21453
Log Level: error  
Message: Phone number already validated on another account  
Secondary Message: You attempted to validate your phone number to activate your SignalWire Free Trial Account, but that phone number is already associated with another Free Trial Account.  You can only open one Free Trial Account per phone number.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21453 

### Phone number already verified for another account

You attempted to verify your phone number to activate your SignalWire Free Trial Account, but that phone number is already associated with another Free Trial Account.  You can only open one Free Trial Account per phone number.









# Code: 21454
Log Level: error  
Message: Invalid CallDelay  
Secondary Message: Call delay specified must be an integer between 0 and 60, specifying the number of seconds to delay before initiating the validation call.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21454 

### Invalid CallDelay

Call delay specified must be an integer between 0 and 60, specifying the number of seconds to delay before initiating the validation call.

#### Possible Causes 
*  Make sure to enter an integer between 0 and 60.









# Code: 21455
Log Level: error  
Message: Invalid PlayUrl  
Secondary Message: PlayUrl must be a valid URL using the HTTP or HTTPS protocol.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21455 

### Invalid PlayUrl

The URL given to play during validation isn't a valid URL.

#### Possible Causes 





# Code: 21456
Log Level: error  
Message: Invalid CallbackUrl  
Secondary Message: CallbackUrl must be a valid URL using the HTTP or HTTPS protol.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21456 

### Invalid CallbackUrl

The callback URL given to callback after validation isn't a valid URL.

#### Possible Causes 










# Code: 21457
Log Level: error  
Message: AreaCode Parameter not Supported  
Secondary Message: The AreaCode parameter for provisioning numbers is not supported on the IncomingPhoneNumbers/Local & IncomingPhoneNumbers/TollFree sub-resources.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21457

### AreaCode Parameter not Supported

The AreaCode parameter for provisioning numbers is not supported on the IncomingPhoneNumbers/Local & IncomingPhoneNumbers/TollFree sub-resources.









# Code: 21458
Log Level: error  
Message: PhoneNumber Provisioning Type Mismatch  
Secondary Message: The type of a PhoneNumber (toll-free or not) did not match the type of the IncomingPhoneNumbers sub-resource (Local or TollFree).  #### Possible Causes *  Make sure to provision toll-free numbers from the IncomingPhoneNumbers/TollFree resource or directly from the IncomingPhoneNumbers/ resource. *  Make sure to provision non-toll-free numbers from the IncomingPhoneNumbers/Local resource or directly from the IncomingPhoneNumbers/ resource.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21458

### PhoneNumber Provisioning Type Mismatch

The type of a PhoneNumber (toll-free or not) did not match the type of the IncomingPhoneNumbers sub-resource (Local or TollFree).

#### Possible Causes 
*  Make sure to provision toll-free numbers from the IncomingPhoneNumbers/TollFree resource or directly from the IncomingPhoneNumbers/ resource.
*  Make sure to provision non-toll-free numbers from the IncomingPhoneNumbers/Local resource or directly from the IncomingPhoneNumbers/ resource.




# Code: 21470
Log Level: error  
Message: Invalid AccountSid  
Secondary Message: The AccountSid you specified was not a valid AccountSid identifier.  AccountSid's are 34 character strings that represent the SignalWire Account .  For example, AC44CE4123947237834573457345347567.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21470

### Invalid AccountSid

The AccountSid you specified was not a valid AccountSid identifier.  AccountSid's are 34 character strings that represent the SignalWire Account .  For example, AC44CE4123947237834573457345347567.









# Code: 21471
Log Level: ERROR  
Message: Account does not exist  
Secondary Message: The AccountSid you specified does not exist. AccountSids are 34 character strings that represent the SignalWire Account.  For example, AC44CE4123947237834573457345347567.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21471

### Account does not exist

The AccountSid you specified does not exist.  AccountSids are 34 character strings that represent the SignalWire Account.  For example, AC44CE4123947237834573457345347567.









# Code: 21472
Log Level: error  
Message: Account is not active  
Secondary Message: The AccountSid you specified is not an active SignalWire Account.  To transfer the account, you must supply an Active 34 character AccountSid .    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21472

### Account is not active

The AccountSid you specified is not an active SignalWire Account.  To transfer the account, you must supply an Active 34 character AccountSid .









# Code: 21473
Log Level: error  
Message: AccountSid you are transferring to is not related to the originating owner of the phone number  
Secondary Message: The AccountSid you specified is neither parent nor child of the originating Account owner.  Please make sure that the subaccount or parent account is related to the current owner you are transferring from or to.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21473

### AccountSid you are transferring to is not related to the originating owner of the phone number

The AccountSid you specified is neither parent nor child of the originating Account owner.  Please make sure that the subaccount or parent account is related to the current owner you are transferring from or to.









# Code: 21474
Log Level: error  
Message: API User must be the parent account to transfer phone numbers.  
Secondary Message: The API user can not be a subaccount, must be a parent account to transfer phone numbers between parent and child accounts.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21474

### API User must be the parent account to transfer phone numbers.

The API user can not be a subaccount, must be a parent account to transfer phone numbers between parent and child accounts.








# Code: 21475
Log Level: error  
Message: Unable to update Status, invalid Status.  
Secondary Message: The Status you specified must be one of the following strings: 'active', 'suspended', or 'closed'.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21475

### Unable to update Status, invalid Status.

The Status you specified must be one of the following strings: 'active', 'suspended', or 'closed'.








# Code: 21476
Log Level: error  
Message: Unable to update Status for subaccount, parent account is suspended.  
Secondary Message: Unable to update Status for subaccount, parent account is suspended.  The account needs to be in good standing to continue using the subaccount feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21476

### Unable to update Status for subaccount, parent account is suspended.

Unable to update Status for subaccount, parent account is suspended.  The account needs to be in good standing to continue using the subaccount feature.







# Code: 21477
Log Level: error  
Message: Unable to update Status for parent accounts  
Secondary Message: Unable to update Status for parent accounts, status updates restricted to subaccounts only    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21477

### Unable to update Status for parent accounts

Unable to update Status for parent accounts, status updates restricted to subaccounts only





# Code: 21478
Log Level: error  
Message: Unable to update Status for subaccount, subaccount has been suspended by SignalWire  
Secondary Message: Unable to update Status for subaccounts that have been suspended externally by SignalWire.  Please contact customer support: https://signalwire.com 
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21478

### Unable to update Status for subaccount, subaccount has been suspended by SignalWire

Unable to update Status for subaccounts that have been suspended externally by SignalWire.  Please contact customer support: https://signalwire.com 





# Code: 21479
Log Level: error  
Message: Unable to update Status for subaccount, subaccount has been closed.  
Secondary Message: Unable to update Status for subaccount, subaccount is closed and can not be re-opened.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21479

### Unable to update Status for subaccount, subaccount has been closed.

Unable to update Status for subaccount, subaccount is closed and can not be re-opened.




# Code: 21480
Log Level: error  
Message: Reached maximum number of subaccounts  
Secondary Message: Reached maximum number of subaccounts, please contact [SignalWire](/help) if you want to create more subaccounts.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21480

### Reached maximum number of subaccounts

Reached maximum number of subaccounts, please contact [SignalWire](/help) if you want to create more subaccounts.




# Code: 21481
Log Level: ERROR  
Message: Invalid PageToken  
Secondary Message: The PageToken in the requested URL was not valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Invalid PageToken

The `PageToken` in the requested URL was not valid. If you are paging through
a result set, be sure you are requesting the provided paging urls in the
SignalWire API response.



# Code: 21501
Log Level: error  
Message: Resource not available  
Secondary Message: The resource you requested is not (yet) available.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21501 

### Resource not available

The resource you requested is not (yet) available.

#### Possible Causes 
*  Most likely you're fetching a Recording resource that is temporarily performing some post-processing, and will be available momentarily.


#### Possible Solutions
*  Retry the HTTP request again.  The Retry-After header will tell you when to retry.  Within a couple seconds should be ample.	








# Code: 21502
Log Level: error  
Message: Invalid callback url  
Secondary Message: The callback url provided is not a valid URL.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21502 

### Invalid callback url

The callback url provided is not a valid URL.

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.






# Code: 21503
Log Level: error  
Message: Invalid transcription type  
Secondary Message: The transcription type you provided is not a valid choice.  You may use one of: fast, accurate or all.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21503 

### Invalid transcription type

The transcription value you provided is invalid.  You may use one of: "true" or "false".









# Code: 21504
Log Level: error  
Message: RecordingSid is required.  
Secondary Message: You POSTed to the /Accounts/{AccountSid}/Transcriptions resource, but you did not include a RecordingSid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21504 

### RecordingSid is required.

You POSTed to the /Accounts/{AccountSid}/Transcriptions resource, but you did not include a RecordingSid.









# Code: 21601
Log Level: error  
Message: Phone number is not a valid SMS-capable inbound phone number  
Secondary Message: The phone number you provided as the FROM field to initiate an outbound SMS is not an incoming phone number assigned to your account.  Only phone numbers that you buy from SignalWire can be used for outgoing SMSes.  In particular, 3rd party phone numbers such as validated CallerIDs cannot be used to send SMSs.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21601

### Phone number is not a valid SMS-capable/MMS-capable inbound phone number 

The phone number you provided as the FROM field to initiate an outbound message is not an incoming phone number assigned to your account. Only phone numbers that you buy from SignalWire can be used for outgoing messages. In particular, 3rd party phone numbers such as validated CallerIDs cannot be used to send messages.



# Code: 21602
Log Level: error  
Message: Message body is required  
Secondary Message: You must specify a body text.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21602

### 'Body' OR MediaURL is required to send a Message

You have attempted to send a message without a 'Body'. Retry your message including a 'Body' text.




# Code: 21603
Log Level: error  
Message: The source 'From' phone number is required to send an SMS  
Secondary Message: Make sure to specify a valid SignalWire-provided IncomingPhoneNumber as the From in your outgoing SMSes.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21603

### 'From' phone number is required to send a Message 

Make sure to specify a valid [SignalWire Number](/user/account/phone-numbers/) as
the 'From' number in your outgoing messages.
	




# Code: 21604
Log Level: error  
Message: The destination 'To' phone number is required to send an SMS  
Secondary Message: Make sure to specify a valid phone number as the recipient of the SMS.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21604

### 'To' phone number is required to send a Message

Make sure to specify a valid phone number as the recipient of the message.





# Code: 21605
Log Level: ERROR  
Message: Maximum body length is 160 characters (old API endpoint)  
Secondary Message: You are using the deprecated /SMS/Messages API endpoint, which supports up to 160 characters per message. To send up to 1600 characters per message, switch to our upgraded /Messages endpoint.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21605

### Maximum body length is 160 characters

This error is specific to the deprecated /SMS/Messages API endpoint. When using this endpoint, your message body must be 160 characters or less. 

You can send messages up to 1600 characters long by using the [/Messages](https://signalwire.com) API endpoint.

For more info, please refer to [our FAQ on message size constraints](https://signalwire.com).



# Code: 21606
Log Level: ERROR  
Message: The "From" phone number provided is not a valid, SMS-capable inbound phone number for your account.  
Secondary Message: You can only send SMS messages from an incoming phone number provided by SignalWire, and that phone number must be SMS enabled. Visit the phone numbers page on your account portal to view a list of phone numbers that you own, and whether or not they are enabled for SMS.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21606

### The 'From' phone number provided is not a valid, message-capable SignalWire phone number.

You can only send SMS messages from a phone number or [short
code](https://signalwire.com) provided by or ported to SignalWire, and
that phone number must be SMS-capable.

Visit the [phone numbers page](https://signalwire.com) of your account portal to view a list
of phone numbers that you own and to determine whether they are
SMS-capable.

Due to anti-spam regulations, the number a user sees when you send an SMS using
your application must be the same SignalWire number associated with that account.
This differs from voice calls, where it is possible to display a verified
caller ID other than your SignalWire number.

### Possible solutions
*  Check that you are using a SignalWire phone number with SMS capabilities. You can see your purchased phone numbers and their capabilities in the [SignalWire console](https://signalwire.com).
*  If sending the message globally, verify that your `From` phone number is capable of sending messages and you have enabled [geographic permissions](https://signalwire.com) for your account.
*  If you are sending messages with test credentials, verify that you are using one of the [available test credential "magic phone numbers"](https://signalwire.com)

#### Sending global SMS

Only certain countries and phone numbers are currently able to send
global SMS messages. You may have received this error while trying
to send from a number which is not capable of sending Global SMS
messages. For more information, including an up to date list of countries
that can send messages globally, please see our [FAQ page on Global
SMS](https://signalwire.force.com/help/s).

#### Test Credentials

If you received this error while trying to authenticate with your Test
Credentials, you probably tried to send a message with a `From` number from
your live account. 

The only number that can be used to send `successful`
messages with your Test Credentials is `+15005550006`. 

For more information,
read our documentation on [the `From` number for sending SMS with your test
credentials][from-test-credentials] and check out this blog post on [using SignalWire's test credentials with magic numbers](https://signalwire.com).

[from-test-credentials]: https://signalwire.com 




# Code: 21607
Log Level: error  
Message: The 'from' phone number must be the sandbox phone number for trial accounts.  
Secondary Message: You can only send SMS messages from the sandbox phone number while your account is in the free trial.  Upgrade your account to a Full SignalWire account to send and receive from your own phone numbers.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21607

### The 'From' number is not a valid, SMS-capable SignalWire number

While your account is in Trial mode, you can only send SMS messages from your
free trial number, or the SignalWire Sandbox Number. To remove this restriction,
[upgrade to a full account](/user/billing/upgrade).





# Code: 21608
Log Level: ERROR  
Message: The 'to' phone number provided is not yet verified for this account.  
Secondary Message: While your account is in Trial Mode, you may only send SMS messages to verified numbers.  Upgrade to a Full SignalWire account to send to any phone number.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21608

### This number can send messages only to verified numbers

You have attempted to send a message to an unverified phone number while using a trial account.

To prevent spam, trial accounts can only send messages to phone numbers you've verified with SignalWire. You must upgrade your account to remove this restriction.

### Possible solutions
* Verify the phone number you wish to reach via the [SignalWire console](https://signalwire.com). _Note that you will need access to this device to receive the call or text with your verification code._
*  Upgrade your SignalWire trial account to a full paid account to remove this restriction by providing your payment information via credit card or Paypal on the [console billing page](https://signalwire.com). 




# Code: 21609
Log Level: error  
Message: Invalid 'StatusCallback'  
Secondary Message: StatusCallback must be a valid HTTP(s) URL.  The maximum length of the StatusCallback is 4000 characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21609

### Invalid StatusCallback URL

The `StatusCallback` URL provided is not a valid URL. 

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)
*   hostname
*   file path
*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.




# Code: 21610
Log Level: error  
Message: SMS cannot be sent to the 'To' number because the customer has replied with STOP  
Secondary Message: You have attempted to send to a 'To' number that has replied with "STOP" to one of your previous messages. You will not be able to send to the phone number specified in the 'To' parameter until the subscriber identified by the phone number has responded with "START".    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21610

### Message cannot be sent to the 'To' number because the customer has replied with STOP

You have attempted to send to a 'To' number that has replied with "STOP" to one
of your previous messages. You will not be able to send to the phone number
specified in the 'To' parameter until the subscriber identified by the phone
number has responded with "START".




# Code: 21611
Log Level: ERROR  
Message: This 'From' number has exceeded the maximum number of queued messages  
Secondary Message: You have attempted to enqueue too many messages for a given 'From' number. SignalWire SMS sends messages at 1 message per second from a phone number and 30 messages per second from a shortcode. Messages that exceed these rates will be queued and delivered at the defined rates. When a queue for a particular 'From' number exceeds 4 hours, this error will be thrown.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21611

### This 'From' number has exceeded the maximum number of queued messages

You have attempted to enqueue too many messages for a given 'From' number.
SignalWire SMS and Fax send messages at 1 message per second from a phone number and 100  messages per second from a shortcode. Messages that exceed these rates will be queued and delivered at the defined rates. When a queue for a particular 'From'
number exceeds 4 hours, this error will be thrown.



# Code: 21612
Log Level: ERROR  
Message: The 'To' phone number is not currently reachable via SMS  
Secondary Message: You have attempted to send to a number that is not currently reachable via SignalWire SMS. If the number provided is a properly formatted E.164, it is most likely that SignalWire does not yet have service with the carrier you are trying to reach.  We have logged the carrier you are attempting to reach and will monitor these failures when adding new carriers.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21612

### The 'To' phone number is not currently reachable via SMS or MMS

You have attempted to send to a number that is not currently reachable via
SignalWire SMS or MMS.

If the number provided is a properly formatted E.164, it is
possible that SignalWire does not yet have service with the carrier you are trying to reach.

If you are using an alphanumeric sender ID, the 'To' number is in a country where alphanumeric sender IDs are not supported. [A list of countries where alphanumeric sender ID is supported can be found here][alphanumeric-countries].

We have logged the carrier you are attempting to reach and will monitor these
failures when adding new carriers.

Other possible causes include:

- Sending international SMS messages from domestic only geographic phone numbers or short codes
- Sending MMS messages to an unreachable carrier with [MMS Converter](/user/account/settings) disabled.
- Sending from [Globally SMS-enabled](https://signalwire.force.com/help/s). Use other +1 SMS-enabled SignalWire numbers when communicating in these regions.

[alphanumeric-countries]:https://signalwire.force.com/help/s



# Code: 21613
Log Level: error  
Message: PhoneNumber Requires Certification  
Secondary Message: To purchase this phone number, you must certify that you or your customer has a business or personal address within the local country. To certify that you have an address in this country for this account, please purchase this phone number via the [buy a phone number](/user/account/phone-numbers/search) page in the account portal.  You will only need to certify your address once for each country.  Alternatively, you can provision a phone number that does not require certification.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21613

### PhoneNumber Requires an Address

Local regulation requires SignalWire to have an address on file for your account to
purchase this phone number.  You must add an address that specifies the end
user’s location using our [API][addresses-api] or [account
portal][addresses-portal]. Alternatively, you can provision a phone number that
does not require an address by using Basic List Filters on the
[AvailablePhoneNumbers][phone-numbers] resource. If you received this error
when trying to transfer a phone number to a subaccount or between subaccounts,
please ensure that the subaccount has the correct address on file.

[addresses-api]: /docs/api/rest/addresses
[addresses-portal]: /user/account
[phone-numbers]: /docs/api/rest/available-phone-numbers




# Code: 21614
Log Level: error  
Message: 'To' number is not a valid mobile number  
Secondary Message: You have attempted to send a SMS with a 'To' number that is not a valid mobile number. It is likely that the number that you have specified is a landline number or is an invalid number.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21614

### 'To' number is not a valid mobile number

You have attempted to send a SMS with a 'To' number that is not 
a valid mobile number. It is likely that the number that you 
have specified is a landline number or is an invalid number. 




# Code: 21615
Log Level: ERROR  
Message: Phone Number Requires a Local Address  
Secondary Message: null    
Description: To purchase this number you must have an Address on your account which satisfies the local address requirements.   
Cause: - No address on your account or subaccount that satisfies the locality requirement. Depending on the country, this can be either same country or same geographic area as the number being purchased.  
Solutions: - Add an address that satisfies the locality requirement  
- Contact SignalWire Support
Docs:
## ERROR - 21615

### Phone Number Requires a Local Address

 To purchase this number you must have an Address on your account which satisfies the local address requirements. 

#### Possible Causes
- No address on your account or subaccount that satisfies the locality requirement. Depending on the country, this can be either same country or same geographic area as the number being purchased.

#### Possible Solutions
- Add an address that satisfies the locality requirement
- Contact SignalWire Support



# Code: 21616
Log Level: error  
Message: The 'From' number matches multiple numbers for your account  
Secondary Message: You have attempted to send a SMS with a 'From' number that matches more than one number belonging to your account. Please submit the 'From' number in E.164 format to resolve the ambiguity.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21616

### The 'From' number matches multiple numbers for your account

You have attempted to send a SMS with a 'From' number that matches more
than one number belonging to your account. Please submit the 'From'
number in E.164 format to resolve the ambiguity.




# Code: 21617
Log Level: error  
Message: The concatenated message body exceeds the 1600 character limit  
Secondary Message: The maximum allowable body text length is generally 1600 characters, but some glyphs such as Emoji, Emoticons or other special characters will be counted as multiple characters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21617

### The concatenated message body exceeds the 1600 character limit.

The maximum allowable body text length is generally 1600 characters,
but some glyphs such as Emoji, Emoticons or other special characters
will be counted as multiple.




# Code: 21618
Log Level: error  
Message: The message body cannot be sent  
Secondary Message: You have attempted to send a message with content that is being filtered by all of our carriers.  We have logged the carrier you are attempting to reach and will monitor these failures when adding new carriers. If we add a new carrier in the future that does not filter the content you are trying to send, SignalWire will automatically route your message through the new carrier.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21618

### The message body cannot be sent

You have attempted to send a message with content that is being filtered by all
of our carriers.

We have logged the carrier you are attempting to reach and will monitor these
failures when adding new carriers. If we add a new carrier in the future that
does not filter the content you are trying to send, SignalWire will automatically
route your message through the new carrier.




# Code: 21619
Log Level: ERROR  
Message: Unable to create record  
Secondary Message: A text message body or media urls must be specified    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21619

### Unable to create record

A text message body or media urls must be specified.



# Code: 21620
Log Level: error  
Message: Invalid media URL(s)  
Secondary Message: One or more media URL you provided is invalid. Please use only valid HTTP and HTTPS URLs.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21620

### Invalid media URL(s)

One or more media URL you provided is invalid.  Please use only valid http and https urls




# Code: 21621
Log Level: error  
Message: The 'From' number has not been enabled for MMS  
Secondary Message: The 'From' phone number does not appear to be a phone number that you can send MMS messages from.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21621

### The ‘From’ number has not been enabled for MMS messaging

The ‘From’ phone number does not appear to be a phone number that you can send MMS messages from




# Code: 21622
Log Level: error  
Message: MMS has not been enabled for your account  
Secondary Message: Your account has not been enabled for picture messaging. Please contact support to send picture messages.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21622

### MMS has not been enabled for your account

Your account has not been enabled for picture messaging.  Please [contact support](https://signalwire.com/support) to send picture messages




# Code: 21623
Log Level: error  
Message: Number of media files exceeds allowed limit  
Secondary Message: The number of media URLs exceeds the maximum allowed. You may send up to 10 media files in a single message.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21623

### Number of media files exceeds allowed limit

The number of media URLs exceeds the maximum allowed. You may send up to 10 media files in a single message. 




# Code: 21624
Log Level: ERROR  
Message: Invalid validity period value  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21624

### Invalid validity period value

Validity period can only be set to integers between 1 and 14,400 seconds (4 hours max).



# Code: 21626
Log Level: error  
Message: Invalid 'StatusCallbackEvent'  
Secondary Message: One or more of the StatusCallbackEvents provided were invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21626

### Invalid 'StatusCallbackEvent'

One or more of the StatusCallbackEvents provided were invalid.




# Code: 21628
Log Level: ERROR  
Message: Address Validation Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21628

### Address Validation Error

The address you have provided cannot be validated. 

#### Possible Causes
- Address misspelling
- Address cannot be found in third-party data source 

#### Possible Solutions
- Ensure the address is spelled correctly 
- Contact SignalWire Support



# Code: 21629
Log Level: ERROR  
Message: Address Validation Error - Check Suggested Address  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21629

### Address Validation Error - Check Suggested Address

The address you have provided cannot be validated. A similar address has been found to be valid. The suggested address is included in the error message body. 

#### Possible Causes
- Address misspelling
- Alternate format or spelling in third-party data source

#### Possible Solutions
- Ensure the address is spelled correctly
- If a correct suggestion, submit the suggested address for validation
- Contact SignalWire Support



# Code: 21630
Log Level: ERROR  
Message: Cannot mutate Address that is linked to a verified Document.  
Secondary Message: Cannot mutate Address that is linked to a verified Document.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21630

### Cannot mutate Address that is linked to a verified Document.




# Code: 21631
Log Level: ERROR  
Message: Phone Number Requires an Address  
Secondary Message: null    
Description: To purchase this number you must supply the Address of the user of this phone number.  Previously the IncomingPhoneNumbers API would look at your account for an appropriate address, however, you are now required to pass in an AddressSid that satisfies the requirement for the phone number.  This is because SignalWire needs to know which address will be operating the phone number to meet regulatory requirements for that country and type of phone number.  
Cause: - No address was provided   
- No address was that satisfies the locality requirement for this phone number type.
- Depending on the country and number type, this may be an address in the same country or same geographic area as the number being purchased.
Solutions: - Add an address that satisfies the locality requirement.  
- Contact SignalWire Support.
Docs:
## ERROR - 21631

### Phone Number Requires an Address

 To purchase this number you must supply the Address of the user of this phone number.  Previously the IncomingPhoneNumbers API would look at your account for an appropriate address, however, you are now required to pass in an AddressSid that satisfies the requirement for the phone number.  This is because SignalWire needs to know which address will be operating the phone number to meet regulatory requirements for that country and type of phone number.

#### Possible Causes
- No address was provided 
- No address was that satisfies the locality requirement for this phone number type.
- Depending on the country and number type, this may be an address in the same country or same geographic area as the number being purchased.

#### Possible Solutions
- Add an address that satisfies the locality requirement.
- Contact SignalWire Support.



# Code: 21650
Log Level: ERROR  
Message: Phone Number Requires a Verified Identity Document  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21650

### Phone Number Requires a Verified Identity Document

To purchase this number you must have a verified identity document on your account. 

#### Possible Causes
- There is no verified identity document on your account or subaccount. Due to local regulations, some phone numbers require a verified identity document associated with your SignalWire account.

#### Possible Solutions
- In the Phone Numbers > Documents section in Console, provide the name of the individual or business registering the phone numbers and a scanned copy of supporting identification documents.
- Ensure that the verification status of the identity document record is “Passed”. If “Pending”, wait 48 business hours for SignalWire to verify the document. If “Failed”, please refer to the failure reason to address the issue. 




# Code: 21651
Log Level: ERROR  
Message: Document does not satisfy regulatory requirement  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21651

### Document does not satisfy regulatory requirement

The document being mapped to the number does not satisfy the regulatory requirements. 

#### Possible Causes
- The document is the incorrect type for the number you are trying to purchase or update.
- The document does not have the correct metadata fields required for the number you are trying to purchase or update.
- The document sid is not valid. 

#### Possible Solutions
- Ensure that the document you are using satisfies the regulatory requirement.
- Ensure the document sid refers to a document on your account or subaccount. 
- Contact support for assistance.



# Code: 21652
Log Level: ERROR  
Message: Maximum subject length is 40 characters  
Secondary Message: Keep the subject text of your message to 40 characters or less.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21652

### Maximum subject text length is 40 characters

The subject text of your message should be 40 characters or less.




# Code: 21701
Log Level: error  
Message: The Messaging Service does not exist  
Secondary Message: The Messaging Service resource you are referencing does not exist    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21701

### The Messaging Service does not exist.

The Messaging Service resource you are referencing does not exist

#### Possible Solutions
*  Double check the Messaging Service Sid parameter that you are using







# Code: 21702
Log Level: error  
Message: The Messaging Service is not available to send new messages  
Secondary Message: The Messaging Service is not available to send new messages    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21702

### The Messaging Service is not available to send new messages.

The Messaging Service is not available to send new messages.

#### Possible Solutions
*  Retry your API call




# Code: 21703
Log Level: error  
Message: The Messaging Service does not have a phone number available to send a message  
Secondary Message: You have phone numbers or short codes in your Messaging Service, but none of them are capable of sending the requested message or media to this recipient    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21703

### The Messaging Service does not have a phone number available to send a message.

The Messaging Service does not have a phone number available with the required capabilities to send a message.

#### Possible Causes 
*  You have phone numbers or short codes in your Messaging Service, but none of them are capable of sending the requested message or media to this recipient

#### Possible Solutions
*  Add a number to your Messaging Service with the required capabilities








# Code: 21704
Log Level: error  
Message: The Messaging Service contains no phone numbers  
Secondary Message: A Messaging Service requires at least one phone number or short code to send messages    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21704

### The Messaging Service contains no phone numbers.

A Messaging Service requires at least one phone number or short code to send messages

#### Possible Solutions
*  Add at least one phone number or short code to your Messaging Service.








# Code: 21705
Log Level: error  
Message: The Messaging Service is invalid  
Secondary Message: The Messaging Service Sid you are using is not valid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21705

### The Messaging Service is invalid

The Messaging Service Sid you are using is not valid. 

#### Possible Solutions
*  Double check the Messaging Service Sid parameter that you are using








# Code: 21712
Log Level: ERROR  
Message: Phone Number or Short Code is associated with another Messaging Service.  
Secondary Message: You have tried to assign a SignalWire phone number or short code to a Messaging Service, but the number is already associated with a different Messaging Service.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 21712

### Phone Number or Short Code is associated with another Messaging Service.

A SignalWire phone number or short code can only be associated with one Messaging Service at a time.

Please delete the number from its existing Messaging Service before attempting to add it to a new Messaging Service. [See here](https://signalwire.com) for a code sample. Removing a SignalWire number from a Messaging Service will not remove the number from your account.



# Code: 22100
Log Level: ERROR  
Message: Reached Maximum Verification Attempts  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22100

### Reached Maximum Verification Attempts




# Code: 22101
Log Level: ERROR  
Message: Invalid Hosted Number Order SIDs  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22101

### Invalid Hosted Number Order SIDs

You attempted to create or update an Authorization Document with one or more invalid Hosted Number Order SIDs. 

#### Possible Causes

* No Hosted Number Order SIDs were provided when creating the Authorization Document.

* One or more of the SIDs provided is not a 34-character string that is prefixed with "HR".



#### Possible Solutions
Please specify Hosted Number Order SIDs you've created in your [Account Dashboard](https://signalwire.com).



# Code: 22102
Log Level: ERROR  
Message: Invalid Phone Number  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22102

### Invalid Phone Number

The phone number provided is not a valid number.

#### Possible Causes

* The phone number provided is formatted correctly.

* The phone number provided includes a non-existent country code, area code or exchange.

#### Possible Solutions

Please specify a valid phone number in [E164 format](http://en.wikipedia.org/wiki/E.164) (i.e. "+1 format").



# Code: 22103
Log Level: ERROR  
Message: Unsupported Iso Country  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22103

### Unsupported Iso Country

You attempted to host a number, but SignalWire does not currently support hosting numbers in the Iso Country provided.





# Code: 22104
Log Level: ERROR  
Message: Invalid Email Format  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22104

#### Invalid Email Format

The format of a provided email was invalid.

#### Possible Causes

* Invalid email provided in request for email or cc emails.

#### Possible Solutions

Make sure you submit emails in the format local-part@domain



# Code: 22105
Log Level: ERROR  
Message: Invalid URL format  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22105

#### Invalid URL Format

You attempted to configure your hosted number, but the URL you specified was not valid.

#### Possible Causes

* Invalid URL provided for phone number configuration (SmsUrl, SmsFallbackUrl, VoiceUrl, VoiceFallbackUrl). 

* Invalid URL provided for status callback configuration (StatusCallbackUrl).

#### Possible Solutions

Make sure you submit a fully qualified URL including:

*   protocol (http:// or https://)

*   hostname

*   file path

*   properly url-encoded query parameters

SignalWire must be able to reach this URL over the public Internet.



# Code: 22106
Log Level: ERROR  
Message: Invalid Method  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22106

#### Invalid Method

The method you provided for configuring your hosted number was invalid.

Valid values are GET and POST..

#### Possible Causes

* Invalid method passed for number configuration (SmsMethod, SmsFallbackMethod, VoiceMethod, VoiceFallbackMethod).

* Invalid method passed for status callback configuration (StatusCallbackMethod).



# Code: 22107
Log Level: ERROR  
Message: Unable to Update Authorization Document  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22107

#### Unable to Update Authorization Document

You attempted to make a change that cannot be applied to the Authorization Document resource.

#### Possible Causes

* Trying to update or delete an Authorization Document resource that is in status "signed."


* Trying to update an Authorization Document that is in status "signing."

#### Possible Solutions


Update the Authorization Document to status "opened" if it is not already in a terminal state.



# Code: 22108
Log Level: ERROR  
Message: Invalid Application SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22108

#### Invalid Application SID

You attempted to configure a phone number with an invalid Application SID. 

#### Possible Causes

* The SID is not a 34-character string that is prefixed with "AP".

* Invalid SMS Application SID provided in request

* Invalid Voice Application SID provided in request

* The Application resource identified by the SID does not exist anymore or does not belong to your account.

#### Possible Solutions

Please specify an Application SID you’ve created in your [Account Dashboard](https://signalwire.com).



# Code: 22109
Log Level: ERROR  
Message: Invalid Address SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22109

#### Invalid Address SID

You attempted to host a phone number with an invalid Address SID. 

#### Possible Causes

* The SID is not a 34-character string that is prefixed with "AD". 

* The Address resource identified by the SID does not exist anymore or does not belong to your account.

#### Possible Solutions

* Please specify an Address SID you’ve created in your [Account Dashboard](https://signalwire.com).



# Code: 22110
Log Level: ERROR  
Message: Phone Number Not Hostable  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22110

#### Phone Number Not Hostable

You attempted to host a number that is not hostable on SignalWire.

#### Possible Causes

* The number is already hosted. 

* The number is owned by SignalWire.

* The number cannot be enabled by carrier for requested capabilities.

* The number is type mobile or voip.



# Code: 22111
Log Level: ERROR  
Message: Invalid Hosted Number Order Status  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22111

#### Invalid Hosted Number Order Status

The status you specified is not a valid Hosted Number Order status.

#### Possible Causes

* Attempting to filter a list of Hosted Number Orders on a status that does not exist.

* Attempting to update a Hosted Number Order instance with a status that cannot be applied to the current Hosted Number Order state.



# Code: 22112
Log Level: ERROR  
Message: Unable to Update Hosted Number Order Status  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22112

#### Unable to Update Hosted Number Order Status

The status provided in a request to update Hosted Number Order instance cannot be applied to the current Hosted Number Order state.

#### Possible Causes

* Trying to update a Hosted Number Order that has been completed or failed.

* Trying to update the status of a Hosted Number Order to a status that cannot be user-initiated.

#### Possible Solutions

* If a Hosted Number Order is in a terminal state (failed or completed), create a new instance.

* If a Hosted Number Order is in "action-required" state, reach out to support to remediate.



# Code: 22113
Log Level: ERROR  
Message: Phone Verification Incorrect  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22113

#### Phone Verification Incorrect

You attempted to complete caller verification but the code you provided was incorrect. 

#### Possible Causes

* You entered the code incorrectly in the request

* The code you entered has expired

#### Possible Solutions

* Make another request to update Hosted Number Order instance to Status pending-verification to receive another verification code.



# Code: 22114
Log Level: ERROR  
Message: Unable to Verify Code  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22114

#### Unable to Verify Code

A verification code was provided but the Hosted Number Order instance is not in a valid state for handling caller ID verification.

#### Possible Solutions

* Update the status of the Hosted Number Order instance to "pending-verification".

* Remove VerificationCode from the request body if verification call has already been completed.



# Code: 22115
Log Level: ERROR  
Message: Invalid Unique Name  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22115

#### Invalid Unique Name

The unique name must be a string that does not exceed a length of 128 characters.

#### Possible Solutions

* Confirm that your unique name is a string that does not exceed 128 characters.



# Code: 22116
Log Level: ERROR  
Message: Invalid Friendly Name  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22116

#### Invalid Friendly Name

Friendly name is a descriptive name to help you remember your resource. The friendly name cannot exceed a length of 128 characters. 

#### Possible Solutions

* Confirm that your friendly name is a string that does not exceed 128 characters.



# Code: 22117
Log Level: ERROR  
Message: Invalid Extension  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22117

#### Invalid Extension

The extension provided for the verification call contains characters that aren't allowed. 

#### Possible Solutions

* Confirm that your Extension is a non-empty string. Extension may contain numbers, the # and * characters, as well as the "w" character to "wait" for half a second. 



# Code: 22118
Log Level: ERROR  
Message: Invalid Verification Document SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22118

#### Invalid Verification Document SID

The Verification Document SID specified is not a valid identity document identifier. 

#### Possible Causes

* The Verification Document SID is not a 34-character string that is prefixed with "RI".

* The identity document represented by the Verification DocumentSID is not of type "phone-bill".

* The identity document represented by the Verification Document SID does not exist anymore or does not belong to your account.

#### Possible Solutions

Please specify a Verification Document SID you’ve created in your [Account Dashboard](https://signalwire.com).



# Code: 22119
Log Level: ERROR  
Message: Invalid Capabilities  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22119

#### Invalid Capabilities

The SMS Capability you specified for your Hosted Number Order was not valid.

#### Possible Solutions

Please explicitly specify SMS as the capability to host on SignalWire's platform by setting SMS Capability to true.



# Code: 22120
Log Level: ERROR  
Message: Invalid Verification Type  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22120

#### Invalid Verification Type

Verification Type must be either "phone-call" or "phone-bill".



# Code: 22121
Log Level: ERROR  
Message: Unable to Transfer Hosted Number  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22121

#### Unable to Transfer Hosted Number 


#### Possible Causes


* The Hosted Number you are trying to transfer is not in status "in-use."

#### Possible Solutions

See [Exchanging Numbers Between Subaccounts](https://signalwire.com) for more details about transferring numbers.



# Code: 22122
Log Level: ERROR  
Message: Invalid Authorization Document Status  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22122

#### Invalid Authorization Document Status

Status must be one of "opened" or "signing."



# Code: 22123
Log Level: ERROR  
Message: Unable to Initiate Verification Call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 22123

#### Unable to Initiate Verification Call

#### Possible Causes

* The number you are trying to verify cannot be reached.

* Your account is not allowed to call the number you are trying to verify.

* The number you are attempting to verify has been blocked.

* You are attempting to verify a number that is not a valid phone number.

#### Possible Solutions




# Code: 30001
Log Level: error  
Message: Queue overflow  
Secondary Message: You tried to send too many messages too quickly and your message queue overflowed. Try sending your message again after waiting some time.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30001

### Message Delivery - Queue overflow

#### Possible Causes 
*  You tried to send too many messages too quickly and your message queue overflowed.

#### Possible Solutions
*  Try sending your message again after waiting some time.




# Code: 30002
Log Level: error  
Message: Account suspended  
Secondary Message: Your account was suspended between the time of message send and delivery. Please contact SignalWire.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30002

### Message Delivery - Account suspended

#### Possible Causes 
*  Your account was suspended between the time of message send and delivery.

#### Possible Solutions
*  Please contact SignalWire support.




# Code: 30003
Log Level: ERROR  
Message: Unreachable destination handset  
Secondary Message: The destination handset you are trying to reach is switched off or otherwise unavailable.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30003

## Message Delivery - Unreachable destination handset

### Possible Causes 
*  The destination handset you are trying to reach is switched off or otherwise unavailable.
*  The device you are trying to reach does not have sufficient signal
*  The device cannot receive SMS (for example, the phone number belongs to a landline)
*  There is an issue with the mobile carrier

### Possible Solutions
The first step to troubleshooting this issue is to attempt to replicate the problems. Attempt to send another test message to this user via a REST API request, or through the API Explorer in the [SignalWire Console](https://signalwire.com). 

If you see similar results, continue troubleshooting with the following checklist:
*  Is the destination device powered on?
*  Does the device have sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
*  Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
*  Can the device receive non-SignalWire SMS?
*  Can the device receive messages from another SignalWire number (non-Alphanumeric Sender ID), or with a shorter one-segment (non-concatenated) body?
*  Can other devices using the same mobile carrier receive your messages?

If you can rule out all of the above issues, continue troubleshooting below.

#### Messages sent from short codes
Repeated Error 30003 results on undelivered messages sent from [short codes](https://signalwire.force.com/help/s) could occur if the destination user has a wireless plan that does not support short code or "Premium" messages.

To workaround these plan limitations, we suggest using the **Fallback to Long Code** feature of [Messaging CoPilot](https://signalwire.com).

**Sprint** customers may be able to whitelist messages sent from your short code by texting the phrase `Allow XXXXX` to **9999**, replacing `XXXXX` with your short code. However, customers from other wireless carriers will likely need to reach out to their carrier's support group to enable "Premium" or short code messaging.

#### Messages sent from long codes
Repeated Error 30003 results on undelivered messages sent from long codes (regular phone numbers) could be due to carrier filtering. 

The rules for carrier filtering vary throughout the industry, making it difficult at times to pin down exactly why a message is being filtered out. For more details including potential workarounds, please see this Help Center article ["How Does Carrier Filtering Work?"](https://signalwire.force.com/help/s)

#### Continued Error 30003 issues
SignalWire's Support team can help investigate what went wrong with delivering your message. Please collect 3 or more message SIDs in your [SMS logs](https://signalwire.com).




# Code: 30004
Log Level: ERROR  
Message: Message blocked  
Secondary Message: The destination number you are trying to reach is blocked from receiving this message (e.g. due to blacklisting).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30004

## Message Delivery - Message blocked

### Possible Causes 
*  The destination number you are trying to reach is blocked from receiving this message (e.g., due to blacklisting).
*  The device you are trying to reach does not have sufficient signal.
*  The device cannot receive SMS (for example, the phone number belongs to a landline).
*  The destination number is on India's national Do Not Call registry.
*  There is an issue with the mobile carrier.

### Possible Solutions
The first step to troubleshooting this issue is to attempt to replicate the problem. Attempt to send another test message to this user via a REST API request or through the API Explorer in the [SignalWire Console](https://signalwire.com). 

If you see similar results, continue troubleshooting with the following checklist:
*  Is the destination device powered on?
*  Does the device have sufficient signal? If not, power the device off, then wait 30 seconds and then power it back up.
*  Is the device connected to the home carrier's network? We cannot guarantee message delivery to devices roaming off-network.
*  Can the device receive non-SignalWire SMS?
*  Can the device receive messages from another SignalWire number (not using an [Alphanumeric Sender ID](https://signalwire.com) body?
*  Can other devices using the same mobile carrier receive your messages?

If you can rule out all of the above issues, continue troubleshooting below.

#### "Undelivered" messages sent to India
Error 30004 results on undelivered messages sent to India could be due to the destination number being listed on the national Do Not Call (DNC) registry. 

For more information on sending messages to India, including links for updating DNC settings, please see our help center article on [limitations for sending SMS to India](https://signalwire.force.com/help/s).

#### "Failed" messages
Repeated messages with a `Failed` status and error 30004 results indicate SignalWire may be filtering some of your messages internally. 

This filtering is in place to help protect our customers, and the rules attempt to match what we have observed from the industry. For more details, including potential workarounds, please see our help center article ["How Does Carrier Filtering Work?"](https://signalwire.force.com/help/s)

#### Continued issues with error 30004
SignalWire's support team can help investigate what went wrong with delivering your message. Please collect 3 or more message SIDs in your [SMS logs](https://signalwire.com).



# Code: 30005
Log Level: ERROR  
Message: Unknown destination handset  
Secondary Message: The destination number you are trying to reach is unknown and may no longer exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30005

## Message Delivery - Unknown destination handset

### Possible Causes 
*  The destination number you are trying to reach is unknown and may no longer exist.
*  The device you are trying to reach is not on or does not have sufficient signal.
*  The device cannot receive SMS (for example, the phone number belongs to a landline)
*  There is an issue with the mobile carrier

### Possible Solutions
The first step to troubleshooting this issue is to attempt to replicate the problems. Attempt to send another test message to this user via a REST API request, or through the API Explorer in the [SignalWire Console](https://signalwire.com). 

Pay close attention to your request and double check to verify you are attempting to send messages to the correct phone number in the correct [E.164](https://signalwire.com) format: `[+] [country code] [subscriber number including area code]` 

If you see similar results, continue troubleshooting with the following checklist:
*  Is the destination device powered on?
*  Does the device have sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
*  Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
*  Can the device receive non-SignalWire SMS?
*  Can the device receive messages from another SignalWire number (non-Alphanumeric Sender ID), or with a shorter one-segment (non-concatenated) body?
*  Can other devices using the same mobile carrier receive your messages?

#### Continued issues with Error 30005
SignalWire's Support team can help investigate what went wrong with delivering your message. Please collect 3 or more message SIDs in your [SMS logs](https://signalwire.com).



# Code: 30006
Log Level: error  
Message: Landline or unreachable carrier  
Secondary Message: The destination number is unable to receive this message. Potential reasons could include trying to reach a landline or, in the case of short codes, an unreachable carrier.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30006

### Message Delivery - Landline or unreachable carrier

#### Possible Causes

*  The destination number is unable to receive this message. Potential reasons
could include trying to reach a landline or, in the case of short codes, an
unreachable carrier.




# Code: 30007
Log Level: ERROR  
Message: Carrier violation  
Secondary Message: Your message content was flagged as going against carrier guidelines.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30007

### Message Delivery - Carrier violation

Your message was flagged as objectionable and blocked by the receiving wireless carrier. Some carriers do this to enforce rules or regulations about what types of messaging are allowed to that country or mobile network. Many carriers also have systems in place to protect mobile subscribers from spam or unwanted messages.

Learn more about how carrier filtering works and how to avoid it: [How Does Carrier Filtering Work?](https://signalwire.force.com/help/s)

For a detailed explanation of carrier filtering in the United States and Canada, please see [SMS Carrier Filtering in the United States and Canada](https://signalwire.force.com/help/s).



# Code: 30008
Log Level: ERROR  
Message: Unknown error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30008

### Message Delivery - Unknown error

If a message you sent is not delivered to the end device and returns a 30008 error code, this means that delivery of your message failed for unknown reasons.

When SignalWire receives a very generic error from our carrier partner that we have no further details about, we associate the message with the error code 30008, letting you know that SignalWire truly doesn’t know what caused this error from the provider.

#### Possible Solutions
* Check that the phone you were sending to is turned on and can receive non-SignalWire SMS
* Ensure that the phone is not roaming off network. We cannot guarantee message delivery on roaming phones.
* Try sending to other phones who have the same mobile carrier (you can use our Lookups API to determine the carrier if you’re unsure). If messages to other phones go through, the issue is likely device related. Try rebooting the device or contact the mobile carrier for help.
* If you are sending SMS from an alphanumeric sender ID, see if using a SignalWire phone number works better. We’ve observed that certain networks may block alpha sender IDs.
* If the recipient number is another SignalWire number, ensure that number has an action configured for its Messaging capabilities. Choose any available option like "Webhook" or "LaML Bin."
* Try sending a shorter message to the phone, with simple content that does not include any special characters. This would give our support team an idea as to whether the failure is related to concatenation or character encoding.
* SignalWire support can help investigate what went wrong with our carriers. Please open a support request and include a minimum of 3 or more message SIDs where a 30008 error was thrown. Per our carriers' requirements, these SIDs can be no older than 48 hours at most.



# Code: 30009
Log Level: error  
Message: Missing inbound segment  
Secondary Message: One or more segments associated with your multi-part inbound message was not received.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30009

### Inbound Message - Missing Segment

One or more segments associated with your multi-part inbound message was not received.



# Code: 30010
Log Level: error  
Message: Message price exceeds max price  
Secondary Message: The price of your message exceeds the max price you have set.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30010

### Message price exceeds Max Price

The price of message is higher than the specified MaxPrice. To send this message, you must set a lower price.



# Code: 30011
Log Level: ERROR  
Message: Incoming MMS not supported by the receiving phone number in this region  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30011 

### Incoming MMS not supported by the receiving phone number in this region

There was a failure attempting to receive an incoming MMS

A 30011 error is an indicator of a delivery failure between a telecom carrier and SignalWire. 
Your SignalWire phone number was sent an MMS in a region where SignalWire does not support incoming MMS.

It is recommended that you respond to the user sending the MMS to let them know that you cannot receive MMS in this region.



# Code: 30012
Log Level: ERROR  
Message: TTL is too small  
Secondary Message: Message Time To Live is too small    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30012

## Message Time To Live is too small

### Possible Causes 
TTL specified in the request is too small

### Possible Solutions
Specify a bigger TTL




# Code: 30013
Log Level: ERROR  
Message: TTL is too big  
Secondary Message: Message Time To Live is too big    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30013

## Message Time To Live is too big

### Possible Causes 
TTL specified in the request is too big

### Possible Solutions
Specify a smaller TTL




# Code: 30014
Log Level: ERROR  
Message: 'To' attributes are Invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30014 

### "To" attributes are Invalid

The To attribute list is invalid or empty

#### Possible Causes 
*  empty list
*  to long list

#### Possible Solutions
*  Check the number of To attributes 




# Code: 30015
Log Level: ERROR  
Message: Non-supported channel type is used  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30015

### Non-supported channel type is used

The To or From attributes have an unsupported prefix for channel

#### Possible Causes 
*  empty channel prefix for an attribute that requires a prefix
*  non-existing prefix for an attribute that requires a prefix

#### Possible Solutions
*  Check the To/From attributes channel prefix




# Code: 30016
Log Level: ERROR  
Message: 'To' and 'From' channel types are incompatible  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 30016

### 'To' and 'From' channel types are incompatible

The To or From attributes have channel prefixes what are incompatible

#### Possible Causes 
*  Attempt to send a message to one channel but use 'From' address for another channel

#### Possible Solutions
*  Check the To and From attributes channel prefixes



# Code: 31000
Log Level: ERROR  
Message: Generic error  
Secondary Message: No further information available. Check the debugger for more information on the actual cause.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31000

### Generic error

#### Possible Solutions

- No further information available. Check the debugger for more information on the actual cause. 



# Code: 31001
Log Level: ERROR  
Message: Application not found.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31001

### Application not found.

Application not found.



# Code: 31002
Log Level: ERROR  
Message: Connection declined.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31002

### Connection declined.

Connection declined.



# Code: 31003
Log Level: ERROR  
Message: Connection timeout  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31003

### Connection timeout

The server could not produce a response within a suitable amount of time



# Code: 31005
Log Level: ERROR  
Message: Connection error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31005

### Connection error

A connection error occurred during the call



# Code: 31006
Log Level: ERROR  
Message: Audio device error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31006

### Audio device error

Unable to start the audio device



# Code: 31007
Log Level: ERROR  
Message: SignalWire Client: Client version not supported  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31007

### SignalWire Client: This JS client version has been deprecated

#### Possible Solutions

- Migrate to newer version of SignalWire JS client by following the direction provided here: https://signalwire.com 



# Code: 31008
Log Level: ERROR  
Message: Call cancelled  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31008

### Call cancelled

Unable to answer because the call has ended



# Code: 31009
Log Level: ERROR  
Message: Transport error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31009

### Transport error

No transport available to send or receive messages.



# Code: 31100
Log Level: ERROR  
Message: Malformed request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31100

### Malformed request

The request could not be understood due to malformed syntax.



# Code: 31101
Log Level: ERROR  
Message: Missing parameter array in request.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31101

### Missing parameter array in request.

Missing parameter array in request.



# Code: 31102
Log Level: ERROR  
Message: Authorization token missing in request.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31102

### Authorization token missing in request.

Authorization token missing in request.



# Code: 31103
Log Level: ERROR  
Message: Length of parameters cannot exceed MAX_PARAM_LENGTH.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31103

### Length of parameters cannot exceed MAX_PARAM_LENGTH.

Length of parameters cannot exceed MAX_PARAM_LENGTH.



# Code: 31104
Log Level: ERROR  
Message: Invalid bridge token.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31104

### Invalid bridge token.

Invalid bridge token.



# Code: 31105
Log Level: ERROR  
Message: Invalid client name.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31105

### Invalid client name.

Invalid client name.



# Code: 31106
Log Level: ERROR  
Message: Invalid data  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31106

### Invalid data

The provided data was not valid.



# Code: 31201
Log Level: ERROR  
Message: SignalWire Client: Error occurred while accessing microphone  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31201

### SignalWire Client: Error occurred while accessing microphone

#### Possible Solutions

- Check for conflicting applications that might be accessing or attempting to access the microphone
- Try unplugging and reconnecting the microphone, if applicable, to reacquire the microphone



# Code: 31202
Log Level: ERROR  
Message: JWT signature validation failed.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31202

### JWT signature validation failed.

JWT signature validation failed.



# Code: 31203
Log Level: ERROR  
Message: No valid account.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31203

### No valid account.

No valid account.



# Code: 31204
Log Level: ERROR  
Message: Invalid JWT token.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31204

### Invalid JWT token.

Invalid JWT token.



# Code: 31205
Log Level: ERROR  
Message: JWT token expired.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31205

### JWT token expired.

JWT token expired.



# Code: 31206
Log Level: ERROR  
Message: Rate exceeded authorized limit.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31206

### Rate exceeded authorized limit.

Rate exceeded authorized limit.



# Code: 31207
Log Level: ERROR  
Message: JWT token expiration too long.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31207

### JWT token expiration too long.

JWT token expiration too long.



# Code: 31208
Log Level: ERROR  
Message: User denied access to microphone.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31208

### User denied access to microphone.

User denied access to microphone.



# Code: 31301
Log Level: ERROR  
Message: Registration error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31301

### Registration error

An error occurred during registration



# Code: 31400
Log Level: ERROR  
Message: Bad Request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31400

### Bad Request 

The request could not be understood due to malformed syntax.



# Code: 31403
Log Level: ERROR  
Message: Forbidden  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31403

### Forbidden

The server understood the request, but is refusing to fulfill it.



# Code: 31404
Log Level: ERROR  
Message: Not Found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31404

### Not Found 

The server has not found anything matching the request.



# Code: 31408
Log Level: ERROR  
Message: Request Timeout  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31408

### Request Timeout

A request timeout occurred.



# Code: 31409
Log Level: ERROR  
Message: Conflict  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31409

### Conflict

The request could not be processed because of a conflict in the current state of the resource. Another request may be in progress.



# Code: 31426
Log Level: ERROR  
Message: Upgrade Required  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31426

### Upgrade Required

This error is raised when an HTTP 426 response is received. The reason for this is most likely because of an incompatible TLS version. To mitigate this, you may need to upgrade the OS or download a more recent version of the SDK.



# Code: 31429
Log Level: ERROR  
Message: Too Many Requests  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31429

### Too Many Requests

Too many requests were sent in a given amount of time.



# Code: 31480
Log Level: ERROR  
Message: Temporarily Unavailable  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31480

### Temporarily Unavailable

The callee is currently unavailable.



# Code: 31481
Log Level: ERROR  
Message: Call/Transaction Does Not Exist  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31481

### Call/Transaction Does Not Exist 

The call no longer exists.



# Code: 31484
Log Level: ERROR  
Message: Address Incomplete  
Secondary Message: null    
Description: The provided phone number is malformed.  
Cause: * The outbound call was made with a phone number that has an invalid format.  
Solutions: * Ensure the phone number dialed is formatted correctly.  
Docs:
## ERROR - 31484

### Address Incomplete

 The provided phone number is malformed.

#### Possible Causes
* The outbound call was made with a phone number that has an invalid format.

#### Possible Solutions
* Ensure the phone number dialed is formatted correctly.



# Code: 31486
Log Level: ERROR  
Message: Busy Here  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31486

### Busy Here

The callee is busy.



# Code: 31487
Log Level: ERROR  
Message: Request Terminated  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31487

### Request Terminated

The request has terminated as a result of a bye or cancel.



# Code: 31500
Log Level: ERROR  
Message: Internal Server Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31500

### Internal Server Error

The server could not fulfill the request due to some unexpected condition.



# Code: 31502
Log Level: ERROR  
Message: Bad Gateway  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31502

### Bad Gateway 

The server is acting as a gateway or proxy, and received an invalid response from a downstream server while attempting to fulfill the request.



# Code: 31503
Log Level: ERROR  
Message: Service Unavailable  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31503

### Service Unavailable

The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.



# Code: 31504
Log Level: ERROR  
Message: Gateway Timeout  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31504

### Gateway Timeout 

The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.



# Code: 31530
Log Level: ERROR  
Message: DNS Resolution Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31530

### DNS Resolution Error

Could not connect to the server.



# Code: 31600
Log Level: ERROR  
Message: Busy Everywhere  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31600

### Busy Everywhere 

All possible destinations are busy.



# Code: 31603
Log Level: ERROR  
Message: Decline  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31603

### Decline

The callee does not wish to participate in the call.



# Code: 31604
Log Level: ERROR  
Message: Does Not Exist Anywhere  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 31604

### Does Not Exist Anywhere

The requested callee does not exist anywhere.



# Code: 31900
Log Level: ERROR  
Message: Stream - Unknown Error  
Secondary Message: This stream has failed due to an unknown cause    
Description: null  
Cause: Unknown  
Solutions: Unknown  
Docs:
## ERROR - 31900

### Stream - Unknown Error

This stream has failed due to an unknown cause 

#### Possible Causes
Unknown

#### Possible Solutions
Unknown



# Code: 31901
Log Level: ERROR  
Message: Stream - WebSocket - Connection Timeout  
Secondary Message: The WebSocket connection request sent by the stream didn't receive any response from the server    
Description: null  
Cause: * WebSocket server is not connected  
* WebSocket server is down
* Bad IP address provided in the LaML URL
* Intermediate elements (like ngrok) are not routing traffic
Solutions: * Verify server connectivity  
* Verify server process is up and running
* Verify the LaML URL is correct
* Verify intermediate elements are routing traffic
Docs:
## ERROR - 31901

### Stream - WebSocket - Connection Timeout

The WebSocket connection request sent by the stream didn't receive any response from the server 

#### Possible Causes
* WebSocket server is not connected
* WebSocket server is down
* Bad IP address provided in the LaML URL
* Intermediate elements (like ngrok) are not routing traffic

#### Possible Solutions
* Verify server connectivity
* Verify server process is up and running
* Verify the LaML URL is correct
* Verify intermediate elements are routing traffic



# Code: 31902
Log Level: ERROR  
Message: Stream - WebSocket - Connection Refused  
Secondary Message: The WebSocket connection request sent by the stream is refused by the server host    
Description: null  
Cause: * The stream is trying to connect the wrong port  
* The WebSocket server is down
Solutions: * Verify the LaML URL is correct  
* Verify server process is up and running
Docs:
## ERROR - 31902

### Stream - WebSocket - Connection Refused

The WebSocket connection request sent by the stream is refused by the server host 

#### Possible Causes
* The stream is trying to connect the wrong port
* The WebSocket server is down

#### Possible Solutions
* Verify the LaML URL is correct
* Verify server process is up and running



# Code: 31903
Log Level: ERROR  
Message: Stream - WebSocket - Connection Broken Pipe  
Secondary Message: The WebSocket connection has been closed by the server or there is a TCP connection timeout     
Description: null  
Cause: * WebSocket server is down  
* WebSocket server has experienced a problem causing the connection to close
* Connection has been lost
Solutions: * Verify server process is up and running  
* Verify if there is any related connection error in the server logs
* Verify the server is connected and intermediate elements are routing traffic
Docs:
## ERROR - 31903

### Stream - WebSocket - Connection Broken Pipe

The WebSocket connection has been closed by the server or there is a TCP connection timeout  

#### Possible Causes
* WebSocket server is down
* WebSocket server has experienced a problem causing the connection to close
* Connection has been lost

#### Possible Solutions
* Verify server process is up and running
* Verify if there is any related connection error in the server logs
* Verify the server is connected and intermediate elements are routing traffic



# Code: 31910
Log Level: ERROR  
Message: Stream - WebSocket - SSL Protocol Error  
Secondary Message: The server doesn’t support SSL, can’t provide a secure connection or the SSL handshake has failed    
Description: null  
Cause: * Server doesn’t support SSL  
* Stream is trying to connect the wrong port
* Protocol or SSL handshake has failed
Solutions: * Verify the server has enabled SSL  
* Verify the port in LaML URL is actually the one supporting SSL
* Verify the certificate is correct and accepted by HTTP clients
Docs:
## ERROR - 31910

### Stream - WebSocket - SSL Protocol Error

The server doesn’t support SSL, can’t provide a secure connection or the SSL handshake has failed 

#### Possible Causes
* Server doesn’t support SSL
* Stream is trying to connect the wrong port
* Protocol or SSL handshake has failed

#### Possible Solutions
* Verify the server has enabled SSL
* Verify the port in LaML URL is actually the one supporting SSL
* Verify the certificate is correct and accepted by HTTP clients



# Code: 31920
Log Level: ERROR  
Message: Stream - WebSocket - Handshake Error  
Secondary Message: The WebSocket protocol handshake was declined by the server    
Description: The server has returned an HTTP code different from 101 to the connection request sent by stream  

See https://tools.ietf.org/html/rfc6455#section-4 for details.
Cause: * The server does not support WebSocket  
* The WebSocket protocol is not enabled for the requested URL
Solutions: * Verify WebSocket protocol is enabled in the server  
* Verify the path in LaML URL is actually the one supporting WebSocket
Docs:
## ERROR - 31920

### Stream - WebSocket - Handshake Error

The WebSocket protocol handshake was declined by the server The server has returned an HTTP code different from 101 to the connection request sent by stream

See https://tools.ietf.org/html/rfc6455#section-4 for details.

#### Possible Causes
* The server does not support WebSocket
* The WebSocket protocol is not enabled for the requested URL

#### Possible Solutions
* Verify WebSocket protocol is enabled in the server
* Verify the path in LaML URL is actually the one supporting WebSocket



# Code: 31921
Log Level: ERROR  
Message: Stream - WebSocket - Close Error  
Secondary Message: The server has closed the WebSocket connection due to protocol error    
Description: See next references for more details:  
* https://tools.ietf.org/html/rfc6455#section-7.4.1
* https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
Cause: * The server found an internal error  
Solutions: * Verify related error logs in server application  
Docs:
## ERROR - 31921

### Stream - WebSocket - Close Error

The server has closed the WebSocket connection due to protocol error See next references for more details:
* https://tools.ietf.org/html/rfc6455#section-7.4.1
* https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent

#### Possible Causes
* The server found an internal error

#### Possible Solutions
* Verify related error logs in server application



# Code: 31922
Log Level: ERROR  
Message: Stream - WebSocket - URL Schema Not Supported  
Secondary Message: The URL schema is not supported by Programmable Streams    
Description: null  
Cause: * URL schema is not supported  
Solutions: * Verify the schema in LaML URL is wss  
Docs:
## ERROR - 31922

### Stream - WebSocket - URL Schema Not Supported

The URL schema is not supported by Programmable Streams 

#### Possible Causes
* URL schema is not supported

#### Possible Solutions
* Verify the schema in LaML URL is wss



# Code: 31923
Log Level: ERROR  
Message: Stream - WebSocket - Malformed URL  
Secondary Message: null    
Description: null  
Cause: * URL schema is malformed  
Solutions: * Verify the URL in LaML is correct   
Docs:
## ERROR - 31923

### Stream - WebSocket - Malformed URL

 

#### Possible Causes
* URL schema is malformed

#### Possible Solutions
* Verify the URL in LaML is correct 



# Code: 31930
Log Level: WARNING  
Message: Stream - Media - Buffer Overflow  
Secondary Message: Audio is discarded due to a congestion control condition (restricted bandwidth) in the WebSocket upstream    
Description: null  
Cause: * The server has an upstream bandwidth restriction  
Solutions: * Verify network load  
Docs:
## WARNING - 31930

### Stream - Media - Buffer Overflow

Audio is discarded due to a congestion control condition (restricted bandwidth) in the WebSocket upstream 

#### Possible Causes
* The server has an upstream bandwidth restriction

#### Possible Solutions
* Verify network load



# Code: 32001
Log Level: ERROR  
Message: SIP: Trunk CPS limit exceeded  
Secondary Message: Calls Per Second placed against a SIP trunk exceeded its set limit.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32001

### SIP: Trunk CPS limit exceeded

#### Possible Causes 
*  Calls Per Second placed against a SIP trunk exceeded its set limit. 

#### Possible Solutions
*  You've exceeded the number of calls per second you are authorized to make on this SIP Trunk. Visit [Elastic SIP Trunks](/user/account/sip-trunking/trunks) and within a specific Trunk, under the `Termination` tab you may see your CPS limits.



# Code: 32002
Log Level: WARNING  
Message: SIP: Dial failure - SignalWire SIP Domain not found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32002

### Dial failure - SignalWire SIP Domain not found

#### Possible Causes

* There is a typo in the name of the SIP Domain.
* When a SIP Domain is created you must press SAVE on Console. 

#### Possible Solutions

* Verify the existence and name of the SIP Domain that you created.



# Code: 32006
Log Level: warning  
Message: SIP: Too many hops  
Secondary Message: The request was rejected because its 'Max-Forward' header had reached zero. Ensure your infrastructure will send a minimum value of 20 for 'Max-Forward' to ensure your call is processed successfully.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32006

### SIP: Too many hops

#### Possible Causes 
*  The request was rejected because its `Max-Forward` header had reached zero.

#### Possible Solutions
*  Ensure your infrastructure will send a minimum value of 20 for `Max-Forward` to ensure your call is processed successfully.



# Code: 32007
Log Level: WARNING  
Message: SIP: Too many endpoints/bindings for the Address-of-record (AOR)  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
The AOR refers to: username@yoursipdomain.com

There is a limit on the number of SIP Endpoints/bindings per AOR

<b>Possible Causes</b>

There is a limit of 10 bindings (SIP Endpoints) per AOR.

<b>Possible Solutions</b>
Reduce the number of SIP Endpoints



# Code: 32008
Log Level: WARNING  
Message: SIP: Registration per second limit reached  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
Registration per second limit reached

<b>Cause</b>

You are allowed:
5 REGISTER requests / second / AOR

<b>Solution</b>

Reduce the frequency (Increase interval) of REGISTRATIONS by your SIP Endpoints.



# Code: 32009
Log Level: WARNING  
Message: The user you tried to dial is not registered with the corresponding SIP Domain  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32009

### Dialing SIP Endpoint failure - User not registered
There was a failure attempting to Dial the specified SIP Endpoint.
The User specified is not registered.

#### Possible Causes 

You tried to Dial a SIP Endpoint that is not currently registered with the corresponding SIP Domain. Please check your LaML or REST API.

#### Possible Solutions

* If you are using LaML
Make sure the <b>username</b> matches a username in the Credential List used to authenticate the SIP Endpoint with the SIP Domain. 

* If you are using the REST API
Please check the <b>To</b> field and verify there isn't a typo. Make sure the <b>username</b> matches a username in the Credential List used to authenticate the SIP Endpoint with the SIP Domain.

#### Troubleshooting
* Prior to dialing, you can verify that your SIP Endpoint has successfully registered in the Console "Registered SIP Endpoints" tab found on the SIP Domains page.



# Code: 32010
Log Level: ERROR  
Message: SIP: No valid Origination URIs configured on your Elastic SIP Trunk  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  Your Elastic SIP Trunk does not have any valid active origination URLs


#### Possible Solutions
*  Please verify your [Origination settings](/docs/api/sip-trunking/getting-started#origination) of your Elastic SIP Trunk.



# Code: 32011
Log Level: WARNING  
Message: Error communicating with your SIP communications infrastructure  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 32011

### Error communicating with your SIP communications infrastructure
There was a problem communicating with a specific endpoint of your SIP communications infrastructure. This means there was either a lack of timely response, an error response or an invalid response from your SIP endpoint. This may result in increased call setup times or even failed call depending on the failover configuration for your Elastic SIP Trunk or SIP application. SignalWire will make multiple attempts to deliver calls to your endpoint and each failed attempt will have it's own notification.
The notification will have details about the specific error response and the SIP URI that causes the failure.

#### Possible Causes 
* Your SIP endpoint is not reachable due to network connectivity issue between SignalWire and your system
* Your SIP endpoint is not responding (service down or maintenance) 
* There is a firewall in your network that is blocking SIP traffic from SignalWire
* Your SIP endpoint is sending an error response, such as SIP 500 response.
* The SIP URI specified in your Trunking Origination URI, <Dial> <SIP> LaML or REST API call is invalid

#### Possible Solutions
* Ensure the SIP URI used in the request is correctly configured.
 * For details on how to configure your Origination URIs for SIP trunking, please see [Origination settings](/docs/api/sip-trunking/getting-started#origination).
* Ensure that your SIP servers are running properly and is properly processing calls from SignalWire.



# Code: 32012
Log Level: ERROR  
Message: SIP: Master account pooled Trunking CPS limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:

#### Possible Causes 
*  Calls Per Second placed on a SIP trunk exceeded the Master Account pool limit. 

#### Possible Solutions
*  You've exceeded the number of calls per second you are authorized to make on your Master Account. 



# Code: 32013
Log Level: ERROR  
Message: SIP: Master account SIP Interface CPS limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:

#### Possible Causes 
*  Calls Per Second placed on a SIP domain exceeded the Master Account limits. 

#### Possible Solutions
*  You've exceeded the number of calls per second you are authorized to make on your Master Account for SIP Interface. 



# Code: 32014
Log Level: WARNING  
Message: Call is terminated because of no audio received  
Secondary Message: RTP-Timeout    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 32014

### Call is terminated because of no audio received

#### Possible Causes

* One party doesn't send audio for an extended period of time and call is terminated.

#### Possible Solutions

* It could be the case when one party is disconnected without hanging up due to network failure. Try to call again later.
* If this keeps happening, please contact SignalWire support to enable voice trace. With voice trace enabled, SignalWire can know which side stops sending audio to track down the root cause.



# Code: 32015
Log Level: WARNING  
Message: Call is terminated due to exceeding max call duration of 4 hours.  
Secondary Message: Session-Timeout    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 32015

### Call is terminated due to exceeding max call duration of 4 hours.

#### Possible Causes

* You've exceeded the max call duration of 4 hours so call is terminated.



# Code: 32016
Log Level: ERROR  
Message: PSTN PDD timeout  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## PSTN Post-Dial Delay timeout

### Possible Causes 
PSTN Post-Dial Delay timer (60s) expired due to lack of response from multiple Carriers in route.


### Possible Solutions 
* Check the dialed Number to ensure it is currently reachable.
* If you believe the Number is currently reachable, please contact [Support](mailto:support@signalwire.com) and be sure to mention this Error code.



# Code: 32100
Log Level: WARNING  
Message: SIP: Trial accounts can only call verified caller IDs  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
You must verify your caller ID on the Console or via the REST API. You must use a verified callerID for both the from and to number while in Trial status. Once you upgrade you can use any caller ID for the from and to number.
You can verify you caller ID in the Console (https://signalwire.com)



# Code: 32101
Log Level: warning  
Message: SIP: Invalid phone number  
Secondary Message: The called number is not a valid E.164 number. Make sure that any phone number sent via SIP to SignalWire is always E.164-formatted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32101

### SIP: Invalid phone number

#### Possible Causes 
*   The called number is not a valid E.164 number.

#### Possible Solutions
*  Make sure that any phone number sent via SIP to SignalWire is always E.164-formatted.



# Code: 32102
Log Level: warning  
Message: SIP: Bad SDP  
Secondary Message: The SDP is not correctly formatted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32102

###  SIP: Bad SDP

#### Possible Causes 
*  The SDP is not correctly formatted.

#### Possible Solutions
*  Please see [RFC 2327 - SDP: Session Description Protocol](https://www.ietf.org/rfc/rfc2327.txt).



# Code: 32103
Log Level: warning  
Message: SIP: Empty body  
Secondary Message: The body of the request was empty, which is not allowed in this context.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32103

###  SIP: Empty body

#### Possible Causes 
*  The body of the request was empty, which is not allowed in this context.




# Code: 32105
Log Level: WARNING  
Message: SIP: Invalid contact header  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
Possible loop in Contact header

<b>Possible Causes</b>

You’re sending `127.0.0.1` or `localhost` in the Contact header which will create a loop at SignalWire.

<b>Possible Solutions</b>

 Configure your SIP stack so it populates the Contact header properly.



# Code: 32106
Log Level: ERROR  
Message: SIP: Authentication Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
Authentication error.

<b>Possible Causes</b>

Authorization name and username do not match.

<b>Possible Solutions</b>

Configure your SIP endpoint so the username and Authorization name match



# Code: 32110
Log Level: WARNING  
Message: SIP: URI is formatted incorrectly  
Secondary Message: Your SIP URI cannot be parsed unambiguously.    
Description: SignalWire cannot understand parts of your SIP URI. This may be due to invalid characters appearing in the user, params, or headers portion. While SignalWire may still attempt to complete your call, the parts of the URI that are invalid will be ignored.  

The format for a valid SIP URI is defined in [RFC 3261](https://tools.ietf.org/html/rfc3261).
Cause: * The user-portion of the URI contains invalid characters. The user-info portion allows alphanumeric characters, hyphens, underscores, and a small number of additional punctuation characters.  
* A URI header or parameter value contains punctuation or whitespace that is not escaped.
Solutions: * If you specify SIP headers in your URI, ensure any non-alphanumeric characters in the header values are escaped. For example, to add a User-to-User header with value `0A1B2C3D;encoding=hex`, you must encode this into the URI as `User-to-User=0A1B2C3D%3Bencoding%3Dhex`.  
Docs:
## WARNING - 32110

### SIP: URI is formatted incorrectly

Your SIP URI cannot be parsed unambiguously. SignalWire cannot understand parts of your SIP URI. This may be due to invalid characters appearing in the user, params, or headers portion. While SignalWire may still attempt to complete your call, the parts of the URI that are invalid will be ignored.

The format for a valid SIP URI is defined in [RFC 3261](https://tools.ietf.org/html/rfc3261).

#### Possible Causes
* The user-portion of the URI contains invalid characters. The user-info portion allows alphanumeric characters, hyphens, underscores, and a small number of additional punctuation characters.
* A URI header or parameter value contains punctuation or whitespace that is not escaped.

#### Possible Solutions
* If you specify SIP headers in your URI, ensure any non-alphanumeric characters in the header values are escaped. For example, to add a User-to-User header with value `0A1B2C3D;encoding=hex`, you must encode this into the URI as `User-to-User=0A1B2C3D%3Bencoding%3Dhex`.



# Code: 32111
Log Level: WARNING  
Message: SIP: Invalid header name  
Secondary Message: null    
Description: The header you asked SignalWire to stamp was omitted because it contains illegal characters in its _name_. Including this header would have resulting in SignalWire generating a message that runs contrary to the SIP specification.  

The set of legal characters for a header name is defined in [RFC 3261](https://tools.ietf.org/html/rfc3261).
Cause: * If you specified headers in a SIP URI, invalid characters were most likely introduced by an escaped character. Escaped characters in SIP URIs are defined by a percent sign (%) followed by two hexadecimal digits specifying a character code.  
Solutions: * Ensure that your SIP URI is formed correctly. Header names should generally only consist of alphanumeric characters and hyphens.  
Docs:
## WARNING - 32111

### SIP: Invalid header name

 The header you asked SignalWire to stamp was omitted because it contains illegal characters in its _name_. Including this header would have resulting in SignalWire generating a message that runs contrary to the SIP specification.

The set of legal characters for a header name is defined in [RFC 3261](https://tools.ietf.org/html/rfc3261).

#### Possible Causes
* If you specified headers in a SIP URI, invalid characters were most likely introduced by an escaped character. Escaped characters in SIP URIs are defined by a percent sign (%) followed by two hexadecimal digits specifying a character code.

#### Possible Solutions
* Ensure that your SIP URI is formed correctly. Header names should generally only consist of alphanumeric characters and hyphens.



# Code: 32112
Log Level: WARNING  
Message: SIP: Invalid header value  
Secondary Message: null    
Description: The header you asked SignalWire to stamp was omitted because it contains illegal characters in its _value_. Including this header would have resulting in SignalWire generating a message that runs contrary to the SIP specification.  
Cause: * If you specified headers in a SIP URI, invalid characters were most likely introduced by an escaped character. Escaped characters in SIP URIs are defined by a percent sign (%) followed by two hexadecimal digits specifying a character code.  
Solutions: * If you are generating SIP headers from user input, ensure your application properly accounts for non-alphanumeric characters such as punctuation and whitespace, as well as international characters.  
Docs:
## WARNING - 32112

### SIP: Invalid header value

 The header you asked SignalWire to stamp was omitted because it contains illegal characters in its _value_. Including this header would have resulting in SignalWire generating a message that runs contrary to the SIP specification.

#### Possible Causes
* If you specified headers in a SIP URI, invalid characters were most likely introduced by an escaped character. Escaped characters in SIP URIs are defined by a percent sign (%) followed by two hexadecimal digits specifying a character code.

#### Possible Solutions
* If you are generating SIP headers from user input, ensure your application properly accounts for non-alphanumeric characters such as punctuation and whitespace, as well as international characters.



# Code: 32113
Log Level: WARNING  
Message: SIP: Header name is not allowed  
Secondary Message: null    
Description: The SIP header you asked SignalWire to stamp was omitted because it is not supported on the SignalWire platform.  

SignalWire supports extension headers beginning with an X- prefix. Your extension header name cannot begin with the prefix `X-SignalWire`.
Cause: * SIP header name not supported on the SignalWire platform.  
Solutions: * If your application can use a different header name, use an X- prefixed header name, e.g. if you want to use the name `Customer-Info`, see if your application can be configured to use `X-Customer-Info` instead.  
Docs:
## WARNING - 32113

### SIP: Header name is not allowed

 The SIP header you asked SignalWire to stamp was omitted because it is not supported on the SignalWire platform.

SignalWire supports extension headers beginning with an X- prefix. Your extension header name cannot begin with the prefix `X-SignalWire`.

#### Possible Causes
* SIP header name not supported on the SignalWire platform.

#### Possible Solutions
* If your application can use a different header name, use an X- prefixed header name, e.g. if you want to use the name `Customer-Info`, see if your application can be configured to use `X-Customer-Info` instead.



# Code: 32200
Log Level: ERROR  
Message: SIP: Insufficient permissions  
Secondary Message: Request failed due to insufficient permissions.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32200

###  SIP: Insufficient permissions

#### Possible Causes 
*  Request failed due to insufficient permissions.

#### Possible Solutions
*  Please check that your account is active. Ensure that you have [Authentication details](/docs/api/sip-trunking/getting-started#authentication) configured on your Trunk.



# Code: 32201
Log Level: ERROR  
Message: SIP: Source IP address not in ACL  
Secondary Message: Authorization failure - source IP Address not in ACL. Either fix local routing so that you are sending us SIP from an address already in your ACL or add this other address to your [ACL](/user/account/sip-trunking/authentication/ip-acls).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32201

###  SIP: Source IP address not in ACL

#### Possible Causes 
*  Authorization failure - source IP Address not in ACL (Access Control List).

#### Possible Solutions
*  There is an ACL on your trunk and you are sending us INVITE requests from an IP address not on that ACL. Either fix local routing so that you are sending us SIP from an address already in your ACL or add this other address to your ACL. 



# Code: 32202
Log Level: ERROR  
Message: SIP: Bad user credentials  
Secondary Message: Bad user credentials. Confirm that your username/password matches one in your [Credentials List](/user/account/sip-trunking/authentication/cls).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32202

###  SIP: Bad user credentials

#### Possible Causes 
*  There is a Credentials List on your trunk, and your INVITE’s Authentication Digest is incorrect due to wrong username/password

#### Possible Solutions
*  Confirm that your username/password matches one in your Credentials List. 



# Code: 32203
Log Level: ERROR  
Message: SIP: Call blocked by SignalWire blacklist  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32203

### SIP Trunking: Call blocked by SignalWire blacklist
The destination number is blocked by SignalWire because this destination has a high-risk of fraud or due to regulatory reasons cannot be enabled by default. If you have a legitimate need to call this number, please email support@signalwire.com with an explanation of your use case.



# Code: 32204
Log Level: ERROR  
Message: SIP: Invalid callerID  
Secondary Message: The supplied callerID has not been verified for the account. Use a SignalWire Number as a callerID or visit [Verified Caller IDs](/user/account/phone-numbers/verified).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32204

###  SIP: Invalid callerID

#### Possible Causes 
*    Trial and Upgraded Accounts must use a callerID in the From field that is either a SignalWire Number or has been verified for the account. 

#### Possible Solutions
*  To rectify, change the callerID used in the From field of the SIP INVITE or verify your Number by visiting the Console [Verified Caller IDs](/user/account/phone-numbers/verified) or REST API.



# Code: 32205
Log Level: ERROR  
Message: SIP Trunking: Geo Permission configuration is not permitting call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32205

### SIP Trunking: Geo Permission configuration is not permitting call

You attempted to initiate an outbound phone call to a phone number that is not enabled on your account. Please check your [Geographic Permissions](https://signalwire.com), fix it, and try
again.




# Code: 32207
Log Level: ERROR  
Message: SIP: Secure media not accepted  
Secondary Message: Please use RTP. For SIP Trunking if you wish to use SRTP kindly enable [Secure Trunking](/docs/api/sip-trunking/getting-started#securetrunking).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32207

###  SIP: Secure media not accepted

#### Possible Causes
*    A SIP Call is made to a SignalWire SIP Domain using SRTP, which it is not supported
*    A termination Call is made to a SignalWire SIP Trunk and the SignalWire SIP Trunk is not configured to accept secure media (SRTP). 

#### Possible Solutions
*  Please use RTP.
*  For SignalWire Elastic SIP Trunking, if you wish to use SRTP kindly enable [Secure Trunking](/docs/api/sip-trunking/getting-started#securetrunking).




# Code: 32208
Log Level: ERROR  
Message: SIP: Secure media required  
Secondary Message: This secure SIP trunk cannot accept insecure media (RTP). Please use SRTP. See more on [Secure Trunking](/docs/api/sip-trunking/getting-started#securetrunking).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32208

###  SIP: Secure media required

#### Possible Causes 
*    This secure SIP trunk cannot accept insecure media (RTP). 

#### Possible Solutions
*  Please use SRTP. See more on [Secure Trunking](/docs/api/sip-trunking/getting-started#securetrunking).



# Code: 32209
Log Level: ERROR  
Message: SIP: Secure transport required  
Secondary Message: The secure SIP trunk cannot accept calls made using UDP or TCP. Please use TLS.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32209

###  SIP: Secure transport required

#### Possible Causes 
*    The secure SIP trunk cannot accept calls made using UDP or TCP.

#### Possible Solutions
*   Please use TLS.



# Code: 32210
Log Level: ERROR  
Message: SIP: Register not supported  
Secondary Message: Registration is not enabled for the SIP domain    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32210

###  SIP: Registration not supported

#### Possible Causes 
*    Registration is not enabled for the SIP domain

#### Possible Solutions
*   Enable registration for the SIP domain.



# Code: 32212
Log Level: WARNING  
Message: SIP: Registration Authentication problem  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32212

### Registration Authentication problem

#### Possible Causes 

A SIP Endpoint tried to register with this SIP Domain and there isn't a Credential List mapped.
#### Possible Solutions

Please map a Credential List to the Registration Authentication part of the SIP Domain



# Code: 32214
Log Level: WARNING  
Message: SIP: Invalid <Dial><Sip>   
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning 32214

###  Invalid &lt;Dial&gt;&lt;Sip&gt;

#### Possible Causes
  to SignalWire SIP Domains either in the same subaccount or within the master account.

<b>Possible Solutions</b>

Register the SIP endpoint to a SIP Domain on the same subaccount.



# Code: 32215
Log Level: WARNING  
Message: Dial failure calling a SIP Domain without specifying a region  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32215

### Dial failure - Must specify a region in the SIP Domain

#### Possible Causes

* If you do a &lt;Dial&gt;&lt;Sip&gt; without specifying a region

#### Possible Solutions

* Dial the regional SIP domain.
For instance:

Note the `us1` above that is specifying that you are calling a SIP endpoint registered to the US1 (North Virginia) data center.



# Code: 32216
Log Level: ERROR  
Message: SIP: Address blacklisted  
Secondary Message: This address is blacklisted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32216

### SIP: Address blacklisted

#### Possible Causes 
*    This address is blacklisted



# Code: 32218
Log Level: ERROR  
Message: SIP: Transfer not allowed  
Secondary Message: Transfer is disabled or transferring to disallowed destination (SIP/PSTN)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32218

### SIP: Transfer not allowed

#### Possible Causes 
*    Transfer enable mode is in DISABLE_ALL
*    Transferring to PSTN when transfer enable mode is in `SIP_ONLY`
*    Transferring to SIP when transfer enable mode is in `PSTN_ONLY`

#### Possible Solutions
*   There is a configurable transfer enable mode on your trunk. Change this mode to suit your needs



# Code: 32219
Log Level: ERROR  
Message: SIP: Redirect failed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 32219

### SIP: Redirect failed
SignalWire could not process the SIP 30x response from your SIP server.

#### Possible Causes
*    Max redirect limit reached.
*    Redirection is not allowed in the call to the registered SIP endpoint.
*    Redirect target in the Contact header of the SIP 30x response is not a valid SIP URI.
*    Redirect target is a private IP address.
*    Redirect target is an IP in the blacklist.




# Code: 32301
Log Level: WARNING  
Message: Interconnect: Invalid Connection (TNX) SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  The Interconnect Connection (TNX) SID is invalid.

#### Possible Solutions
*  Please verify your Interconnect Connection SID, visit [Interconnect Connections](https://signalwire.com).



# Code: 32302
Log Level: WARNING  
Message: Interconnect: Connection (TNX) SID not found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  The Interconnect Connection (TNX) SID was not found.


#### Possible Solutions
*  Please verify your Interconnect Connection SID, visit [Interconnect Connections](https://signalwire.com).




# Code: 32303
Log Level: WARNING  
Message: Interconnect: Multiple SIP Dials with Interconnect Connection (TNX) SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*   Multiple SIP outbound dials with TNX parameter


#### Possible Solutions
*  We don't support multiple SIP outbound dials with TNX parameter, please ensure you Response only includes one.




# Code: 32304
Log Level: WARNING  
Message: Interconnect: Connection (TNX) SID is not Active  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  The Interconnect Connection (TNX) SID is not Active.


#### Possible Solutions
*  Please verify the status of your Interconnect Connection SID, visit [Interconnect Connections](https://signalwire.com).






# Code: 34002
Log Level: ERROR  
Message: Callee Busy  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 34002
### Fax: Callee Busy




# Code: 34003
Log Level: ERROR  
Message: Callee did not answer  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 34003
### Fax: Callee did not answer




# Code: 34004
Log Level: ERROR  
Message: Error during fax transmission  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 34004
### Fax: Error during fax transmission

Either poor connection quality to the recipient or the recipient terminated the fax early.



# Code: 34106
Log Level: ERROR  
Message: No Fax LaML action specified  
Secondary Message: Missing Receive verb in LaML    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 34106
### Fax: No Fax LaML action specified

Missing [Receive](https://signalwire.com) verb in received LaML.

Simplest implementation is `<Receive />`



# Code: 34108
Log Level: ERROR  
Message: Other End Incompatible  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 34108
### Fax: Other End Incompatible

The receiving fax machine answered, but then rejected your incoming media.

Try reducing the size of your pdf or sending at a lower quality or resolution. Make sure your pdf is a standard size (US Letter, A4) and portrait-oriented.



# Code: 40000
Log Level: ERROR  
Message: Content-Type of 'application/json' not set  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Content-Type of 'application/json' not set

#### Possible Causes 
*  You responded with a 200 HTTP response but did not provide a Content-Type header of 'application/json'

#### Possible Solutions
*  Add Content-Type header of 'application/json'

#### Example

~~~.json
{
	"instruction": "accept"
}
~~~

with no Content-Type header provided.




# Code: 40100
Log Level: ERROR  
Message: TaskRouter->Reject  
Secondary Message: Reject Instruction does not have a valid 'activity_sid' provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40100

### Invalid Activity Sid - Reject Instruction

#### Possible Causes 
*  You did not provide an "activity_sid" parameter on your 'reject' instruction.
*  You provided an activity_sid that was invalid or no longer exists.  

#### Possible Solutions
*  Confirm a valid ActivitySid is being passed in the "activity_sid" parameter. 

#### Example

```
{
	"instruction": "reject",
	"activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40110
Log Level: ERROR  
Message: TaskRouter->Call  
Secondary Message: Call Instruction does not have a valid 'to' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40110

### Missing or Invalid 'to' parameter - Call Instruction

#### Possible Causes 
*  You did not provide a "to" parameter on your 'call' instruction.
*  You provided an invalid format in your "to" field.  

#### Possible Solutions
*  Make certain "to" contains a valid phone number, client URI, or SIP URI. 

#### Example

```
{
	"instruction": "call",
	"to": "client:alice",
	"from": "bob",
	"url": "https://example.com/laml"
}
```



# Code: 40111
Log Level: ERROR  
Message: TaskRouter->Call  
Secondary Message: Call Instruction does not have a valid 'from' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40111

### Missing or Invalid 'from' parameter - Call Instruction

#### Possible Causes 
*  You did not provide a "from" parameter on your 'call' instruction.
*  You provided an invalid format in your "from" field.  

#### Possible Solutions
*  Make certain "from" contains a validated caller ID if you're dialing the PSTN. 
*  Make certain "from" contains an acceptable caller field when connecting to client or SIP.  

#### Example

```
{
	"instruction": "call",
	"to": "client:alice",
	"from": "bob",
	"url": "https://example.com/laml"
}
```



# Code: 40112
Log Level: ERROR  
Message: TaskRouter->Call  
Secondary Message: Call Instruction does not have a valid 'url' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40112

### Missing or Invalid 'url' parameter - Call Instruction

#### Possible Causes 
*  You did not provide a "url" parameter on your 'call' instruction.
*  You provided an invalid format in your "url" field.  

#### Possible Solutions
*  Make certain "url" is provided and contains a well formed HTTP or HTTPS URL. 

#### Example

```
{
	"instruction": "call",
	"to": "client:alice",
	"from": "bob",
	"url": "https://example.com/laml?querystring=1234"
}
```



# Code: 40113
Log Level: ERROR  
Message: TaskRouter->Call  
Secondary Message: Call Instruction encountered an error when requesting an outgoing call be made from the API.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40113

### Error Making Outgoing Call - Call Instruction

#### Possible Causes 
*  Un-routable address provided for "to" field. 
*  Invalid caller-id passed to "from" field. 
*  Poorly formed URL passed to "url" field. 
*  Internal SignalWire API error.  

#### Possible Solutions
*  Make certain "to" contains a routable phone number, client URI or SIP URI. 
*  Make certain "to" is to a country you have permissions set to call.
*  Make certain "from" contains an acceptable caller ID for the chosen "to" address.
*  Make certain "url" is a valid HTTP/HTTPS URL. 

#### Example

```
{
	"instruction": "call",
	"to": "client:alice",
	"from": "bob",
	"url": "https://example.com/laml"
}
```



# Code: 40114
Log Level: ERROR  
Message: TaskRouter->Call  
Secondary Message: Call Instruction can only be issued on a currently pending reservation.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40114

### The Reservation must currently be Pending - Call Instruction

#### Possible Causes 
*  The Reservation has been moved to a non-Pending state.

#### Possible Solutions
*  Make certain that the Reservation is currently Pending. 

#### Example

```
{
	"instruction": "call",
	"to": "client:alice",
	"from": "bob",
	"url": "https://example.com/laml"
}
```



# Code: 40120
Log Level: ERROR  
Message: TaskRouter->Direct  
Secondary Message: Redirect Instruction does not have a valid 'url' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40120

### Missing or Invalid 'url' parameter - Redirect Instruction

#### Possible Causes 
*  You did not provide a "url" parameter on your 'redirect' instruction.
*  You provided an invalid format in your "url" field.  

#### Possible Solutions
*  Make certain "url" is provided and contains a well formed HTTP or HTTPS URL. 

#### Example

```
{
	"instruction": "redirect",
	"call_sid": "CA0123456789abcdef0123456789abcdef",
	"url": "https://example.com/laml?querystring=1234"
}
```



# Code: 40121
Log Level: ERROR  
Message: TaskRouter->Direct  
Secondary Message: Redirect Instruction does not have a valid 'call_sid' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40121

### Missing or Invalid 'call_sid' parameter - Redirect Instruction

#### Possible Causes 
*  You did not provide a "call_sid" parameter on your 'redirect' instruction.
*  You provided an invalid value for the "call_sid" parameter. 

#### Possible Solutions
*  Make certain "call_sid" is provided an is a 34char string starting with CA that represents a live call. 

#### Example

```
{
	"instruction": "redirect",
	"call_sid": "CA0123456789abcdef0123456789abcdef",
	"url": "https://example.com/laml?querystring=1234"
}
```



# Code: 40122
Log Level: ERROR  
Message: TaskRouter->Direct  
Secondary Message: Direct Instruction encountered an error when redirecting a call via the API.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40122

### Call Redirection API Error - Redirect Instruction

#### Possible Causes 
*  The call being redirected is no longer in progress.
*  The call_sid passed doesn't reference an actual call

#### Possible Solutions
*  Make certain "call_sid" is provided an is a 34 char string starting with CA that represents a live call. 

#### Example

```
{
	"instruction": "redirect",
	"call_sid": "CA0123456789abcdef0123456789abcdef",
	"url": "https://example.com/laml?querystring=1234"
}
```



# Code: 40123
Log Level: ERROR  
Message: TaskRouter->Redirect  
Secondary Message: Redirect Instruction can only be issued on a currently pending reservation.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40123

### The Reservation must currently be Pending - Redirect Instruction

#### Possible Causes 
*  The Reservation has been moved to a non-Pending state.

#### Possible Solutions
*  Make certain that the Reservation is currently Pending. 

#### Example

```
{
	"instruction": "redirect",
	"call_sid": "CA0123456789abcdef0123456789abcdef",
	"url": "https://example.com/laml?querystring=1234"
}
```



# Code: 40130
Log Level: ERROR  
Message: TaskRouter->Dequeue  
Secondary Message: Dequeue Instruction does not have a valid 'post_work_activity_sid' provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40130

### Invalid Activity Sid - Dequeue Instruction

#### Possible Causes 
*  You provided a "post_work_activity_sid"" that was invalid or no longer exists.  

#### Possible Solutions
*  Confirm a valid ActivitySid is being passed in the "post_work_activity_sid" parameter exists in your workspace. 

#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "bob",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40131
Log Level: ERROR  
Message: TaskRouter->Dequeue  
Secondary Message: Dequeue Instruction does not have a valid 'to' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40131

### Missing or Invalid 'to' parameter - Dequeue Instruction

#### Possible Causes 
*  You did not provide a "to" parameter on your 'dequeue' instruction.
*  You provided an invalid format in your "to" field.  

#### Possible Solutions
*  Make certain "to" contains a valid phone number, client URI, or SIP URI. 

#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "bob",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40132
Log Level: ERROR  
Message: TaskRouter->Dequeue  
Secondary Message: Dequeue Instruction does not have a valid 'from' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40132

### Missing or Invalid 'from' parameter - Dequeue Instruction

#### Possible Causes 
*  You did not provide a "from" parameter on your 'dequeue' instruction.
*  You provided an invalid format in your "from" field.  

#### Possible Solutions
*  Make certain "from" contains a validated caller ID if you're dialing the PSTN. 
*  Make certain "from" contains an acceptable caller field when connecting to client or SIP.  

#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "bob",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40133
Log Level: ERROR  
Message: TaskRouter->Dequeue  
Secondary Message: Dequeue Instruction encountered an error when requesting an outgoing call be made from the API.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40133

### Call API Error - Dequeue Instruction

#### Possible Causes 
*  Un-routable address provided for "to" field. 
*  Invalid caller-id passed to "from" field. 
*  Internal SignalWire API error. 

#### Possible Solutions
*  Make certain "to" contains a routable phone number, client URI or SIP URI. 
*  Make certain "to" is to a country you have permissions set to call.
*  Make certain "from" contains an acceptable caller ID for the chosen "to" address.

#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40134
Log Level: ERROR  
Message: Dequeue Instruction does not have a valid 'status_callback_events' parameter  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40134

### Invalid 'status_callback_events' parameter - Dequeue Instruction

#### Possible Causes 
*  You provided an invalid format in your "status_callback_events" field.  

#### Possible Solutions
*  Make certain "status_callback_events" contains a valid comma separated string of events to subscribe to if responding to an assignment callback
*  Make certain each "DequeueStatusCallbackEvent" contains an acceptable event to subscribe to if making a POST /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{ReservationSid}

#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "bob",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef",
    "status_callback_events": "initiated,ringing,answered,completed"
}
```



# Code: 40135
Log Level: ERROR  
Message: TaskRouter->Dequeue  
Secondary Message: Dequeue Instruction can only be issued on a currently pending reservation.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40135

### The Reservation must currently be Pending - Dequeue Instruction

#### Possible Causes 
*  The Reservation has been moved to a non-Pending state.

#### Possible Solutions
*  Make certain that the Reservation is currently Pending. 


#### Example

```
{
	"instruction": "dequeue",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40136
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction can only be issued on a currently pending reservation.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40136

### The Reservation must currently be Pending - Conference Instruction

#### Possible Causes 
*  The Reservation has been moved to a non-Pending state.

#### Possible Solutions
*  Make certain that the Reservation is currently Pending. 


#### Example

```
{
	"instruction": "conference",
	"to": "client:alice",
	"from": "+18001234567"
}
```



# Code: 40140
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction does not have a valid 'to' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40140

### Missing or Invalid 'to' parameter - Conference Instruction

#### Possible Causes
*  You did not provide a 'to' parameter on your 'conference' instruction.
*  You provided an invalid format in your 'to' field.

#### Possible Solutions
*  Make certain 'to' contains a valid phone number, client URI, or SIP URI.

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```




# Code: 40141
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction does not have a valid 'from' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40141

### Missing or Invalid 'from' parameter - Conference Instruction

#### Possible Causes
*  You did not provide a 'from' parameter on your 'conference' instruction.
*  You provided an invalid format in your "from" field.

#### Possible Solutions
*  Make certain 'from' contains a validated caller ID if you're dialing the PSTN.
*  Make certain 'from' contains an acceptable caller field.

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```




# Code: 40142
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction does not have a valid 'room_name' parameter provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40142

### Missing or Invalid 'room_name' parameter - Conference Instruction

#### Possible Causes 
*  You did not provide a 'room_name' parameter on your 'conference' instruction.
*  You provided an invalid format in your 'room_name' field.  

#### Possible Solutions
*  Make certain 'room_name' contains a valid conference room name.

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40143
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction does not have a valid 'post_work_activity_sid' provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40143

### Invalid Activity Sid - Conference Instruction

#### Possible Causes 
*  You provided a 'post_work_activity_sid' that was invalid or no longer exists.  

#### Possible Solutions
*  Confirm a valid ActivitySid is being passed in the 'post_work_activity_sid' parameter and it exists in your workspace. 

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40144
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction does not have a pending Reservation for the Task    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40144

### Reservation is no longer Pending - Conference Instruction

#### Possible Causes 
* The original caller has hungup
* The Task has been moved into a 'canceled' state

#### Possible Solutions
*  Make sure the Task created has not been canceled prior to issuing 'conference' instruction

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40145
Log Level: ERROR  
Message: TaskRouter->Conference  
Secondary Message: Conference Instruction encountered an error when requesting an outgoing call be made from the API.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40145

### Call API Error - Conference Instruction

#### Possible Causes 
*  Un-routable address provided for 'to' field. 
*  Invalid caller-id passed to 'from' field. 
*  Missing 'room_name' field.
*  Internal SignalWire API error. 

#### Possible Solutions
*  Make certain 'to' contains a routable phone number, client URI or SIP URI. 
*  Make certain 'to' is to a country you have permissions set to call.
*  Make certain 'from' contains an acceptable caller ID for the chosen 'to' address.
*  Make certain 'room_name' is a valid Conference Room Name.

#### Example

```
{
	"instruction": "conference",
	"room_name": "abc",
	"to": "client:alice",
	"from": "18001234567",
	"post_work_activity_sid": "WA0123456789abcdef0123456789abcdef"
}
```



# Code: 40151
Log Level: ERROR  
Message: TaskRouter->Invalid instruction  
Secondary Message: Invalid instruction issued on a task being transferred. Valid instructions are: ACCEPT, REJECT, CONFERENCE, SUPERVISE    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 40151

### Call API Error - Invalid instruction issued on a task being transferred

#### Possible Causes 
*  Instruction is not acceptable for transferred tasks 
*  Internal SignalWire API error. 

#### Possible Solutions
*  Make certain that instruction is accept, reject, conference, or supervise

#### Example

```
{
	"instruction": "conference"
}
```



# Code: 45001
Log Level: ERROR  
Message: General Service Error  
Secondary Message: null    
Description: null  
Cause: Flex encountered a general service error.  
Solutions: No further information available.  
Docs:
## ERROR - 45001

### General Service Error

 

#### Possible Causes
Flex encountered a general service error.

#### Possible Solutions
No further information available.



# Code: 45002
Log Level: ERROR  
Message: Authentication Error  
Secondary Message: null    
Description: null  
Cause: Attempt to access resource with invalid credentials or without credentials.  
Solutions: Check the credentials and try again.  
Docs:
## ERROR - 45002

### Authentication Error

 

#### Possible Causes
Attempt to access resource with invalid credentials or without credentials.

#### Possible Solutions
Check the credentials and try again.



# Code: 45003
Log Level: ERROR  
Message: Authorization Error  
Secondary Message: null    
Description: null  
Cause: Attempt to access resource where access is not allowed for given credentials.  
Solutions: Check that accessed resource is set correctly or apply for permissions.  
Docs:
## ERROR - 45003

### Authorization Error

 

#### Possible Causes
Attempt to access resource where access is not allowed for given credentials.

#### Possible Solutions
Check that accessed resource is set correctly or apply for permissions.



# Code: 45004
Log Level: ERROR  
Message: Validation Error  
Secondary Message: null    
Description: null  
Cause: Request body validation fails.  
Solutions: Review the input and fix (if possible) the problem mentioned in the error message.  
Docs:
## ERROR - 45004

### Validation Error

 

#### Possible Causes
Request body validation fails.

#### Possible Solutions
Review the input and fix (if possible) the problem mentioned in the error message.



# Code: 45005
Log Level: ERROR  
Message: Service Unavailable  
Secondary Message: null    
Description: null  
Cause: Service or one of it dependent services does not respond, timeout, etc.  
Solutions: Try the request again.  
Docs:
## ERROR - 45005

### Service Unavailable

 

#### Possible Causes
Service or one of it dependent services does not respond, timeout, etc.

#### Possible Solutions
Try the request again.



# Code: 45006
Log Level: ERROR  
Message: Resource Not Found  
Secondary Message: null    
Description: null  
Cause: Requested resource could not be found.  
Solutions: Check that accessed resource is set correctly.  
Docs:
## ERROR - 45006

### Resource Not Found

 

#### Possible Causes
Requested resource could not be found.

#### Possible Solutions
Check that accessed resource is set correctly.



# Code: 45007
Log Level: ERROR  
Message: Resource Conflict Error  
Secondary Message: null    
Description: null  
Cause: The request could not be completed due to a conflict with the current state of the target resource.  
Solutions: Please verify the current status of the resource to see if desired updates are already present in the system and that the request does not contain information that conflicts with the current state.  
Docs:
## ERROR - 45007

### Resource Conflict Error

 

#### Possible Causes
The request could not be completed due to a conflict with the current state of the target resource.

#### Possible Solutions
Please verify the current status of the resource to see if desired updates are already present in the system and that the request does not contain information that conflicts with the current state.



# Code: 45008
Log Level: ERROR  
Message: Unprocessable Request  
Secondary Message: null    
Description: null  
Cause: The server is not able to process the request due to something that is perceived to be a client error (e.g. malformed request syntax or invalid request message).  
Solutions: Please verify the request details and ensure Flex setup and preconditions for this request have been met before trying again.   
Docs:
## ERROR - 45008

### Unprocessable Request

 

#### Possible Causes
The server is not able to process the request due to something that is perceived to be a client error (e.g. malformed request syntax or invalid request message).

#### Possible Solutions
Please verify the request details and ensure Flex setup and preconditions for this request have been met before trying again. 



# Code: 45009
Log Level: ERROR  
Message: Configuration Error  
Secondary Message: null    
Description: null  
Cause: A Flex component was not configured correctly.  
Solutions: Revise and verify the configuration. If everything is as expected then contact Customer Support to review your use case.  
Docs:
## ERROR - 45009

### Configuration Error

 

#### Possible Causes
A Flex component was not configured correctly.

#### Possible Solutions
Revise and verify the configuration. If everything is as expected then contact Customer Support to review your use case.



# Code: 45010
Log Level: ERROR  
Message: Rate Limit Exceeded  
Secondary Message: null    
Description: The rate of access to this resource exceeds the prescribed limits.  
Cause: Your application is requesting Flex API resources at a rate that is higher than expected.  
Solutions: Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to review your use case and limits.  
Docs:
## ERROR - 45010

### Rate Limit Exceeded

 The rate of access to this resource exceeds the prescribed limits.

#### Possible Causes
Your application is requesting Flex API resources at a rate that is higher than expected.

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to review your use case and limits.



# Code: 45101
Log Level: ERROR  
Message: Configuration Not Found  
Secondary Message: null    
Description: null  
Cause: Queried configuration is not yet created for specified account.  
Solutions: Ensure, that configuration for specific account is created, create one if not.  
Docs:
## ERROR - 45101

### Configuration Not Found

 

#### Possible Causes
Queried configuration is not yet created for specified account.

#### Possible Solutions
Ensure, that configuration for specific account is created, create one if not.



# Code: 45102
Log Level: ERROR  
Message: Collision On Configuration Change  
Secondary Message: null    
Description: null  
Cause: Configuration for the same account was changed by other request mostly at the same time.  
Solutions: Try to update the configuration again.  
Docs:
## ERROR - 45102

### Collision On Configuration Change

 

#### Possible Causes
Configuration for the same account was changed by other request mostly at the same time.

#### Possible Solutions
Try to update the configuration again.



# Code: 45103
Log Level: ERROR  
Message: Workspace Not Configured  
Secondary Message: null    
Description: null  
Cause: Workspace is not defined in the configuration.  
Solutions: Update the configuration: set the workspace.  
Docs:
## ERROR - 45103

### Workspace Not Configured

 

#### Possible Causes
Workspace is not defined in the configuration.

#### Possible Solutions
Update the configuration: set the workspace.



# Code: 45201
Log Level: ERROR  
Message: Resource Not Found  
Secondary Message: null    
Description: null  
Cause: Requested resource could not be found.  
Solutions: Check that accessed resource is set correctly.  
Docs:
## ERROR - 45201

### Resource Not Found

 

#### Possible Causes
Requested resource could not be found.

#### Possible Solutions
Check that accessed resource is set correctly.



# Code: 45202
Log Level: ERROR  
Message: Resource Already Exists  
Secondary Message: null    
Description: null  
Cause: The request could not be completed due to a conflict with the current state of the resource.  
Solutions: Check that resource to be updated is set correctly.  
Docs:
## ERROR - 45202

### Resource Already Exists

 

#### Possible Causes
The request could not be completed due to a conflict with the current state of the resource.

#### Possible Solutions
Check that resource to be updated is set correctly.



# Code: 45203
Log Level: ERROR  
Message: Chat User Not Found  
Secondary Message: null    
Description: null  
Cause: Specified User does not exist.  
Solutions: Confirm a valid User is being passed in request.  
Docs:
## ERROR - 45203

### Chat User Not Found

 

#### Possible Causes
Specified User does not exist.

#### Possible Solutions
Confirm a valid User is being passed in request.



# Code: 45204
Log Level: ERROR  
Message: Chat Channel Not Found  
Secondary Message: null    
Description: null  
Cause: Specified Channel does not exist.  
Solutions: Confirm a valid Channel is being passed in request.   
Docs:
## ERROR - 45204

### Chat Channel Not Found

 

#### Possible Causes
Specified Channel does not exist.

#### Possible Solutions
Confirm a valid Channel is being passed in request. 



# Code: 50000
Log Level: ERROR  
Message: Programmable Chat: FriendlyName not provided  
Secondary Message: Request does not contain required "FriendlyName" parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50000

### Programmable Chat: FriendlyName not provided

#### Possible Causes 
*  Request does not contain required "FriendlyName" parameter.

#### Possible Solutions
*  Confirm a valid FriendlyName is being passed in request. 



# Code: 50001
Log Level: ERROR  
Message: Programmable Chat: Account SID not provided  
Secondary Message: Request does not contain required Account SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50001

### Programmable Chat: Account SID not provided 

#### Possible Causes 
*  Request does not contain required Account SID parameter.

#### Possible Solutions
*  Confirm a valid Account SID is being passed in request.



# Code: 50002
Log Level: ERROR  
Message: Programmable Chat: Resource is being deleted  
Secondary Message: The resource your request relates to is currently being deleted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50002

### Programmable Chat: Resource is being deleted

#### Possible Causes 
*  The resource your request relates to is currently being deleted.

#### Possible Solutions
*  Try the same request again later.



# Code: 50003
Log Level: ERROR  
Message: Programmable Chat: Friendly name too long  
Secondary Message: Specified friendly name is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50003

### Programmable Chat: Friendly name too long

#### Possible Causes 
*  Specified friendly name is too long

#### Possible Solutions
*  Confirm a valid FriendlyName is being passed in request. 



# Code: 50004
Log Level: ERROR  
Message: Programmable Chat: Unique Name too long  
Secondary Message: Specified unique name is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50004

### Programmable Chat: Unique Name too long

#### Possible Causes 
*  Specified unique name is too long

#### Possible Solutions
*  Confirm a valid UniqueName is being passed in request. 



# Code: 50050
Log Level: ERROR  
Message: Programmable Chat: Service Instance not found  
Secondary Message: Specified Service Instance does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50050

### Programmable Chat: Service Instance not found

#### Possible Causes 
*  Specified Service Instance does not exist.

#### Possible Solutions
*  Confirm a valid Service Instance is being passed in request. 



# Code: 50051
Log Level: ERROR  
Message: Programmable Chat: Service SID not provided  
Secondary Message: Request does not contain required Service SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50051

### Programmable Chat: Service SID not provided

#### Possible Causes 
*  Request does not contain required Service SID parameter.

#### Possible Solutions
*  Confirm a valid Service SID is being passed in request. 



# Code: 50052
Log Level: ERROR  
Message: Programmable Chat: Invalid consumption interval format  
Secondary Message: Request does not contain valid consumption interval.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50052

### Programmable Chat: Invalid consumption interval format	

#### Possible Causes 
*  Request does not contain valid consumption interval.

#### Possible Solutions
*  Confirm a valid consumption interval format is being passed in request. 



# Code: 50053
Log Level: ERROR  
Message: Programmable Chat: Invalid typing indicator format  
Secondary Message: Request does not contain valid typing indicator timeout.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50053

### Programmable Chat: Invalid typing indicator format

#### Possible Causes 
*  Request does not contain valid typing indicator timeout.

#### Possible Solutions
*  Confirm a valid typing indicator timeout is being passed in request. 




# Code: 50054
Log Level: ERROR  
Message: Programmable Chat: Invalid webhook format  
Secondary Message: Request does not contain correctly formatted parameters for webhooks.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50054

### Programmable Chat: Invalid webhook format

#### Possible Causes 
*  Request does not contain correctly formatted parameters for webhooks.

#### Possible Solutions
*  Confirm a valid webhook parameters are being passed in request. 



# Code: 50055
Log Level: ERROR  
Message: Programmable Chat: Invalid webhook method  
Secondary Message: Request does not contain valid HTTP method for webhook.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50055

### Programmable Chat: Invalid webhook method

#### Possible Causes 
*  Request does not contain valid HTTP method for webhook.

#### Possible Solutions
*  Confirm a valid HTTP method for webhook is being passed in request. 



# Code: 50056
Log Level: ERROR  
Message: Programmable Chat: Webhook disabled processing of command  
Secondary Message: Defined webhook returned other than "200 OK" HTTP code and Programmable Chat Service disabled processing of command.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50056

### Programmable Chat: Webhook disabled processing of command

#### Possible Causes 
*  Defined webhook returned other than "200 OK" HTTP code and Programmable Chat Service disabled processing of command.

#### Possible Solutions
*  Confirm that defined webhooks are processing Programmable Chat Service's webhook calls correctly. 



# Code: 50057
Log Level: ERROR  
Message: Programmable Chat: Webhook call failed to execute successfully  
Secondary Message: The event triggered webhook call failed to execute successfully    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50057

### Programmable Chat: Webhook call failed to execute successfully

#### Possible Causes 
*  The Webhook endpoint called returned an error code

#### Possible Solutions
* Check your Webhook execution logic to ensure it is processing the webhook calls correctly and passing back 200 OK



# Code: 50058
Log Level: ERROR  
Message: Programmable Chat: Notification template too long  
Secondary Message: Specified notification template parameter is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50058

### Programmable Chat: Notification template too long

#### Possible Causes 
*  Specified notification template parameter is too long.

#### Possible Solutions
*  Confirm a valid length notification template is being passed in request. 



# Code: 50059
Log Level: ERROR  
Message: Programmable Chat: Notification sound name too long  
Secondary Message: Specified notification sound parameter is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50059

### Programmable Chat: Notification sound name too long

#### Possible Causes 
*  Specified notification sound parameter is too long.

#### Possible Solutions
*  Confirm a valid length notification sound parameter is being passed in request. 



# Code: 50060
Log Level: ERROR  
Message: Programmable Chat: Invalid user channels limit format  
Secondary Message: Request does not contain correctly formatted parameter for user channels limit    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50060

### Programmable Chat: Invalid user channels limit format

#### Possible Causes 
*  Request does not contain correctly formatted parameter for user channels limit.

#### Possible Solutions
*  Confirm a valid user channels limit parameter is passed in request. 



# Code: 50061
Log Level: ERROR  
Message: Programmable Chat: Invalid channel members limit format  
Secondary Message: Request does not contain correctly formatted parameter for channel members limit    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50061

### Programmable Chat: Invalid channel members limit format

#### Possible Causes 
*  Request does not contain correctly formatted parameter for channel members limit.

#### Possible Solutions
*  Confirm a valid channel members limit parameter is passed in request. 



# Code: 50063
Log Level: ERROR  
Message: Programmable Chat: Actions per second limit exceeded  
Secondary Message: Service instance actions per second limit exceeded    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50063

### Programmable Chat: Actions per second limit exceeded

#### Possible Causes 
*  Your application is generating too many actions per second (APS) for Chat service instance
*  Note that the APS limit is enforced for commands such as sending a Message or creating a Channel - not Read actions

#### Possible Solutions
*  Make sure your application (client or backend) uses a good exponential back-off algorithm like the [one advocated by Amazon](https://www.awsarchitectureblog.com/2015/03/backoff.html) to retry on HTTP 429 (rate limiting) responses
*  Reduce the rate of requests and introduce basic rate control, e.g. for user or channel provisioning use-cases
*  Reduce number of concurrent requests




# Code: 50065
Log Level: ERROR  
Message: Programmable Chat: Invalid webhook retry count  
Secondary Message: Request does not contain correctly formatted parameter for webhook retry count.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50065

### Programmable Chat: Invalid webhook retry count

#### Possible Causes 
* Request does not contain correctly formatted parameter for webhook retry count.

#### Possible Solutions
*  Confirm a valid webhook parameters are being passed in request. 



# Code: 50068
Log Level: ERROR  
Message: Programmable Chat: Service instance unique name invalid  
Secondary Message: Request does not contain correctly formatted service instance unique name    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50068

### Programmable Chat: Service instance unique name invalid

#### Possible Causes 
*  Request does not contain correctly formatted service instance unique name

#### Possible Solutions
*  Confirm a valid service instance unique name is being passed in request. 



# Code: 50069
Log Level: ERROR  
Message: Programmable Chat: Service instance with provided unique name already exists  
Secondary Message: Request contains already existing service instance unique name    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50069

### Programmable Chat: Service instance with provided unique name already exists

#### Possible Causes 
*  Request contains already existing service instance unique name

#### Possible Solutions
*  Provide non-existent service instance unique name in the request



# Code: 50100
Log Level: ERROR  
Message: Programmable Chat: Role not found  
Secondary Message: Specified Role does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50100

### Programmable Chat: Role not found

#### Possible Causes 
*  Specified Role does not exist.

#### Possible Solutions
*  Confirm a valid Role is being passed in request. 



# Code: 50101
Log Level: ERROR  
Message: Programmable Chat: Channel role not found  
Secondary Message: Specified Channel Role does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50101

### Programmable Chat: Channel role not found

#### Possible Causes 
*  Specified Channel Role does not exist. 

#### Possible Solutions
*  Confirm a valid Channel Role is being passed in request. 



# Code: 50102
Log Level: ERROR  
Message: Programmable Chat: Deployment role not found  
Secondary Message: Specified Deployment Role does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50102

### Programmable Chat: Deployment role not found	

#### Possible Causes 
*  Specified Deployment Role does not exist. 

#### Possible Solutions
*  Confirm a valid Deployment Role is being passed in request. 



# Code: 50103
Log Level: ERROR  
Message: Programmable Chat: Role SID not provided  
Secondary Message: Request does not contain required Role SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50103

### Programmable Chat: Role SID not provided

#### Possible Causes 
*  Request does not contain required Role SID parameter.

#### Possible Solutions
*  Confirm a valid Role SID is being passed in request. 



# Code: 50104
Log Level: ERROR  
Message: Programmable Chat: Permission not found  
Secondary Message: Specified Permission does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50104

### Programmable Chat: Permission not found	

#### Possible Causes 
*  Specified Permission does not exist.

#### Possible Solutions
*  Confirm a valid Permission is being passed in request. 



# Code: 50105
Log Level: ERROR  
Message: Programmable Chat: Invalid role type  
Secondary Message: Specified Role Type does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50105

### Programmable Chat: Invalid role type	

#### Possible Causes 
*  Specified Role Type does not exist. 

#### Possible Solutions
*  Confirm a valid Role Type is being passed in request. 



# Code: 50106
Log Level: ERROR  
Message: Programmable Chat: Channel creator role not found  
Secondary Message: Valid Channel Creator Role does not exist in this service deployment.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50106

### Programmable Chat: Channel creator role not found

#### Possible Causes 
*  Valid Channel Creator Role does not exist in this service deployment.

#### Possible Solutions
*  Confirm a valid Channel Creator Role exists in this service deployment. 



# Code: 50107
Log Level: ERROR  
Message: Programmable Chat: User not authorized for command  
Secondary Message: Specified User is not authorized for this command due to his Role or Permissions set.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50107

### Programmable Chat: User not authorized for command	

#### Possible Causes 
*  Specified User is not authorized for this command due to his Role or Permissions set.

#### Possible Solutions
*  Confirm a valid Role and Permissions exist for this User to execute request's provided command. 



# Code: 50200
Log Level: ERROR  
Message: Programmable Chat: User not found  
Secondary Message: Specified User does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50200

### Programmable Chat: User not found

#### Possible Causes 
*  Specified User does not exist.

#### Possible Solutions
*  Confirm a valid User is being passed in request. 



# Code: 50201
Log Level: ERROR  
Message: Programmable Chat: User already exists  
Secondary Message: Specified User already exists for this Service.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50201

### Programmable Chat: User already exists

#### Possible Causes 
*  Specified User already exists for this Service.

#### Possible Solutions
*  Confirm a valid non-existing User is being passed in request. 



# Code: 50202
Log Level: ERROR  
Message: Programmable Chat: User SID not provided  
Secondary Message: Request does not contain required User SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50202

### Programmable Chat: User SID not provided

#### Possible Causes 
*  Request does not contain required User SID parameter.

#### Possible Solutions
*  Confirm a valid User SID is being passed in request. 



# Code: 50203
Log Level: ERROR  
Message: Programmable Chat: Identity reserved  
Secondary Message: Specified identity is reserved for internal use.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50203

### Programmable Chat: Identity reserved	 

#### Possible Causes 
*  Specified identity is reserved for internal use.

#### Possible Solutions
*  Choose different valid identity and provide it in request. 



# Code: 50204
Log Level: ERROR  
Message: Programmable Chat: Identity not provided  
Secondary Message: Request does not contain required "Identity" parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50204

### Programmable Chat: Identity not provided	

#### Possible Causes 
*  Request does not contain required "Identity" parameter.

#### Possible Solutions
*  Confirm a valid "Identity" parameter is being passed in request. 



# Code: 50205
Log Level: ERROR  
Message: Programmable Chat: User unauthorized to set role  
Secondary Message: Specified User does not have Role or Permissions to set the Role.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50205

### Programmable Chat: User unauthorized to set role

#### Possible Causes 
*  Specified User does not have Role or Permissions to set the Role.

#### Possible Solutions
*  Confirm a valid User having valid Role and Permissions is being passed in request. 



# Code: 50206
Log Level: ERROR  
Message: Programmable Chat: Identity should not match user SID pattern  
Secondary Message: Specified User's Identity matches User SID Pattern "US[0-9a-f]{32}"    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50206

### Programmable Chat: Identity should not match user SID pattern

#### Possible Causes 
*  Specified User's Identity matches User SID Pattern "US[0-9a-f]{32}".

#### Possible Solutions
*  Confirm a valid User's Identity is being passed in request. 



# Code: 50207
Log Level: ERROR  
Message: Programmable Chat: Identity too long  
Secondary Message: Specified User's Identity parameter is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50207

### Programmable Chat: Identity too long

#### Possible Causes 
*  Specified User's Identity parameter is too long.

#### Possible Solutions
*  Confirm a valid length User's Identity is being passed in request. 



# Code: 50208
Log Level: ERROR  
Message: Programmable Chat: User channel limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50208

### Programmable Chat: User channel limit exceeded

#### Possible Causes 
*  User has joined too many channels

#### Possible Solutions
*  Increase user channel limit for service instance
*  Remove user from channels



# Code: 50209
Log Level: ERROR  
Message: Programmable Chat: Invalid binding type  
Secondary Message: Specified binding type does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50209

### Programmable Chat: Invalid binding type

#### Possible Causes 
*  Specified binding type does not exist.

#### Possible Solutions
*  Confirm a valid binding type is being passed in request. 



# Code: 50210
Log Level: ERROR  
Message: Programmable Chat: Invalid notification level  
Secondary Message: Request contains unknown notification level value    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50210

### Programmable Chat: Invalid notification level

#### Possible Causes 
* Specified notification level does not exist.

#### Possible Solutions
* Confirm a valid notification level is being passed in request. 



# Code: 50211
Log Level: ERROR  
Message: Programmable Chat: Identity not allowed for userless member  
Secondary Message: Identity is not allowed for userless member    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50211

### Programmable Chat: Identity not allowed for userless member

#### Possible Causes 
*  Request contains both Identity and UserAddress

#### Possible Solutions
*  Provide only UserAddress in request body
*  Provide only Identity in request body



# Code: 50300
Log Level: ERROR  
Message: Programmable Chat: Channel not found  
Secondary Message: Specified Channel does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50300

### Programmable Chat: Channel not found

#### Possible Causes 
*  Specified Channel does not exist.

#### Possible Solutions
*  Confirm a valid Channel is being passed in request. 



# Code: 50301
Log Level: ERROR  
Message: Programmable Chat: Channel key not provided  
Secondary Message: Request does not contain required Channel SID or Channel's Unique Name parameters.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50301

### Programmable Chat: Channel key not provided	

#### Possible Causes 
*  Request does not contain required Channel SID or Channel's Unique Name parameters.

#### Possible Solutions
*  Confirm a valid Channel SID or Channel's Unique Name is being passed in request. 



# Code: 50302
Log Level: ERROR  
Message: Programmable Chat: Unknown channel command  
Secondary Message: Specified Channel Command does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50302

### Programmable Chat: Unknown channel command

#### Possible Causes 
*  Specified Channel Command does not exist.

#### Possible Solutions
*  Confirm a valid Channel Command is being passed in request. 



# Code: 50303
Log Level: ERROR  
Message: Programmable Chat: Attributes too long  
Secondary Message: Specified Channel's Attributes parameter is too long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50303

### Programmable Chat: Attributes too long

#### Possible Causes 
*  Specified Channel's Attributes parameter is too long.

#### Possible Solutions
*  Confirm a valid length Channel's Attributes is being passed in request. 



# Code: 50304
Log Level: ERROR  
Message: Programmable Chat: Attributes not valid JSON  
Secondary Message: Specified Channel's Attributes are not valid JSON.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50304

### Programmable Chat: Attributes not valid JSON	 

#### Possible Causes 
*  Specified Channel's Attributes are not valid JSON.

#### Possible Solutions
*  Confirm a valid Channel's Attributes in JSON format are being passed in request. 



# Code: 50305
Log Level: ERROR  
Message: Programmable Chat: Channel SID not provided  
Secondary Message: Request does not contain required Channel SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50305

### Programmable Chat: Channel SID not provided

#### Possible Causes 
*  Request does not contain required Channel SID parameter.

#### Possible Solutions
*  Confirm a valid Channel SID is being passed in request. 



# Code: 50306
Log Level: ERROR  
Message: Programmable Chat: Unique name should not match channel SID pattern  
Secondary Message: Specified Channel's Unique Name matches Channel SID Pattern "CH[0-9a-f]{32}".    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50306

### Programmable Chat: Unique name should not match channel SID pattern

#### Possible Causes 
*  Specified Channel's Unique Name matches Channel SID Pattern "CH[0-9a-f]{32}".

#### Possible Solutions
*  Confirm a valid Channel's Unique Name is being passed in request. 



# Code: 50307
Log Level: ERROR  
Message: Programmable Chat: Channel with provided unique name already exists  
Secondary Message: Specified Channel's Unique Name already exists in this Service deployment.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50307

### Programmable Chat: Channel with provided unique name already exists	

#### Possible Causes 
*  Specified Channel's Unique Name already exists in this Service deployment.

#### Possible Solutions
*  Confirm a valid non-existing Channel's Unique Name is being passed in request. 



# Code: 50308
Log Level: ERROR  
Message: Programmable Chat: Invalid Date Created parameter  
Secondary Message: Request does not contain correctly formatted parameter for Date Created    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50308

### Programmable Chat: Invalid Date Created parameter

#### Possible Causes 
*  Request does not contain correctly formatted parameter for Date Created.

#### Possible Solutions
*  Confirm a valid Date Created parameter is passed in request. 



# Code: 50309
Log Level: ERROR  
Message: Programmable Chat: Invalid Date Uodated parameter  
Secondary Message: Request does not contain correctly formatted parameter for Date Updated    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50309

### Programmable Chat: Invalid Date Updated parameter

#### Possible Causes 
*  Request does not contain correctly formatted parameter for Date Updated.

#### Possible Solutions
*  Confirm a valid Date Updated parameter is passed in request. 



# Code: 50310
Log Level: ERROR  
Message: Programmable Chat: Author parameter is too long  
Secondary Message: Author parameter is too long.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50310

### Programmable Chat: Author parameter is too long

#### Possible Causes 
*  Author parameter is too long.

#### Possible Solutions
*  Confirm a valid length Author is being passed in request. 



# Code: 50320
Log Level: ERROR  
Message: Programmable Chat: Channel webhook not found  
Secondary Message: Specified channel webhook does not exist    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50320

### Programmable Chat: Channel webhook not found

#### Possible Causes 
*  Specified channel webhook does not exist.

#### Possible Solutions
*  Confirm a valid channel webhook SID is provided in request.



# Code: 50321
Log Level: ERROR  
Message: Programmable Chat: Too many channel webhooks  
Secondary Message: Webhooks limit exceeded for given channel    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50321

### Programmable Chat: Too many channel webhooks

#### Possible Causes 
*  Webhooks limit exceeded for given channel.

#### Possible Solutions
*  Reduce number of webhooks for channel before creating new one.



# Code: 50322
Log Level: ERROR  
Message: Programmable Chat: Too many channel webhook triggers  
Secondary Message: Triggers limit exceeded for given channel webhook    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50322

### Programmable Chat: Too many channel webhook triggers

#### Possible Causes 
*  Triggers limit exceeded for given channel webhook.

#### Possible Solutions
*  Reduce number of triggers for given channel webhook before creating new one.



# Code: 50323
Log Level: ERROR  
Message: Programmable Chat: Invalid channel webhook sid  
Secondary Message: Request does not contain correctly formatted parameter for channel webhook sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50323

### Programmable Chat: Invalid channel webhook sid

#### Possible Causes 
*  Request does not contain correctly formatted parameter for channel webhook sid

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50324
Log Level: ERROR  
Message: Invalid channel webhook type  
Secondary Message: Request does not contain correctly formatted parameter for channel webhook type    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50324

### Programmable Chat: Invalid channel webhook type

#### Possible Causes 
*  Request does not contain correctly formatted parameter for channel webhook type.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50325
Log Level: ERROR  
Message: Programmable Chat: Invalid channel webhook filter  
Secondary Message: Request does not contain correctly formatted parameter for webhook filter    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50325

### Programmable Chat: Invalid channel webhook filter

#### Possible Causes 
*  Request does not contain correct parameter for channel webhook filter.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50326
Log Level: ERROR  
Message: Programmable Chat: Invalid channel webhook trigger  
Secondary Message: Request does not contain correct parameter for webhook trigger    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50326

### Programmable Chat: Invalid channel webhook trigger

#### Possible Causes 
*  Request does not contain correct parameter for channel webhook trigger.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50327
Log Level: ERROR  
Message: Programmable Chat: Invalid channel webhook flow sid  
Secondary Message: Request does not contain correct parameter for webhook flow sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50327

### Programmable Chat: Invalid channel webhook flow sid

#### Possible Causes 
*  Request does not contain correct parameter for channel webhook flow sid.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50328
Log Level: ERROR  
Message: Programmable Chat: Channel webhook type not provided  
Secondary Message: Request does not contain parameter for webhook type    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50328

### Programmable Chat: Channel webhook type not provided

#### Possible Causes 
*  Request does not contain parameter for channel webhook type.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50329
Log Level: ERROR  
Message: Programmable Chat: Channel webhook url not provided  
Secondary Message: Request does not contain parameter for webhook url    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50329

### Programmable Chat: Channel webhook url not provided

#### Possible Causes 
*  Request does not contain parameter for channel webhook url.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50330
Log Level: ERROR  
Message: Programmable Chat: Channel webhook filter not provided  
Secondary Message: Request does not contain parameter for webhook filter    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50330

### Programmable Chat: Channel webhook filter not provided

#### Possible Causes 
*  Request does not contain parameter for channel webhook filter.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50331
Log Level: ERROR  
Message: Programmable Chat: Channel webhook trigger not provided  
Secondary Message: Request does not contain parameter for webhook trigger    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50331

### Programmable Chat: Channel webhook trigger not provided

#### Possible Causes 
*  Request does not contain parameter for channel webhook trigger.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50332
Log Level: ERROR  
Message: Programmable Chat: Channel webhook url too long  
Secondary Message: Channel webhook url provided in request is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50332

### Programmable Chat: Channel webhook url too long

#### Possible Causes 
*  Channel webhook url provided in request is too long.

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50340
Log Level: ERROR  
Message: Programmable Chat: Messaging service sid not provided  
Secondary Message: Request does not contain parameter for messaging service sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50340

### Programmable Chat: Messaging service sid not provided

#### Possible Causes 
*  Request does not contain parameter for messaging service sid.

#### Possible Solutions
*  Confirm a parameter is passed in request. 



# Code: 50341
Log Level: ERROR  
Message: Programmable Chat: Invalid messaging service sid  
Secondary Message: Request does not contain correct parameter for messaging service sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50341

### Programmable Chat: Invalid messaging service sid

#### Possible Causes 
*  Request does not contain correct parameter for messaging service sid.
#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50400
Log Level: ERROR  
Message: Programmable Chat: User not member of channel  
Secondary Message: Specified User is not member of this Channel.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50400

### Programmable Chat: User not member of channel

#### Possible Causes 
*  Specified User is not member of this Channel.

#### Possible Solutions
*  Confirm a valid User who is Member of this Channel is being passed in request. 



# Code: 50401
Log Level: ERROR  
Message: Programmable Chat: Member SID not provided  
Secondary Message: Request does not contain required Member SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50401

### Programmable Chat: Member SID not provided

#### Possible Causes 
*  Request does not contain required Member SID parameter. 

#### Possible Solutions
*  Confirm a valid Member SID is being passed in request. 



# Code: 50402
Log Level: ERROR  
Message: Programmable Chat: Member not found  
Secondary Message: Specified Member does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 500402

### Programmable Chat: Member not found

#### Possible Causes 
*  Specified Member does not exist.

#### Possible Solutions
*  Confirm a valid Member is being passed in request. 



# Code: 50403
Log Level: ERROR  
Message: Programmable Chat: Channel member limit exceeded  
Secondary Message: Channel has too many members    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50403

### Programmable Chat: Channel member limit exceeded

#### Possible Causes 
* Channel has too many members

#### Possible Solutions
*  Increase channel member limit for service instance
*  Remove members from channel



# Code: 50404
Log Level: ERROR  
Message: Programmable Chat: Member already exists  
Secondary Message: Member with specified Identity already exists in this Channel    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Programmable Chat: Member already exists

#### Possible Causes 

*  Member with specified Identity already exists in this Channel.

#### Possible Solutions

*  Confirm that the Member Identity passed in the request is not already a member of the intended channel.



# Code: 50405
Log Level: ERROR  
Message: Programmable Chat: Invalid last consumption timestamp format  
Secondary Message: Request does not contain correctly formatted parameter for last consumption timestamp    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50405

### Programmable Chat: Invalid last consumption timestamp format

#### Possible Causes 
*  Request does not contain correctly formatted parameter for last consumption timestamp

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50406
Log Level: ERROR  
Message: Programmable Chat: Invalid last consumed message index format  
Secondary Message: Request does not contain correctly formatted parameter for last consumed message index    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50406

### Programmable Chat: Invalid last consumed message index format

#### Possible Causes 
*  Request does not contain correctly formatted parameter for last consumed message index

#### Possible Solutions
*  Confirm a valid parameter is passed in request. 



# Code: 50500
Log Level: ERROR  
Message: Programmable Chat: Message not found  
Secondary Message: Specified Message does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50500

### Programmable Chat: Message not found	

#### Possible Causes 
*  Specified Message does not exist.

#### Possible Solutions
*  Confirm a valid Message is being passed in request. 



# Code: 50501
Log Level: ERROR  
Message: Programmable Chat: Message SID not provided  
Secondary Message: Request does not contain required Message SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50501

### Programmable Chat: Message SID not provided	

#### Possible Causes 
*  Request does not contain required Message SID parameter.

#### Possible Solutions
*  Confirm a valid Message SID is being passed in request. 



# Code: 50502
Log Level: ERROR  
Message: Programmable Chat: Message index not provided  
Secondary Message: Request does not contain required Message Index parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50502

### Programmable Chat: Message index not provided

#### Possible Causes 
*  Request does not contain required Message Index parameter.

#### Possible Solutions
*  Confirm a valid Message Index is being passed in request. 



# Code: 50503
Log Level: ERROR  
Message: Programmable Chat: Message body not provided  
Secondary Message: Request does not contain required Message Body parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50503

### Programmable Chat: Message body not provided

#### Possible Causes 
*  Request does not contain required Message Body parameter.

#### Possible Solutions
*  Confirm a valid Message Body is being passed in request. 



# Code: 50504
Log Level: ERROR  
Message: Programmable Chat: Message body parameter is too long  
Secondary Message: Message body parameter is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50504

### Programmable Chat: Message body parameter is too long

#### Possible Causes 
*  Message body parameter is too long.

#### Possible Solutions
*  Confirm a valid length Message body is being passed in request. 



# Code: 50505
Log Level: ERROR  
Message: Programmable Chat: Last Updated By parameter is too long  
Secondary Message: Last Updated By parameter is too long    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50505

### Programmable Chat: Last Updated By parameter is too long

#### Possible Causes 
*  Last Updated By parameter is too long.

#### Possible Solutions
*  Confirm a valid length Last Updated By is being passed in request. 



# Code: 50506
Log Level: ERROR  
Message: Programmable Chat: Media SID not provided  
Secondary Message: Request does not contain required Media SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50506

### Programmable Chat: Media SID not provided	

#### Possible Causes 
*  Request does not contain required Media SID parameter.

#### Possible Solutions
*  Confirm a valid Media SID is being passed in request. 



# Code: 50507
Log Level: ERROR  
Message: Programmable Chat: Media not found  
Secondary Message: Media with specified SID does not exist.     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50507

### Programmable Chat: Media not found	

#### Possible Causes 
*  Media with specified SID does not exist. 

#### Possible Solutions
*  Confirm a valid Media SID is being passed in request. 



# Code: 50508
Log Level: ERROR  
Message: Programmable Chat: Media already sent with another message  
Secondary Message: Media with specified SID is already sent with another Chat message    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50508

### Programmable Chat: Media already sent with another message

#### Possible Causes 
*  Media with specified SID is already sent with another Chat message. 

#### Possible Solutions
*  Confirm a valid Media SID is being passed in request. 



# Code: 50509
Log Level: ERROR  
Message: Programmable Chat: Media message body cannot be updated  
Secondary Message: Media message body cannot be updated    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50509

### Programmable Chat: Media message body update not allowed

#### Possible Causes 
*  Media message body cannot be updated. 




# Code: 50600
Log Level: ERROR  
Message: Programmable Chat: Invite SID not provided  
Secondary Message: Request does not contain required Invite SID parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50600

### Programmable Chat: Invite SID not provided

#### Possible Causes 
*  Request does not contain required Invite SID parameter.

#### Possible Solutions
*  Confirm a valid Invite SID is being passed in request. 



# Code: 50601
Log Level: ERROR  
Message: Programmable Chat: Invite not found  
Secondary Message: Specified Invite does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 50601

### Programmable Chat: Invite not found

#### Possible Causes 
*  Specified Invite does not exist. 

#### Possible Solutions
*  Confirm a valid Invite is being passed in request. 



# Code: 51001
Log Level: ERROR  
Message: Client Connection: Connections resource limit exceeded  
Secondary Message: error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51001

### Client Connection: Connections resource limit exceeded

#### Possible Causes 

The rate of client connection requests or the number of concurrent connections exceeded the limit.

#### Possible Solutions

Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your Account's limits.





# Code: 51002
Log Level: error  
Message: Client Connection: Request rate limit exceeded  
Secondary Message: error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51002

### Client Connection: Request rate limit exceeded

#### Possible Causes 

The rate of client requests exceeded the limit.

#### Possible Solutions

Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your Account's client request limit.




# Code: 51003
Log Level: error  
Message: Client Connection: identity too long  
Secondary Message: error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51003

### Client Connection: `identity` too long

#### Possible Causes 

`identity` field in the Access Token is too long.

#### Possible Solutions

Consult the product documentation for maximum allowed length of `identity` field.




# Code: 51004
Log Level: error  
Message: Client Connection: endpoint_id too long  
Secondary Message: error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51004

### Client Connection: `endpoint_id` string too long

#### Possible Causes 

`endpoint_id` field in the Access Token is too long.

#### Possible Solutions

Consult the product documentation for maximum allowed length of `endpoint_id` field.




# Code: 51005
Log Level: error  
Message: Client Connection: Command or keepalive acknowledgement not received  
Secondary Message: warning    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 51005

### Client Connection: Command or keepalive acknowledgement not received

#### Possible Causes 

The client did not acknowledge a message or a keep-alive request, which is required by the connection protocol therefore the connection has been dropped. This is most often caused by network connectivity issues.

#### Possible Solutions

SignalWire SDKs automatically recover and reestablish the connection if possible. 
For best user experience, ensure reliable network connectivity.




# Code: 51006
Log Level: error  
Message: Client Connection: Connection expired  
Secondary Message: warning    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 51006

### Client Connection: Connection expired

#### Possible Causes 

The connection has expired. The connection expiration is set by the `exp` field of the Access Token.

#### Possible Solutions

Make sure clients refresh Access Tokens before they expire. Please, refer to the SignalWire SDK documentation for further details.





# Code: 51007
Log Level: ERROR  
Message: Client Connection: Token authentication is rejected  
Secondary Message: error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51007

### Client Connection: Token authentication is rejected by authentication service

#### Possible Causes 

Authentication service has rejected provided Access Token.

To check whether the Access Token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io/).

For the details of SignalWire's specific Access Token implementation including the grant format, see [the documentation](/docs/api/rest/access-tokens).

For further assistance, please contact <a href="mailto:support@signalwire.com">support@signalwire.com</a>.



# Code: 51101
Log Level: ERROR  
Message: Twilsock: Service instance not found  
Secondary Message: Service instance specified in the request does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51101

### Service instance not found

#### Possible Causes 
Service instance specified in the request does not exist.

#### Possible Solutions
Confirm a valid service instance is being passed in the request. 



# Code: 51102
Log Level: ERROR  
Message: Twilsock: Service instance SID not specified  
Secondary Message: Service instance SID is not specified and couln't be generated.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51102

### Service instance SID not specified

#### Possible Causes 
No service instance SID specified and couldn't be generated.

#### Possible Solutions
Confirm a service instance SID is being passed in the request. 



# Code: 51103
Log Level: ERROR  
Message: Twilsock: Token doesn't contain required grants section  
Secondary Message: No grants section is specified in the token and grants section is required.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51103

### Token doesn't contain required grants section

#### Possible Causes 
No grants section is specified in the token and grants section is required.

#### Possible Solutions
Confirm grants section exists and valid in the token. 
To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51104
Log Level: ERROR  
Message: Twilsock: Token doesn't contain service instance  
Secondary Message: The token doesn't have a service instance.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51104

### Token doesn't contain service instance

#### Possible Causes 
The token doesn't have a service instance.

#### Possible Solutions
Confirm a service instance is being passed in the token. 
To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51105
Log Level: ERROR  
Message: Twilsock: Token doesn't contain identity  
Secondary Message: The token doesn't have an identity specified.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51105

### Token doesn't contain identity

#### Possible Causes 
The token doesn't have an identity specified.

#### Possible Solutions
Confirm that there is an identity field in the token. To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51106
Log Level: ERROR  
Message: Twilsock: Active product doesn't match with service instance product  
Secondary Message: Passed service instance belongs to another product.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51106

### Active product doesn't match with service instance product

#### Possible Causes 
Passed service instance belongs to another product.

#### Possible Solutions
Verify matching product and service instance is selected.



# Code: 51107
Log Level: ERROR  
Message: Twilsock: Service can't be used  
Secondary Message: Service can't be used    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51107

### Service can't be used



# Code: 51108
Log Level: ERROR  
Message: Twilsock: Service instance disabled  
Secondary Message: Service instance is disabled.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51108

### Service instance disabled

#### Possible Causes 
Service instance is disabled.

#### Possible Solutions
Please use a different service instance.



# Code: 51109
Log Level: ERROR  
Message: Twilsock: Service instance is under legal hold  
Secondary Message: Specified service instance is under legal hold.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51109

### Service instance is under legal hold

#### Possible Causes 
Specified service instance is under legal hold.

#### Possible Solutions
Please use a different service instance.



# Code: 51110
Log Level: ERROR  
Message: Twilsock: Token contains multiple grants of same product  
Secondary Message: Duplication of grants for the same product.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51110

### Token contains multiple grants of same product

#### Possible Causes 
Duplication of grants for the same product.

#### Possible Solutions
Remove duplications of products from grants section in the token. 

To verify the token being passed, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51111
Log Level: ERROR  
Message: Twilsock: Service instance limit reached  
Secondary Message: Service instance limit has been reached for the specified account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51111

### Service instance limit has been reached

#### Possible Causes 
Service instance limit has been reached for the specified account.

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your account's service Instance limits.



# Code: 51112
Log Level: ERROR  
Message: Twilsock: Product usage disabled  
Secondary Message: Product usage has been disabled for this instance.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51112

### Product usage disabled

#### Possible Causes 
Product usage has been disabled for this instance.

#### Possible Solutions
If you are sure the service instance and product are correct, please contact with Customer Support.



# Code: 51113
Log Level: ERROR  
Message: Twilsock: Product usage is not enabled  
Secondary Message: Product usage is not enabled.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51113

### Product usage is not enabled

#### Possible Causes 
Product usage is not enabled.



# Code: 51114
Log Level: ERROR  
Message: Twilsock: Invalid access token header  
Secondary Message: The token has an invalid header.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51114

### Invalid access token header

#### Possible Causes 
The token has an invalid header.

#### Possible Solutions
Confirm a valid token is being passed in the request.

To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51115
Log Level: ERROR  
Message: Twilsock: Invalid access token subject  
Secondary Message: Subject provided in the token is invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51115

### Invalid access token subject

#### Possible Causes 
Subject provided in the token is invalid.

#### Possible Solutions
Confirm a valid token is being passed with a valid subject. 

To check whether the token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51116
Log Level: ERROR  
Message: Twilsock: Invalid access token grants  
Secondary Message: Provided token has invalid grants.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51116

### Invalid access token grants

#### Possible Causes 
Provided token has invalid grants.

#### Possible Solutions
Confirm valid grants are being passed in the token.

To check whether the token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51117
Log Level: ERROR  
Message: Twilsock: Invalid access token signature  
Secondary Message: The token has an invalid signature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51117

### Invalid access token signature

#### Possible Causes 
The token has an invalid signature.

#### Possible Solutions
Confirm a valid and signed token is being passed.

To check whether signed correctly, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51118
Log Level: ERROR  
Message: Twilsock: Invalid claim set  
Secondary Message: Claim set provided in token is invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51118

### Invalid claim set

#### Possible Causes 
Claim set provided in token is invalid.

#### Possible Solutions
Verify the token has a valid claim set.

To check whether the token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51119
Log Level: ERROR  
Message: Twilsock: Token expired  
Secondary Message: The token has been expired.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51119

### Token expired

#### Possible Causes 
The token has been expired.

#### Possible Solutions
Please use a valid token.

To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51120
Log Level: ERROR  
Message: Twilsock: Token is not valid yet  
Secondary Message: Token is not valid yet    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51120

### Token is not valid yet



# Code: 51121
Log Level: ERROR  
Message: Twilsock: Token expiration time exceeds maximum  
Secondary Message: Token expiration time exceeds max allowed amount.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51121

### Token expiration time exceeds maximum

#### Possible Causes 
Token expiration time exceeds max allowed amount.

#### Possible Solutions
Use a proper expiration time to fit into the allowed range.

To check whether the access token is structurally correct, you can use the tools available at [jwt.io](https://jwt.io).



# Code: 51122
Log Level: ERROR  
Message: Twilsock: Authentication failed  
Secondary Message: Authentication failed.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51122

### Authentication failed

#### Possible Causes 
Missing or wrong information provided as credentials.

#### Possible Solutions
Confirm your credentials are correct and being passed correctly.



# Code: 51123
Log Level: ERROR  
Message: Twilsock: Upstream not resolved  
Secondary Message: Specified upstream couldn't be resolved.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51123

### Upstream not resolved

#### Possible Causes 
Specified upstream couldn't be resolved.

#### Possible Solutions
Verify that upstream is valid and passed correctly. 



# Code: 51124
Log Level: ERROR  
Message: Twilsock: Too many connections  
Secondary Message: Number of connections for this account is higher than expected!    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51124

### Too many connections

#### Possible Causes 
Number of connections for this account is higher than expected!

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your account's limits.



# Code: 51125
Log Level: ERROR  
Message: Twilsock: Too many updates  
Secondary Message: Number of updates for this account is higher than expected!    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51125

### Too many updates

#### Possible Causes 
Number of updates for this account is higher than expected!

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your account's limits.



# Code: 51126
Log Level: ERROR  
Message: Twilsock: DNC limit has been reached  
Secondary Message: DNC limit has been reached    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51126

### DNC limit has been reached



# Code: 51127
Log Level: ERROR  
Message: Twilsock: PNC limit has been  
Secondary Message: N/A    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51127

### Twilsock: PNC limit hit



# Code: 51128
Log Level: ERROR  
Message: Twilsock: Too many messages per connection  
Secondary Message: Number of messages for one connection is higher than expected!    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51128

### Too many messages per connection

#### Possible Causes 
Number of messages for one connection is higher than expected!

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your account's limits.



# Code: 51129
Log Level: ERROR  
Message: Twilsock: Too many messages per account  
Secondary Message: Number of messages for this account is higher than expected!    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51129

### Too many messages per account

#### Possible Causes 
Number of messages for this account is higher than expected!

#### Possible Solutions
Verify that your application is not misbehaving and the load is expected. If everything is as expected then contact Customer Support to increase your account's limits.



# Code: 51130
Log Level: ERROR  
Message: Twilsock: Token is invalid!  
Secondary Message: Token is invalid!    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51130

### Token is invalid!



# Code: 51131
Log Level: ERROR  
Message: Twilsock: Authentication failed  
Secondary Message: N/A    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 51131

### Authentication failed



# Code: 51201
Log Level: ERROR  
Message: Twilsock : CPS, Init per Account  
Secondary Message: Too many connection requests for this account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
Too many connection requests for this account.



# Code: 51202
Log Level: ERROR  
Message: Twilsock : CPS, Too many requests  
Secondary Message: Too many requests    
Description: null  
Cause: null  
Solutions: null  
Docs:
Too many requests



# Code: 51215
Log Level: ERROR  
Message: Twilsock: Unauthorized  
Secondary Message: Auth failure    
Description: null  
Cause: null  
Solutions: null  
Docs:
Auth failure



# Code: 52000
Log Level: ERROR  
Message: Internal notification error  
Secondary Message: Internal error is inside of notification services    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52000

### Internal error

#### Possible Causes 
*  An internal error has occurred that prevented SignalWire from processing of your request.

#### Possible Solutions
* If our status page has no information, [contact support](https://signalwire.com/support) with details about the requests that are failing, and we will investigate.



# Code: 52001
Log Level: ERROR  
Message: Invalid destination binding  
Secondary Message: Provided destination binding information is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 52001

### Invalid destination binding

The message has been rejected by channel due to an invalid destination information. This specific message has not been sent.

### Possible causes
- Address or identity or notification protocol version in a Notify Binding (or ToBinding) were invalid

### Possible solutions
- Make sure that you do not modify the address before creating the Binding or sending ToBinding property of Notification Request. 




# Code: 52002
Log Level: ERROR  
Message: Invalid Credential Sid  
Secondary Message: Provided credential sid is invalid or empty    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52002

### Invalid Credential Sid
In order to send push notifications to iOS and Android devices you need to configure a Credential that allows SignalWire to send notifications to your app. 

You can configure these at different places depending on which SignalWire product you use:

* Chat: Configure in access token
* Notify: Configure default Credential in Notify Service or Binding specific one in Binding
* Voice SDK: Configure in access token

#### Possible Causes 
*   Credential SID is not configured correctly

#### Possible Solutions
* If using Chat include Credential SID in access token. Check out this [guide](https://signalwire.com)
*  If using Notify, either configure default Credential SID in your [Service](https://signalwire.com) request
* If using Voice SDK, include Credential SID in access token. Check out our [documentation](https://signalwire.com) for details



# Code: 52003
Log Level: ERROR  
Message: Invalid Credential Type  
Secondary Message: Credential type and binding type does not match    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52003

### Invalid Credential Type

#### Possible Causes 
*  Type of credential provided in access token does not match that of the registration. For example you included the SID of a APS type Credential in the access token for an Android application using GCM.

#### Possible Solutions
*  Make sure you provide the right Credential SID in the access token.



# Code: 52004
Log Level: ERROR  
Message: Credential SID not specified  
Secondary Message: Credential SID not specified in binding, token or service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52004

### Credential SID not specified

Credential SIDs are used to determine which Credential resource to use to send a given push notification (APNS, FCM or GCM). For each delivery attempt the system tries to select a Credential SID depending on the API request and configuration. This error indicates that the system did not find any available Credential SID to use and hence failed to send the delivery attempt.

#### Possible Causes 
Configuration is slightly different depending on which SignalWire API and product you are using.
*  Notify: Credential SID can be specified in the Notify Service or in the Binding. This error indicates neither of those were specified.
*  Chat, Voice, Account Security: Credential SID can be specified in the SignalWire Access Token used to register for push notifications. This error indicates that the token missed that information.

#### Possible Solutions
*  Notify: Set the Credential SID either in the Notify Service or in the Create Binding request
*  Chat, Voice, Account Security: Set the Credential SiD in the Access Token



# Code: 52051
Log Level: ERROR  
Message: Internal error when sending notification via client connection  
Secondary Message: An unexpected error has happened in notification flow via realtime client connection    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52051

### Internal error when sending notification via client connection

#### Possible Causes 
*  Our client connection gateway is potentially unavailable. We apologize.

#### Possible Solutions
* If our status page has no information, [contact support](https://signalwire.com/support) with details about the requests that are failing, and we will investigate.



# Code: 52052
Log Level: WARNING  
Message: Client connection not created or closed  
Secondary Message: Websocket gateway could not find connection to user for sending notification    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52052

### Client connection not found

#### Possible Causes 
*  Client connection not found.

#### Possible Solutions
*  No action needed. The client will automatically reconnect when possible.



# Code: 52071
Log Level: ERROR  
Message: Internal error when sending notification via mqtt client connection  
Secondary Message: An unexpected error has happened in notification flow via mqtt client connection    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52071

### RtdNotification: Internal error when sending notification via mqtt client connection

#### Possible Causes 
*  Temporary outage of client connection mqtt gateway.

#### Possible Solutions
*  Ask customer support for investigation. 



# Code: 52072
Log Level: WARNING  
Message: Client mqtt connection not created or closed  
Secondary Message: Mqtt gateway could not find connection to user for sending notification    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52072

### RtdNotification: Mqtt client connection not created or closed

#### Possible Causes 
*  Most probably mqtt client had disconnected but registration didn't removed yet.

#### Possible Solutions
*  Check this warning happens only once for certain registration id. 



# Code: 52101
Log Level: ERROR  
Message: Invalid GCM Api Key or FCM Secret  
Secondary Message: GCM/FCM credential contains invalid or empty ApiKey/Secret    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52101

### Invalid GCM Api Key or FCM Secret

#### Possible Causes 
*  The GCM API Key or FCM Secret provided is invalid.

#### Possible Solutions
* Provide a valid GCM API Key or FCM Secret



# Code: 52102
Log Level: ERROR  
Message: Invalid GCM/FCM registration token  
Secondary Message: GCM/FCM service responded with InvalidRegistration error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52102

### Invalid GCM/FCM registration token

#### Possible Causes 
*  Invalid GCM/FCM registration token provided via the Android SDK or the REST API.

#### Possible Solutions
*  Make sure you do not modify the registration token before providing it to SignalWire via the SDK or the REST API.
*  If you are using a command line tool to provide the registration token, make sure that it is URL-encoded.



# Code: 52103
Log Level: ERROR  
Message: GCM/FCM client uninstalled or turned off notifications  
Secondary Message: GCM/FCM service marked used registration id as unusable anymore    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52103

### GCM/FCM client uninstalled or turned off notifications

#### Possible Causes 
*  GCM/FCM client application was uninstalled or the user turned off push notifications.

#### Possible Solutions
*  No action needed. We have disabled the registration token and we will not send new notifications to it.



# Code: 52104
Log Level: ERROR  
Message: Mismatched GCM/FCM sender ID  
Secondary Message: GCM/FCM application used different sender id with provided application credentials (ApiKey/Secret)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52104

### Mismatched GCM/FCM sender ID

#### Possible Causes 
*  GCM/FCM API Key provided is not allowed to send notifications to the registration token.

#### Possible Solutions
Make sure that you are using an API Key/Secret that is allowed to send notifications to your application.

*	Add the Project number of the Google Developers Console/Firebase Console project that the API Key/Secret belongs to to the allowed sender IDs of your application
*	Alternatively use an API Key/Secret from a project that is already allowed to send notifications to your application



# Code: 52105
Log Level: ERROR  
Message: Invalid GCM/FCM package name  
Secondary Message: Mismatch package name in request and from GCM/FCM registration id    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52105

### RtdNotification: Invalid GCM/FCM package name

#### Possible Causes 
*  Application configuration problem.

#### Possible Solutions
*  Make sure the message was addressed to a registration token whose package name matches the value passed in the request. 



# Code: 52106
Log Level: ERROR  
Message: Notification too large for GCM/FCM  
Secondary Message: Try to send notification through GCM/FCM binding channel with too big payload    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52106

### Notification too large for GCM/FCM

#### Possible Causes 
*  Payload generated for GCM/FCM exceeded the 4 KB limit.

#### Possible Solutions
*  Reduce the size of the payload.



# Code: 52107
Log Level: ERROR  
Message: Invalid custom key for GCM/FCM  
Secondary Message: Using one of custom keys is rejected by GCM/FCM service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52107

### Invalid custom key for GCM/FCM

#### Possible Causes 
*  You have specified an invalid key in the custom key-value pair section of the payload.

#### Possible Solutions
*  GCM/FCM rejects some keys including from, gcm and anything prefixed by google. Make sure you are not using any of these keys.



# Code: 52108
Log Level: ERROR  
Message: GCM/FCM device message rate exceeded  
Secondary Message: Too many requests were sent to GCM/FCM service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52108

### GCM/FCM device message rate exceeded

#### Possible Causes 
*  The rate of messages to a particular device via GCM/FCM is too high.

#### Possible Solutions
*  Reduce the number of messages sent to this device and do not immediately retry sending to this device.



# Code: 52109
Log Level: ERROR  
Message: GCM/FCM unauthorized error  
Secondary Message: GCM/FCM could not authorise request    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52109

### GCM/FCM unauthorized error

#### Possible Causes 
*  ApiKey/Secret is revoked or invalid.

#### Possible Solutions
Provide a new API Key/Secret and make sure your application is configured to use it.

* If using IP-Messaging, update your Credential with the new API Key/Secret.
* If using User Notifications, you can either update your Credential or create a new Credential and update your Service's GcmCredentialSid/FcmCredentialSid.



# Code: 52110
Log Level: ERROR  
Message: GCM/FCM service unavailable  
Secondary Message: GCM/FCM service is temporary unavailable    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52110

### GCM/FCM service unavailable

#### Possible Causes 
*  GCM/FCM service is temporarily unavailable or SignalWire cannot connect to it.

#### Possible Solutions
*  If the problem persists, [contact support](https://signalwire.com/support) and we will investigate.



# Code: 52111
Log Level: ERROR  
Message: GCM/FCM unknown error  
Secondary Message: Unexpected error has happened in GCM/FCM binding adaptor    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52111

### GCM/FCM unknown error

#### Possible Causes 
*  Unknown GCM/FCM error.

#### Possible Solutions
*  If the problem persists, contact [customer support](https://signalwire.com/support) and provide the time of the error and details about the requests that are failing.



# Code: 52131
Log Level: ERROR  
Message: Invalid APNs credentials  
Secondary Message: APN certificate or Private Key are invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52131

### Invalid APNs credentials

#### Possible Causes 
*  Credential (certificate and private key) is invalid.
*  Certificate expired.

#### Possible Solutions
*  Make sure you have valid certificate and private key provided in your Credential.



# Code: 52133
Log Level: ERROR  
Message: Invalid APNs device token size  
Secondary Message: APN token size is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52133

### Invalid APNs device token size

#### Possible Causes 
*  Invalid APNs token was provided.

#### Possible Solutions
*  Make sure you do not modify the APNs device token before providing it to SignalWire.



# Code: 52134
Log Level: ERROR  
Message: Invalid APNs device token  
Secondary Message: APNs rejected notification with InvalidToken reason    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52134

### Invalid APNs device token

#### Possible Causes 
*  APNs device token format is invalid.
*  Trying to use a development certificate for a production application or vice-versa.

#### Possible Solutions
*  Make sure you do not modify the device token before providing it to SignalWire. If using a command line tool make sure to url-encode the token.
*  Make sure that you are using a development certificate for a development application and a production certificate for a production application.
	* If you are using a traditional certificate, you can tell its environment by looking at the common name field
		* For a development certificate, it will start with: Apple Development IOS Push Services
		* For a production certificate, it will start with: Apple Push Services
	* If you are using a universal certificate, you can use it for both development and production applications. However you have to make sure that you have properly indicated the type of application by setting the sandbox parameter when you create the credential. You can check the sandbox flag of your credential via the [REST API](/docs/api/ip-messaging/rest/credentials#action-get).



# Code: 52135
Log Level: ERROR  
Message: Missing subject in APNs certificate  
Secondary Message: APNs certificate is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52135

### Missing subject in APNs certificate

#### Possible Causes 
*  The subject of APNs certificate is missing.

#### Possible Solutions
*  The subject of the APNs certificate is the bundle ID of your application. Make sure you have a bundle ID defined when generating the certificate signing request.



# Code: 52136
Log Level: ERROR  
Message: Missing payload for APNs delivery  
Secondary Message: Payload must be provided to send notification over APNs    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52136

### Missing payload for APNs delivery

#### Possible Causes 
*  APNs delivery had no payload.

#### Possible Solutions
*  Make sure to provide a payload using at least one of Body, Sound, Action, Data or Aps parameters.



# Code: 52137
Log Level: ERROR  
Message: Invalid size of subject in APNs certificate  
Secondary Message: APNs certificate is invalid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52137

### Invalid size of subject in APNs certificate

#### Possible Causes 
*  The subject of APNs certificate is of invalid size.

#### Possible Solutions
*  The subject of the APNs certificate is the bundle ID of your application. Make sure you have a valid bundle ID defined when generating the certificate signing request.



# Code: 52138
Log Level: ERROR  
Message: APNs payload too large  
Secondary Message: Provided payload is too large for APNs    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52138

### APNs payload too large

#### Possible Causes 
*  Generated APNs payload exceeded limit.

#### Possible Solutions
*  The maximum payload size allowed for iOS 8+ devices is 2KB for earlier devices it is 256 B. Revise your payload so that it does not exceed this limit.



# Code: 52139
Log Level: ERROR  
Message: APN service shutdown  
Secondary Message: APNs is shutdown    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52139

### APNs service shutdown

#### Possible Causes 
*  APNs delivery rejected because APNs service is shutting down (e.g. for maintenance).

#### Possible Solutions
*  If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52140
Log Level: ERROR  
Message: Unknown APNs error  
Secondary Message: Unexpected error has happened in Apn binding adaptor    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52140

### Unknown APNs error

#### Possible Causes 
*  Unknown APNs error.

#### Possible Solutions
*  If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52141
Log Level: ERROR  
Message: The provided APNs device token has been unregistered  
Secondary Message: The device token specified is inactive for the specified topic.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52141

### The provided APNs device token has been unregistered

#### Possible Causes 
*  APNs notification delivery rejected because the app has either been uninstalled or notifications have been disabled.
#### Possible Solutions
* If the offending Binding still exists, remove it manually or avoid sending Notifications to it.
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52142
Log Level: ERROR  
Message: The provided APNs device token is not correct  
Secondary Message: APNs Device Token is missing or malformed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52142

### The provided APNs device token is not correct

#### Possible Causes 
*  The APNs device token is either malformed or missing.

#### Possible Solutions
*  Please verify that you're capturing the device token correctly.
*  If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52143
Log Level: ERROR  
Message: The push notification was rejected by APNs  
Secondary Message: Request was malformed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52143

### The push notification was rejected by APNs

#### Possible Causes 
* The push notification topic in the certificate is incorrect
* The device token cannot be used with the specified topic
* Pushing to the specified topic is not allowed
* An internal SignalWire error has occurred

#### Possible Solutions
* Verify that your certificate is correct
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52144
Log Level: ERROR  
Message: APNs experienced an internal error  
Secondary Message: APNs was unable to handle your request    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52144

### APNs experienced an internal error

#### Possible Causes 
* APNs had an unexpected error
* APNS is unavailable
* Request to APNs timed out

#### Possible Solutions
* Retry the request at a later time
*  If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52145
Log Level: ERROR  
Message: Failed to authenticate with APNs  
Secondary Message: Could not authenticate with APNs using the provided credentials    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52145

### Failed to authenticate with APNs

#### Possible Causes 
*  Unable to complete the TLS handshake with APNs.

#### Possible Solutions
* Verify that your certificate and private key are correct and can be used together.
* Verify that your certificate has not been revoked.
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52147
Log Level: WARNING  
Message: Too many APNs provider token updates  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52147

### Too many APNs provider token updates"

#### Possible Causes 
* A new APNs provider token is being generated too often
* The APNs provider token is not cached by SignalWire

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52148
Log Level: ERROR  
Message: Expired APNs provider token used  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52148

### Expired APNs provider token used

#### Possible Causes 
* The APNs provider token has been in the cache for too long
* The APNs provider token is generated incorrectly

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52149
Log Level: ERROR  
Message: Invalid APNs provider token used  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52149

### Invalid APNs provider token used

#### Possible Causes 
* The APNs provider token is malformed or otherwise incorrect

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52161
Log Level: ERROR  
Message: Empty Credentials  
Secondary Message: Credentials are misconfigured or not exist yet    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52161

### Empty Credentials

#### Possible Causes 
*  Credentials are invalid or do not exist for provided credential sid.

#### Possible Solutions
*  Make sure you have credential is valid.



# Code: 52162
Log Level: ERROR  
Message: Credentials do not belong to used account  
Secondary Message: Account sid from credentials is not equal account sid which is used for sending notification    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52162

### Credentials do not belong to used account

#### Possible Causes 
*  The credential you have tried to use does not belong to the account.

#### Possible Solutions
*  Use a credential that belongs to the account.



# Code: 52163
Log Level: ERROR  
Message: Incorrect URL used to retrieve Webhook Credentials  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52163

### Incorrect URL used to retrieve Webhook Credentials

#### Possible Causes 
*  An incorrect URL was specified in your Webhook Credentials URL field
*  The URL was correct, but returned a 404 response

#### Possible Solutions
*  Verify your Webhook Credential URL and response



# Code: 52164
Log Level: ERROR  
Message: No Credentials found for the supplied Binding Type  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52131

### Invalid APNs credentials

#### Possible Causes 
*  The Webhook Credential was configured for the wrong Binding Type
*  Your token endpoint responded with the respective error code by mistake
*  An internal SignalWire error occurred

#### Possible Solutions
*  Verify that your Webhook Credential is set up for the correct Binding Type
*  Verify that your token endpoint is set up correctly



# Code: 52165
Log Level: ERROR  
Message: No Credentials found for the supplied Identifier  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52165

### No Credentials found for the supplied Identifier

#### Possible Causes 
*  Your Webhook Credential has a misconfigured Identifier value
*  Your token endpoint responded with the respective error code by mistake
*  An internal SignalWire error occurred

#### Possible Solutions
*  Verify that your Webhook Credential is configured correctly
*  Verify that your token endpoint is set up correctly



# Code: 52166
Log Level: ERROR  
Message: Webhook Credentials endpoint responded with Internal Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52166

### Webhook Credentials endpoint responded with Internal Error

#### Possible Causes 
*  Your Webhook Credentials endpoint is misconfigured

#### Possible Solutions
*  Verify that your token endpoint is configured correctly



# Code: 52167
Log Level: ERROR  
Message: Invalid Webhook Credentials response  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52167

### Invalid Webhook Credentials response

#### Possible Causes 
*  Your Webhook Credentials response did not adhere to the required schema

#### Possible Solutions
*  Verify that your Webhook Credentials response is correct



# Code: 52168
Log Level: ERROR  
Message: Webhook Credentials request timed out  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52168

### Webhook Credentials request timed out

#### Possible Causes 
*  The request attempt to the URL specified in your Webhook Credential timed out

#### Possible Solutions
*  Poor network conditions between SignalWire and your endpoint
*  Large delay during request processing by your endpoint



# Code: 52170
Log Level: ERROR  
Message: Too many Webhook Credential requests  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52170

### Too many Webhook Credential requests

#### Possible Causes 
*  You are sending Notifications too quickly
*  Your Webhook Credentials are not being cached correctly

#### Possible Solutions
*  Rate limit your requests accordingly
*  Verify the contents of your token endpoint response



# Code: 52171
Log Level: ERROR  
Message: Webhook Credentials request signature was not verified  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52171

### Webhook Credentials request signature was not verified

#### Possible Causes 
*  Your token endpoint was not able to verify the request signature

#### Possible Solutions
*  Verify that your Webhook Credentials are configured with the correct values
*  Verify that your signature verification logic is working as expected



# Code: 52172
Log Level: WARNING  
Message: Unexpected Binding Type used for Webhook Credentials request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52172

### Unexpected Binding Type used for Webhook Credentials request

#### Possible Causes 
* Your token endpoint responded with an error indicating that the Binding Type used was not correct

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52173
Log Level: WARNING  
Message: Unexpected Identifier used for Webhook Credentials request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52173

### Unexpected Binding Type used for Webhook Credentials request

#### Possible Causes 
* Your token endpoint responded with an error indicating that the Identifier used was not correct

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52174
Log Level: WARNING  
Message: Unexpected error response received for Webhook Credentials request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52174

### Unexpected error response received for Webhook Credentials request

#### Possible Causes 
* Your token endpoint responded with an unexpected error

#### Possible Solutions
* Verify that your Webhook Credential is configured correctly
* Verify that your token endpoint is configured correctly
* If the problem persists, please contact [customer support](https://signalwire.com/support).



# Code: 52181
Log Level: ERROR  
Message: Too many SMS notification requests  
Secondary Message: Global SMS notification per second limit exceeded    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52181

### RtdNotification: Global SMS notification per second limit exceeded

#### Possible Causes 
* Somebody is using SMS broadcast
* General high load

#### Possible Solutions
* At the moment there is a global SMS rate limit. This should be increased or eliminated entirely in the near future, but that requires some development. Please notify RTD Notifications team if this error starts occurring.



# Code: 52182
Log Level: ERROR  
Message: Messaging Service not specified  
Secondary Message: MessagingServiceSid in Notify Service is not specified    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52182

### Messaging Service not specified

In order to send SMS messages with Notify you need to configure a [Messaging Service](https://signalwire.com) and connect it with your Notify Service. Messaging Services make it easy to build SMS application by automatically selecting an optimal From phone number from pool you can define. 

#### Possible causes
- MessagingServiceSid in Notify Service is not specified

#### Possible solutions
- Configure a Messaging Service in the [console](/console/notify/services) or via the [REST API](https://signalwire.com).



# Code: 52201
Log Level: ERROR  
Message: Too many Facebook messenger notification requests  
Secondary Message: Too many Facebook messenger notifications are sent from the same Facebook page ID    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52201

### RtdNotification: Too many Facebook notifications from same page ID

#### Possible Causes 
* Customer is trying to broadcast Facebook messenger notifications 

#### Possible Solutions
* Please notify RTD Notifications team if this error starts occurring.



# Code: 52202
Log Level: ERROR  
Message: Facebook page is not connected to SignalWire  
Secondary Message: Facebook page configured in Service is not connected to SignalWire    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52202

### Facebook page ID is not connected to SignalWire

#### Possible Causes 
* Facebook page configured in Notify Service instance is not connected to SignalWire
* The connection may have been removed after the Notify Service had been configured

#### Possible Solutions
* [Configure a new Facebook page](https://signalwire.com) for your Notify Service
* [Connect the Facebook page](https://signalwire.com) to your SignalWire account



# Code: 52203
Log Level: ERROR  
Message: Missing body for Facebook Messenger delivery attempt  
Secondary Message: Either Body or FacebookMessenger parameter of Notification should be used to specify the message body    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52203

### Missing body for Facebook Messenger delivery attempt

Messenger messages need to have some content. You can specify this either via the [generic Body parameter](https://signalwire.com).

#### Possible causes
- Notification has neither Body not FacebookMessenger parameter set

#### Possible solutions
- Specify either Body or FacebookMessenger parameter when sending a Notification



# Code: 52211
Log Level: ERROR  
Message: Too many Alexa notifications  
Secondary Message: You are sending Alexa notifications too fast    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 52211

### Too many Alexa notifications

Your message has been rejected by the Alexa channel due too many messages.

### Possible causes
- You are making Send Notification requests too fast.
- You have made some bulk notification requests that created too many Alexa messages too fast.

### Possible solutions
- Slow down the rate of Send Notification requests.
- Target less recipients per bulk notification request and send the bulk requests more slowly.



# Code: 52212
Log Level: ERROR  
Message: Missing Alexa skill ID  
Secondary Message: You have not specified the Alexa Skill ID in the Notify Service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 52212

### Missing Alexa skill ID

Your Alexa message was rejected because the Alexa Skill ID was missing. This specific message was not sent.

### Possible causes
- You have not specified the Alexa Skill ID in your Notify Service.

### Possible solutions
- Connect your Alexa Skill via the [Channels console](https://signalwire.com).



# Code: 52213
Log Level: ERROR  
Message: Invalid Alexa user ID  
Secondary Message: The message has been rejected by Alexa channel due to an invalid User ID    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 52213

### Invalid Alexa user ID

The message has been rejected by Alexa channel due to an invalid User ID. This specific message has not been sent.

### Possible causes
- The user ID (Address) in a Notify Binding was invalid

### Possible solutions
- Make sure that you do not modify the user ID before creating the Binding. 




# Code: 52214
Log Level: ERROR  
Message: Alexa skill is not connected to SignalWire  
Secondary Message: The Alexa skill configured for the Notify Service is not connected to SignalWire    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52214

### Alexa skill not connected to SignalWire

#### Possible Causes 
* Alexa skill ID configured for Notify Service is not connected to SignalWire
* After the Notify Service had been configured, the Alexa skill was disconnected from SignalWire

#### Possible Solutions
* [Configure a new Alexa skill](https://signalwire.com) for your Notify Service
* [Connect the Alexa skill](https://signalwire.com) to your SignalWire Account



# Code: 52215
Log Level: ERROR  
Message: Missing Title parameter for Alexa  
Secondary Message: Message has been rejected by Alexa channel due to missing Title parameter    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error 52215

### Missing Title parameter for Alexa

Message has been rejected by Alexa channel due to missing Title parameter. Title is a required parameter for Alexa channel. This specific message has not been sent. 

### Possible causes
- Have not provided the Title parameter neither in the generic payload nor in the Alexa specific parameter. 

### Possible solutions
- Make sure that you provide the Title parameter for the Alexa channel either in the [generic payload](https://signalwire.com).



# Code: 52301
Log Level: WARNING  
Message: Resulted destination list for requested parameters is empty  
Secondary Message: Search of target destinations by provided parameters returned empty list    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52301

### Destination list for requested parameters is empty

#### Possible Causes 
*  No bindings were selected by the provided combination of parameters.

#### Possible Solutions
*  This may have been your intention, in that case no action is needed.
*  In case you expected to notify some of your bindings then review your parameters and bindings/registrations.



# Code: 52302
Log Level: ERROR  
Message: Too many recipients  
Secondary Message: Request has exceed the maximum recipients limit. No deliveries were attempted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52302

### Request has exceed the maximum recipients limit. No deliveries were attempted.

#### Possible Causes 
*  An attempt was made to send a broadcast notification that targeted too many recipients.

#### Possible Solutions
*  Send several notifications that target fewer recipients (e.g. by partitioning your audience using more Segments and Tags).
*  If there is no good way to partition your audience, contact support at support@signalwire.com.



# Code: 52303
Log Level: WARNING  
Message: Concurrent User update  
Secondary Message: Concurrent User update may have caused User data inconsistency    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52303

### Concurrent User update

Updating the same User resource in multiple concurrent requests may cause data inconsistency. This may result in that searches using multiple Segments will not find your User resource even if it should belong to all the specified Segments.

#### Possible Causes 
* Updating the same User resource (e.g. adding or removing it to/from Segments) in multiple requests concurrently.

#### Possible Solutions
* Change implementation so that if you need to add a User to multiple Segments at once you wait for each request to complete before trying the next one.
* For past errors, just read the affected User resource by using the [Read User API](https://signalwire.com) this will fix the data inconsistency.



# Code: 52304
Log Level: WARNING  
Message: User already exists  
Secondary Message: User with this identity already exists    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52304

### User already exists.

#### Possible Causes 
*  User with this identity has already been created, possibly during create binding operation.

#### Possible Solutions
*  As user already exists, no extra actions are required. However one might want to make sure that the existing user has all the necessary attributes, e.g. segments.



# Code: 52305
Log Level: WARNING  
Message: User already belongs to the segment  
Secondary Message: User is already a member of this segment    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52305

### User is already a member of this segment.

#### Possible Causes 
*  User has already been added to this segment.

#### Possible Solutions
*  As user is already a member of the required segment, no actions are needed.



# Code: 52306
Log Level: ERROR  
Message: Cannot delete User resource with Bindings  
Secondary Message: User cannot be deleted if it has at least one Binding    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52306

### Cannot delete User resource with Bindings

#### Possible Causes 
*  User has at least one Binding.

#### Possible Solutions
*  Make sure you delete all Bindings of a User before you try to delete the User.



# Code: 52307
Log Level: WARNING  
Message: No users with provided segments  
Secondary Message: No users were found belonging to the specified segment(s)    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52307

### No users with provided segments

No users were found belonging to the specified segment(s)

#### Possible Causes 
* A notification was sent to one or more user segments, but no users belong to these segments

#### Possible Solutions
* Check if correct segments were specified
* Check if users are assigned to correct segments



# Code: 52309
Log Level: ERROR  
Message: Channel provider replied with an error  
Secondary Message: Channel provider (Amazon Alexa, Facebook, etc) replied with an error    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 52309

### RtdNotification: Channel provider replied with an error

#### Possible Causes 
*  Some errors in channel configuration: destination address, credentials, permissions, etc.

#### Possible Solutions
*  Check channel configuration or re-install the channel and destination binding. Check response message from the provider in a debugger alert.



# Code: 52310
Log Level: ERROR  
Message: Notification TTL has expired  
Secondary Message: null    
Description: Notification expired during processing  
Cause: Notification took too much time or there are too many notifications  
Solutions: Increase TTL for notification or try again later  
Docs:
## ERROR - 52310

### Notification TTL has expired

 Notification expired during processing

#### Possible Causes
Notification took too much time or there are too many notifications

#### Possible Solutions
Increase TTL for notification or try again later



# Code: 52401
Log Level: WARNING  
Message: Too many notification log events   
Secondary Message: Too many notification log events, some may be discarded.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 52401

### Too many notification log events 

#### Possible Causes 
*  Notification requests resulted in too many delivery attempts. As a result, some of the notification events were rate limited and might not be visible in the notification log in console. The message delivery itself is not affected.

#### Possible Solutions
* When sending large broadcasts, slow down the rate of Send Notification requests, e.g. to 1 / s



# Code: 53000
Log Level: ERROR  
Message: Signaling connection error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53000: Signaling connection error

Raised whenever a signaling connection error occurs that is not covered by a more specific error code.



# Code: 53001
Log Level: ERROR  
Message: Signaling connection disconnected  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53001: Signaling connection disconnected

Raised whenever the signaling connection is unexpectedly disconnected.

#### Causes

 * The device running your application lost its internet connection.

#### Solutions

 * Ensure the device running your application has access to a stable internet connection.




# Code: 53002
Log Level: ERROR  
Message: Signaling connection timed out  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53002: Signaling connection timed out

Raised whenever the signaling connection times out.




# Code: 53003
Log Level: ERROR  
Message: Client received an invalid signaling message  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53003: Client received an invalid signaling message

Raised whenever the Client receives a message from the Server that the Client cannot handle.



# Code: 53004
Log Level: ERROR  
Message: Client sent an invalid signaling message  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53004: Client sent an invalid signaling message

Raised whenever the Client sends a message to the Server that the Server cannot handle.



# Code: 53100
Log Level: ERROR  
Message: Room name is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53100: Room name is invalid

Raised whenever a Room name is invalid, and the scenario is not covered by a more specific error code.

#### Causes

 * The Room name does not adhere to the Room name requirements.

#### Solutions

 * Choose a Room name adheres to the Room name requirements.



# Code: 53101
Log Level: ERROR  
Message: Room name is too long  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53101: Room name is too long

Raised whenever a Room name is too long.

#### Causes

 * The Room name is too long.

#### Solutions

 * Choose a shorter Room name.



# Code: 53102
Log Level: ERROR  
Message: Room name contains invalid characters  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53102: Room name contains invalid characters

Raised whenever a Room name contains invalid characters.

#### Causes

 * The Room name contains an invalid UTF-8 byte sequence.

#### Solutions

 * Choose a Room name that is a valid UTF-8 string.



# Code: 53103
Log Level: ERROR  
Message:  Unable to create Room  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53103: Unable to create Room

Raised whenever the Server is unable to create a Room.

#### Causes

 * You may have chosen to enable Room features that are unsupported or not available to your account.
 * A server-side error has occurred.
 * An existing Room exists with the same name

#### Solutions

 * Choose a Room configuration supported by your account.
 * If the problem persists, try connecting to another region.
 * Create a Room with a unique name



# Code: 53104
Log Level: ERROR  
Message: Unable to connect to Room  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53104: Unable to connect to Room

Raised whenever a Client is unable to connect to a Room, and the scenario is not covered by a more specific error code.

#### Causes

 * A server-side error has occurred.

#### Solutions

 * If the problem persists, try connecting to another region.



# Code: 53105
Log Level: ERROR  
Message: Room contains too many Participants  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53105: Room contains too many Participants

Raised whenever a Client is unable to connect to a Room because the Room contains too many Participants.

#### Causes

 * A Client attempted to connect to a Room that already contained the maximum number of Participants.

#### Solutions

 * Have one or more Participants disconnect from the Room in order to make room for the Client to connect.



# Code: 53106
Log Level: ERROR  
Message: Room not found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53106: Room not found

Raised whenever attempting operation on a non-existent Room.

#### Causes

 * Attempted to perform operation on non-existent Room.

#### Solutions

 * Make sure Room exists before re-attempting operation.



# Code: 53107
Log Level: ERROR  
Message: MaxParticipants is out of range  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53107: MaxParticipants is out of range

Raised in the REST API when MaxParticipants is set out of range.

#### Causes

 * REST API call to Create or Update Room instance with MaxParticipants out of range.

#### Solutions

 * Set the MaximumParticipants value from 1 up to the maximum allowed for the Room Type.



# Code: 53108
Log Level: ERROR  
Message: RoomType is not valid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53108: RoomType is not valid

Raised in the REST API when the user attempts to create a Room with an invalid RoomType

#### Causes

 * REST API call to Create Room instance with an invalid RoomType.

#### Solutions

 * Set the RoomType value to a valid type or leave this field blank for the default.



# Code: 53109
Log Level: ERROR  
Message: Timeout is out of range  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53109: Timeout is out of range

Raised in the REST API when Timeout is set out of range.

#### Causes

 * REST API call to Create or Update Room instance with Timeout out of range.

#### Solutions

 * Set the Timeout value (in seconds) from 1 second up to a maximum of 1 hour.



# Code: 53110
Log Level: ERROR  
Message: StatusCallbackMethod is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53110: StatusCallbackMethod is invalid

Raised in the REST API when StatusCallbackMethod is set to an invalid value.

#### Causes

 * REST API call to Create or Update Room instance with StatusCallbackMethod set to an invalid value.

#### Solutions

 * Set StatusCallbackMethod to either GET or POST or leave blank for the default.



# Code: 53111
Log Level: ERROR  
Message: StatusCallback is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53111: StatusCallback is invalid

Raised in the REST API when StatusCallback is not a valid URL or the url is too long.

#### Causes

 * REST API call to Create or Update Room instance with StatusCallback set to an invalid URL.

#### Solutions

 * Set StatusCallback to a valid URL less than 1024 characters or leave blank to disable callbacks.




# Code: 53112
Log Level: ERROR  
Message: Status is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53112: Status is invalid

Raised in the REST API when Status is not valid or the Room is not in-progress.

#### Causes

 * REST API call to Update Room instance with Status that is invalid or cannot be applied to the current Room state.

#### Solutions

 * Set Status to completed and only apply to a Room that is in-progress.




# Code: 53113
Log Level: ERROR  
Message: Room creation failed  
Secondary Message: A Room exists with the same name    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53113: Room creation failed

Raised when the Server is unable to create a Room when the same name already exists.

#### Causes

 * An existing Room exists with the same name

#### Solutions

 * Create a Room with a unique name



# Code: 53200
Log Level: ERROR  
Message: Participant identity is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53200: Participant identity is invalid

Raised whenever a Participant identity is invalid, and the scenario is not covered by a more specific error code.

#### Causes

The Participant identity does not adhere to the Participant identity requirements. 

Possible causes:

* The identity is null or an empty string.
* Another Participant with the same identity already exists in the Room.
* The identity has more than 128 characters (NOTE: Double-byte characters are counted as 2 characters).


#### Solutions

 * Choose a Participant identity adheres to the Participant identity requirements.



# Code: 53201
Log Level: ERROR  
Message: Participant identity is too long  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53201: Participant identity is too long

Raised whenever a Participant identity is too long.

#### Causes

 * The Participant identity is too long.

#### Solutions

 * Choose a shorter Participant identity.



# Code: 53202
Log Level: ERROR  
Message: Participant identity contains invalid characters  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53202: Participant identity contains invalid characters

Raised whenever a Participant identity contains invalid characters.

#### Causes

 * The Participant identity contains an invalid UTF-8 byte sequence.

#### Solutions

 * Choose a Participant identity that is a valid UTF-8 string.



# Code: 53203
Log Level: ERROR  
Message: Participant has too many Tracks  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53203: Participant has too many Tracks

Raised whenever a Participant has too many Tracks.

#### Causes

 * A Client added more than the maximum number of Tracks allowed per Participant.

#### Solutions

 * Have the Client remove one or more Tracks.



# Code: 53204
Log Level: ERROR  
Message: Participant not found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53204: Participant not found

Raised whenever attempting operation on a non-existent Participant.

#### Causes

 * Attempting operation on an non-existent Participant.

#### Solutions

 * Make sure participant exists before re-attempting operation.



# Code: 53205
Log Level: ERROR  
Message: Participant disconnected because of duplicate identity  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53205: Participant disconnected because of duplicate identity

Raised by the server to the existing Participant when a new Participant joins a Room with the same identity as the existing Participant.

#### Causes

 * Using the same identity for more than one Room Participant.

#### Solutions

 * Make sure that each Participant joins a Room with a unique identity.





# Code: 53215
Log Level: ERROR  
Message: Invalid Subscribe Rule(s)  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
| Code  | Description | Explanation | Causes | Solutions |
| ------  | ----------- | ----------- | ------ | --------- |
| 53215  | Subscribe Rule(s) invalid | Raised by the server when a Subscribe Rule is invalid. | • An empty set of rules `[]` is not allowed. | • Ensure the set of rules has at least one rule. |
| | | | • A rule containing `all` must have a value of `true` and must not contain any other expression. | • If you include `all` in a rule, the only other allowed field is `type`. |
| | | | • A rule must contain a `type` field. | • Ensure every rule has a `type` field. |
| | | | • If `kind` is used, it must be one of `audio`, `video` or `data`. | • Ensure `kind` is one of the valid enum values. |
| | | | • A maximum of 20 rules are allowed per subscriber. | • Limit the number of rules to 20 or fewer. |



# Code: 53300
Log Level: ERROR  
Message: Track is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53300: Track is invalid

Raised whenever a Track is invalid, and the scenario is not covered by a more specific error code.



# Code: 53301
Log Level: ERROR  
Message: Track name is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53301: Track name is invalid

Raised whenever a Track name is invalid, and the scenario is not covered by a more specific error code.

#### Causes

 * The Track name does not adhere to the Track name requirements.

#### Solutions

 * Choose a Track name adheres to the Track name requirements.




# Code: 53302
Log Level: ERROR  
Message: Track name is too long  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53302: Track name is too long

Raised whenever a Track name is too long.

#### Causes

 * The Track name is too long.

#### Solutions

 * Choose a shorter Track name.




# Code: 53303
Log Level: ERROR  
Message: Track name contains invalid characters  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53303: Track name contains invalid characters

Raised whenever a Track name contains invalid characters.

#### Causes

 * The Track name contains an invalid UTF-8 byte sequence.

#### Solutions

 * Choose a Track name that is a valid UTF-8 string.




# Code: 53304
Log Level: ERROR  
Message: Track name is duplicated  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53304: Track name is duplicated

Raised whenever a Participant is currently publishing a Track with the same name.

#### Causes

 * A Track with the same name already exists.

#### Solutions

 * Choose a Track name that is unique per Participant.




# Code: 53400
Log Level: ERROR  
Message: Client is unable to create or apply a local media description  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53400: Client is unable to create or apply a local media description

Raised whenever a Client is unable to create or apply a local media description.

#### Causes

 * The Client may not be using a supported WebRTC implementation.
 * The Client may not have the necessary resources to create or apply a new media description.

#### Solutions

 * If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.



# Code: 53401
Log Level: ERROR  
Message: Server is unable to create or apply a local media description  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53401

### Server is unable to create or apply a local media description

Raised whenever the Server is unable to create or apply a local media description.



# Code: 53402
Log Level: ERROR  
Message: Client is unable to apply a remote media description  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53402: Client is unable to apply a remote media description

Raised whenever the Client receives a remote media description but is unable to apply it.

#### Causes

 * The Client may not be using a supported WebRTC implementation.
 * The Client may be connecting peer-to-peer with another Participant that is not using a supported WebRTC implementation.
 * The Client may not have the necessary resources to apply a new media description.

#### Solutions

 * If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.




# Code: 53403
Log Level: ERROR  
Message: Server is unable to apply a remote media description  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53403

### Server is unable to apply a remote media description

Raised whenever the Server receives a remote media description but is unable to apply it.



# Code: 53404
Log Level: ERROR  
Message: No supported codec  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53404

### No supported codec

Raised whenever the intersection of codecs supported by the Client and the Server (or, in peer-to-peer, the Client and another Participant) is empty.



# Code: 53405
Log Level: ERROR  
Message: Media connection failed or Media activity ceased  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53405: Media connection failed or Media activity ceased

Raised by the Client or Server whenever a media connection fails or raised by the Client whenever it detects that media has stopped flowing.



# Code: 53500
Log Level: ERROR  
Message: Unable to acquire configuration  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53500: Unable to acquire configuration

Raised whenever the Client is unable to acquire configuration information from the Server.

#### Causes

 * The device running your application lost its Internet connection.
 * A server-side error has occurred.

#### Solutions

 * Ensure the device running your application has access to a stable internet connection. If the problem persists, try connecting to another region.



# Code: 53501
Log Level: ERROR  
Message: Unable to acquire TURN credentials  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### 53501: Unable to acquire TURN credentials

Raised whenever the Server is unable to return TURN credentials to the Client

#### Causes

* A server-side error has occurred.

#### Solutions

 * If the problem persists, try connecting to another region.



# Code: 53600
Log Level: ERROR  
Message: S3 URL for recording upload is invalid  
Secondary Message: The recording will not be processed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53600

### S3 URL for recording upload is invalid

The recording will not be processed.

Raised when the S3 URL specified in the recording's metadata is not valid.

#### Causes

 * If you have specified your own bucket, this is most likely due to the fact that the URL does not conform to an S3 URL.

#### Solutions

 * Set a valid S3 URL for uploading media or leave blank (media will be uploaded to the default bucket).



# Code: 53601
Log Level: ERROR  
Message: AWS credentials for recording upload are invalid  
Secondary Message: The recording will not be processed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53601

### AWS credentials for recording upload are invalid

The recording will not be processed.

Raised when the AWS credentials provided in the recording's metadata for uploading the media to S3 are not valid.

#### Causes

 * Providing invalid AWS credentials for S3 access.

#### Solutions

 * Set AWS credentials to a correct value.



# Code: 53602
Log Level: ERROR  
Message: AWS encryption key for recording upload is invalid  
Secondary Message: The recording will not be processed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53602

### AWS encryption key for recording upload is invalid

The recording will not be processed.

Raised when the AWS encryption key provided in the recording's metadata for uploading the media to S3 is not valid.

#### Causes

 * Providing an invalid AWS encryption key for uploading to S3.

#### Solutions

 * Set AWS encryption key to a correct value.



# Code: 53603
Log Level: ERROR  
Message: Internal failure while processing a recording  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53603

### Internal failure while processing a recording

Raised when an internal error prevents us from processing the recording.

#### Causes

 * We screwed up. Sorry!

#### Solutions

*   If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
*   Note the time of the error and what you were trying to do when it occurred!



# Code: 53604
Log Level: WARNING  
Message: Failed to upload the recording to S3  
Secondary Message: A new attempt will be made after a delay    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53604

### Failed to upload the recording to S3

Raised when an error prevented us from uploading the media to S3.

#### Causes

* Despite our best efforts to upload your media to S3, we couldn't do it this time. We'll attempt again shortly.

#### Solutions

* Please verify that any S3 configuration you've provided us is correct, such as AWS access credentials or AWS encryption key.
* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and what you were trying to do when it occurred!



# Code: 53605
Log Level: WARNING  
Message: Internal failure when retrieving your account's recording settings  
Secondary Message: A new attempt will be made after a delay    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53605

### Internal failure when retrieving your account's recording settings

Raised when an error prevented us from retrieving your account's recording settings.

The recording will not be uploaded until we manage to read your recording settings.

#### Causes

* An internal error stopped us from uploading the recording. We'll attempt again shortly.

#### Solutions

* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and what you were trying to do when it occurred!



# Code: 53606
Log Level: WARNING  
Message: Internal failure when creating the recording resource  
Secondary Message: A new attempt will be made after a delay    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53606

### Internal failure when creating the recording resource

Raised when an error prevented us from creating an internal resource tracking the media recording.

The recording will not be accessible directly from SignalWire until we remediate the situation but the media file has probably been stored safely to S3.

#### Causes

* An internal error prevented us from creating a resource. We'll attempt again shortly.

#### Solutions

* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and what you were trying to do when it occurred!



# Code: 53607
Log Level: WARNING  
Message: Internal failure when updating the recording resource  
Secondary Message: A new attempt will be made after a delay    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53607

### Internal failure when updating the recording resource

Raised when an error prevented us from updating an internal resource tracking the media recording.

The recording's media will not be accessible directly from SignalWire until we remediate the situation but the media file has probably been stored safely to S3.

#### Causes

* An internal error prevented us from updating a resource. We'll attempt again shortly.

#### Solutions

* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and what you were trying to do when it occurred!



# Code: 53610
Log Level: WARNING  
Message: Invalid URL for external S3 bucket in recording settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53610

### Invalid URL for external S3 bucket in recording settings

The S3 bucket URL configured in your account's recording settings is not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket, this is most likely due to the fact that the URL does not conform to an S3 URL.

#### Solutions

 * In the recording settings section of your account's console, set a valid S3 URL for uploading media or disable the external storage (media will be uploaded to the default bucket).



# Code: 53611
Log Level: WARNING  
Message: Invalid AWS credentials to access external S3 bucket in recording settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53611

### Invalid AWS credentials to access external S3 bucket in recording settings

The AWS credentials configured in your account's recording settings are not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket and access credentials, this is most likely due to the fact that the AWS Access Key ID and Secret Access Key are not correct.

#### Solutions

 * In the recording settings section of your account's console, set some valid credentials for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).



# Code: 53612
Log Level: WARNING  
Message: Invalid public key for media tracks encryption in recording settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53612

### Invalid public key for media tracks encryption in recording settings

The public key configured in your account's recording settings is not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified a public key to cryptographically protect raw media tracks, this is most likely due to the fact that the key value is not correct.

#### Solutions

 * In the recording settings section of your account's console, set a valid public key or disable the encryption (media will be uploaded in raw).



# Code: 53613
Log Level: WARNING  
Message: AWS credentials to access external S3 bucket could not be loaded  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53613

### AWS credentials to access external S3 bucket could not be loaded

The AWS credentials configured in your account's recording settings could not be loaded.

The media will not be uploaded until the configuration has been fixed.

#### Causes

This is most likely due to the fact that the AWS Credentials resource has been removed from SignalWire.

#### Solutions

 * In the recording settings section of your account's console, create and assign a new credentials entry for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).



# Code: 53614
Log Level: WARNING  
Message: Public key credentials for media tracks encryption could not be loaded  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53614

### Public key credentials for media tracks encryption could not be loaded

The public key credentials configured in your account's recording settings could not be loaded.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified a public key to cryptographically protect raw media tracks, this is most likely due to the fact that the credentials resource has been removed from SignalWire.

#### Solutions

 * In the recording settings section of your account's console, create and assign a new valid public key or disable the encryption (media will be uploaded in raw).



# Code: 53615
Log Level: WARNING  
Message: Access denied to external S3 bucket configured in recording settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53615

### Access denied to external S3 bucket configured in recording settings

We failed to upload media to the external S3 bucket configured in your account's recording settings.

The media will not be uploaded until the configuration has been fixed.

#### Causes
This is a configuration error that can have different root causes
   * The IAM user referenced in the credentials provided does not have enough permissions to upload to the bucket.
   * The bucket configured in your settings has SSE-S3 enabled. The only default encryption mechanism supported is SSE-KMS. Please review the guides for more informtion

#### Solutions

 * In the recording settings section of your account's console, review the credentials for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).
* If SSE-S3 is enabled, please consider switching to SSE-KMS.



# Code: 53616
Log Level: WARNING  
Message: Deleted a recording with custom configuration as time for retries was depleted  
Secondary Message: The recording has been removed and will not be available    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53616

### Deleted a recording with custom configuration as time for retries was depleted

SignalWire gave up on uploading your recording with custom configuration, as time for retries was depleted. The recording has been removed and will not be available.

#### Causes

 * There was an error with your account's recording settings, either due to the access credentials for your own bucket or to the encryption key.

#### Solutions

 * In the recording settings section of your account's console, review the credentials for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).

* In the recording settings section of your account's console, set a valid public key or disable the encryption (media will be uploaded in raw).



# Code: 53617
Log Level: ERROR  
Message: Internal failure when bulk deleting compositions from your account  
Secondary Message: null    
Description: Despite our best efforts, we have failed to delete some or all of the selected compositions. The operation has been cancelled.  
Cause: There was an internal failure when processing your request. This action will not be retried.  
Solutions: * Please retry the delete operation with the same parameters.  
* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and which filter was used to select the compositions.
Docs:
## ERROR - 53617

### Internal failure when bulk deleting compositions from your account

 Despite our best efforts, we have failed to delete some or all of the selected compositions. The operation has been cancelled.

#### Possible Causes
There was an internal failure when processing your request. This action will not be retried.

#### Possible Solutions
* Please retry the delete operation with the same parameters.
* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and which filter was used to select the compositions.



# Code: 53620
Log Level: WARNING  
Message: Invalid URL for external S3 bucket in composition settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53620

### Invalid URL for external S3 bucket in composition settings

The S3 bucket URL configured in your account's composition settings is not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket, this is most likely due to the fact that the URL does not conform to an S3 URL.

#### Solutions

 * In the composition settings section of your account's console, set a valid S3 URL for uploading media or disable the external storage (media will be uploaded to the default bucket).



# Code: 53621
Log Level: WARNING  
Message: Invalid AWS credentials to access external S3 bucket in composition settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53621

### Invalid AWS credentials to access external S3 bucket in composition settings

The AWS credentials configured in your account's composition settings are not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket and access credentials, this is most likely due to the fact that the AWS Access Key ID and Secret Access Key are not correct.

#### Solutions

 * In the composition settings section of your account's console, set some valid credentials for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).



# Code: 53622
Log Level: WARNING  
Message: Invalid public key for media tracks encryption in composition settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53622

### Invalid public key for media tracks encryption in composition settings

The public key configured in your account's composition settings is not valid.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified a public key to cryptographically protect media tracks, this is most likely due to the fact that the key value is not correct.

#### Solutions

 * In the composition settings section of your account's console, set a valid public key or disable the encryption (media will be uploaded in raw).



# Code: 53623
Log Level: WARNING  
Message: AWS credentials to access external S3 bucket could not be loaded  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53623

### AWS credentials to access external S3 bucket could not be loaded

The AWS credentials configured in your account's composition settings could not be loaded.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket and access credentials, this is most likely due to the fact that the credentials resource has been removed from SignalWire.

#### Solutions

 * In the composition settings section of your account's console, create and assign a new credentials entry for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).



# Code: 53624
Log Level: WARNING  
Message: Public key credentials for media tracks encryption could not be loaded  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53624

### Public key credentials for media tracks encryption could not be loaded

The public key credentials configured in your account's composition settings could not be loaded.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified a public key to cryptographically protect media tracks, this is most likely due to the fact that the credentials resource has been removed from SignalWire.

#### Solutions

 * In the composition settings section of your account's console, create and assign a new valid public key or disable the encryption (media will be uploaded in raw).



# Code: 53625
Log Level: WARNING  
Message: Access denied to external S3 bucket configured in composition settings  
Secondary Message: The media will not be uploaded until the configuration has been fixed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53625

### Access denied to external S3 bucket configured in composition settings

Failed to upload media to the external S3 bucket configured in your account's composition settings.

The media will not be uploaded until the configuration has been fixed.

#### Causes

 * If you have specified your own bucket and access credentials, this is most likely due to the fact that the configuration is out of date.

#### Solutions

 * In the composition settings section of your account's console, review the credentials for accessing your S3 bucket or disable the external storage (media will be uploaded to the default bucket).



# Code: 53626
Log Level: ERROR  
Message: Internal failure while processing media composition  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53626

### Internal failure while processing media composition

Raised when an internal error prevents us from processing the media composition.

#### Causes

 * We screwed up. Sorry!

#### Solutions

*   If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
*   Note the time of the error and what you were trying to do when it occurred!



# Code: 53627
Log Level: ERROR  
Message: Internal failure when updating the composition resource  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 53627

### Internal failure when updating the composition resource

Raised when an error prevented us from updating the resource tracking the media composition.

The media will not be accessible directly from SignalWire until we remediate the situation but the composition media file has probably been stored safely to S3.

#### Causes

 * An internal error prevented us from updating a resource. Sorry!

#### Solutions

*   Please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
*   Note the time of the error and what you were trying to do when it occurred!



# Code: 53628
Log Level: ERROR  
Message: Room recordings deleted  
Secondary Message: The recordings for the room have been deleted from the system    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error -  53628

### Room recordings deleted

The recordings for the room specified in your composition job have been deleted. Although the metadata for the recordings is present, the media has been removed from the SignalWire Cloud and can't be recovered.

#### Causes

 * You have deleted your Room Recordings, either from the console or the API.

#### Solutions

 * There's no solution for this. Once the recorded media files are deleted from the system, they are gone forever.



# Code: 53630
Log Level: ERROR  
Message: Empty track list for composition  
Secondary Message: The composition job did not start    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error -  53630

### Empty track list for composition

The combination of sources and exclusions passed to the composition resulted in an empty track list. The composition job did not start.

#### Causes

 * You specified an incorrect list of sources and exclusions, audio and video, which have resulted in an empty track list.

#### Solutions

 * Recreate the composition using an updated list of sources and exclusions.



# Code: 53631
Log Level: WARNING  
Message: Failed to enqueue a room composition from a configured composition hook  
Secondary Message: The group room will not be composed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning -  53631

### Failed to enqueue a room composition from a configured composition hook

There was a failure creating or enqueuing a composition for a completed Group Room, using the configuration from a composition hook.

#### Causes

 * We failed to create the composition or the configuration was not suitable for a specific Group Room.

#### Solutions

* Verify the composition hook configured in your account's console.

* The composition can also be launched manually using the <a href="/docs/video/api/compositions-resource">REST API</a>.

* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!



# Code: 53632
Log Level: WARNING  
Message: Failed to enqueue a room composition  
Secondary Message: The job will not be executed    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning -  53632

### Failed to enqueue a room composition

There was a failure enqueuing a composition for processing.

#### Causes

 * There was an internal error when enqueuing the composition.

#### Solutions

* The composition can be launched again using the <a href="/docs/video/api/compositions-resource">REST API</a>.

* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!



# Code: 53660
Log Level: WARNING  
Message: Status Callback response timed out  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53660

### Status callback response timed out

Raised by a SignalWire Service when the StatusCallback request takes too long or does not respond to callbacks sent 

### Causes

 * The server receiving status callbacks sent by SignalWire takes too long too respond.

### Solutions

 * Make sure service receiving callbacks does not block incoming requests.



# Code: 53661
Log Level: WARNING  
Message: StatusCallbackMethod is invalid  
Secondary Message: The recording will be processed, but status notifications will not be sent    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53661

### StatusCallbackMethod is invalid

The recording will be processed, but status notifications will not be sent.

Raised when StatusCallbackMethod is set to an invalid value.

#### Causes

 * Recording created with StatusCallbackMethod set to an invalid value.

#### Solutions

 * Set StatusCallbackMethod to either GET or POST or leave blank for the default (POST).



# Code: 53662
Log Level: WARNING  
Message: StatusCallback is invalid  
Secondary Message: The recording will be processed, but status notifications will not be sent    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 53662

### StatusCallback is invalid

The recording will be processed, but status notifications will not be sent.

Raised when StatusCallback is not a valid URL.

#### Causes

 * Recording created with StatusCallback set to an invalid URL.

#### Solutions

 * Set StatusCallback to a valid URL or leave blank (status notifications will not be sent).



# Code: 53663
Log Level: ERROR  
Message: Internal failure when bulk deleting recordings from your account  
Secondary Message: null    
Description: Despite our best efforts, we have failed to delete some or all of the selected recordings. The operation has been cancelled.  
Cause: There was an internal failure when processing your request. This action will not be retried.  
Solutions: * Please retry the delete operation with the same parameters.  
* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and which filter was used to select the recordings.
Docs:
## ERROR - 53663

### Internal failure when bulk deleting recordings from your account

 Despite our best efforts, we have failed to delete some or all of the selected recordings. The operation has been cancelled.

#### Possible Causes
There was an internal failure when processing your request. This action will not be retried.

#### Possible Solutions
* Please retry the delete operation with the same parameters.
* If the error persists, please <a href="https://signalwire.com/support">contact us</a> to figure out what has happened and how to fix it!
* Note the time of the error and which filter was used to select the recordings.



# Code: 54003
Log Level: error  
Message: Invalid If-Match header  
Secondary Message: The specified If-Match header is invalid.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54003

### Sync: Invalid If-Match header
The specified If-Match header cannot be used for concurrency control.

#### Possible Causes
* The value specified in the If-Match header is not a valid Sync object revision.

#### Possible Solutions
The value you provide should be a revision assigned by the Sync service when interacting with an object.

* In SDKs, this is the `revision` field, part of the object descriptor.
* When using REST (e.g. via the SignalWire Helper libraries) this is the `ETag` header provided in responses.




# Code: 54006
Log Level: error  
Message: Request entity too large  
Secondary Message: The size of the specified 'Data' parameter exceeds the size limit.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54006

### Sync: Request entity too large
The size of the specified 'Data' parameter exceeds the size limit.

#### Possible Causes
* The size of a serialized JSON payload stored in a Sync Document, List Item, or Map Item cannot exceed 16KB; attempting to submit a larger object will yield this error.

#### Possible Solutions
* Reduce the size of the submitted JSON object by removing or compressing data.
* Split your data across multiple Map Items, List Items, or Documents.




# Code: 54007
Log Level: error  
Message: Access forbidden for identity  
Secondary Message: The identity specified in the Access Token does not have permissions to perform this operation.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54007

### Sync: Access forbidden for identity
The identity specified in the Access Token does not have permissions to perform this operation.

#### Possible Causes
* Sync's ACL control has been unintentionally enabled on your Sync service instance.
* An SDK endpoint trying to read or write a Sync object does not have the correct permission configured.
* The identity you specified in your SDK's token does not match the permissions that you intended for them.

#### Possible Solutions
* Disable the ACL feature on this Sync service. This will allow access from any SDK with a valid token.
Do this by either unchecking the AclEnabled feature in the [SignalWire Console](https://signalwire.com).
* Confirm a valid permission is configured via the [Sync Permissions REST API](https://signalwire.com), and that the configured identity matches the identity you provide in your FPA Access Tokens.




# Code: 54008
Log Level: error  
Message: Invalid JSON  
Secondary Message: The specified 'Data' parameter is not valid JSON.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54008

### Sync: Invalid JSON
The specified 'Data' parameter is not valid JSON.

#### Possible Causes
* The data you submitted is not JSON, or
* A missing or poorly-encoded character makes your JSON fail to parse.
* You crafted the HTTP request yourself, and did not percent-encode the submitted JSON data in the form parameters.

#### Possible Solutions
* Use a tool like [JSONLint](https://jsonlint.com/) to check the data you're sending for syntax errors.
* If you're crafting HTTP requests yourself, make sure all form data is percent-encoded.




# Code: 54009
Log Level: error  
Message: Rate limit exceeded  
Secondary Message: The rate of access to this resource exceeds the prescribed limits.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54009

### Sync: Rate limit exceeded
The rate of access to this resource exceeds the prescribed limits.

#### Possible Causes
* Your application is opening, reading or querying a single Sync object or its sub-items too often.
* Your application is updating a single Sync object or its sub-items too often.
* Your application is creating new Sync objects or their sub-items too often.

#### Possible Solutions
* Analyze your application to ensure that the _sustained_ rate of reads and writes against a single Sync object, and the sustained rate of of new object creations, is below 20 per second during normal application activity. Note that this limit only applies to explicit reads or writes; delivered state updates are not limited.
* Analyze your application to ensure that bursts of activity are uncommon; Sync provides a ten-second burst window during which you can exceed the sustained request-rate limits.
* Make sure your application (client or backend) uses a good exponential back-off algorithm like [the one advocated by Amazon](https://www.awsarchitectureblog.com/2015/03/backoff.html) to retry on HTTP 429 (rate limiting) responses.




# Code: 54010
Log Level: ERROR  
Message: No parameters specified  
Secondary Message: Expected at least 1 optional parameter, but none were provided.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54010

### Sync: No parameters specified
Expected at least 1 optional parameter, but none were provided.

#### Possible Causes
* The request expected at least 1 optional parameter, but none was provided.

#### Possible Solutions
* Add a parameter or confirm that the existing parameters are not misspelled.



# Code: 54011
Log Level: ERROR  
Message: Invalid TTL  
Secondary Message: The TTL value in seconds must either be empty or an integer between 0 and 31 536 000 (1 year).    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54011

### Sync: Invalid TTL
The TTL value in seconds must either be empty or an integer between 0 and 31 536 000 (1 year).

#### Possible Causes
* The value supplied for the TTL parameter does not fall into the valid range.

#### Possible Solutions
* Confirm a valid TTL parameter is being passed in your request.



# Code: 54050
Log Level: error  
Message: Service Instance not found  
Secondary Message: The specified Service Instance does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54050

### Sync: Instance not found
The specified Service Instance does not exist.

#### Possible Causes
* The supplied Sync Service Instance SID is erroneous.
* The requested Sync Service Instance has been deleted.

#### Possible Solutions
* Make sure the Sync Service Instance SID passed in your request matches the SID of that service exactly.




# Code: 54051
Log Level: error  
Message: Invalid webhook URL  
Secondary Message: The specified 'WebhookUrl' parameter is not a valid URL.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54051

### Sync: Invalid webhook URL
The specified 'WebhookUrl' parameter is not a valid URL.

#### Possible Causes
* You did not pass a correctly-formatted URL.
* You are crafting HTTP requests yourself and passed a URL, but did not percent-encoded it.

#### Possible Solutions
Confirm that you are providing a fully-qualified, percent-encoded HTTP URL.




# Code: 54053
Log Level: error  
Message: Invalid friendly name  
Secondary Message: The specified 'FriendlyName' parameter is not valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54053

### Sync: Invalid friendly name
The specified 'FriendlyName' parameter is not valid.

#### Possible Causes
* The value supplied by the FriendlyName parameter is an empty string.
* The value supplied by the FriendlyName parameter exceeds 255 characters.

#### Possible Solutions
Confirm the FriendlyName string parameter is either unspecified (`null`) or a nonempty string of up to 1-255 Unicode characters.




# Code: 54056
Log Level: error  
Message: Account cannot access requested Service Instance  
Secondary Message: Account cannot access requested Service Instance.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54056

### Sync: Account cannot access requested Service Instance
Account cannot access requested Service Instance.

#### Possible Causes
* The requested Sync Service does not belong to this account.
* You have multiple accounts, and this Sync Service does not belong to the account whose credentials you used.

#### Possible Solutions
Confirm that you're using the correct credentials for this instance's account. This could mean:

* Make sure the Access Token specifies the correct Account SID
* Make sure that the Account SID + AuthToken pair you're using (for REST access) matches the correct account
* Make sure the API Key + API secret you're using (for REST access) belongs to the correct account.




# Code: 54100
Log Level: error  
Message: Document not found  
Secondary Message: The specified Document does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54100

### Sync: Document not found
The specified Document does not exist.

#### Possible Causes
* The supplied Sync Document SID or Unique Name is erroneous.
* This Sync Document has been deleted.

#### Possible Solutions
Confirm that the document you're requesting exists, and that you are using the precise SID or unique name it is assigned.




# Code: 54101
Log Level: error  
Message: Invalid Document data  
Secondary Message: The 'Data' parameter cannot be null.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54101

### Sync: Invalid Document data
The 'Data' parameter cannot be null.

#### Possible Causes
Your request does not include a Data parameter which is required for this operation.

#### Possible Solutions
Confirm that a valid Data parameter containing a serialized, utf-8 JSON object is being passed in your request.




# Code: 54103
Log Level: error  
Message: Document revision mismatch  
Secondary Message: The actual revision of the Document does not match the expected revision.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54103

### Sync: Document revision mismatch
The actual revision of the Document does not match the expected revision.

#### Possible Causes
* Your update to this Sync Document has conflicted with a request submitted elsewhere.
* The value specified in the If-Match header is erroneous.

#### Possible Solutions
If your update conflicts with a concurrent update elsewhere, the correct solution is to read the latest revision (on the client SDK: wait for an update) and then re-attempt your update until you succeed. Consider that, since the data has changed, you may not want to submit the exact same update a second time. On the JavaScript SDK, we suggest using the [mutate](https://signalwire.com) convenience function.

The value you provide in the If-Match header should be a revision assigned by the Sync service when interacting with an object.

* In SDKs, this is the `revision` field, part of the object descriptor.
* When using REST (e.g. via the SignalWire Helper libraries) this is the `ETag` header provided in responses.




# Code: 54150
Log Level: error  
Message: List not found  
Secondary Message: The specified List does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54150

### Sync: List not found
The specified List does not exist.

#### Possible Causes
* The supplied Sync List SID is erroneous.
* The requested Sync List has been deleted.

#### Possible Solutions
Confirm that the list you're requesting exists, and that you are using the precise SID or unique name it is assigned.




# Code: 54151
Log Level: error  
Message: List Item not found  
Secondary Message: The specified List Item does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54151

### Sync: List Item not found
The specified List Item does not exist.

#### Possible Causes
* The specified Sync List item index is incorrect.
* The requested item of a Sync List has been deleted.

#### Possible Solutions
Confirm a valid Sync List index is being passed in your request.




# Code: 54155
Log Level: error  
Message: List Item revision mismatch  
Secondary Message: The actual revision of the List Item does not match the expected revision.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54155

### Sync: List Item revision mismatch
The actual revision of the List Item does not match the expected revision.

#### Possible Causes
* Your update to this Sync List Item has conflicted with a request submitted elsewhere.
* The value specified in the If-Match header is erroneous.

#### Possible Solutions
If your update conflicts with a concurrent update elsewhere, the correct solution is to read the latest data (on the client SDK: wait for an update) and then re-attempt your update until you succeed. Consider that, since the data has changed, you may not want to submit the exact same update a second time. On the JavaScript SDK, we suggest using the [mutate](https://signalwire.com) convenience function.

The value you provide in the If-Match header should be a revision assigned by the Sync service when interacting with the object.

* In SDKs, this is the `revision` field, part of the object descriptor.
* When using REST (e.g. via the SignalWire Helper libraries) this is the `ETag` header provided in responses.




# Code: 54156
Log Level: error  
Message: Invalid List Item data  
Secondary Message: The 'Data' parameter cannot be null.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54156

### Sync: Invalid List Item Data
The 'Data' parameter cannot be null.

#### Possible Causes
* Your request does not include a Data parameter which is required for this operation.

#### Possible Solutions
Confirm that a valid Data parameter containing a serialized, utf-8 JSON object is being passed in your request.




# Code: 54200
Log Level: error  
Message: Map not found  
Secondary Message: The specified Map does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54200

### Sync: Map not found
The specified Map does not exist.

#### Possible Causes
* The supplied Sync Map SID is erroneous.
* The requested Sync Map has been deleted.

#### Possible Solutions
Confirm that the map you're requesting exists, and that you are using the precise SID or unique name it is assigned.




# Code: 54201
Log Level: error  
Message: Map Item not found  
Secondary Message: The specified Map Item does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54201

### Sync: Map Item not found
The specified Map Item does not exist.

#### Possible Causes
* The specified Sync Map item key is incorrect.
* The requested item of a Sync Map has been deleted.

#### Possible Solutions
Confirm a valid Sync Map key is being passed in your request.




# Code: 54205
Log Level: error  
Message: Map Item revision mismatch  
Secondary Message: The actual revision of the Map Item does not match the expected revision.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54205

### Sync: Map Item revision mismatch
The actual revision of the Map Item does not match the expected revision.

#### Possible Causes
* Your update to this Sync Map Item has conflicted with a request submitted elsewhere.
* The value specified in the If-Match header is erroneous.

#### Possible Solutions
If your update conflicts with a concurrent update elsewhere, the correct solution is to read the latest data (on the client SDK: wait for an update) and then re-attempt your update until you succeed. Consider that, since the data has changed, you may not want to submit the exact same update a second time. On the JavaScript SDK, we suggest using the [mutate](https://signalwire.com) convenience function.

The value you provide in the If-Match header should be a revision assigned by the Sync service when interacting with the object.

* In SDKs, this is the `revision` field, part of the object descriptor.
* When using REST (e.g. via the SignalWire Helper libraries) this is the `ETag` header provided in responses.




# Code: 54206
Log Level: error  
Message: Invalid Map Item data  
Secondary Message: The 'Data' parameter cannot be null.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54206

### Sync: Invalid Map Item data
The 'Data' parameter cannot be null.

#### Possible Causes
* Your request does not include a Data parameter which is required for this operation.

#### Possible Solutions
Confirm that a valid Data parameter containing a serialized, utf-8 JSON object is being passed in your request.




# Code: 54208
Log Level: error  
Message: Map Item already exists  
Secondary Message: A Map Item with given key already exists in the Map.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54208

### Sync: Map Item already exists
A Map Item with given key already exists in the Map.

#### Possible Causes
* Another Item with the matching Key already exists in this Sync Map, causing a conflict.
* The provided Key parameter is not set correctly.
* Your original Map Item creation request has been sent more than once due to a retrier error.

#### Possible Solutions
* Confirm a valid Key parameter is being passed in request, matching your expectation.
* Delete a previous Map Item with the matching Key if you no longer need it.
* Pick a different Key. If your items should be unique, consider using a UUID.




# Code: 54209
Log Level: error  
Message: Invalid Map Item key  
Secondary Message: The Map Item key must be a string with length 1-256.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54209

### Sync: Invalid Map Item key
The Map Item key must be a string with length 1-256.

#### Possible Causes
* The value supplied by the Map Key parameter contains an empty string.
* The string supplied by the Map Key parameter exceeds 256 characters.

#### Possible Solutions
* Confirm a valid Map Key parameter is being passed in your request.




# Code: 54250
Log Level: error  
Message: Message Stream not found  
Secondary Message: The specified Message Stream does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54250

### Sync: Message Stream not found
The specified Message Stream does not exist.

#### Possible Causes
* The supplied Message Stream SID is erroneous.
* The requested Message Stream has been deleted.

#### Possible Solutions
Confirm a valid Message Stream SID is being passed in your request.




# Code: 54251
Log Level: error  
Message: Invalid Message Stream Message data  
Secondary Message: The 'Data' parameter cannot be null.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54251

### Sync: Invalid Stream Message data
The 'Data' parameter cannot be null.

#### Possible Causes
* Your request does not include a Data parameter which is required for this operation.

#### Possible Solutions
Confirm that a valid Data parameter containing a serialized, utf-8 JSON object is being passed in your request.




# Code: 54300
Log Level: error  
Message: Unique name not found  
Secondary Message: No object with the specified unique name exists.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54300

### Sync: Unique name not found
No object with the specified unique name exists.

#### Possible Causes
* The provided UniqueName parameter is incorrect.
* The requested Sync object with given unique name has been deleted.

#### Possible Solutions
Confirm that a valid UniqueName parameter is being passed in your request.




# Code: 54301
Log Level: error  
Message: Unique name already exists  
Secondary Message: An object with the specified unique name already exists.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54301

### Sync: Unique name already exists
An object with the specified unique name already exists.

#### Possible Causes
* Another object with the matching Unique Name already exists in this Sync Service Instance, causing a conflict.
* The provided UniqueName parameter is not set correctly.
* Your original Sync object creation request has been sent more than once due to a retrier error.

#### Possible Solutions
* Confirm a valid UniqueName parameter is being passed in request, matching your expectation.
* Delete a previous object with the matching Unique Name if you no longer need it.
* Pick a different Unique Name, or create an anonymous object addressed by a SID instead.




# Code: 54302
Log Level: error  
Message: Invalid unique name  
Secondary Message: The unique name must be a string with length 1-256 and not match the SID pattern [A-Z]{2}[a-f0-9]{32}.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54302

### Sync: Invalid unique name
The unique name must be a string with length 1-256 and not match the SID pattern [A-Z]{2}[a-f0-9]{32}.

#### Possible Causes
* The value supplied by the UniqueName parameter is an empty string.
* The value supplied by the UniqueName parameter exceeds 256 characters.

#### Possible Solutions
Confirm that your UniqueName is a string of 1-256 characters not matching the SID pattern.




# Code: 54351
Log Level: error  
Message: Invalid identity  
Secondary Message: Identity must be a string with length 1-256.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54351

### Sync: Invalid identity
Identity must be a string with length 1-256.

#### Possible Causes
* The value supplied by the Identity parameter is an empty string.
* The value supplied by the Identity parameter exceeds 256 characters.

#### Possible Solutions
Confirm than an Identity string parameter of 1-256 characters is being passed in request.




# Code: 54354
Log Level: ERROR  
Message: Permission not found  
Secondary Message: The specified Permission does not exist.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54354

### Sync: Permission not found
The specified Permission does not exist.

#### Possible Causes
* Requested permission does not exist because the provided Identity parameter is incorrect.
* Permission for the specified Identity has been deleted.

#### Possible Solutions
Confirm that the Identity parameter being passed in your request answers to the correct identity in your app, and that it has permissions to access the given object.



# Code: 54419
Log Level: ERROR  
Message: Number of subscriptions per connection is over the limit  
Secondary Message: An SDK attempted to open and listen for updates for more than 2000 objects    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54419

### Sync: Number of subscriptions per connection is over the limit
An SDK attempted to open and listen for updates for more than 2000 objects.

#### Possible Causes
* A programming error has generated many queries in place of one.
* Your app has created too many LiveQueries over time (often a problem in single-page apps).

#### Possible Solutions
* Make sure you're only issuing queries for information that you need.
* When your UI no longer needs a query, use the `close()` method on the LiveQuery object to unsubscribe and release the corresponding Sync resources. See the [SDK Documentation](https://signalwire.com) for details.



# Code: 54450
Log Level: error  
Message: Invalid 'Direction' query parameter  
Secondary Message: The 'Direction' query parameter must be one of {'forward', 'backward'}.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54450

### Sync: Invalid 'Direction' query parameter
The 'Direction' query parameter must be one of {'forward', 'backward'}.

#### Possible Causes
* The value supplied by the Direction query string parameter does not match _forward_ or _backward_ designators.

#### Possible Solutions
Confirm that a valid Direction query parameter is being passed in request.




# Code: 54451
Log Level: error  
Message: Invalid 'Order' query parameter  
Secondary Message: The 'Order' query parameter must be one of {'asc', 'desc'}.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54451

### Sync: Invalid 'Order' query parameter
The 'Order' query parameter must be one of {'asc', 'desc'}.

#### Possible Causes
* The value supplied by the Order query string parameter does not match _asc_ or _desc_ designators.

#### Possible Solutions
Confirm a valid Order query parameter is being passed in request.




# Code: 54452
Log Level: error  
Message: Invalid 'Bounds' query parameter  
Secondary Message: The 'Bounds' query parameter must be one of {'inclusive', 'exclusive'}.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54452

### Sync: Invalid 'Bounds' query parameter
The 'Bounds' query parameter must be one of {'inclusive', 'exclusive'}.

#### Possible Causes
* The value supplied by the Bounds query string parameter does not match _inclusive_ or _exclusive_ designators.

#### Possible Solutions
Confirm a valid Bounds query parameter is being passed in request.




# Code: 54453
Log Level: ERROR  
Message: Invalid 'PageToken' query parameter  
Secondary Message: Your query specifies an invalid paging token.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54453

### Sync: Invalid 'PageToken' query parameter
The specified 'PageToken' query parameter is invalid.

#### Possible Causes
* The value supplied by the PageToken query string parameter is invalid or malformed.

#### Possible Solutions
Ensure that a valid PageToken parameter is supplied, as originally included in the previous/next page links under the _meta_ block of pagination response.



# Code: 54454
Log Level: ERROR  
Message: Invalid 'PageSize' query parameter  
Secondary Message: The requested page size must be in the range [1-100].    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54454

### Sync: Invalid 'PageSize' query parameter
The 'PageSize' value must be in the range [1-100].

#### Possible Causes
* The value supplied by the PageSize query string parameter is not an integer in the required range.

#### Possible Solutions
Confirm that a valid PageSize query parameter is being passed in request.




# Code: 54458
Log Level: error  
Message: Invalid List Item index  
Secondary Message: The List Item index must be a non-negative integer.    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 54458

### Sync: Invalid List Item Index
The List Item index must be a non-negative integer.

#### Possible Causes
* The value supplied by the List Index parameter contains a non-integer or a negative integer.

#### Possible Solutions
Confirm that a valid List Index parameter is being passed in your request.




# Code: 54502
Log Level: ERROR  
Message: Invalid index name  
Secondary Message: The specified index does not exist    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54502

### Sync: Invalid index name
The specified index doesn't exist, therefore cannot be queried.

#### Possible Causes
* You may have made a typo.
* You may have made a programming error that yields the empty string in place of a valid index name.

#### Possible Solutions
* Please review https://signalwire.com today.



# Code: 54507
Log Level: ERROR  
Message: Invalid query  
Secondary Message: Valid query expression is expected    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54507

### Sync: Invalid query
Valid query expression is expected.

#### Possible Causes
* You made a typo.
* You've made a programming error that produces a corrupt expression (where usually the expression is valid).

#### Possible Solutions
* Check that you're adhering to the right format. Query expressions must be specified in infix notation in the form `field operator "value"`.
* Check that you're using supported operators. Please review https://signalwire.com examples.



# Code: 54509
Log Level: ERROR  
Message: Query expression contains too many operators  
Secondary Message: The query expression must contain less than 30 operators    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54509

### Sync: Query expression contains too many operators
The query expression must contain less than 30 operators.

#### Possible Causes
* The query expression contains 30 or more operators, probably a user-facing edge case or a programming error.

#### Possible Solutions
* Rewrite the query or the code generating it to use fewer operators or issue separate queries. You can use any combination of the following operators: `and`, `or`, `in`, `eq`, `not_in`, `not_eq `, `contains`, however overall number of operators in any query expression must be less than 30.



# Code: 54510
Log Level: ERROR  
Message: Query expression contains an array with too many items  
Secondary Message: Any array within query expression must contain less than 30 items    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 54510

### Sync: Query expression contains an array with too many items
Any array within query expression must contain less than 30 items.

#### Possible Causes
* The query expression contains an array with 30 or more elements.

#### Possible Solutions
* Rewrite your queries (or the code generating them) such that arrays never contain more than 30 items.



# Code: 60101
Log Level: ERROR  
Message: Canadian number. Further authorization required.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60101

### Unavailable information

Canadian number. Further authorization required. Contact support@signalwire.com

#### Causes

In May of 2018, SignalWire was informed by the Canadian Local Number Portability Consortium (CLNPC - http://www.clnpc.ca/) that due to contractual reasons, SignalWire cannot provide carrier or portability details about Canadian numbers via the Lookup API without a contract existing between the SignalWire customer and the CLNPC.

More info: https://signalwire.force.com/help/s



# Code: 60200
Log Level: ERROR  
Message: Invalid parameter  
Secondary Message: You have provided an invalid value for a parameter in the request. Please check the response message to know what is the invalid parameter.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60200

### Invalid Parameter

You have provided an invalid value for a parameter in the request. Please check the response message to know what is the invalid parameter.



# Code: 60201
Log Level: ERROR  
Message: Invalid verification code  
Secondary Message: An invalid code has been passed.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60201 

### Invalid verification code

An invalid code has been passed.

#### Possible Causes 
*  Code is not a number.
*  Code has not a valid length, it should be between 4 to 10 characters.
*  Code has expired.



# Code: 60202
Log Level: ERROR  
Message: Max check attempts reached  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60202

### Max verification check attempts reached

#### Possible Causes

You have attempted to check a verification more than 5 times and have reached the limit.

#### Possible Solutions
* You have 5 attempts to check a verification code, after that you will need to wait until the current verification expires to create a new verification.



# Code: 60203
Log Level: ERROR  
Message: Max send attempts reached  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60203

### Max send attempts reached

#### Possible Causes

You have attempted to send the verification code more than 5 times and have reached the limit.

#### Possible Solutions
* You have 5 attempts to send the verification code, after that you will need to wait until the user verifies the code.
* If you identify there is a delivery issue, please contact support@signalwire.com



# Code: 60204
Log Level: ERROR  
Message: Service does not support this feature  
Secondary Message: Your service does not have access to this feature.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60204 

### Service does not support this feature

You attempted to use a premium feature but this feature is not enabled in your Service. Further authorization required. Contact SignalWire Sales (https://signalwire.com) to have this feature enabled. 



# Code: 60205
Log Level: ERROR  
Message: SMS is not supported by landline phone number  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60205
### SMS is not supported by landline phone number
#### Possible Causes
You have attempted to send the verification code to phone number that does not support SMS.
#### Possible Solutions
* Make sure the number you are sending a verification to is a valid mobile phone number
* Disable validating phone numbers using the SignalWire API setting `SkipSmsToLandlines` on your Verification Service to `false`.



# Code: 60206
Log Level: ERROR  
Message: 'Amount' & 'Payee' params are required  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60206
### 'Amount' & 'Payee' params are required
#### Possible Causes
Your service has the `Psd2Enabled ` flag which requires you to send the 'Amount' & 'Payee' params when creating a verification
#### Possible Solutions
* Make sure that you send the 'Amount' & 'Payee' params
* Set the `Psd2Enabled ` flag on your Verification Service to `false`.



# Code: 60207
Log Level: ERROR  
Message: Max rate limits per service reached   
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60207
### Max rate limits per service reached 
#### Possible Causes
Your service has reached the max number of rate limits
#### Possible Solutions
* Delete/update rate limits that you are not using at the moment
* Create a new service and add the desired rate limit to the new service



# Code: 60208
Log Level: ERROR  
Message: Rate limit with that UniqueName already exists  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60208
### Rate limit with that `UniqueName` already exists
#### Possible Causes
You tried to create a rate limit with a `UniqueName` that already exists for the specified service
#### Possible Solutions
* Use a different `UniqueName`
* Create a new service and create a rate limit with the desired `UniqueName`



# Code: 60209
Log Level: ERROR  
Message: UniqueName format is invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60209
### UniqueName format is invalid
#### Possible Causes
`UniqueName` only supports alphanumeric characters and `-`, `_` or `.` 
#### Possible Solutions
* Remove unsupported characters from `UniqueName`



# Code: 60210
Log Level: ERROR  
Message: Max Buckets per Rate limit reached  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60210
### Max Buckets per Rate limit reached
#### Possible Causes
Your Rate limit has reached the max number of Buckets
#### Possible Solutions
* Delete/update Buckets that you are not using at the moment
* Create a new Rate limit and add the desired Buckets to the new Rate limit



# Code: 60211
Log Level: ERROR  
Message: Bucket with the given Interval already exists  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60211
### Bucket with the given Interval already exists
#### Possible Causes
You have already configured that Max number of requests for this `Interval`
#### Possible Solutions
* Delete/Update Bucket that has this same `Interval`



# Code: 60212
Log Level: ERROR  
Message: Too many concurrent requests for phone number  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60212
### Too many concurrent requests for phone number
#### Possible Causes
Your application is initiating many verifications in a short period of time for the same phone number.
#### Possible Solutions
* Check if your application is being the target of fraudulent traffic.
* Review your implementation.



# Code: 60213
Log Level: ERROR  
Message: A Messaging Configuration already exists for the given country  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60213
### A Messaging Configuration already exists for the given country

#### Possible Causes
* You have already configured the given country.

#### Possible Solutions
* Try updating the Messaging Configuration instead.



# Code: 60600
Log Level: ERROR  
Message: Unprovisioned or Out of Coverage  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60600

### Unprovisioned or Out of Coverage

Raised in the Lookup service when an error prevented us from getting the carrier info for the phone number.

#### Causes

You have provided a phone number that appears as either not provisioned with any carrier or belonging to a carrier outside the scope of our data coverage.



# Code: 60601
Log Level: ERROR  
Message: Canadian number. Further authorization required.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 60601

### Unavailable information

Canadian number. Further authorization required. Contact support@signalwire.com

#### Causes

In May of 2018, SignalWire was informed by the Canadian Local Number Portability Consortium (CLNPC - http://www.clnpc.ca/) that due to contractual reasons, SignalWire cannot provide carrier or portability details about Canadian numbers via the Lookup API without a contract existing between the SignalWire customer and the CLNPC.

More info: https://signalwire.force.com/help/s



# Code: 61000
Log Level: ERROR  
Message: Add-ons: Internal server error  
Secondary Message: This is generic catch all error for Add-on related conditions that were not caught by a more specific error.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61000

### Add-ons Internal server error

#### Possible Causes 
*  This is generic catch all error for Add-on related conditions that were not caught by a more specific error.




# Code: 61001
Log Level: ERROR  
Message: Add-ons: Request timed out  
Secondary Message:  The Add-on Provider failed to respond in the allotted time. The request was terminated and no further processing was attempted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61001

### Add-ons: Request timed out

#### Possible Causes 
*   The Add-on Provider failed to respond in the allotted time. The request was terminated and no further processing was attempted.

#### Possible Solutions
*  Contact Add-on Provider if this error persists



# Code: 61002
Log Level: ERROR  
Message: Add-ons: Provider could not complete request  
Secondary Message: The Add-on Provider  provided a HTTP Status Code in the 500 range. This indicates an error processing the Add-on Request on the Vendors side.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61002

### Add-ons: Provider could not complete request

#### Possible Causes 
*  The Add-on Provider  provided a HTTP Status Code in the 500 range. This indicates an error processing the Add-on Request on the Vendors side. 



# Code: 61003
Log Level: ERROR  
Message: Add-ons: Requirements to invoke AddOns have not been met  
Secondary Message:  A parameter required to complete the request was missing or is not supported. As a result the Add-on Request can not be completed.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61003

### Add-ons: Requirements to invoke AddOns have not been met

#### Possible Causes 
*  A parameter required to complete the request was not provided at run time. As a result the Add-on Request can not be completed.
*  The Add-on does not support the data that was provided. For example the Add-on may not support looking up phone numbers in specific countries. 

#### Possible Solutions
*  Refer to Add-on documentation in Console to determine if the Add-on supports the country or format of the data you are providing
* Check Add-on documentation to see if you may be missing some data for Lookup Add-ons



# Code: 61004
Log Level: WARNING  
Message: Add-ons: No results  
Secondary Message:  The Add-on Provider returned a successful response but the Response Validation Schema indicated there was no usable data.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61004

### Add-ons: No results

#### Possible Causes 
*   The Add-on Provider returned a successful response but the Response Validation Schema indicated there was no usable data.




# Code: 61005
Log Level: ERROR  
Message: Add-ons: Bad request  
Secondary Message:  The Vendor provided an HTTP Status Code in the 400 range. This indicates that the Add-on Provider received the request but was unable to processes it due to validation or authorization issue.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61005

### Add-ons: Bad request

#### Possible Causes 
*   The Add-on Provider provided an HTTP Status Code in the 400 range. This indicates that they received the request but were unable to processes it due to validation or authorization issue.




# Code: 61006
Log Level: WARNING  
Message: Add-ons: Add-ons unavailable for GET callbacks  
Secondary Message: Due to the size limitations of GET callbacks we do not include Add-on results in GET callbacks    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61006

### Add-ons: Add-ons unavailable for GET callbacks

#### Possible Causes 
*  Due to the size limitations of GET callbacks we do not include Add-on results in GET callbacks



# Code: 61007
Log Level: ERROR  
Message: Add-ons: Response body too large  
Secondary Message:  The Add-on Provider returned a response payload that exceeded 64 kilobytes. As a result the payload was removed and this error was returned instead.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61007

### Add-ons: Response body too large

#### Possible Causes 
*   The Add-on Provider returned a response payload that exceeded 64 kilobytes. As a result the payload was removed and this error was returned instead.



# Code: 61008
Log Level: ERROR  
Message: Add-ons:  HTTP too many redirects  
Secondary Message: Add-on Provider returned too many HTTP redirects. To prevent getting stuck in a redirect loop only 5 redirects will be followed. After that the request will be terminated and this error code will be returned.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61008

### Add-ons:  HTTP too many redirects

#### Possible Causes 
*  Add-on Provider returned too many HTTP redirects. To prevent getting stuck in a redirect loop only 5 redirects will be followed. After that the request will be terminated and this error code will be returned.



# Code: 61009
Log Level: ERROR  
Message: Add-ons: Could not fulfill request with available data  
Secondary Message:  One of the request fields in the Add-ons specification could not be interpolated with the provided data. The result is an invalid URL, Header value or other parameter that makes the request impossible to execute.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 61009

### Add-ons: Could not fulfill request with available data

#### Possible Causes 
*   One of the request fields in the Add-ons specification could not be interpolated with the provided data. The result is an invalid URL, Header value or other parameter that makes the request impossible to execute.



# Code: 62000
Log Level: ERROR  
Message: Failed to write to the database.  
Secondary Message: An internal error occurred, and the service was unable to write data relevant to your request.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62000

### Failed to write to the database.

An internal error occurred, and the service was unable to write data relevant
to your request.



# Code: 62001
Log Level: ERROR  
Message: Invalid SID  
Secondary Message: A SID that was provided in the request was not valid. Ensure that any SIDs are complete and valid.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62001

### Invalid SID

A SID that was provided in the request was not valid. Ensure that any SIDs
are complete and valid.



# Code: 62002
Log Level: ERROR  
Message: Exchange not found  
Secondary Message: The exchange SID in the request could not be found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62002

### Exchange not found

The exchange SID in the request could not be found.



# Code: 62003
Log Level: ERROR  
Message: MPLS carrier not found.  
Secondary Message: The MPLS carrier SID in the request could not be found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62003

### MPLS carrier not found

The MPLS carrier SID in the request could not be found.



# Code: 62004
Log Level: ERROR  
Message: Direct connect not found.  
Secondary Message: The direct connect SID in the request could not be found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62004

### Direct connect not found

The direct connect SID in the request could not be found.





# Code: 62005
Log Level: ERROR  
Message:  Bandwidth reserve not found.  
Secondary Message: The bandwidth reserve SID in the request could not be found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62005

### Bandwidth reserve not found

The bandwidth reserve SID in the request could not be found.





# Code: 62006
Log Level: ERROR  
Message:  MPLS carrier is not associated with the exchange.  
Secondary Message: The MPLS carrier SID in the request is not associated with the exchange SID in the request. Choose an MPLS carrier SID that is associated with the exchange SID, or choose an exchange SID that is associated with the MPLS carrier SID.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62006

### MPLS carrier is not associated with the exchange

The MPLS carrier SID in the request is not associated with the exchange SID
in the request. Choose an MPLS carrier SID that is associated with the
exchange SID, or choose an exchange SID that is associated with the MPLS
carrier SID.



# Code: 62007
Log Level: ERROR  
Message: Direct connect is not associated with the exchange.  
Secondary Message: The direct connect SID in the request is not associated with the exchange SID in the request. Choose a direct connect SID that is associated with the exchange SID, or choose an exchange SID associated with the direct connect SID.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62007

### Direct connect is not associated with the exchange

The direct connect SID in the request is not associated with the exchange
SID in the request. Choose a direct connect SID that is associated with the
exchange SID, or choose an exchange SID associated with the direct connect
SID.



# Code: 62008
Log Level: ERROR  
Message: Bandwidth reserve is not associated with the exchange.  
Secondary Message: The bandwidth reserve SID in the request is not associated with the exchange SID in the request. Choose a bandwidth reserve that is associated with the exchange SID, or choose an exchange SID that is associated with the bandwidth reserve SID.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62008

### Bandwidth reserve is not associated with the exchange

The bandwidth reserve SID in the request is not associated with the
exchange SID in the request. Choose a bandwidth reserve that is associated
with the exchange SID, or choose an exchange SID that is associated with
the bandwidth reserve SID.



# Code: 62009
Log Level: ERROR  
Message: Account SID was not found.  
Secondary Message: The account SID in the request could not be found in the SignalWire Interconnect directory. This does not mean that the account is not valid, only that it is not associated with any SignalWire Interconnect entries.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62009

### Account SID was not found

The account SID in the request could not be found in the SignalWire Interconnect
directory. This does not mean that the account is not valid, only that it
is not associated with any SignalWire Interconnect entries.



# Code: 62010
Log Level: ERROR  
Message: No authentication was provided.  
Secondary Message: An attempt was made to access a restricted resource without proper authorization. Provide authentication details and try again.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62010

### No authentication was provided.

An attempt was made to access a restricted resource without proper
authorization. Provide authentication details and try again.



# Code: 62011
Log Level: ERROR  
Message: Unauthorized  
Secondary Message: The access credentials provided are not authorized to access this resource.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62011

### Unauthorized

The access credentials provided are not authorized to access this resource.



# Code: 62012
Log Level: ERROR  
Message: Connection not found.  
Secondary Message: The connection SID in the request could not be found.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62012

### Connection not found

The connection SID in the request could not be found.



# Code: 62013
Log Level: ERROR  
Message: Unable to identify account owner of connection.  
Secondary Message: The connection SID in the request is orphaned, and the owner cannot be identified.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62013

### Unable to identify account owner of connection

The connection SID in the request is orphaned, and the owner cannot be
identified.



# Code: 62014
Log Level: ERROR  
Message: Connection not ready  
Secondary Message: The connection SID in the request is not fully configured. Please provide additional configuration info.  For a VPN connection, please provide IP Gateway and at least one IP route.     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62014

### Connection not ready

The connection SID in the request is not fully configured.  Please provide additional configuration info.  For a VPN connection, please provide IP Gateway and at least one IP route. 



# Code: 62015
Log Level: ERROR  
Message: Connection in transition  
Secondary Message: The connection SID in the request is currently in a state of transition. A connection cannot be transitioned from inactive to active unless if the connection is currently in an inactive state. To transition the connection to an active state, please wait for the connection to be inactive again.     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62015

### Connection in transition

The connection SID in the request is currently in a state of transition. A connection cannot be transitioned from inactive to active unless if the connection is currently in an inactive state. To transition the connection to an active state, please wait for the connection to be inactive again. 



# Code: 62016
Log Level: ERROR  
Message: Connection not active  
Secondary Message: The connection SID in the request is not currently active. To transition a connection from active to inactive, the connection must be in an active state.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62016

### Connection not active

The connection SID in the request is not currently active. To transition a connection from active to inactive, the connection must be in an active state.



# Code: 62017
Log Level: ERROR  
Message: No IP route specified  
Secondary Message: The request did not identify an IP route. This may indicate that the IP Route parameter was misspelled.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62017

### No IP route specified

The request did not identify an IP route. This may indicate that the IP Route parameter was misspelled.



# Code: 62018
Log Level: ERROR  
Message: Invalid IP route  
Secondary Message: The request provided an invalid IP route. The IP route must be a valid formed CIDR address that does not exist within the RFC 1918 address space.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62018

### Invalid IP route

The request provided an invalid IP route. The IP route must be a valid formed CIDR address that does not exist within the RFC 1918 address space.



# Code: 62019
Log Level: ERROR  
Message: IP route exceeds permitted IP range  
Secondary Message: The request provided an IP route that would exceed permitted IP range. IP addresses are limited to the 256 address range.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62019

### IP route exceeds permitted IP range

The request provided an IP route that would exceed permitted IP range. IP addresses are limited to the 256 address range.



# Code: 62020
Log Level: ERROR  
Message: Connection pending deletion.  
Secondary Message: The connection SID in the request is pending deletion. No changes can be made to it.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62020

### Connection pending deletion.

The connection SID in the request is pending deletion. No changes can be made to it. 



# Code: 62021
Log Level: ERROR  
Message: IP Gateway Invalid  
Secondary Message: The request provided an invalid gateway IP address. Request must provide a valid IP address not in the RFC 1918 range.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62021

### IP Gateway Invalid

The request provided an invalid gateway IP address. Request must provide a valid IP address not in the RFC 1918 range.



# Code: 62022
Log Level: ERROR  
Message: Missing account SID  
Secondary Message: The request did not specify an account SID.     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62022

### Missing account SID

The request did not specify an account SID.



# Code: 62023
Log Level: ERROR  
Message: Missing exchange  
Secondary Message: The request did not specify an exchange SID.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62023

### Missing exchange

The request did not specify an exchange SID. 



# Code: 62024
Log Level: ERROR  
Message: Missing connection type  
Secondary Message: The request did not specify a connection type. Valid connection types are vpn, crossconnect, mpls.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62024

### Missing connection type

The request did not specify a connection type. Valid connection types are vpn, crossconnect, mpls.



# Code: 62025
Log Level: ERROR  
Message: Interconnect: Invalid connection type  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62025

#### Possible Causes 
* Invalid connection type

#### Possible Solutions
*  The request specified an invalid connection type. Please add a valid type-cloudconnect, crossconnect, mpls or vpn.



# Code: 62026
Log Level: ERROR  
Message: Interconnect: Missing MPLS carrier SID  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62026

#### Possible Causes 
* Missing MPLS carrier SID

#### Possible Solutions
*  Please add a valid MPLS carrier SID.



# Code: 62027
Log Level: ERROR  
Message: Interconnect: Extra MPLS parameter  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62027

#### Possible Causes 
* Extra MPLS parameter

#### Possible Solutions
*  An MPLS carrier does not relate to a connection of the specified type, please update the parameter and try again.



# Code: 62028
Log Level: ERROR  
Message: Interconnect: Connection expired.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62028

#### Possible Causes 
* Connection expired.

#### Possible Solutions
*  The connection SID in the request has expired, and may no longer be used. Please create a new connection. 



# Code: 62034
Log Level: ERROR  
Message: Interconnect: No useful parameters provided.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62034 

#### Possible Causes 
*  No useful parameters provided

#### Possible Solutions
*  The request you made expected at least 1 optional parameter, but none was provided. Please add a parameter and/or confirm that is was not misspelled.



# Code: 62035
Log Level: ERROR  
Message: Interconnect: No bandwidth was specified in the request  
Secondary Message: The request did not specify bandwidth. Approved quantities are 10.0, 100.0, and 1000.0Mb.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 62035

#### Possible Causes 
*  No bandwidth was specified in the request

#### Possible Solutions
* The request did not specify bandwidth. Please include an approved bandwidth option--those are 10.0Mb, 100.0mb, and 1000.0Mb



# Code: 62052
Log Level: ERROR  
Message: Interconnect: This account is not a subaccount of the Interconnect Connection owner's account.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  This account is not a subaccount of the Interconnect Connection owner's account.
 
 
#### Possible Solutions
*  Please verify your Connection SID. Visit [Interconnect Connections](https://signalwire.com).
 




# Code: 62053
Log Level: ERROR  
Message: Interconnect: The subaccount is not authorized to access this connection.    
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
#### Possible Causes 
*  The subaccount is not authorized to access this connection.
 
 
#### Possible Solutions
*  Please verify your Interconnect Connection permission settings, visit [Interconnect Connections](https://signalwire.com).
 




# Code: 63001
Log Level: ERROR  
Message: Channel could not authenticate the request. Please see Channel specific error message for more information  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel authentication error

#### Possible Causes 
*   The Channel could not authenticate the request. Please see Channel specific error message for more information.



# Code: 63002
Log Level: ERROR  
Message: Channel could not find the From address  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel could not find the From address

#### Possible Causes 
*   Incorrect From address or trying to use a From address that is not supported by this Channel when trying to send a message. See [here](https://signalwire.com) for supported formats of Channel endpoint addresses. 



# Code: 63003
Log Level: ERROR  
Message: Channel could not find To address  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel could not find To address

#### Possible Causes 
*   Incorrect To address or trying to use a To address that is not supported by this Channel when trying to send a message. See [here](https://signalwire.com) for supported formats of Channel user addresses. 



# Code: 63005
Log Level: ERROR  
Message: Channel did not accept given content. Please see Channel specific error message for more information  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel did not accept given content

#### Possible Causes 
*   The content you are trying to send was rejected by the Channel. Please see Channel specific error message for more information. 



# Code: 63006
Log Level: ERROR  
Message: Could not format given content for the channel. Please see Channel specific error message for more information  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Could not format given content for the Channel

#### Possible Causes 
*   Incorrect format.



# Code: 63007
Log Level: ERROR  
Message: SignalWire could not find a Channel with the specified From address  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### SignalWire could not find a Channel with the From address

#### Possible Causes 
* Sending a message using a From address that is not associated with any Channel or WhatsApp installation. 
* Sending a message using a From address for a Channel that is pending approval.

#### Resolution
* See [here](https://signalwire.com) for supported formats of Channel endpoint addresses. 
* If you are using the WhatsApp sandbox, ensure that you have activated the SignalWire Sandbox for WhatsApp. This can be found on the [WhatsApp sandbox page](https://signalwire.com).
   



# Code: 63008
Log Level: ERROR  
Message: Could not execute the request because the channel module has been misconfigured. Please check the Channel configuration in SignalWire  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel misconfigured

#### Possible Causes 
*   Could not execute the request or send a message because the Channel has been misconfigured. Please check the Channel instance configuration in SignalWire.



# Code: 63009
Log Level: ERROR  
Message: Channel provider returned an internal service error (HTTP 5xx). Please see Channel specific error message for more information  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel returned an error when executing the request

#### Possible Causes 
*  Please see Channel specific error message for more information.



# Code: 63010
Log Level: ERROR  
Message: SignalWire's platform encountered an internal error processing this message  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### SignalWire Channels Internal error

#### Possible Causes 
*   SignalWire's platform encountered an internal error processing this message



# Code: 63011
Log Level: ERROR  
Message: Invalid Request: SignalWire encountered an error while processing your request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel returned an invalid request error

#### Possible Causes 
*   SignalWire could not process your error because the channel provider failed to receive capabilities for your request.



# Code: 63012
Log Level: ERROR  
Message: Channel provider returned an internal service error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel returned an internal service error

#### Possible Causes 
*   Channel provider returned an internal service error (HTTP 5xx). 



# Code: 63013
Log Level: ERROR  
Message: Channel policy violation  
Secondary Message: This message send failed because it violates Channel provider's policy.    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel Policy violation

#### Possible Causes 
*   This message send failed because it violates Channel provider's policy. Please see Channel specific error message for more information. 



# Code: 63014
Log Level: ERROR  
Message: Channel message blocked by user action  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel message blocked by user action

#### Possible Causes 
*   This message failed to be delivered to the user because it was blocked by some action on their part.  Please see Channel specific error message for more information.



# Code: 63015
Log Level: ERROR  
Message: Channel Sandbox can only send messages to phone numbers that have joined the Sandbox  
Secondary Message: null    
Description: Channel Sandbox can only send messages to phone numbers that have joined the Sandbox  
Cause: This message failed to be delivered to the user because it was sent from a Sandbox to a phone number that has not joined your Sandbox  
Solutions: Instruct the recipient to join your Sandbox by sending the join phrase or keyword shown on the Sandbox page in your SignalWire Console.  
Docs:
## ERROR - 63015

### Channel Sandbox can only send messages to phone numbers that have joined the Sandbox

 Channel Sandbox can only send messages to phone numbers that have joined the Sandbox

#### Possible Causes
This message failed to be delivered to the user because it was sent from a Sandbox to a phone number that has not joined your Sandbox

#### Possible Solutions
Instruct the recipient to join your Sandbox by sending the join phrase or keyword shown on the Sandbox page in your SignalWire Console.



# Code: 63016
Log Level: ERROR  
Message: Failed to send freeform message because you are outside the allowed window. Please use a Template.  
Secondary Message: null    
Description: null  
Cause: * This message failed to be delivered to the user because it was sent outside the allowed conversation window. For messages initiated by the business, you must use pre-defined templates.  
* If you are sending a media message with text, you should be in the window for the message to go through unless you use pre-defined templates for the text only messages. Media and template messages are not currently supported.
Solutions: * [Send a WhatsApp message using a template](https://signalwire.com)  
Docs:
## ERROR - 63016

### Failed to send freeform message because you are outside the allowed window. Please use a Template.

 

#### Possible Causes
* This message failed to be delivered to the user because it was sent outside the allowed conversation window. For messages initiated by the business, you must use pre-defined templates.
* If you are sending a media message with text, you should be in the window for the message to go through unless you use pre-defined templates for the text only messages. Media and template messages are not currently supported.

#### Possible Solutions
* [Send a WhatsApp message using a template](https://signalwire.com)



# Code: 63017
Log Level: ERROR  
Message: Rate limit exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Rate limit exceeded

#### Possible Causes 
* Your account or subaccounts are sending messages at a higher combined rate than 2000 messages-per-second.



# Code: 63018
Log Level: ERROR  
Message: Rate limit exceeded for Channel  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Rate limit exceeded for Channel

#### Possible Causes 
* Your account is sending messages at a higher combined rate than configured for your account.
* Your WhatsApp number has exceeded the rate limit imposed by WhatsApp. For more information, see [WhatsApp Rate Limiting](https://signalwire.force.com/help/s)



# Code: 63019
Log Level: ERROR  
Message: SignalWire failed to download the media from the sender  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Media failed to download

#### Possible Causes 
* SignalWire failed to download the media from the sender. Please check the media content before retrying



# Code: 63020
Log Level: ERROR  
Message: SignalWire encountered a Business Manager account error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Business Manager Account Error

#### Possible Causes 
* Please use Facebook Business Manager to accept an invitation from SignalWire to send messages on your behalf. Also verify the WhatsApp billing account associated with your business



# Code: 63021
Log Level: ERROR  
Message: Channel invalid content error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel invalid content error

#### Possible Causes 
* Message has invalid content. Please verify the content and re send the message



# Code: 63022
Log Level: ERROR  
Message: Invalid vname certificate  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Invalid vname certificate

#### Possible Causes 
* The vname cert for your business account was invalid. Please reach out to support to verify the cert.



# Code: 63023
Log Level: ERROR  
Message: Channel generic error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel generic error

#### Possible Causes 
* SignalWire encountered a generic error for your message.



# Code: 63024
Log Level: ERROR  
Message: Invalid message recipient  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Invalid message recipient

#### Possible Causes 
* Message recipient could not be verified



# Code: 63025
Log Level: ERROR  
Message: Media already exists  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Media already exists

#### Possible Causes 
* The media content already exists. Conflict in uploading the media.



# Code: 63026
Log Level: ERROR  
Message: Channel sender content flagged as spam  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Channel sender content flagged as spam

#### Possible Causes 
* Sender content was flagged as spam. Please check the content of the message.



# Code: 63027
Log Level: ERROR  
Message: Template does not exist for a language and locale  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Template does not exist for a language and locale

#### Possible Causes 
* Template does not exist for a language and locale



# Code: 63028
Log Level: ERROR  
Message: Number of parameters provided does not match the expected number of parameters  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
### Number of parameters provided does not match the expected number of parameters

#### Possible Causes 
* Number of parameters provided does not match the expected number of parameters



# Code: 63029
Log Level: ERROR  
Message: The receiver failed to download the template  
Secondary Message: null    
Description: The receiver failed to download the template  

Cause: The receiver failed to download the template  
Solutions: Please check your destination number/handset and retry the number  
Docs:
## ERROR - 63029

### The receiver failed to download the template

 The receiver failed to download the template


#### Possible Causes
The receiver failed to download the template

#### Possible Solutions
Please check your destination number/handset and retry the number



# Code: 63030
Log Level: ERROR  
Message: Unsupported parameter for type of channels message  
Secondary Message: null    
Description: ### Media messages are not supported with template (structured) messages. Please check your message and try sending a template message without the media  
### URL preview messages sent with incorrect URL format
Cause: * Media message not supported with template messages  
* No URL to support preview
Solutions: * Send template message without the media component  
* Check url for correctness for url previews
Docs:
## ERROR - 63030

### Unsupported parameter for type of channels message

 ### Media messages are not supported with template (structured) messages. Please check your message and try sending a template message without the media
### URL preview messages sent with incorrect URL format

#### Possible Causes
* Media message not supported with template messages
* No URL to support preview

#### Possible Solutions
* Send template message without the media component
* Check url for correctness for url previews



# Code: 63031
Log Level: ERROR  
Message: Channels message cannot have same From and To  
Secondary Message: null    
Description: Channels message should not have same From and To number  
Cause: Incorrect `To` and `From` number in channels message  
Solutions: Correct the channels `To` destination number  
Docs:
## ERROR - 63031

### Channels message cannot have same From and To

 Channels message should not have same From and To number

#### Possible Causes
Incorrect `To` and `From` number in channels message

#### Possible Solutions
Correct the channels `To` destination number



# Code: 63032
Log Level: ERROR  
Message: User's number is part of an experiment  
Secondary Message: null    
Description: User's number is part of an experiment  
Cause: Failed to send message because this user's phone number is part of an experiment.  
Solutions: Skip sending messages to this user.  
Docs:
## ERROR - 63032

### User's number is part of an experiment

 User's number is part of an experiment

#### Possible Causes
Failed to send message because this user's phone number is part of an experiment.

#### Possible Solutions
Skip sending messages to this user.



# Code: 63033
Log Level: ERROR  
Message: Recipient blocked to receive message  
Secondary Message: null    
Description: Recipient blocked to receive message  
Cause: Recipient has blocked your number.  
Solutions: Skip sending messages to this user.  
Docs:
## ERROR - 63033

### Recipient blocked to receive message

 Recipient blocked to receive message

#### Possible Causes
Recipient has blocked your number.

#### Possible Solutions
Skip sending messages to this user.



# Code: 64001
Log Level: ERROR  
Message: Pay: Configuration Error  
Secondary Message: Failed to retrieve connector configuration.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64001

### Pay: Configuration Error

A 64001 Error is an indication there is something wrong with the &lt;Pay&gt; connector configuration.

#### Possible Causes 
* Credentials were removed from configuration.
* Credentials were modified and are not matching the Connector Type.
* Configuration is missing Credentials.
* Configuration contains invalid attributes.

#### Possible Solutions
* Recreate your &lt;Pay&gt; connector configuration.



# Code: 64002
Log Level: ERROR  
Message: Pay: Service unavailable.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64002

### Pay: Service unavailable.

A 64002 Error is an indication that there is an internal server error and some internal services failed.

#### Possible Causes
* Some internal services in SignalWire were not available.
* Payment provider not available.

#### Possible Solutions
* Try to retry the request.
*   If the error persists, please <a href="https://signalwire.com/support">contact us</a> and we can help you resolve the issue. 
*   Note the time of the error and what you were trying to do when it occurred.



# Code: 64003
Log Level: ERROR  
Message: Pay: Invalid charge amount.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64003

### Pay: Invalid charge amount.

A 64003 Error is an indication that the charge amount is invalid. 

#### Possible Causes
* The chargeAmount attribute has a number of decimals that does not conform to the currency type. For example, more than 2 decimals were provided for US Dollars .
* chargeAmount attribute is negative.

#### Possible Solutions
* Make sure the charge amount has correct number of decimal values.
* Make sure the charge amount is a positive value.



# Code: 64004
Log Level: ERROR  
Message: Pay: Invalid paymentConnector attribute in LaML.  
Secondary Message: paymentConnector attribute provided does not reference a connector configuration.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64004

### Pay: Invalid paymentConnector attribute in LaML.

A 64004 Error is an indication that the value provided with paymentConnector attribute of Pay verb
does not match to a Pay Connector configuration. See the Pay Verb API Reference.

#### Possible Solutions
* Make sure that the paymentConnector matches a Unique Name in the &lt;Pay&gt; Connector. Go to <A HREF="/console/voice/pay-connectors">this page</A> for a list of your Connectors.



# Code: 64005
Log Level: ERROR  
Message: Pay: Connector does not support tokenization.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64005

### Pay: Connector does not support tokenization.

A 64005 Error is an indication that the request to tokenize credit card failed because the connector does not support tokenization.

#### Possible Causes
* The paymentConnector attribute points to Connector that does not support tokenization.
* The chargeAmount attribute in the Pay Verb LaML was 0 (or omitted) and you intended to charge.

#### Possible Solutions
* Make sure that the paymentConnector matches a &lt;Pay&gt; Connector that supports tokenization.
* If a charge was intended, please change the chargeAmount attribute and provided a positive value. Please see this API documentation for more details.



# Code: 64006
Log Level: ERROR  
Message: Pay: Connector does not support token type.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64006

### Pay: Connector does not support token type.

 Error is an indication that the request to tokenize credit card failed because the connector does not support tokenization.

A 64006 Error is an indication that the request to tokenize of a particular type is not supported by the &lt;Pay&gt; connector.  For instance, tokenType="one-time" was used but
only tokenType="reusable" is supported.

#### Possible Causes
* The paymentConnector attribute points to a Connector that does not support the requested type of tokenization.

#### Possible Solutions
* Make sure that the paymentConnector matches a &lt;Pay&gt; Connector that supports the tokenization type you want.
* Make sure you specify the tokenType that matches what you want to perform.



# Code: 64007
Log Level: ERROR  
Message: Pay: Connector does not support creating charge.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64007

### Pay: Connector does not support creating charge.

 Error is an indication that the request to tokenize credit card failed because the connector does not support tokenization.

A 64007 Error is an indication that the request to create a charge on the credit card failed because the connector does not support making charges.

#### Possible Causes
* The paymentConnector attribute points to a Connector that does not support charging.

#### Possible Solutions
* Make sure that the paymentConnector matches a &lt;Pay&gt; Connector that supports charging.
* If tokenization was intended, please change the chargeAmount attribute. Please see this API documentation for more details.



# Code: 64008
Log Level: ERROR  
Message: Pay: Payment Gateway rejected charge creation.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64008

### Pay: Payment Gateway rejected charge creation.

A 64008 Error is an indication that the request attempted to perform a charge of a credit card
but the attempt failed because the connector returned an error.

#### Possible Causes
* The &lt;Pay&gt; Connector returned an error.

#### Possible Solutions
* Please see the data returned in the with webhook to action url for more details.  
* Reach out to your Payment Gateway support for more assistance.



# Code: 64009
Log Level: ERROR  
Message: Pay: SignalWire is no longer authorized to initiate transactions on your behalf.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64009

### Pay: SignalWire is no longer authorized to initiate transactions on your behalf.

A 64009 Error is an indication that the credentials provided in connector configuration no longer allow SignalWire
to perform requests on behalf of your account.

#### Possible Causes
* The SignalWire application had its privileges revoked from your account.

#### Possible Solutions
* Create a new connector configuration and run through the scenario where you authorize SignalWire to make requests on your behalf again.



# Code: 64010
Log Level: ERROR  
Message: Pay: Payment Gateway rejected token creation.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64010

### Pay: Payment Gateway rejected token creation.

A 64010 Error is an indication that the request to create token was rejected by the Payment Gateway. 

#### Possible Solutions
* Please see the data returned in the with webhook to action url for more details.  
* Reach out to your Payment Gateway support for more assistance.




# Code: 64011
Log Level: ERROR  
Message: Pay: Connector does not support the requested currency.  
Secondary Message: The currency attribute had a value that the Connector did not support.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64011

### Pay: Connector does not support the requested currency.

A 64011 Error is an indication that the value provided in the currency attribute is not supported by this &lt;Pay&gt; Connector.

#### Possible Causes
* currency is an invalid currency code.
* currency is not supported by the &lt;Pay&gt; Connector.




# Code: 64012
Log Level: ERROR  
Message: Pay: Payment Gateway rejected the card.  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 64012

### Pay: Payment Gateway rejected the card.

A 64012 Error is an indication that the provided card was rejected by the Payment Gateway.

#### Possible Causes
* The card used was rejected by the Payment Gateway.

#### Possible Solutions
* Check the PaymentError in the response for more detailed information from the Payment Gateway.
* Prompt the user about the card information again.



# Code: 64013
Log Level: ERROR  
Message: Pay: Connector does not support supplied paymentMethod attribute.  
Secondary Message: null    
Description: A 64013 Error is an indication that the provided paymentMethod attribute was not supported by the Connector.  
Cause: The targeted Payment Connector did not support the paymentMethod. For instance, a credit card might have been supplied but the Connector did not support Credit Cards.  
Solutions: Make sure the Connector supports the defined paymentMethod attribute.  
Docs:
## ERROR - 64013

### Pay: Connector does not support supplied paymentMethod attribute.

 A 64013 Error is an indication that the provided paymentMethod attribute was not supported by the Connector.

#### Possible Causes
The targeted Payment Connector did not support the paymentMethod. For instance, a credit card might have been supplied but the Connector did not support Credit Cards.

#### Possible Solutions
Make sure the Connector supports the defined paymentMethod attribute.



# Code: 70001
Log Level: ERROR  
Message: Validation Failed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70001

### Validation Failed
The Request body is syntactically correct, the body was successfully parsed, but the data in the body violates the constraints.

#### Possible Causes 
* Performing an update to the “FriendlyName” with a string longer than the allowed 64 characters.
* Updating a field that cannot have a null value to a null.



# Code: 70002
Log Level: ERROR  
Message: Bad request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70002

### Bad request
The data in the request is unparsable.

#### Possible Causes 
* When sending a string field “abc” when an intValue is expected
* When sending invalid JSON in the request body



# Code: 70003
Log Level: ERROR  
Message: Outdated Entity  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70003

### Outdated Entity
The request tries to update a resource that has been already updated (by someone else). Only applies if the resource uses a version field.

#### Possible Causes 
* When sending an update request that contains field: “version: 1” and the server recognizes that the actual version of the resource is already 2.

#### Possible Solution:
* Reload the resource with a GET request to get the latest version.



# Code: 70004
Log Level: ERROR  
Message: Unauthorized  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70004

### Unauthorized
The Request does not contain any authorization information (most cases: credentials) or the credentials and the resource have no relation.

#### Possible Causes 
* When omitting the Auth header from HTTP request
* Passing an Auth header to access a resource that belongs to some other account.




# Code: 70005
Log Level: ERROR  
Message: Failure Threshold Exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70005 

### Failure Threshold Exceeded
Too many unsuccessful requests against SignalWire API.

#### Possible Causes 
* The requests try to repeatedly access a deleted resource
* The requests try to repeatedly access an invalid resource

#### Possible Solution:
* Slow down the requests
* Validate whether the given resource exists



# Code: 70051
Log Level: ERROR  
Message: Authorization Failed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70051 

### Authorization Failed
SignalWire could not authorize the given request.

#### Possible Causes 
* The Account is not found or is suspended
* The API key is not found or is suspended
* The Credentials used for authorization do not belong to the given account


#### Possible Solution:
* Make sure the account or the API key are valid and active



# Code: 70052
Log Level: ERROR  
Message: Public Key Client Validation Required For Account  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70052 

### Public Key Client Validation Required For Account
The account is only allowed to perform Public Key Client Validation requests at SignalWire. All other types of authentication are disabled for the account.

#### Possible Causes 
* The SignalWire-Client-Validation is not present in the request.

#### Possible Solution:
* Ensure the SignalWire-Client-Validation header is present in the request and valid.
* Disable forcing Client Validation feature at the Console if not needed.




# Code: 70053
Log Level: ERROR  
Message: Public Key Client Validation Not Enabled For Account  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:

## Error - 70053

### Public Key Client Validation Not Enabled For Account
The request attempted to use the Public Key Client Validation but the functionality is not enabled for this account.

#### Possible Solution:
* Ensure your Account is enabled for this feature.
* Remove the SignalWire-Client-Validation header from your request



# Code: 70101
Log Level: ERROR  
Message: Unsupported Public Key Algorithm  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70101

### Unsupported Public Key Algorithm
The Request tries to store a Public Key in SignalWire. This public key can be parsed, but the request fails, because the key uses an unsupported algorithm.

#### Possible Causes 
* Wrong public key algorithm. Only supported algorithm is RSA.

#### Possible Solution
* Regenerate a new keypair with RSA encryption and retry.



# Code: 70102
Log Level: ERROR  
Message: Unsupported Public Key Length  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70102

### Unsupported Public Key Length
The Request tries to store a Public Key in SignalWire. This public key can be parsed, has a correct encryption algorithm, but the request fails because the key has an invalid length.

#### Possible Causes 
* Public key lenght different than 2048.

#### Possible Solution
* Regenerate a new keypair with length 2048 and retry.



# Code: 70103
Log Level: ERROR  
Message: Unsupported Public Key Exponent  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70103

### Unsupported Public Key Exponent
The Request tries to store a Public Key in SignalWire. This public key can be parsed, has a correct encryption algorithm, but the request fails because the key exponent has an invalid length.

#### Possible Causes 
* Public key key exponent different than 65537.

#### Possible Solution
* Regenerate a new keypair with exponent 65537 and retry.



# Code: 70104
Log Level: ERROR  
Message: Invalid Public Key  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70104

### Invalid Public Key
The Request tries to store a Public Key in SignalWire. This public key cannot be parsed. Only supported key format is X.509 PEM. The prefix and suffix (-----BEGIN PUBLIC KEY-----) of the key can be present (but not mandatory).

#### Possible Solution:
Make sure the public key is correct in the request:
* The key is in X.509 PEM format
* There are no copy paste errors
* All the parts of the key are present in the request.



# Code: 70105
Log Level: ERROR  
Message: Invalid Type Specified in the Request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70105

### Invalid Type Specified in the Request
When using a SignalWire Resource that supports working with different types of SignalWire Credentials (Public Key Credentials, Push Credentials) the request must contain type(s) that is recognized by the resource.

#### Possible Solution:
* Check the API documents to verify the correct credential type(s) were used in the request.





# Code: 70106
Log Level: ERROR  
Message: Invalid AWS credentials  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70106

### Invalid AWS credentials specified in the request
When uploading AWS credentials to SignalWire make sure:
* AWS key matches the regex: (?<![A-Z0-9])[A-Z0-9]{20}(?![A-Z0-9])
* AWS secret matches the regex: (?<![A-Za-z0-9/+=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])

#### Possible Solution:
* Validate the credentials and upload them again.





# Code: 70151
Log Level: ERROR  
Message: Maximum Number Of API Keys Exceeded  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70151

### Maximum Number Of API Keys Exceeded
The account reached the maximum limit of API Keys allowed. 

#### Possible Solution:
* Delete unused API Keys before creating additional ones.



# Code: 70152
Log Level: ERROR  
Message: Request Contains Invalid Flags  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70152

### Request Contains Invalid Flags
One or more of the provided flags in the API key request are invalid in the given context.

#### Possible Causes 
* An API key is attempting to create a new key with greater permissions than what it is assigned.

#### Possible Solution:
* Remove the invalid flag(s) that would expand permissions.



# Code: 70153
Log Level: ERROR  
Message: Public Key Specified Does Not Exist  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70153 

### Public Key Specified Does Not Exist
The Public Key with the SID provided in the JWT header does exist. This is a Public Key Client Validation Error.

#### Possible Solution:
* Update the kid value provided in the JWT header.
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)



# Code: 70154
Log Level: ERROR  
Message: Public Key Is Invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70154

### Public Key Is Invalid
The Public Key provided to SignalWire is invalid. This is a Public Key Client Validation Error.

#### Possible Solution:
* Upload a new, valid Public Key.
* For details on the Credentials Endpoint, see [the documentation](/docs/api/credentials/rest)



# Code: 70155
Log Level: ERROR  
Message: Request Is Missing Required HTTP Headers  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70155

### Request Is Missing Required HTTP Headers
The JWT received by SignalWire along with the request has defined a set of HTTP headers that must be validated. The actual request is missing at least one of those headers. This is a Public Key Client Validation Error.

#### Possible Solution:
* Make sure you are using the latest SignalWire helper library.
* Make sure the JWT does not declare unnecessary headers.
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)



# Code: 70156
Log Level: ERROR  
Message: Request Hash Is Invalid  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70156

### Request Hash Is Invalid
The request hash that is declared in the JWT does not match the given request’s hash calculated by SignalWire. This is a Public Key Client Validation Error.

#### Possible Solution:
* Make sure you are using the latest SignalWire helper library. If not using the library, make sure the request hash is calculated on the canonicalized HTTP request and the same canonicalization is used.
* For the details on JWTs used as part of Public Key Client Validation, see [the documentation](/docs/api/credentials/public-key-client-validation-getting-started)



# Code: 70251
Log Level: ERROR  
Message: Bad SSO Settings  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70251

### Bad SSO Settings
The Request tries to authenticate through SSO. The request is well-formed, but the configured settings for the SSO is not valid.

#### Possible Causes 
* Malformed urls
* Missing certificates

#### Possible Solution
* Reconfigure the SSO settings and retry.



# Code: 70252
Log Level: ERROR  
Message: Bad Saml Response  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70252

### Bad Saml Response
The Request tries to authenticate through SSO. The request is well-formed, but the response from the Identity Provider is missing necessary attributes. 

#### Possible Causes 
* Misconfigured Identity Provider settings

#### Possible Solution
* Reconfigure the Identity Provider settings and retry.



# Code: 70253
Log Level: ERROR  
Message: Invalid User Grants  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 70253

### Invalid User Grants
The Request tries to authenticate through SSO. The request is well-formed, but the user grants stored is not a valid grants form.

#### Possible Causes 
* Invalid User Grants.

#### Possible Solution
* Reconfigure the user grants and retry.



# Code: 80101
Log Level: WARNING  
Message: Number Already Added To Other Service  
Secondary Message: PhoneNumber has already been added to another Service    
Description: ## Warning  

### Number Already Added To Other Service

Example Message: PhoneNumber has already been added to another Service: KS873258b0a8fd719662265509d5681660  
Cause: PhoneNumber has already been assigned to another Proxy Service   
Solutions: Add a different phone number or remove the number from another Proxy Service   
Docs:
## WARNING - 80101

### Number Already Added To Other Service

PhoneNumber has already been added to another Service ## Warning

### Number Already Added To Other Service

Example Message: PhoneNumber has already been added to another Service: KS873258b0a8fd719662265509d5681660  

#### Possible Causes
PhoneNumber has already been assigned to another Proxy Service 

#### Possible Solutions
Add a different phone number or remove the number from another Proxy Service 



# Code: 80102
Log Level: warning  
Message: Participant Already In Interaction  
Secondary Message: Participant has already been added to Interaction    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Participant Already In Interaction

Example Message: Participant has already been added to Interaction  



# Code: 80103
Log Level: warning  
Message: Participant Already In Session  
Secondary Message: Participant has already been added to Session    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Participant Already In Session

Example Message: Participant has already been added to Session  



# Code: 80104
Log Level: warning  
Message: Phone Number Already In Service  
Secondary Message: PhoneNumber has already been added to Service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Phone Number Already In Service

Example Message: PhoneNumber has already been added to Service  



# Code: 80105
Log Level: warning  
Message: Short Code Already In Service  
Secondary Message: ShortCode has already been added to Service    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Short Code Already In Service

Example Message: ShortCode has already been added to Service  



# Code: 80201
Log Level: warning  
Message: No Available Voice Proxy  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers having voice capabilities. This can happen if you attempted to create a participant in a session for which you did not specify a Mode in a country that does not support combined voice and sms capabilities.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Available Voice Proxy

Example Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers having voice capabilities. This can happen if you attempted to create a participant in a session for which you did not specify a Mode in a country that does not support combined voice and sms capabilities.  



# Code: 80202
Log Level: warning  
Message: No Available Message Proxy  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers having sms capabilities. This can happen if you attempted to create a participant in a session for which you did not specify a Mode in a country that does not support combined voice and sms capabilities, or if your only available proxy numbers do not have messaging capabilities.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Available Message Proxy

Example Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers having sms capabilities. This can happen if you attempted to create a participant in a session for which you did not specify a Mode in a country that does not support combined voice and sms capabilities, or if your only available proxy numbers do not have messaging capabilities.  



# Code: 80203
Log Level: warning  
Message: No Available Proxy For Country  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers for country code <country>    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Available Proxy For Country

Example Message: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers for country code <country>  



# Code: 80205
Log Level: warning  
Message: No Proxies For Service  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. This Service has no Proxy numbers configured.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Proxies For Service

Example Message: This Service has no compatible Proxy numbers for this Participant. This Service has no Proxy numbers configured.  



# Code: 80206
Log Level: warning  
Message: No Available Proxy  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. Failed to find a proxy number for +1415555XXXX. Either you have no numbers meeting your service's GeoMatchLevel for the target number, or the numbers you do have are already in use by the participant in other Sessions.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Available Proxy

Example Message: This Service has no compatible Proxy numbers for this Participant. Failed to find a proxy number for +1415555XXXX. Either you have no numbers meeting your service's GeoMatchLevel for the target number, or the numbers you do have are already in use by the participant in other Sessions.  



# Code: 80208
Log Level: ERROR  
Message: No Available Unused Proxy  
Secondary Message: This Service has no compatible Proxy numbers for this Participant. Failed to find a proxy number for {identifier}. All matching proxies for this Participant are already in use in other Sessions.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Available Unused Proxy

This Service has no compatible Proxy numbers for this Participant. Failed to find a proxy number for {identifier}. All matching proxies for this Participant are already in use in other Sessions.



# Code: 80301
Log Level: warning  
Message: Not Found Phone Number Sid  
Secondary Message: Phone Number Sid is not associated with your Account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Not Found Phone Number Sid

Example Message: Phone Number Sid is not associated with your Account.  



# Code: 80303
Log Level: warning  
Message: Not Found Short Code Sid  
Secondary Message: Short Code Sid is not associated with your Account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Not Found Short Code Sid

Example Message: Short Code Sid is not associated with your Account.  



# Code: 80304
Log Level: WARNING  
Message: Not Found Unmanaged Identifier  
Secondary Message: Unmanaged Proxy Identifier not found.  Unmanaged identifiers include non-phone number identifiers (e.g., a facebook messenger page id). Possibly you tried to add a participant with a proxy identifier for a channel that is not managed by SignalWire or by your Proxy Service.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Not Found Unmanaged Identifier

Unmanaged Proxy Identifier not found.  Unmanaged identifiers include non-phone number identifiers (e.g., a facebook messenger page id). Possibly you tried to add a participant with a proxy identifier for a channel that is not managed by SignalWire or by your Proxy Service.



# Code: 80305
Log Level: ERROR  
Message: Not Found Unmanaged Identifier Sid  
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Not Found Unmanaged Identifier Sid




# Code: 80306
Log Level: ERROR  
Message: Not Found Chat Service  
Secondary Message: Found no chat instance associated with service {ProxyServiceSid}    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Not Found Chat Service

Found no chat instance associated with service {ProxyServiceSid}



# Code: 80401
Log Level: warning  
Message: Account Sid Invalid  
Secondary Message: Invalid Account Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Account Sid Invalid

Example Message: Invalid Account Sid  



# Code: 80402
Log Level: warning  
Message: Identifier Proxy Pair Invalid  
Secondary Message: Invalid Identifier and Proxy Identifier pair    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Identifier Proxy Pair Invalid

Example Message: Invalid Identifier and Proxy Identifier pair  



# Code: 80403
Log Level: warning  
Message: Interaction Sid Invalid  
Secondary Message: Invalid Interaction Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Interaction Sid Invalid

Example Message: Invalid Interaction Sid  



# Code: 80404
Log Level: ERROR  
Message: Participant Identifier Invalid  
Secondary Message: Participant identifier provided does not appear to be a valid, reachable phone number.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Participant Identifier Invalid

Participant identifier provided does not appear to be a valid, reachable phone number.



# Code: 80405
Log Level: warning  
Message: Participant Sid Invalid  
Secondary Message: Invalid Participant Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Participant Sid Invalid

Example Message: Invalid Participant Sid  



# Code: 80406
Log Level: warning  
Message: Phone Number Did Invalid  
Secondary Message: Invalid Phone Number Did    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Phone Number Did Invalid

Example Message: Invalid Phone Number Did  



# Code: 80407
Log Level: warning  
Message: Phone Number Sid Invalid  
Secondary Message: Invalid Phone Number Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Phone Number Sid Invalid

Example Message: Invalid Phone Number Sid  



# Code: 80408
Log Level: warning  
Message: Service Sid Invalid  
Secondary Message: Invalid Service Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Service Sid Invalid

Example Message: Invalid Service Sid  



# Code: 80409
Log Level: warning  
Message: Session Sid Invalid  
Secondary Message: Invalid Session Sid    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Session Sid Invalid

Example Message: Invalid Session Sid  



# Code: 80501
Log Level: ERROR  
Message: Storage Operation Failed  
Secondary Message: An internal server error has occurred during a storage operation    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Storage Operation Failed

An internal server error has occurred during a storage operation



# Code: 80502
Log Level: ERROR  
Message: Internal Server Error from Downstream  
Secondary Message: A downstream server failed or refused to process a request.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Internal Server Error from Downstream

A downstream server failed or refused to process a request.



# Code: 80503
Log Level: WARNING  
Message: No Records Updated  
Secondary Message: Record to be updated was not found. It may have been deleted.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### No Records Updated

Example Message: Record to be updated was not found. It may have been deleted.  



# Code: 80505
Log Level: ERROR  
Message: Flex Configuration Error  
Secondary Message: A Flex component was not configured correctly    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Flex Configuration Error

A Flex component was not configured correctly.  Please reach out to Flex support.



# Code: 80601
Log Level: warning  
Message: Phone Number Not Available  
Secondary Message: PhoneNumber is not available.  It may be bound to a number pool.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Phone Number Not Available

Example Message: PhoneNumber is not available.  It may be bound to a number pool.  



# Code: 80602
Log Level: warning  
Message: Non Unique Service Name  
Secondary Message: Service UniqueName must be unique.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Non Unique Service Name

Example Message: Service UniqueName must be unique.  



# Code: 80603
Log Level: warning  
Message: Non Unique Session Name  
Secondary Message: Session UniqueName must be unique.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Non Unique Session Name

Example Message: Session UniqueName must be unique.  



# Code: 80604
Log Level: warning  
Message: Proxy Identifier In Use  
Secondary Message: Proxy identifier already in use with requested identifier.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Proxy Identifier In Use

Example Message: Proxy identifier already in use with requested identifier.  



# Code: 80605
Log Level: warning  
Message: Proxy Identifier Not In Service  
Secondary Message: Proxy identifier not associated with service.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Proxy Identifier Not In Service

Example Message: Proxy identifier not associated with service.  



# Code: 80606
Log Level: warning  
Message: Proxy Identifier Not Owned By Account  
Secondary Message: Proxy identifier not owned by account.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Proxy Identifier Not Owned By Account

Example Message: Proxy identifier not owned by account.  



# Code: 80607
Log Level: warning  
Message: Session Closed  
Secondary Message: Session is closed and cannot be updated    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Session Closed

Example Message: Session is closed and cannot be updated  



# Code: 80608
Log Level: ERROR  
Message: Session Status Invalid  
Secondary Message: Session status change not supported    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Session Status Invalid (80608)

Session status change not supported. Please see https://signalwire.com update.



# Code: 80609
Log Level: warning  
Message: Too Many Added Participants  
Secondary Message: A Session may have at most 2 participants    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Too Many Added Participants

Example Message: A Session may have at most 2 participants  



# Code: 80610
Log Level: warning  
Message: Unauthorized Operation  
Secondary Message: Unauthorized. You may be trying to use an invalid combination of sids.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Unauthorized Operation

Example Message: Unauthorized. You may be trying to use an invalid combination of sids.  



# Code: 80611
Log Level: WARNING  
Message: Proxy Number In Active Sessions  
Secondary Message: Proxy Number cannot be removed from Service.  It is in use by one or more Sessions.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Proxy Number In Active Sessions

Example Message: Proxy Number cannot be removed from Service.  It is in use by one or more Sessions.  



# Code: 80612
Log Level: WARNING  
Message: Duplicate Entry  
Secondary Message: Example Message: Duplicate entry. You tried to add a(n) XXX that already exists    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Duplicate Entry

Example Message: Duplicate entry. You tried to add a(n) XXX that already exists  



# Code: 80613
Log Level: WARNING  
Message: Downstream Request Rejected  
Secondary Message: Example Message: Your request was rejected: rejected reason    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Downstream Request Rejected

Example Message: Your request was rejected: rejected reason  



# Code: 80614
Log Level: WARNING  
Message:  No Partner Participant Found  
Secondary Message: Example Message: Incoming message or call found no target participant in session KCac74da33088913e84bfafb5b821ab0b0 for participant KP2ece38f658cdabc372ef3f149ed5977a    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Partner Participant Found

Example Message: Incoming message or call found no target participant in session <SessionSid> for participant <ParticipantSid>  



# Code: 80615
Log Level: ERROR  
Message: Account Sid on Legal Hold  
Secondary Message: Account <AccountSid> is on legal hold.  Cannot delete record <Sid>.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Account Sid on Legal Hold

Account <AccountSid> is on legal hold.  Cannot delete record <Sid>.



# Code: 80616
Log Level: ERROR  
Message: Unsupported Identifier Type For Session Mode  
Secondary Message: Cannot add <Identifier> to session <SessionSid>. The identifier is not compatible with the session mode.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error

### Unsupported Identifier Type For Session Mode

Cannot add <Identifier> to session <SessionSid>. The identifier is not compatible with the session mode.



# Code: 80617
Log Level: ERROR  
Message: Flex Configuration Error  
Secondary Message: A Flex component was not configured correctly    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 80617 

### Flex Configuration Error

A Flex component was not configured correctly.

#### Possible Causes 
* You made changes to one of your Flex phone numbers
* You are trying to use a phone number with Flex but have not created a Flex Flow for that number
* You manually deleted a Chat Channel or Proxy Session
* You removed or changed the Chat Channel Sid setting in your Proxy Service




# Code: 80618
Log Level: ERROR  
Message: Chat Integration Error  
Secondary Message: A Chat element was not configured correctly for Proxy    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 80618

### Chat Integration Error

A Chat component was not configured correctly for integration with Proxy Service

#### Possible Causes 
* You manually deleted a Chat Channel or Proxy Session
* You removed or changed the Chat Channel Sid setting in your Proxy Service




# Code: 80619
Log Level: ERROR  
Message: Chat Channel Attribute Error  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 80619

### Chat Channel Attribute Error





# Code: 80620
Log Level: ERROR  
Message: Chat Configured Proxy Identifier Not Found  
Secondary Message: Received a chat message for a proxy identifier that does not exist in your Proxy pool    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 80620

### Chat Configured Proxy Identifier Not Found

Received a chat message for a proxy identifier that does not exist in your Proxy pool

#### Possible Causes
* You removed a Flex number from your Proxy pool 



# Code: 80701
Log Level: warning  
Message: Parameter Validation Failed  
Secondary Message: '<parameter name>' is invalid. <parameter is invalid>    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Parameter Validation Failed

Example Message: '<parameter name>' is invalid. <parameter is invalid>  



# Code: 80901
Log Level: warning  
Message: Message Matched Stop Word  
Secondary Message: Message matched a STOP or START word, not proxying    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Message Matched Stop Word

Example Message: Message matched a STOP or START word, not proxying  



# Code: 80902
Log Level: ERROR  
Message: No Active Session  
Secondary Message: You received a call to your Proxy Number from a caller who is not a participant in an active session.     
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### No Active Session

You received a call to your Proxy Number from a caller who is not a participant in an active session. 



# Code: 80903
Log Level: warning  
Message: Unknown Participant  
Secondary Message: Unknown Participant    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Unknown Participant

Example Message: Unknown Participant  



# Code: 80904
Log Level: warning  
Message: Expired Session  
Secondary Message: Expired Session    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Expired Session

Example Message: Expired Session  



# Code: 80905
Log Level: warning  
Message: Unknown Scenario  
Secondary Message: No valid proxy scenario for handling inbound call or message    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Unknown Scenario

Example Message: No valid proxy scenario for handling inbound call or message  



# Code: 80906
Log Level: warning  
Message: Interaction Not Open  
Secondary Message: Received interaction completion event for an Interaction that is already complete    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Interaction Not Open

Example Message: Received interaction completion event for an Interaction that is already complete  



# Code: 80907
Log Level: warning  
Message: Open Interaction Not Found  
Secondary Message: Received a call with no open interaction    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Open Interaction Not Found

Example Message: Received a call with no open interaction  



# Code: 80908
Log Level: warning  
Message: Callback Error  
Secondary Message: Error on Callback for http://www.yourdomain.com/callback    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Callback Error

Example Message: Error on Callback for http://www.yourdomain.com/callback  



# Code: 80909
Log Level: warning  
Message: Inbound Contact Rejected  
Secondary Message: Interaction not completed due to intercept response    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Inbound Contact Rejected

Example Message: Interaction not completed due to intercept response  



# Code: 80910
Log Level: WARNING  
Message: Message To Voice Only Session Rejected  
Secondary Message: Example Message: Inbound message to voice-only session rejected.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Message To Voice Only Session Rejected

Example Message: Inbound message to voice-only session rejected.  



# Code: 80911
Log Level: WARNING  
Message: Call To Message Only Session Rejected  
Secondary Message: Example Message: Inbound call to message-only session rejected.    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning

### Call To Message Only Session Rejected

Example Message: Inbound call to message-only session rejected.  



# Code: 80913
Log Level: ERROR  
Message: Out-Of-Session Callback Error  
Secondary Message: null    
Description: Callback to Out-of-Session handler returned a non-success status code.  
Cause: * Your Out-of-Session callback URL is invalid.  
Solutions: * Verify that your Out-of-Session callback URL is valid and that your server is correctly processing Out-of-Session callbacks from Proxy.  
* Please read over the [Out-Of-Session Callback guide] (https://signalwire.com) for more detailed information.
Docs:
## ERROR - 80913

### Out-Of-Session Callback Error

 Callback to Out-of-Session handler returned a non-success status code.

#### Possible Causes
* Your Out-of-Session callback URL is invalid.

#### Possible Solutions
* Verify that your Out-of-Session callback URL is valid and that your server is correctly processing Out-of-Session callbacks from Proxy.
* Please read over the [Out-Of-Session Callback guide] (https://signalwire.com) for more detailed information.



# Code: 81000
Log Level: WARNING  
Message: The Execution has exceeded max steps allowed for a flow  
Secondary Message: null    
Description: This limitation is enforced to prevent infinite loops. Please try to design your flows such that they terminate.  
Cause: * You have too many steps in your flow.  
Solutions: * Reduce the number of steps in your flow.  
Docs:
## WARNING - 81000

### The Execution has exceeded max steps allowed for a flow

 This limitation is enforced to prevent infinite loops. Please try to design your flows such that they terminate.

#### Possible Causes
* You have too many steps in your flow.

#### Possible Solutions
* Reduce the number of steps in your flow.



# Code: 81001
Log Level: WARNING  
Message: The Widget has exceeded max steps in a loop  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 81001

### Widget has exceeded max steps in a loop
This limitation is enforced to prevent infinite loops. Please try to design your flows such that they terminate.

#### Possible Causes
* You have a single widget looping back on itself too many times.

#### Possible Solutions
* Remove the single widget loop.



# Code: 81002
Log Level: WARNING  
Message: Unexpected event while processing Widget  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 81002

### Unexpected event while processing Widget
An unexpected event was received while processing a widget. Studio ignored this event and did not transition to another widget because there was no matching transition available to handle the event.

#### Possible Causes
* This error can happen when a new inbound call or message is initiated from a contact address (e.g. phone number) that already has an active Execution.
* There was no transition that matched the received event.

#### Possible Solutions
* Enable [Concurrent Calls](https://signalwire.com) in the Flow's Trigger widget.
* Ensure widgets and transitions are connected in a logical sequence for the communication method being used.



# Code: 81004
Log Level: ERROR  
Message: Failed to add member to Chat Channel  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81004

### Failed to add member to Chat Channel
Studio was unable to add a member to the Chat Channel while executing the Flow

#### Possible Causes
* The request to the Chat API failed.
* Invalid values were passed to the Chat API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81005
Log Level: WARNING  
Message: Failed to transition because no match was found  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 81005

### Failed to transition because no match was found
Studio was unable to transition to the next widget because no matching transition was found in the Split widget.

#### Possible Causes
* Missing values in the match field.
* Match field is in the wrong format.
* Regular expression is too restrictive.

#### Possible Solutions
* Check the values that you’re matching against in the Split widget.



# Code: 81006
Log Level: ERROR  
Message: Failed to create Chat Channel  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81006

### Failed to create Chat Channel
Studio was unable to create the Chat Channel while executing the Flow

#### Possible Causes
* The request to the Chat API failed.
* Invalid values were passed to the Chat API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81007
Log Level: ERROR  
Message: Connecting to a Call timed out  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81007

### Connecting to a Call timed out
Studio timed out while executing the Connect Caller widget in the Flow.

#### Possible Causes
* The call could not be completed before the end of the timeout period.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81008
Log Level: ERROR  
Message: Failed to connect to outgoing Call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81008

### Failed to connect to outgoing Call
Studio was unable to connect a call while processing the Outgoing Call widget.

#### Possible Causes
* The request to the Voice API failed.
* Invalid values were passed to the Voice API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81009
Log Level: ERROR  
Message: Timed out enqueueing Call  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81009

### Timed out enqueueing Call
Studio timed out while executing the Enqueue Call widget in the Flow.

#### Possible Causes
* The request to the Taskrouter API failed.
* Invalid values were passed to the Taskrouter API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81010
Log Level: ERROR  
Message: There was an internal error while processing a Function  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81010

### There was an internal error while processing a Function
Studio could not invoke the Function service.

#### Possible Causes
* The Function returned a 4xx or 5xx status code
* The Function timed out or did not include `callback()`
* There may be an issue with SignalWire Function Service

#### Possible Solutions
* Verify your Function calls `callback()` to avoid timeouts
* Check your Function logs for runtime errors
* Ensure you're returning the correct status code



# Code: 81011
Log Level: ERROR  
Message: Failed to send Message  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81011

### Failed to send Message
Studio was unable to send a Message. This is usually due to incorrect setup of a Message Widget.

#### Possible Causes
* You have an invalid number.
* You are missing a message body.
* You are missing a Media URL

#### Possible Solutions
* Ensure the message number is valid.
* Ensure you have set a correct message body in the Widget.
* Ensure you have setup a Media URL.



# Code: 81012
Log Level: ERROR  
Message: Failed to update Sync service  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81012

### Failed to update Sync service
Studio was unable to update the Sync Service while executing the Flow

#### Possible Causes
* The request to the Sync API failed.
* Invalid values were passed to the Sync API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81013
Log Level: ERROR  
Message: Failed to invoke Understand API  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81013

### Failed to invoke Understand API
Studio was unable to invoke the Understand API while executing the Flow

#### Possible Causes
* The request to the Understand API failed.
* Invalid values were passed to the Understand API.

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?



# Code: 81014
Log Level: ERROR  
Message: There was an error while processing an HTTP request  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81014

### There was an error while processing an HTTP request
An error occurred when Studio was executing an HTTP request as part of the Webhook widget. 

#### Possible Causes
* The URL is invalid.
* Required values are missing from the widget.
* The URL took too longer than 5 seconds to respond

#### Possible Solutions
* Verify all widget fields are filled out correctly
* Check the HTTP request URL is valid and accessible
* Ensure the URL responds within 5 seconds



# Code: 81015
Log Level: ERROR  
Message: Failed to Create Task  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81015

### Task was not successfully created
An error occurred when Studio attempted to create task.

#### Possible Causes
* Required values are missing from the widget.
* Values are not correctly formatted (e.g. Attributes)

#### Possible Solutions
* Check the Widget configuration. Are all fields filled out correctly?




# Code: 81016
Log Level: ERROR  
Message: Outbound HTTP Request Failed  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81016

### Outgoing HTTP request failed
The outgoing HTTP request from a Studio widget failed.

#### Possible Causes
* The URL you are requesting is incorrect
* The response is badly formed
* The URL returned a 4xx or 5xx error code

#### Possible Solutions
* Make sure the request results in a response code 2xx or 3xx




# Code: 81017
Log Level: ERROR  
Message: Error in SignalWire Function Response  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81017

### Error on SignalWire Function response
There was an error in the response back from a SignalWire Function attached to the Studio flow.

#### Possible Causes
* Your Function timed out before responding
* Your Function returned an error response

#### Possible Solutions
* Your Function must contain a callback.
* Make sure you place the Function callback `callback(err, response)` is placed correctly in your Function code.
 * If you are using a JavaScript promise, make sure the callback is called in both success and catch blocks.
* Your Function responded with an error.



# Code: 81018
Log Level: WARNING  
Message: Template evaluation error in Studio widget  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 81018

### Template evaluation error in Studio widget
An error occurred when Studio tried to evaluate your template syntax

#### Possible causes:
* The syntax used in your widget caused an error
* An array index referenced in your widget didn't exist at execution time
* Your Liquid curly braces are mismatched
* You used a `+` character in your template
* You have improperly assigned a variable

#### Possible solutions:
* Check the syntax used in your widget (See Liquid docs [here](https://signalwire.com)
* Verify the runtime data of your flow execution by checking the Flow Data and inspecting any variables you may have referenced
* Verify that your Liquid curly braces are matched



# Code: 81019
Log Level: ERROR  
Message: Used deprecated 2008-08-01 API  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 81019



# Code: 82001
Log Level: WARNING  
Message: Function invocation resulted in StatusCode 4xx  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Warning - 82001

### Function invocation resulted in StatusCode 4xx
Your Function invocation returned a 4xx StatusCode. 

#### Possible Causes
* Function route does not exist
* Function is set to Private and invocation request is not signed

#### Possible Solutions
* Check the Function route you are invoking exists
* Check whether the Function's *Access Control* is set to Private and whether you intended to have it set as so. If it is Private, then your request must be properly signed.



# Code: 82002
Log Level: ERROR  
Message: Error on SignalWire Function response  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 82002

### Error on SignalWire Function response
Your Function invocation resulted in StatusCode 5xx.

#### Possible Causes
* Your Function timed out before responding
* Your Function returned an error response

#### Possible Solutions
* Your Function must contain a callback.
* Make sure you place the Function callback `callback(err, response)` is placed correctly in your Function code.
 * If you are using a JavaScript promise, make sure the callback is called in both success and catch blocks.
* Your Function responded with an error.



# Code: 82003
Log Level: ERROR  
Message: Deployment Installation Failure  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 82003

### Deployment Installation Failure
Your latest Functions and Private Assets failed to be deployed

#### Possible Causes
* NPM registry is degraded
* Your Service instance is trying to install a package that requires a gcc compiler 
* Your Service instance resulted in out of space error due to large packages

#### Possible Solutions



# Code: 90000
Log Level: ERROR  
Message: Uncaught Flex JavaScript Exception  
Secondary Message: A client-side JavaScript exception occurred within the Flex UI    
Description: null  
Cause: null  
Solutions: null  
Docs:
## Error - 90000

### Uncaught Flex JavaScript Exception
A JavaScript error has occurred within Flex UI.

#### Possible Causes
* There may have been an issue initializing Flex
* There may be an uncaught exception within a Flex plugin



# Code: 90010
Log Level: ERROR  
Message: Account is not active  
Secondary Message: null    
Description: null  
Cause: null  
Solutions: null  
Docs:
This account is currently not in an active state

#### Possible causes

* Account is suspended




# Code: 90100
Log Level: ERROR  
Message: Invalid Autopilot Actions JSON  
Secondary Message: null    
Description: Autopilot Actions Configured on the Task are Invalid  
Cause: Actions JSON does not comply with the Actions Schema 
Solutions: Test your JSON response against the Actions Schema 
Docs:
## ERROR - 90100

### Invalid Autopilot Actions JSON

 Autopilot Actions Configured on the Task are Invalid

#### Possible Causes
Actions JSON does not comply with the Actions Schema 

#### Possible Solutions
Test your JSON response against the Actions Schema 



