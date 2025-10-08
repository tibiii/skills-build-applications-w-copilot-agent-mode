"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    # Root API endpoint returns the API base URL using $CODESPACE_NAME
    path('api/', lambda request: JsonResponse({
        'api_base_url': f"https://{os.environ.get('CODESPACE_NAME', 'localhost')}-8000.app.github.dev/api/"
    })),
    # Example endpoint for activities
    path('api/activities/', lambda request: JsonResponse({
        'endpoint': f"https://{os.environ.get('CODESPACE_NAME', 'localhost')}-8000.app.github.dev/api/activities/",
        'message': 'This is the activities endpoint.'
    })),
]
