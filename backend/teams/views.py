""" from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


# Create your views here.
from .models import Team, TeamMember, Player, PlayerStatistic
from .serializers import TeamSerializer, TeamMemberSerializer, PlayerSerializer, PlayerStatisticSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [IsAuthenticated]

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = [IsAuthenticated]

class PlayerStatisticViewSet(viewsets.ModelViewSet):
    queryset = PlayerStatistic.objects.all()
    serializer_class = PlayerStatisticSerializer
    permission_classes = [IsAuthenticated] """