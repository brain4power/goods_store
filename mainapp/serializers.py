from rest_framework import serializers

from mainapp.models import Product


class ProductSerializer(serializers.ModelSerializer):
    """Сериализация продукта"""

    class Meta:
        model = Product
        fields = ('pk', 'name', 'price', 'volume', 'image')
