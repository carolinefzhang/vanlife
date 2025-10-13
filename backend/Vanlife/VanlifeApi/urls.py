from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'vans', VanViewSet)
# router.register(r'hosts', HostViewSet)
router.register(r'host/vans', HostVansViewSet, basename='hostvans')
router.register(r'host/reviews', HostReviewsViewSet, basename='hostreviews')
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginApiView.as_view(), name='login'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]