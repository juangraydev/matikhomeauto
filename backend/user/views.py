from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response


class UserLogin(APIView):

    def get(self, request):

        return Response({"message":"hi fuc"})

class UserRegister(APIView):

    def post(self, request):

        return Response({"message":"hi fuc"})
