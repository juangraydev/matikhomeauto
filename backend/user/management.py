import logging
from core.repository.repository import Repository
from core.repository.repository import Module
from user.models import *
from user.serializers import *

from core.util import common

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
        return {"message": "Login"}
        # LOGGER.debug("User Management Function:  login")
        # LOGGER.debug(common.get_data(request))

        # header = common.get_value(idf.REQ_HEADER, request)

        # cmp_auth = CompanySummaryManagement()
        # token_auth = TokenAuthentication()

        # header = common.get_headers(request)

        # # Extract data from header
        # data = self.__get_data_from_headers(header)

        # # Append expiry on token
        # data[idf.OBJ_EXP] = token_auth.set_expiry()

        # # Encode token
        # token = jwt.encode(data, settings.SECRET_KEY)

        # # Append token
        # data[idf.OBJ_ACCESS_TOKEN] = str(token, 'utf-8')

        # reportId = cmp_auth.find_latest_report()[idf.ID_REPORT]

        # user_exists = self.user_exists(data, token)

        # if not user_exists:
        #     # if user does not exist, then save to db
        #     # default page is company wide
        #     data[idf.OBJ_DEFAULT_PAGE] = json.dumps({
        #         idf.ID_REPORT: reportId,
        #         idf.OBJ_URL: settings.DEFAULT_PAGE,
        #         idf.OBJ_NAME: "",
        #         idf.OBJ_CODE: "",
        #         idf.OBJ_TAB: 0
        #     })

        #     self._existing_user = super().save(data).to_dict()
        #     # Append general user role
        #     self.user_role = 0
        # else:
        #     default_page = self._existing_user[idf.OBJ_DEFAULT_PAGE]
        #     if type(default_page) is str:
        #         default_page = json.loads(default_page)
        #     if default_page[idf.ID_REPORT] == '':
        #         # update default reportId if new reportId is generated
        #         onesign_uid = common.get_value(idf.OBJ_ONESIGN_UID, data)
        #         user = self.find_by_criteria(QueryFilter(
        #             onesign_uid=onesign_uid))[idf.INSTANCES].first()
        #         default_page[idf.ID_REPORT] = reportId
        #         self._existing_user[idf.OBJ_DEFAULT_PAGE] = default_page
        #         self.update({'default_page': json.dumps(default_page)}, user)
        # header[idf.TOKEN] = token
        # header[idf.OBJ_USER_SETTING] = {
        #     idf.OBJ_ROLE: self.user_role,
        #     idf.OBJ_DEFAULT_PAGE: common.string_to_dict(
        #         self._existing_user[idf.OBJ_DEFAULT_PAGE])
        # }

        # return common.create_response(resp_header=header)



    def register(self, request):
        
        # data = common.get_data(request)
        print("request")
        return {"message": "Register"}

