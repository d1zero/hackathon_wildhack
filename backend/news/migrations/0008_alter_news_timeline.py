# Generated by Django 3.2.9 on 2021-12-04 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0007_alter_news_full_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='timeline',
            field=models.BooleanField(default=False, verbose_name='Виден в таймлайне?'),
        ),
    ]
