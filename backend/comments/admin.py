from django.contrib import admin
from .models import SupporterComment

class SupporterCommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'match', 'commentaires', 'created_at', 'updated_at')
    search_fields = ('user__username', 'match__team1__name', 'match__team2__name', 'commentaires')
    list_filter = ('created_at', 'updated_at')

admin.site.register(SupporterComment, SupporterCommentAdmin)
