from django.db import models

from core.util.model_to_dict import ModelToDictionary
# Create your models here.

class User(models.Model, ModelToDictionary):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    username = models.EmailField(unique=True, max_length=200)
    role = models.CharField(max_length=200)
   
    class Meta:
        managed = True
        db_table = 'User'
            

    def __str__(self):
        return self.id
    
