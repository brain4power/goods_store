from django.urls import path, re_path
from mainapp import views

urlpatterns = [
    path('products/', views.product_list),
    re_path(r'^product/(?P<pk>\d+)/$', views.product_detail),
]
