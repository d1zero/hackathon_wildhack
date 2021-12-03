from django.urls import path
from .views import NewsList, NewsDetail, TimelineList

urlpatterns = [
    path('', NewsList.as_view()),
    path('<int:pk>/', NewsDetail.as_view()),
    path('timeline/', TimelineList.as_view()),
]
