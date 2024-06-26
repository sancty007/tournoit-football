# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.tasks_list, name='tasks_list'),
]
