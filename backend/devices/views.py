from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from devices.management import DevicesManagement

from core.util.custom_exceptions import *

from core.util.common import *

class DeviceAPI(APIView):
    
    def get(self, request):
    
        device_management = DevicesManagement()
        device_resp = device_management.find_all()

        resp_details = create_response_details()
        resp_payload = create_response(
                                       resp_data=device_resp,
                                       resp_details=resp_details)
        return Response(resp_payload, status=status.HTTP_200_OK)
