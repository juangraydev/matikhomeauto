from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from user.management import UserManagement


class UserAuth(APIView):

    def get(self, request):
        
        user_management = UserManagement()

        return Response(user_management.login(request))
    
    def post(self, request):

        user_management = UserManagement()

        return Response(user_management.register(request))

# class UserRegister(APIView):

#     def post(self, request):

#         return Response({"message":"hi fuc"})
