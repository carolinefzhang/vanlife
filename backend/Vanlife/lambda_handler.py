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
    # Check if this is a migration request
    if event.get('migrate'):
        from django.core.management import execute_from_command_line
        import sys
        
        # Run migrations
        sys.argv = ['manage.py', 'migrate']
        try:
            execute_from_command_line(sys.argv)
            return {
                'statusCode': 200,
                'body': 'Migrations completed successfully'
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'body': f'Migration failed: {str(e)}'
            }
    
    # Normal HTTP request handling
    return handler(event, context)