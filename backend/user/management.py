import logging
import jwt
from core.repository.repository import Repository
from core.repository.repository import Module
from django.db.models import Q as QueryFilter, Value
from core.constants import identifer as idf
from user.models import *
from user.serializers import *
import json
from django.conf import settings
from core.util.custom_exceptions import *


from core.util import common
from core.auth.token_authentication import TokenAuthentication

class UserManagement(Repository):
    """
    Handles CRUD Logic Functionalities for User
    """

    def __init__(self):
        
        module = Module(name="User",
                        model=User,
                        serializer=UserSerializer)
        super().__init__(module=module)

    def find_by_username(self, username):
        try:
            criteria = QueryFilter(username=username)
            response = super().find_by_criteria(criteria)
            resp_data = common.get_value(idf.SERIALIZED, response)[0]
        except Exception as error:
            print("[Error] Username not Found", error)
            raise HTTP401Error

        return resp_data

    def login(self, request):
        resp_data={}
        token_auth = TokenAuthentication()
        try:
            user = self.find_by_username(request[idf.USERNAME])
            decrypted_pass = token_auth.decrypt_pass( str.encode(user[idf.OBJ_PASSWORD]) )
            if(not decrypted_pass[idf.OBJ_PASSWORD] == request[idf.OBJ_PASSWORD]):
                raise HTTP401Error
            resp_data[idf.TOKEN] = token_auth.encode_token(user)
        except Exception as error:
            print("[Error]", error)

        return resp_data

    def register(self, request):
        resp_data={}
        data_obj = {
            idf.OBJ_ID: "",
            idf.NAME: request[idf.NAME],
            idf.USERNAME: request[idf.USERNAME],
            idf.ROLE: 0,
        }
        token_auth = TokenAuthentication()
        try:
            encrypted_pass = token_auth.encrypt_pass(request[idf.OBJ_PASSWORD])
            data_obj[idf.OBJ_PASSWORD] = encrypted_pass.decode('UTF-8')
            super().save(data_obj)
            resp_data = self.login(request=request)
            
        except Exception as error:
            print("[Error]", error)
            raise HTTP401Error 
        return resp_data
    
    
