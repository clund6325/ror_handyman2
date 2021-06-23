import Worker from './Worker'
import Workers from './Workers'

const WorkerList = ({ workers, addWorker, updateWorker, deleteWorker}) => (
  <>
    { workers.map( w =>
      <>
        <Worker {...w} updateWorker={updateWorker} deleteWorker={deleteWorker} addWorker={addWorker} />
        <hr />
      </>
    )}
  </>
)

export default WorkerList;