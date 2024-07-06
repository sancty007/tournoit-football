# Register your models here.
from django.contrib import admin
from .models import Notification



class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'message', 'is_read', 'created_at', 'updated_at')
    list_editable = ('message', 'is_read')
    search_fields = ('user__username', 'message')
    list_filter = ('is_read', 'created_at', 'updated_at')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)

admin.site.register(Notification, NotificationAdmin)

