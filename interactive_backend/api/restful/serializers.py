import logging

from rest_framework import serializers

from api.models import InteractiveTodoList
from api.services.utils import check_alpha_exists


# Get an instance of a logger
logger = logging.getLogger(__name__)

class InteractiveSerializer(serializers.ModelSerializer):
    """
        InteractiveSerializer inherits ModelSerializer. This ModelSerializer
        will perform all necessary operations like insert, update, select,
        delete.
    """

    def validate_name(self, data):
        if not check_alpha_exists(data):
            msg = ("Name `{0}` must contain atleast one letter".format(data))
            logger.error(msg)
            raise serializers.ValidationError(msg)
        return data

    class Meta:
        model = InteractiveTodoList
        fields = '__all__'
