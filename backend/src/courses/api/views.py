from rest_framework.generics import ListAPIView, RetrieveAPIView

from courses.models import Courses
from .serializers import CourseSerializer

class CourseListView(ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer

class CourseDetailView(RetrieveAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer