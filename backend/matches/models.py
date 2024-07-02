from django.db import models
from teams.models import Team
from tournaments.models import Tournament
from users.models import User

class Match(models.Model):
    match_id = models.AutoField(primary_key=True)
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    team1 = models.ForeignKey(Team, related_name='team1_matches', on_delete=models.CASCADE)
    team2 = models.ForeignKey(Team, related_name='team2_matches', on_delete=models.CASCADE)
    match_date = models.DateTimeField()
    location = models.CharField(max_length=100)
    score_team1 = models.IntegerField()
    score_team2 = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.tournament.name} - {self.team1.name} vs {self.team2.name}"

class MatchEvent(models.Model):
    matchEvent_id = models.AutoField(primary_key=True)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    event_type = models.CharField(max_length=20, choices=[
        ('goal', 'Goal'),
        ('yellow_card', 'Yellow Card'),
        ('red_card', 'Red Card')
    ])
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField()
    description = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.event_type} - {self.player.username} - {self.match}"
