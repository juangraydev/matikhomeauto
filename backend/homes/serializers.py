from rest_framework import serializers
from homes.models import *

class HomesSerializer(serializers.ModelSerializer):
    """
    Converts info querysets and model instance to native python data types.
    """
    class Meta:
        """Meta class"""
        model = Homes
        fields = '__all__'

    # def create(self, validated_data):
    #     """Saves the data to the database and returns the instance of
    #         the created info.

    #     Args:
    #         - validated_data: info data

    #     Returns:
    #         - Info instance
    #     """
    #     return User.objects.create(**validated_data)