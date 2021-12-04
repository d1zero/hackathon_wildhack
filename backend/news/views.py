from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NewsSerializer
from .models import News


class NewsList(APIView):
    def get(self, request):
        news = News.objects.all()
        data = NewsSerializer(news, many=True).data
        return Response(data)


class NewsDetail(APIView):
    def get(self, request, pk):
        news = News.objects.get(id=pk)
        data = NewsSerializer(news).data
        return Response(data)


class TimelineList(APIView):
    def get(self, request):
        news = News.objects.filter(timeline=True)
        data = NewsSerializer(news, many=True).data
        return Response(data)
