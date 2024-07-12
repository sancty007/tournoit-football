from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('player', 'Player'),
        ('coach', 'Coach'),
        ('supporter', 'Supporter'),
        ('user', 'User')
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Ajout de related_name pour éviter les conflits
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions '
                   'granted to each of their groups.'),
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',  # Ajout de related_name pour éviter les conflits
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='customuser',
    )
    def __str__(self):
        return self.username