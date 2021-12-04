from ckeditor.widgets import CKEditorWidget
from django.contrib import admin, auth
from .models import News
from django import forms

admin.site.unregister(auth.models.Group)


class NewsAdminForm(forms.ModelForm):
    preview_text = forms.CharField(label='Превью статьи', widget=CKEditorWidget())
    full_text = forms.CharField(label='Текст статьи', widget=CKEditorWidget())

    class Meta:
        model = News
        fields = '__all__'


class NewsAdmin(admin.ModelAdmin):
    form = NewsAdminForm
    list_display = ('id', 'title', 'publish_datetime',
                    'timeline', 'admin_photo')
    list_filter = ('timeline',)
    list_display_links = ('title', )
    fields = (
        'title', 'publish_datetime', 'preview_text', 'full_text', 'timeline', 'source_url', 'photo_url', 'admin_photo'
    )
    readonly_fields = ('admin_photo',)


admin.site.register(News, NewsAdmin)
