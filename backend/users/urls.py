from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import CustomTokenObtainPairView, CustomUserViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Autres URLs de votre application
]