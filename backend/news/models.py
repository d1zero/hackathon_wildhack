from django.db import models


class News(models.Model):
    title = models.CharField(
        verbose_name='Заголовок публикации', max_length=300)
    publish_datetime = models.CharField(
        verbose_name='Дата и время публикации', max_length=100)
    preview_text = models.TextField(verbose_name='Превью статьи')
    full_text = models.TextField(verbose_name='Текст статьи', blank=True)
    source = models.CharField(verbose_name='Ссылка на источник', max_length=200)
    photo = models.ImageField(verbose_name='Фото', upload_to=None,
                              height_field=None, width_field=None, max_length=None, blank=True)
    timeline = models.BooleanField(
        verbose_name='Виден в таймлайне?', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
