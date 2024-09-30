from django.db import models

class Outfit(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='outfits/')  # Adjust as necessary
    # Add any other fields you need

    def __str__(self):
        return self.name
