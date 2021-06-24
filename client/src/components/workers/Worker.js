import Services from "../services/Services";
import Comments from "../comments/Comments";
import Workers from "../workers/Workers";
import { Link } from 'react-router-dom'

const Worker = ({ workerid, id, empName, specialty, rating, addWorker, updateWorker, deleteWorker}) => {
  return(
    <>
      <h1>{empName} (rating: {rating})</h1>
      <h3>Specialty: {specialty}</h3>
      
      <button onClick={() => updateWorker(id)}>Edit Worker</button>
      <button onClick={() => deleteWorker(id)}>Delete Worker</button>
      {/* <Link to="/home" >Services</Link>
      <Link to={`api/workers/${id}/services`}>
        <button>Services</button>
      </Link> */}
      <Services workerId={id} />
      <Comments serviceId={id} />
    </>
  )
}

export default Worker;