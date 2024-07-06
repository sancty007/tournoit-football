from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Team, TeamMember
from .serializers import TeamSerializer, TeamMemberSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire