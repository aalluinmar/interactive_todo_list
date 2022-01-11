from __future__ import unicode_literals

import uuid
from decimal import Decimal
from django.db import models

from django.core.validators import MinValueValidator

# Create your models here.
class InteractiveTodoList(models.Model):
    """
        Create a Model for the InteractiveTodoList with the set of fields.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, help_text='Name of the Fruit')
    price = models.DecimalField(
        max_digits=8, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))],
        help_text='Price of the Fruit')
    quantity = models.IntegerField(
        validators=[MinValueValidator(1)], help_text="Quantity of the Fruit")
