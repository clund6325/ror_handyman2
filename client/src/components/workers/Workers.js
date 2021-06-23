import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';
import { Container } from 'semantic-ui-react';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get("/api/workers")
      .then( res => {
        setWorkers(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addWorker = (worker) => {
    axios.post("/api/workers", {worker} )
      .then( res => {
        setWorkers([...workers, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, {worker} )
      .then( res => {
        const updatedWorkers = workers.map( w => {
          if (w.id === id) {
            return res.data
          }
          return w
        })
        setWorkers(updatedWorkers)
      })
      .catch( err => console.log(err) )
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        setWorkers( workers.filter( w => w.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return(
    <>
    <Container>
      <h1>
        Workers
      </h1>
      <WorkerList workers={workers} updateWorker={updateWorker} deleteWorker={deleteWorker}/>
      <h2>
        Add a Worker
      </h2>
      <WorkerForm addWorker={addWorker}/>
      <hr/>
    </Container>
    </>
  )
}

export default Workers;