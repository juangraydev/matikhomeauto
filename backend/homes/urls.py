from django.urls import path
from homes import views


urlpatterns = [
    ## home list
    path('', views.HomeAPI.as_view()),
]