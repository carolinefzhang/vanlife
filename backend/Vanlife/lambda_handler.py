import os
import django
from django.core.wsgi import get_wsgi_application
from mangum import Mangum

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Vanlife.settings')

# Setup Django
django.setup()

# Get WSGI application
application = get_wsgi_application()

# Create Mangum adapter
handler = Mangum(application, lifespan="off")

def lambda_handler(event, context):
    return handler(event, context)