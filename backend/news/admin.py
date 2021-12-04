from ckeditor.widgets import CKEditorWidget
from django.contrib import admin, auth
from .models import News
from django import forms

admin.site.unregister(auth.models.Group)


class NewsAdminForm(forms.ModelForm):
    preview_text = forms.CharField(widget=CKEditorWidget())
    full_text = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = News
        fields = '__all__'

class NewsAdmin(admin.ModelAdmin):
    form = NewsAdminForm

admin.site.register(News, NewsAdmin)
