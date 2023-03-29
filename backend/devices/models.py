from django.db import models
from homes.models import Homes
from homes.models import Rooms

from core.util.model_to_dict import ModelToDictionary
# Create your models here.

class Devices(models.Model, ModelToDictionary):
    id = models.AutoField(primary_key=True)
    key = models.CharField(max_length=100)
    home = models.ForeignKey(Homes, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'devices'
            

    def __str__(self):
        return self.id
    
class Channels(models.Model, ModelToDictionary):
    id = models.AutoField(primary_key=True)
    device = models.ForeignKey(Devices, models.DO_NOTHING)
    room = models.ForeignKey(Rooms, models.DO_NOTHING)
    type = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'channels'
            

    def __str__(self):
        return self.id