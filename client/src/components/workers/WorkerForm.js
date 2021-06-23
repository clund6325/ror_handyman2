import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ empName: "", specialty: "", rating: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ empName: "", specialty: "", rating: ""  })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="empName"
        value={worker.empName}
        onChange={(e) => setWorker({ ...worker, empName: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        name="specialty"
        value={worker.specialty}
        onChange={(e) => setWorker({ ...worker, specialty: e.target.value })}
        placeholder="Specialty"
        required
      />
      <input
        name="rating"
        value={worker.rating}
        onChange={(e) => setWorker({ ...worker, rating: e.target.value })}
        placeholder="Rating"
        required
      />
      <button type="submit">Add Worker</button>
    </form>
  )
}

export default WorkerForm;