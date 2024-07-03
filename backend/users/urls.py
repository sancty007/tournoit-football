from rest_framework.routers import DefaultRouter
from .views import UserViewSet, NotificationViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = router.urls
