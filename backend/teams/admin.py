from django.contrib import admin
from .models import Team, TeamMember

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name',)
    list_filter = ('created_at', 'updated_at')

class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('team', 'user', 'position', 'created_at', 'updated_at')
    search_fields = ('team__name', 'user__username', 'position')
    list_filter = ('created_at', 'updated_at')

admin.site.register(Team, TeamAdmin)
admin.site.register(TeamMember, TeamMemberAdmin)
