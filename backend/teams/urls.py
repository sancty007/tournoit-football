from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, TeamMemberViewSet

router = DefaultRouter()
router.register(r'teams', TeamViewSet, basename='team')
router.register(r'team-members', TeamMemberViewSet, basename='teammember')

urlpatterns = [
    path('', include(router.urls)),
    # Ajoutez d'autres URLs spécifiques si nécessaire
]