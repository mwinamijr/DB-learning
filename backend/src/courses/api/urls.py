from django.urls import path

from courses.api.views import CourseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CourseViewSet, basename='courses')
urlpatterns = router.urls

#from .views import CourseListView, CourseDetailView
#urlpatterns = [
#    path('', CourseListView.as_view()),
#    path('<pk>/', CourseDetailView.as_view())
#]
