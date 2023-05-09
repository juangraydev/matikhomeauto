from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from homes.management import *

from core.util.custom_exceptions import *

from core.util.common import *

class HomeAdminAPI(APIView):

    def get(self, request):

        homes_management = HomesManagement()
        token_auth = TokenAuthentication()
        token_key = token_auth.extract_bearer(request.META[idf.HTTP_AUTHORIZATION])
        user_instance =token_auth.decode_token(token_key)
        homes_list = homes_management.find_all(userId=user_instance[idf.OBJ_ID])
      
        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=homes_list,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
    

class HomeAPI(APIView):

    def get(self, request):

        user_homes_management = HomeUserAccessManagement()
        token_auth = TokenAuthentication()
        token_key = token_auth.extract_bearer(request.META[idf.HTTP_AUTHORIZATION])
        user_instance =token_auth.decode_token(token_key)
        homes_list = user_homes_management.get_user_house(userId=user_instance[idf.OBJ_ID])
      
        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=homes_list,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
    
    def post(self, request):
        homes_management = HomesManagement()
        token_auth = TokenAuthentication()
        token_key = token_auth.extract_bearer(request.META[idf.HTTP_AUTHORIZATION])
        # user_instance =token_auth.decode_token(token_key)
        homes_list = homes_management.add_house(data=request.data)
      
        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=homes_list,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
 
