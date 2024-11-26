from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('hero_section/', views.hero_section, name='hero_section'),
    path('about_section/', views.about_section, name='about_section'),
    path('project_section/', views.project_section, name='project_section'),
    path('contact_section/', views.contact_section, name='contact_section'),
]

