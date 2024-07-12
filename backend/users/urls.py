from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import CustomUserViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Autres URLs de votre application
]