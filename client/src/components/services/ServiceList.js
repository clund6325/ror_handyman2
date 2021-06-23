import Service from './Service';

const ServiceList = ({workerId, services, updateService, deleteService}) => (
  <>
    { services.map( s => 
      <Service {...s} updateService={updateService} deleteService={deleteService}/>
      )}
  </>
)

export default ServiceList;