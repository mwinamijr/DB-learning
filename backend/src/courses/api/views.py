#from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets

from courses.models import Courses
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer

#class CourseListView(ListAPIView):
#   queryset = Courses.objects.all()
#   serializer_class = CourseSerializer

#class CourseDetailView(RetrieveAPIView):
#    queryset = Courses.objects.all()
#    serializer_class = CourseSerializer