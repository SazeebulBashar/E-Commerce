from django.shortcuts import render
from django.http import JsonResponse
from .models import (Product, Order, OrderItem, ShippingAddress, Review)
from .serializers import (ProductSerializer)

# Rest framework
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = ['/api/products', '/api/products/create', '/api/products/upload', '/api/products/<id>', '/api/products/<id>/update', '/api/products/<id>/delete']

    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)