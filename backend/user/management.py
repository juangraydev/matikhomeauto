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

    def login(self, request):
        """
        Handles the saving of user and generating of token
        """
        data = request.data

        return data

#AttributeError: 'dict' object has no attribute 

    def register(self, request):
        response={}
        resp_data={}
        data_obj = {
            idf.OBJ_ID: "",
            idf.NAME: request[idf.NAME],
            idf.USERNAME: request[idf.USERNAME],
            idf.ROLE: 0,
        }

        try:
            encrypted_pass = TokenAuthentication.encrypt_pass(request[idf.OBJ_PASSWORD])
            data_obj[idf.OBJ_PASSWORD] = encrypted_pass.decode('UTF-8')
            super().save(data_obj)
            criteria = QueryFilter(username=request[idf.USERNAME])
            response = super().find_by_criteria(criteria)
            resp_data = common.get_value(idf.SERIALIZED, response)[0]
            
        except NameError:
            print("error db", NameError)
        except Exception as error:
            print("error db", error)
        return resp_data
    
    

