from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NewsSerializer
from .models import News
from django.conf import settings

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger




class NewsList(APIView):
    def get(self, request):
            news = News.objects.all().order_by('id')
            paginator = Paginator(news, settings.REST_FRAMEWORK.get('PAGE_SIZE'))
            page_num = request.GET.get('page')
            if page_num is None:
                page_num = 1

            try:
                TalentSearch = paginator.page(page_num)
            except PageNotAnInteger:
                TalentSearch = paginator.page(1)
            except EmptyPage:
                TalentSearch = paginator.page(paginator.num_pages)

            serializer = NewsSerializer(TalentSearch, many=True)
            d = Response(serializer.data)
            return d


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
