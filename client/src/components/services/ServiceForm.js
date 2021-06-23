import { useState, useEffect } from 'react';

const ServiceForm = ({ addService }) => {
  const [service, setService] = useState({ job: "", price: "", appointment: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addService(service)
    setService({ job: "", price: "", appointment: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="job"
        value={service.job}
        onChange={(e) => setService({ ...service, job: e.target.value })}
        placeholder="job"
        required
      />
      <input
        name="price"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
        placeholder="price"
        required
      />
      <input
        name="appointment"
        value={service.appointment}
        onChange={(e) => setService({ ...service, appointment: e.target.value })}
        placeholder="appointment"
        required
      />
      <button type="submit">Add Service</button>
    </form>
  )
}

export default ServiceForm;