from django.contrib import admin
from .models import Tournament, TournamentTeam, Match, MatchEvent, PlayerStatistics

class TournamentAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'location', 'created_at', 'updated_at')
    search_fields = ('name', 'location')
    list_filter = ('created_at', 'updated_at')

class TournamentTeamAdmin(admin.ModelAdmin):
    list_display = ('tournament', 'team', 'created_at', 'updated_at')
    search_fields = ('tournament__name', 'team__name')
    list_filter = ('created_at', 'updated_at')

class MatchAdmin(admin.ModelAdmin):
    list_display = ('tournament', 'team1', 'team2', 'match_date', 'location', 'score_team1', 'score_team2', 'created_at', 'updated_at')
    search_fields = ('tournament__name', 'team1__name', 'team2__name', 'location')
    list_filter = ('created_at', 'updated_at')

class MatchEventAdmin(admin.ModelAdmin):
    list_display = ('match', 'event_type', 'player', 'timestamp', 'description', 'created_at', 'updated_at')
    search_fields = ('match__team1__name', 'match__team2__name', 'player__username', 'event_type', 'description')
    list_filter = ('created_at', 'updated_at')

class PlayerStatisticsAdmin(admin.ModelAdmin):
    list_display = ('player', 'matches_played', 'goals', 'assists', 'yellow_cards', 'red_cards', 'created_at', 'updated_at')
    search_fields = ('player__username',)
    list_filter = ('created_at', 'updated_at')

admin.site.register(Tournament, TournamentAdmin)
admin.site.register(TournamentTeam, TournamentTeamAdmin)
admin.site.register(Match, MatchAdmin)
admin.site.register(MatchEvent, MatchEventAdmin)
admin.site.register(PlayerStatistics, PlayerStatisticsAdmin)
