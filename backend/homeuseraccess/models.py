from django.db import models
from user.models import User
from homes.models import Homes
from core.util.model_to_dict import ModelToDictionary

# Create your models here.

class HomeUserAccess(models.Model, ModelToDictionary):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING)
    home = models.ForeignKey(Homes, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'HomeUserAccess'
            

    def __str__(self):
        return self.id