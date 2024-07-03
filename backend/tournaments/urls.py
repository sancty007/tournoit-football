""" from rest_framework.routers import DefaultRouter
from .views import TournamentViewSet, TournamentTeamViewSet, MatchViewSet, MatchEventViewSet, SupporterCommentViewSet

router = DefaultRouter()
router.register(r'tournaments', TournamentViewSet)
router.register(r'tournament-teams', TournamentTeamViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'match-events', MatchEventViewSet)
router.register(r'supporter-comments', SupporterCommentViewSet)

urlpatterns = router.urls
 """