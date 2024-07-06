from rest_framework import viewsets
from .models import Tournament, TournamentTeam, Match, MatchEvent, PlayerStatistics
from .serializers import (
    TournamentSerializer, TournamentTeamSerializer,
    MatchSerializer, MatchEventSerializer, PlayerStatisticsSerializer
)

class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire

class TournamentTeamViewSet(viewsets.ModelViewSet):
    queryset = TournamentTeam.objects.all()
    serializer_class = TournamentTeamSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire

class MatchEventViewSet(viewsets.ModelViewSet):
    queryset = MatchEvent.objects.all()
    serializer_class = MatchEventSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire

class PlayerStatisticsViewSet(viewsets.ModelViewSet):
    queryset = PlayerStatistics.objects.all()
    serializer_class = PlayerStatisticsSerializer
    # Définissez les méthodes et comportements supplémentaires si nécessaire