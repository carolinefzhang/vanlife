from .models import *
from rest_framework import serializers  
from django.contrib.auth.models import User, Group
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class VanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Van
        fields = '__all__'

class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = ['user', 'rating', 'comment', 'created_at']
    def get_user(self, obj):
        return obj.user_id.username
        

class HostVansSerializer(serializers.ModelSerializer):
    vans = VanSerializer(many=True, read_only=True, source='van_set')
    
    class Meta:
        model = Host
        fields = ['id', 'name', 'email', 'phone', 'vans']

class HostReviewsSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField()

    class Meta:
        model = Host
        fields = ['id', 'name', 'email', 'phone', 'reviews']

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        return ReviewSerializer(reviews, many=True).data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        extra_kwargs = {'password': {'write_only': True}}

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']