from django.shortcuts import render
from django.http import HttpResponse
import urllib.request
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def check_url(request):
    if request.method == 'POST':
        try:
            # Extract the URL from the POST data
            url = request.POST.get('url')
            print(request.POST.get("url"))
            if not url:
                return HttpResponse(":( No URL provided")
            # Open the URL and get the status code
            url_status = urllib.request.urlopen(url).getcode()
        except Exception as e:
            return HttpResponse(":( Error occurred while checking URL: {}".format(str(e)))
        
        if url_status == 200:
            return HttpResponse("Yey! URL is Working")
        else:
            return HttpResponse(":( URL returned status code {}".format(url_status))
    else:
        return HttpResponse(":( Invalid request method")
