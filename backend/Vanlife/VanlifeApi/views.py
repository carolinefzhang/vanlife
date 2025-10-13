from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import *
from .serializers import *
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from rest_framework import status

class VanViewSet(viewsets.ModelViewSet):
    queryset = Van.objects.all()
    serializer_class = VanSerializer

class HostViewSet(viewsets.ModelViewSet):
    queryset = Host.objects.all()
    serializer_class = HostSerializer
    permission_classess = [permissions.IsAuthenticated]

class HostVansViewSet(viewsets.ModelViewSet):
    queryset = Van.objects.all()  # Default queryset for router registration
    serializer_class = VanSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        # Get the host associated with the logged-in user
        try:
            host = Host.objects.get(user=self.request.user)
            return Van.objects.filter(host_id=host)
        except Host.DoesNotExist:
            return Van.objects.none()

class HostReviewsViewSet(viewsets.ModelViewSet):
    queryset = Van.objects.all()  # Default queryset for router registration
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):       
        try:
            # Get the host associated with the logged-in user
            host = Host.objects.get(user=self.request.user)
            vans = Van.objects.filter(host_id=host)
            return Review.objects.filter(van_id__in=vans)
        except Host.DoesNotExist:
            return Review.objects.none()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

@method_decorator(csrf_exempt, name='dispatch')
class LoginApiView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        print(f"Request data: {request.data}")
        
        email = request.data.get('email')
        password = request.data.get('password')
        
        print(f"Email: {email}, Password: {'*' * len(password) if password else None}")
        
        if not email or not password:
            return Response({'error': 'Email and password required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Try to find user by email first
        try:
            user_obj = User.objects.get(email=email)
            username = user_obj.username
            print(f"Found user with email {email}: {username}")
        except User.DoesNotExist:
            print(f"No user found with email: {email}")
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(username=username, password=password)
        print(f"Authenticated user: {user}")
        
        if user and user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            print(f"Token created: {created}, Token: {token.key[:10]}...")
            return Response({
                'token': token.key, 
                'user_id': user.id,
                'username': user.username,
                'email': user.email
            })
        elif user and not user.is_active:
            return Response({'error': 'User account is disabled'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)