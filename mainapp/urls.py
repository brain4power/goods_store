from django.urls import path
from mainapp.views import *

urlpatterns = [
    path('products/', Products.as_view())
]
