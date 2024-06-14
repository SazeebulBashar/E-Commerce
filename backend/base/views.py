from django.shortcuts import render
from django.http import JsonResponse
from .products import products

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
    return Response(products)


@api_view(['GET'])
def getProduct(request,pk):
    product = None
    for p in products:
        if p['_id'] == pk:
            product = p
    return Response(product)