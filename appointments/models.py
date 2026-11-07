from django.db import models


class Appointment(models.Model):
	customer_name = models.CharField(max_length=120)
	service = models.CharField(max_length=120)
	appointment_date = models.DateField()
	phone_number = models.CharField(max_length=30)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['appointment_date', 'customer_name']

	def __str__(self):
		return f'{self.customer_name} - {self.appointment_date}'
