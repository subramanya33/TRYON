from django.shortcuts import render
from django.views.generic import ListView
from .models import Outfit

class OutfitListView(ListView):
    model = Outfit
    template_name =  'tryon/outfits/outfit_list.html'
    def get_queryset(self):
        return Outfit.objects.all()

def home(request):
    return render(request, 'tryon/home.html')  # Make sure this template exists
