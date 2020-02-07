from rest_framework import serializers

from courses.models import Courses

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ('title', 'contents')

