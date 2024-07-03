""" from rest_framework import serializers
from .models import Team, TeamMember, Player, PlayerStatistic

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class PlayerStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerStatistic
        fields = '__all__'
 """