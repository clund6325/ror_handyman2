import Moment from 'react-moment';

const Service = ({ id, job, price, appointment, worker_id, updateService, deleteService }) => {
  
  return(
    <>
      <h3>{job}</h3>
      <h4>Price: {price}</h4>
      <h4>Appointment:</h4>
      <Moment format="MM/DD/YYYY">
        {appointment}
      </Moment>
      <br/>
      <Moment format="hh:mm">
        {appointment}
      </Moment>
      <br/>
      <br/>
      <button onClick={() => updateService(id)}>Edit</button>
      <button onClick={() => deleteService(id)}>Delete</button>
    </>
  )
}

export default Service;