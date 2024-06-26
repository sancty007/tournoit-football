# api/views.py

from django.http import JsonResponse

def tasks_list(request):
    return JsonResponse({"message": "This is a simple response from the tasks_list view."})
