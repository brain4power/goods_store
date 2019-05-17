from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Product
from .serializers import *


@api_view(['GET'])
def product_list(request):
    """
    List  products.
    """
    if request.method == 'GET':
        data = []
        next_page = 1
        previous_page = 1
        products = Product.objects.all().order_by('id')
        page = request.GET.get('page', 1)
        paginator = Paginator(products, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ProductSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            next_page = data.next_page_number()
        if data.has_previous():
            previous_page = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages,
                         'nextlink': '/api/v1/products/?page=' + str(next_page),
                         'prevlink': '/api/v1/products/?page=' + str(previous_page)})


@api_view(['GET'])
def product_detail(request, pk):
    """
    Retrieve a product instance.
    """
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product, context={'request': request})
        return Response(serializer.data)
