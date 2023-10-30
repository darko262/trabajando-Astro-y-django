from django.urls import path
from .views import *
urlpatterns = [
    path('list', BlogListView.as_view()),
    path('list/<title>', PostDetailView.as_view()),
   
]
