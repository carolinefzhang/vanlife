from django.db import models
from django.contrib.auth.models import User

class Van(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    type = models.CharField(max_length=50)
    image_url = models.URLField()
    host_id = models.ForeignKey('Host', on_delete=models.CASCADE)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
class Host(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name
    
class Review(models.Model):
    van_id = models.ForeignKey('Van', on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.van_id.name} by {self.user_id.username}"
