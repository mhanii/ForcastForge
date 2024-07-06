# urls.py
from django.urls import path
from api.views import AccuCastView,YahooWeatherView

urlpatterns = [
    path('hourly/', AccuCastView.as_view(), name='forecast'),
    path('daily_normal/', YahooWeatherView.as_view(), name='daily_normal'),
]
