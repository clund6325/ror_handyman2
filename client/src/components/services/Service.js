import Moment from 'react-moment';
import ServiceForm from '../services/ServiceForm';
import { useState,} from 'react';

const Service = ({ id, job, price, appointment, updateService, deleteService }) => {
  const [editing, setEditing] = useState(false)
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
      <button onClick={() => deleteService(id)}>Delete</button>
      {editing ?
        <>
          <ServiceForm
            id={id}
            job={job}
            price={price}
            appointment={appointment}
            updateService={updateService}
            setEditing={setEditing}
          />
        </>
        :
        <button onClick={() => updateService(id)}>Edit</button>
      }
    </>
  )
}

export default Service;