from django.http import HttpResponse
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from signalwire.voice_response import VoiceResponse, Dial, Sip, Say

DEBUG = True
CSRF_COOKIE_SECURE = False
SECRET_KEY = 'XXXX'
ROOT_URLCONF = __name__
ALLOWED_HOSTS = ["0.0.0.0","139.X.X.X","127.0.0.1"] #Add on which IP you are running server in this array

response = "";
@csrf_exempt
def dial_sip(request):
    #Signalwire CallStatus Parameters declating here 
    dialSipResponseCode="";
    dialCallStatus="";
    callStatus="";
    fromNumber="";
    toNumber="";
    callSid="";
    response = VoiceResponse()
    dial = Dial()
    if request.method == 'GET':
        ReqDict = request.GET #GET parameters from Signalwire
    elif request.method == 'POST':
         ReqDict = request.POST #POST parameters from signalwire
    print(ReqDict)
    #Grabing Signalwire Parameters to variables 
    for i,v in ReqDict.items():
       if i == "DialSipResponseCode":
           dialSipResponseCode = v;
       if i == "DialCallStatus":
           dialCallStatus=v;
       if i == "CallStatus":
           callStatus=v
       if i == "From":
            fromNumber=v;
       if i == "To"
          toNumber=v;
       if i == "CallSid"
           callSid=v;
    if(callStatus == "queued"): #New Call Even Handle Here 
        dial.sip('sip:alice@example.com') #Generating XML here for New call 
        response.append(dial) # here we get XML <Response><Dial><Sip>sip:alice@example.com</Sip></Dial></Response>
    if(int(dialSipResponseCode) > 299 or dialCallStatus == "failed"): #Dial Action will pass this condition Signalwire when Dial Action URL will call
        dial.sip('bob:alice@example.com')
        response.append(dial) # here we get XML <Response><Dial><Sip>bob:alice@example.com</Sip></Dial></Response>
    else:
        response.say('Your SIP call was a successull call')
    return HttpResponse(response,content_type='text/xml');

urlpatterns = [
    url(r'^dial_sip$', dial_sip),
]
