""" from rest_framework import serializers
from .models import Tournament, TournamentTeam, Match, MatchEvent, SupporterComment



class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'

class TournamentTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = TournamentTeam
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class MatchEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchEvent
        fields = '__all__'

class SupporterCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupporterComment
        fields = '__all__' """