from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Tournament, TournamentTeam, Match, MatchEvent, SupporterComment
from .serializers import TournamentSerializer, TournamentTeamSerializer, MatchSerializer, MatchEventSerializer, SupporterCommentSerializer


# Create your views here.
class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
    permission_classes = [IsAuthenticated]

class TournamentTeamViewSet(viewsets.ModelViewSet):
    queryset = TournamentTeam.objects.all()
    serializer_class = TournamentTeamSerializer
    permission_classes = [IsAuthenticated]

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]

class MatchEventViewSet(viewsets.ModelViewSet):
    queryset = MatchEvent.objects.all()
    serializer_class = MatchEventSerializer
    permission_classes = [IsAuthenticated]

class SupporterCommentViewSet(viewsets.ModelViewSet):
    queryset = SupporterComment.objects.all()
    serializer_class = SupporterCommentSerializer
    permission_classes = [IsAuthenticated]
