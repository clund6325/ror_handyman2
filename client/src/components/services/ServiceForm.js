import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, job, price, appointment, updateService, setEditing }) => {
  const [service, setService] = useState({ job: "", price: "", appointment: "" })
  useEffect( () => {
    if(id){
      setService({job, price, appointment, id:id})
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id){
      updateService(id, service)
      setEditing(false)
    }
    else{
      addService(service)
    }
    setService({ job: "", price: "", appointment: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="job"
        value={service.job}
        onChange={(e) => setService({ ...service, job: e.target.value })}
        placeholder="Job"
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