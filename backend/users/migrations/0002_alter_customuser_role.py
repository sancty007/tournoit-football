# Generated by Django 3.2.5 on 2024-07-12 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('admin', 'Admin'), ('player', 'Player'), ('coach', 'Coach'), ('supporter', 'Supporter'), ('user', 'User')], max_length=20),
        ),
    ]