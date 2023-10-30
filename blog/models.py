from django.db import models
def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()   

    title = models.CharField(max_length=200)
    content = models.TextField()
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=500)
    pub_date = models.DateTimeField('date published')
    postobjects =       PostObjects()  # custom manager

    def __str__(self):
        return self.title
