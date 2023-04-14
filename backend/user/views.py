from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from user.management import UserManagement

from core.util.common import *

class UserLogin(APIView):
    
    def post(self, request):

        user_management = UserManagement()

        return Response(user_management.login(request))
    
class UserRegister(APIView):

    def post(self, request):
        user_management = UserManagement()
        token_auth = TokenAuthentication()
        user_registered = user_management.register(request=request.data)
        token = token_auth.encode_token(user_registered)
        
        resp_payload = create_response(resp_header = {idf.TOKEN: token})
        return Response(resp_payload, status=status.HTTP_200_OK)

# class UserRegister(APIView):

#     def post(self, request):

#         return Response({"message":"hi fuc"})
