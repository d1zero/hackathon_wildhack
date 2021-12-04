# Generated by Django 3.2.9 on 2021-12-03 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0005_news_preview_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='preview_text',
            field=models.TextField(verbose_name='Превью статьи'),
        ),
        migrations.AlterField(
            model_name='news',
            name='source',
            field=models.CharField(max_length=200, verbose_name='Ссылка на источник'),
        ),
        migrations.AlterField(
            model_name='news',
            name='title',
            field=models.CharField(max_length=300, verbose_name='Заголовок публикации'),
        ),
    ]
