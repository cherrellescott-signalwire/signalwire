from django.http import HttpResponse
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from signalwire.voice_response import VoiceResponse, Dial, Sip

DEBUG = True
CSRF_COOKIE_SECURE = False
SECRET_KEY = 'XXXX'
ROOT_URLCONF = __name__
ALLOWED_HOSTS = ["0.0.0.0","139.X.X.X","127.0.0.1"]

response = "";
@csrf_exempt
def dial_sip(request):
    dialSipResponseCode="";
    dialCallStatus="";
    response = VoiceResponse()
    dial = Dial()
    if request.method == 'GET':
        ReqDict = request.GET
    elif request.method == 'POST':
         ReqDict = request.POST
    print(ReqDict)
    for i,v in ReqDict.items():
       if i == "DialSipResponseCode":
           dialSipResponseCode = v;
       if i == "DialCallStatus":
           dialCallStatus=v;
    if(int(dialSipResponseCode) > 299 or dialCallStatus == "failed"):
        dial.sip('sip:alice@example.com')
        response.append(dial)
    else:
        dial.sip('sip:bob@example.com')
        response.append(dial)
    return HttpResponse(response,content_type='text/xml');

urlpatterns = [
    url(r'^dial_sip$', dial_sip),
]
