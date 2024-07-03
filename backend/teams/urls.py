""" from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, TeamMemberViewSet, PlayerViewSet, PlayerStatisticViewSet

router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'team-members', TeamMemberViewSet)
router.register(r'players', PlayerViewSet)
router.register(r'player-statistics', PlayerStatisticViewSet)

urlpatterns = router.urls
 """