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
    

def list_schemas(request):
    try:
        with connection.cursor() as cursor:
            # Exécuter la requête SQL pour récupérer les noms d'utilisateur (schémas)
            cursor.execute("select * from tab")
            
            # Récupérer tous les résultats
            schemas = cursor.fetchall()
        
        # Formater les résultats pour l'affichage
        schema_list = "<ul>"
        for schema in schemas:
            schema_list += f"<li>{schema[0]}</li>"
        schema_list += "</ul>"
        
        return HttpResponse(f"Liste des tables : {schema_list}")
    
    except Exception as e:
        return HttpResponse(f"Erreur lors de la récupération des schémas : {e}")