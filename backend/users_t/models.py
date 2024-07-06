from django.db import models

# Create your models here.

class CustomUser(models.Model):
    # Modèle CustomUser
    USER_ROLES = [
        ('player', 'Player'),
        ('coach', 'Coach'),
        ('admin_competition', 'Competition Administrator'),
        ('supporter', 'Supporter'),
    ]

    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    role = models.CharField(max_length=20, choices=USER_ROLES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

