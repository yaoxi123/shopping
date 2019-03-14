from django.shortcuts import render

# Create your views here.
def fstvgo(request):
    return render(request,'fstvgo.html')

def register(request):
    return render(request,'registre.html')

def login(request):
    return render(request,'login.html')

def details(request):
    return render(request,'details.html')

def cart(request):
    return render(request,'cart.html')



