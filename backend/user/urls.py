from django.urls import path
from user import views


urlpatterns = [
    ## login
    path('login/', views.UserLogin.as_view()),
    ## register
    path('register/', views.UserRegister.as_view())
]