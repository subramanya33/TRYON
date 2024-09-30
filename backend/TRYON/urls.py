from django.urls import path
from .views import home, OutfitListView

urlpatterns = [
    path('', home, name='home'),  # Root URL will display the home page
    path('outfits/', OutfitListView.as_view(), name='outfit_list'),  # Outfits page
]
