from rest_framework import serializers
from .models import Team, TeamMember
from users_t.serializers import CustomUserSerializer

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = TeamMember
        fields = '__all__'