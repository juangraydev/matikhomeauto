from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from user.management import UserManagement

from core.util.custom_exceptions import *

from core.util.common import *

class UserLogin(APIView):
    
    def post(self, request):

        user_management = UserManagement()
        user_login = user_management.login(request=request.data)
      
        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=user_login,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
    
class UserRegister(APIView):

    def post(self, request):
        user_management = UserManagement()
        user_registered = user_management.register(request=request.data)

        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=user_registered,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
  

# class UserRegister(APIView):

#     def post(self, request):

#         return Response({"message":"hi fuc"})
