# Generated by Django 2.1.15 on 2020-07-24 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
