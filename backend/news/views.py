from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NewsSerializer
from .models import News
from django.conf import settings
import math
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


class NewsList(APIView):
    def get(self, request):
        news = News.objects.all().order_by('id')
        paginator = Paginator(news, settings.REST_FRAMEWORK.get('PAGE_SIZE'))
        page_num = request.GET.get('page')
        if page_num is None:
            page_num = 1

        try:
            NewsPaginate = paginator.page(page_num)
        except PageNotAnInteger:
            NewsPaginate = paginator.page(1)
        except EmptyPage:
            NewsPaginate = paginator.page(paginator.num_pages)

        response = Response()
        serializer = NewsSerializer(NewsPaginate, many=True)
        response.data = {
            'pages': math.ceil(News.objects.count() / settings.REST_FRAMEWORK.get('PAGE_SIZE')),
            'data': serializer.data
        }

        return response


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
