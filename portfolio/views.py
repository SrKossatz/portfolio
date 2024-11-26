from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'base.html')
  
def hero_section(request):
    return render(request, 'hero.html')
  
def about_section(request):
    return render(request, 'about_section.html')

def project_section(request):
    return render(request, 'project_section.html')

def contact_section(request):
    return render(request, 'contact_section.html')