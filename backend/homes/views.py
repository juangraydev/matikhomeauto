from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from homes.management import HomesManagement

from core.util.custom_exceptions import *

from core.util.common import *

class HomeAPI(APIView):

    def get(self, request):

        homes_management = HomesManagement()
        homes_list = homes_management.get_house_list_by_token(request=request.data)
      
        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=homes_list,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
    
    # def post(self, request):

    #     user_management = UserManagement()
    #     user_login = user_management.login(request=request.data)
      
    #     resp_details = create_response_details()
    #     resp_payload = create_response(
    #                                    resp_data=user_login,
    #                                    resp_details=resp_details)
    #     return Response(resp_payload, status=status.HTTP_200_OK)
 
