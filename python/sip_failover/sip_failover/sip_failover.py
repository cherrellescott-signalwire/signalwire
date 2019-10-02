###
### WARNING, this example is complete, may not work
### I moved my failover example to nodejs
###


# pip3 install django
# django-admin --version   #(2.2.5)

# django-admin startproject sip_failover
# python3 manage.py migrate
# cd sip_failover

# inside the PROJECT/WHATEVER.settings file you'll find the SECRET_KEY needed
# in my case it was "0ac&&f+9*(4nrbz$un#4%vyow99r)&nwd*vl^$&-ggn#tks2#@"
# this may be needed for the SECRET_KEY val in your script

# to start server
# cd project_root/sip_failover
# django-admin runserver 192.168.150.7:8000 --pythonpath=. --settings=sip_failover

from django.http import HttpResponse
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from signalwire.voice_response import VoiceResponse, Dial, Sip

import os
from dotenv import load_dotenv
load_dotenv()


###################################
#
# You need to create a ".env" file with all these values
#
# example:   PORT='3000'
#            IP='192.168.150.87
#            ... so on and so forth
#
###################################
PYTHON_PORT = os.getenv('PYTHON_PORT')
IP = os.getenv('IP')
EXT_IP = os.getenv('EXT_IP')
SPACE_URL = os.getenv('SPACE_URL')
PROJECT_KEY = os.getenv('PROJECT_KEY')
API_TOKEN = os.getenv('API_TOKEN')
PHONE_NUMBER = os.getenv('PHONE_NUMBER')
CELL_NUMBER = os.getenv('CELL_NUMBER')
ALT_CELL= os.getenv('ALT_CELL')
SIP_DIAL = os.getenv('SIP_DIAL')         #example:  "sip:100@joshebosh-ABCDEF.sip.signalwire.com;transport=tls"
SIP_FAILOVER = os.getenv('SIP_FAILOVER') #example:  "sip:200@joshebosh-ABCDEF.sip.signalwire.com;transport=tls"
NODE_URL = os.getenv('NODE_URL')
DOMAIN_NAME = os.getenv('DOMAIN_NAME')
SW_NUMBER_1 = os.getenv('SW_NUMBER_1')
SW_NUMBER_2 = os.getenv('SW_NUMBER_2')
#########################################



DEBUG = True
CSRF_COOKIE_SECURE = False
SECRET_KEY = '0ac&&f+9*(4nrbz$un#4%vyow99r)&nwd*vl^$&-ggn#tks2#@'
ROOT_URLCONF = __name__
ALLOWED_HOSTS = ["0.0.0.0", EXT_IP, "127.0.0.1", DOMAIN_NAME, IP]
response = "";
@csrf_exempt

def dial_sip(request):
    print(request)
    dialSipResponseCode="";
    dialCallStatus="";
    response = VoiceResponse()

    if request.method == 'GET':
        ReqDict = request.GET
    elif request.method == 'POST':
         ReqDict = request.POST

    URL = 'http://' + DOMAIN_NAME + ':' + PYTHON_PORT + '/sipfailover'
    dial = Dial(action=URL)

    for i,v in ReqDict.items():
        print('current item is ' + i + ' and value is ' + v);

        #
        # Call routing happens here
        #

        # if you want to parse customer numbers
        #if i == "From" and v == CELL_PHONE:
        #    print("your customer called in... sending to first sip endpoint");
        #    dial.sip(SIP_DIAL);

        # if you want to parse dialed numbers
        if i == "To" and v == SW_NUMBER_1:
            print("random somebody dialed your SW number, sending to second sip endpoint");
            dial.sip(SIP_DIAL);
        elif i == "To" and v == SW_NUMBER_2:
            print("your customer called in... sending to first sip endpoint");
            dial.sip(SIP_FAILOVER);

    response.append(dial);
    return HttpResponse(response,content_type='text/xml');

def sipfailover(request):
    print(request)
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
        print('current item is ' + i + ' and value is ' + v);

        if i == "DialSipResponseCode":
            dialSipResponseCode = v;

        if i == "DialCallStatus":
            dialCallStatus = v;

        if(int(dialSipResponseCode) > 299 or dialCallStatus == "failed"):
            dial.sip('sip:tollfree@joshebosh-tollfree.sip.signalwire.com;transport=tls')

    response.append(dial)
    return HttpResponse(response,content_type='text/xml');

urlpatterns = [
    url(r'^dial_sip$', dial_sip),
    url(r'^sipfailover$',sipfailover)
]
