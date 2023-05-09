import logging
import jwt
from core.repository.repository import Repository
from core.repository.repository import Module
from django.db.models import Q as QueryFilter, Value
from core.constants import identifer as idf
from devices.models import *
from devices.serializers import *
import json
from django.conf import settings
from core.util.custom_exceptions import *


from core.util import common
from core.auth.token_authentication import TokenAuthentication

class DevicesManagement(Repository):
    """
    Handles CRUD Logic Functionalities for User
    """

    def __init__(self):
        
        module = Module(name="Devices",
                        model=Devices,
                        serializer=DevicesSerializer)
        super().__init__(module=module)
    
    def find_all(self):
        resp_data = []
        try:
            resp_data = super().find_all()
        except Exception as error:
            print("[Error]")
        
        return resp_data
    
    def find_by_key(self, key):
        resp_data = []
        try:
            criteria = QueryFilter(key=key)
            response = super().find_by_criteria(criteria)
            resp_data = common.get_value(idf.SERIALIZED, response)[0]
            print("[Error] Devices FOund")
        except Exception as error:
            print("[Error] Devices Not FOund")
            raise error
        return resp_data