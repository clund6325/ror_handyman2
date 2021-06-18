Worker model has many Services
  empName: string
  specialty: string
  rating: int(1-5)
Services belongs to Worker, has many Comments
  service: string
  price: float
  appointment: datetime
  worker_id
Comments belongs to Services
  title: text
  body: text
  rating: int(1-5)