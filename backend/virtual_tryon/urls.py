from django.contrib import admin
from django.urls import path, include  # Include necessary imports
from django.conf import settings
from django.conf.urls.static import static
from TRYON.views import OutfitListView  # Import the view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('TRYON.urls')), # Include your app's URLs
    path('', OutfitListView.as_view(), name='outfit-list'),  # Home page for outfits
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
