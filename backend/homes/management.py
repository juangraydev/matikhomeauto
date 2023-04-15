import logging
import jwt
from core.repository.repository import Repository
from core.repository.repository import Module
from django.db.models import Q as QueryFilter, Value
from core.constants import identifer as idf
from homes.models import *
from homes.serializers import *
import json
from django.conf import settings
from core.util.custom_exceptions import *


from core.util import common
from core.auth.token_authentication import TokenAuthentication

class HomesManagement(Repository):
    """
    Handles CRUD Logic Functionalities for User
    """

    def __init__(self):
        
        module = Module(name="Home",
                        model=Homes,
                        serializer=HomesSerializer)
        super().__init__(module=module)

    def get_house_list_by_token(self, request):
        house_list = [
                {
                    idf.OBJ_ID: 1, 
                    idf.OBJ_NAME: "House1",
                    idf.OBJ_ROOMS: [
                        {
                            idf.OBJ_ID: 1,
                            idf.OBJ_NAME: "Room 1",
                            idf.OBJ_TYPE: 0
                        },
                        {
                            idf.OBJ_ID: 2,
                            idf.OBJ_NAME: "Room 2",
                            idf.OBJ_TYPE: 1
                        },
                    ]
                },
                {
                    idf.OBJ_ID: 2, 
                    idf.OBJ_NAME: "House2",
                    idf.OBJ_ROOMS: [
                        {
                            idf.OBJ_ID: 1,
                            idf.OBJ_NAME: "Room 3",
                            idf.OBJ_TYPE: 3
                        },
                        {
                            idf.OBJ_ID: 2,
                            idf.OBJ_NAME: "Room 4",
                            idf.OBJ_TYPE: 4
                        },
                    ]
                }
            ]
        return house_list

    # def login(self, request):
    #     resp_data={}
    #     token_auth = TokenAuthentication()
    #     try:
    #         user = self.find_by_username(request[idf.USERNAME])
    #         decrypted_pass = token_auth.decrypt_pass( str.encode(user[idf.OBJ_PASSWORD]) )
    #         if(not decrypted_pass[idf.OBJ_PASSWORD] == request[idf.OBJ_PASSWORD]):
    #             raise HTTP401Error
    #         resp_data[idf.TOKEN] = token_auth.encode_token(user)
    #         resp_data[idf.OBJ_HOUSE_LIST] = [
    #             {
    #                 idf.OBJ_ID: 1, 
    #                 idf.OBJ_NAME: "House1",
    #                 idf.OBJ_ROOMS: [
    #                     {
    #                         idf.OBJ_ID: 1,
    #                         idf.OBJ_NAME: "Room 1",
    #                         idf.OBJ_TYPE: 0
    #                     },
    #                     {
    #                         idf.OBJ_ID: 2,
    #                         idf.OBJ_NAME: "Room 2",
    #                         idf.OBJ_TYPE: 1
    #                     },
    #                 ]
    #             },
    #             {
    #                 idf.OBJ_ID: 2, 
    #                 idf.OBJ_NAME: "House2",
    #                 idf.OBJ_ROOMS: [
    #                     {
    #                         idf.OBJ_ID: 1,
    #                         idf.OBJ_NAME: "Room 1",
    #                         idf.OBJ_TYPE: 3
    #                     },
    #                     {
    #                         idf.OBJ_ID: 2,
    #                         idf.OBJ_NAME: "Room 2",
    #                         idf.OBJ_TYPE: 4
    #                     },
    #                 ]
    #             }
    #         ]
            
            
    #     except Exception as error:
    #         print("[Error]", error)
    #         raise HTTP401Error

    #     return resp_data
    
    # def find_by_username(self, username):
    #     try:
    #         criteria = QueryFilter(username=username)
    #         response = super().find_by_criteria(criteria)
    #         resp_data = common.get_value(idf.SERIALIZED, response)[0]
    #     except Exception as error:
    #         print("[Error] Username not Found", error)
    #         raise HTTP401Error

    #     return resp_data

   