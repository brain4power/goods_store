from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from mainapp.models import Product
from mainapp.serializers import ProductSerializer


class Products(APIView):
    """Все продукты"""

    def get(self, request):
        products = Product.objects.all()
        serialiser = ProductSerializer(products, many=True)
        return Response(serialiser.data)
