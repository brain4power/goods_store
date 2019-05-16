from django.db import models


class Product(models.Model):
    """Модель товара"""
    name = models.CharField(max_length=32)
    # menu_category
    price = models.FloatField()
    volume = models.FloatField(blank=True, null=True)
    # quantity = models.IntegerField()
    # image = models.ImageField(upload_to="products", blank=True, null=True)
    is_active = models.BooleanField(verbose_name='Товар активен', default=True)

    def __str__(self):
        return self.name
