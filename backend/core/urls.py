from django.contrib import admin
from django.urls import path, include, re_path
from users.views import auth
from core.views import FrontendAppView
from api import urls as api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', auth),
    path('api/', include(api_urls)),
    re_path(r'^', FrontendAppView.as_view())
]
