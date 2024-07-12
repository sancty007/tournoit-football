# api/views.py

from django.http import JsonResponse
from django.db import connection
from django.http import HttpResponse

def tasks_list(request):
    return JsonResponse({"message": "This is a simple response from the tasks_list view."})

def test_connection(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1 FROM dual")
            result = cursor.fetchone()
        return HttpResponse(f"Connexion réussie: {result}")
    except Exception as e:
        return HttpResponse(f"Erreur de connexion : {e}")
    





