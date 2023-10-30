from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import PostSerializer, PostListSerializer
# Create your views here.
from django.shortcuts import render
from .models import Post
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# def lista_publicaciones(request):
#     publicaciones = Post.objects.all()
#     return render(request, 'templates/astro/index.html', {'publicaciones': publicaciones})

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            posts = Post.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


        
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, title, format=None):
        if Post.postobjects.filter(title=title).exists():
            
            post = Post.postobjects.get(title=title)
            
            serializer = PostSerializer(post)
            # print(serializer)

            return Response({'post':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)      