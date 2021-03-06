# Generated by Django 3.2.9 on 2022-01-13 20:33

from decimal import Decimal
import django.core.validators
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InteractiveTodoList',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(help_text='Name of the Fruit', max_length=100, unique=True)),
                ('price', models.DecimalField(decimal_places=2, help_text='Price of the Fruit', max_digits=8, validators=[django.core.validators.MinValueValidator(Decimal('0.01'))])),
                ('quantity', models.IntegerField(help_text='Quantity of the Fruit', validators=[django.core.validators.MinValueValidator(1)])),
            ],
        ),
    ]
