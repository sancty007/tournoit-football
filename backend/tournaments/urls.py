from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TournamentViewSet, TournamentTeamViewSet,
    MatchViewSet, MatchEventViewSet, PlayerStatisticsViewSet
)

router = DefaultRouter()
router.register(r'tournaments', TournamentViewSet, basename='tournament')
router.register(r'tournament-teams', TournamentTeamViewSet, basename='tournamentteam')
router.register(r'matches', MatchViewSet, basename='match')
router.register(r'match-events', MatchEventViewSet, basename='matchevent')
router.register(r'player-statistics', PlayerStatisticsViewSet, basename='playerstatistics')

urlpatterns = [
    path('', include(router.urls)),
    # Ajoutez d'autres URLs spécifiques si nécessaire
]