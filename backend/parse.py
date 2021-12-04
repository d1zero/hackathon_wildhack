import os
from bs4 import BeautifulSoup
import requests
import time
import django
import environ

env = environ.Env()

environ.Env.read_env('.env')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from news.models import News  # nopep8

start_time = time.time()

for i in range(35, 0, -1):
    website_url = env('WEBSITE1_URL')
    url = f'{website_url}/news/ecology/page/{i}/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')

    titles = []
    dates = []
    preview_texts = []
    full_texts = []
    sources = []
    photos = []

    for quote in soup.find_all('h5', class_='date'):
        date = quote.get_text().strip().split(' ')
        months = ['янв', 'фев', 'мар', 'апр', 'ма', 'июн',
                  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

        if date[1].find(months[0]) != -1:
            date[1] = '01'
        elif date[1].find(months[1]) != -1:
            date[1] = '02'
        elif date[1].find(months[2]) != -1:
            date[1] = '03'
        elif date[1].find(months[3]) != -1:
            date[1] = '04'
        elif date[1].find(months[4]) != -1:
            date[1] = '05'
        elif date[1].find(months[5]) != -1:
            date[1] = '06'
        elif date[1].find(months[6]) != -1:
            date[1] = '07'
        elif date[1].find(months[7]) != -1:
            date[1] = '08'
        elif date[1].find(months[8]) != -1:
            date[1] = '09'
        elif date[1].find(months[9]) != -1:
            date[1] = '10'
        elif date[1].find(months[10]) != -1:
            date[1] = '11'
        elif date[1].find(months[11]) != -1:
            date[1] = '12'

        dates.append(f'{date[0]}.{date[1]}.{date[2]}')

    for quote in soup.find_all('div', class_='ns'):
        data = quote.get_text().split('\n')
        titles.append(data[1].strip())

    for quote in soup.find_all('div', class_='tx'):
        preview_texts.append(quote.get_text().replace(
            '\n', '').replace('\r', '').replace('\t', '').strip())

    for quote in soup.find_all('div', class_='ns'):
        for q in quote.find_all('a', href=True):
            images = q.findAll('img')
            for image in images:
                src = image['src']
                photos.append(f'{website_url}{src}')
            text = ''
            uri = str(q).split('href="')[1].split('"')[0]
            if 'http' not in uri:
                url2 = f'{website_url}{uri}'
                sources.append(url2)
                response2 = requests.get(url2)
                soup2 = BeautifulSoup(response2.text, 'lxml')
                paragraphs = ''
                for p in soup2.select('div#all_news > p'):
                    paragraphs += p.get_text().replace(
                        '\n', '').replace('\r', '').replace('\t', '').strip()
                full_texts.append(paragraphs)

    titles.reverse()
    dates.reverse()
    preview_texts.reverse()
    full_texts.reverse()
    sources.reverse()
    photos.reverse()

    for j in range(len(dates)):
        try:
            _ = News.objects.get(title=titles[j], publish_datetime=dates[j],
                                 preview_text=preview_texts[j], full_text=full_texts[j], source_url=sources[j], photo_url=photos[j])
        except News.DoesNotExist:
            news = News.objects.create(title=titles[j], publish_datetime=dates[j],
                                       preview_text=preview_texts[j], full_text=full_texts[j], source_url=sources[j], photo_url=photos[j])
            news.save()


print("--- %s seconds ---" % (time.time() - start_time))
