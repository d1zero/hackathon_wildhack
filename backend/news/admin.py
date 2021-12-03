from django.contrib import admin, auth
from .models import News

admin.site.unregister(auth.models.Group)
admin.site.register(News)
