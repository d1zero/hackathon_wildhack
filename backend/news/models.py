from django.db import models
from django.utils.safestring import mark_safe

class News(models.Model):
    title = models.CharField(
        verbose_name='Заголовок публикации', max_length=300)
    publish_datetime = models.CharField(
        verbose_name='Дата и время публикации', max_length=100)
    preview_text = models.TextField(verbose_name='Превью статьи')
    full_text = models.TextField(verbose_name='Текст статьи', blank=True)
    source_url = models.URLField(
        verbose_name='Ссылка на источник', max_length=900)
    photo_url = models.URLField(verbose_name='Ссылка на фото', max_length=900)
    timeline = models.BooleanField(
        verbose_name='Виден в таймлайне?', default=False)

    def admin_photo(self):
        return mark_safe(f'<img src="{self.photo_url}" width="100"')
    admin_photo.allow_tags = True
    admin_photo.short_description = 'Фото'

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
