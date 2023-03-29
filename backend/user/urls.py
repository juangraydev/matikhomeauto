from django.urls import path
from user import views


urlpatterns = [
    ## Get for login, Post for register.
    path('auth/', views.UserAuth.as_view())
]