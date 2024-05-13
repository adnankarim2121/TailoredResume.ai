# myapp/urls.py
from django.urls import path
from .views import generate_new_resume

urlpatterns = [
    path('generate_new_resume/', generate_new_resume, name='generate_new_resume'),
]
