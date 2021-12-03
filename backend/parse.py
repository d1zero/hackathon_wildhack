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

from news.models import News

start_time = time.time()

for i in range(1,36):
    website_url = env('WEBSITE1_URL')
    url = f'{website_url}news/ecology/page/{i}/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')

    titles = []
    dates = []
    full_texts = []
    sources = []

    for quote in soup.find_all('h5', class_='date'):
        dates.append(quote.get_text().strip())

    for quote in soup.find_all('div', class_='ns'):
        data = quote.get_text().split('\n')
        titles.append(data[1].strip())

    for quote in soup.find_all('div', class_='tx'):
        full_texts.append(quote.get_text().replace(
            '\n', '').replace('\r', '').replace('\t', '').strip())

    for quote in soup.find_all('div', class_='ns'):
        for q in quote.find_all('a', href=True):
            sources.append(str(q).split('href="')[1].split('"')[0])

    for j in range(len(dates)):
        try:
            _ = News.objects.get(title=titles[j], publish_datetime=dates[j], full_text=full_texts[j], source=sources[j])
        except News.DoesNotExist:
            news = News.objects.create(
                title=titles[j], publish_datetime=dates[j], full_text=full_texts[j], source=sources[j])
            news.save()


print("--- %s seconds ---" % (time.time() - start_time))
