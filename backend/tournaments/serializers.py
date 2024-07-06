from rest_framework import serializers
from .models import Tournament, TournamentTeam, Match, MatchEvent, PlayerStatistics
from teams.serializers import TeamSerializer
from users_t.serializers import CustomUserSerializer

class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'

class TournamentTeamSerializer(serializers.ModelSerializer):
    team = TeamSerializer()

    class Meta:
        model = TournamentTeam
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class MatchEventSerializer(serializers.ModelSerializer):
    player = CustomUserSerializer()

    class Meta:
        model = MatchEvent
        fields = '__all__'

class PlayerStatisticsSerializer(serializers.ModelSerializer):
    player = CustomUserSerializer()

    class Meta:
        model = PlayerStatistics
        fields = '__all__'