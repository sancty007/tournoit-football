# api/urls.py




# myapp/urls.py

from django.urls import path
from . import views



urlpatterns = [
    path('tasks/', views.tasks_list, name='tasks_list'),
    path('test_connection/', views.test_connection),
   
    # ... autres chemins d'URL
]
