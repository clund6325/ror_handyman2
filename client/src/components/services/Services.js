import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = ({ workerId }) => {
  const [services, setServices] = useState([])

  const getServices = () => {
    axios.get(`/api/workers/${workerId}/services`)
      .then((res) => {
        setServices(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  // useEffect( () => {
  //   axios.get(`/api/workers/${workerId}/services`)
  //     .then( res => {
  //       setServices(res.data)
  //     })
  //     .catch( err => console.log(err))
  // }, [])
    useEffect(() => {
      getServices();
    }, []);

  const addService = (service) => {
    axios.post(`/api/workers/${workerId}/services`, { service })
      .then( res => {
        setServices([...services, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateService = (id, service) => {
    axios.put(`/api/workers/${workerId}/services/${id}`, {service})
      .then( res => {
        const updatedServices = service.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setServices(updatedServices)
      })
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/workers/${workerId}/services/${id}`)
      .then(res => {
        setServices( services.filter( s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return(
    <>
      <h1 style={{ color: 'red' }}>Services</h1>
      {/* {services.map((service) => (
        <>
          <a href={`/service/${service.id}`}>{service.job}</a>
          <br/>
        </>
      ))} */}
      <ServiceList
        workerId={workerId}
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
      <ServiceForm addService={addService}/>
    </>
  )
}

export default Services;