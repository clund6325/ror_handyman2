
const Comment = ({ id, title, body, rating, service_id, updateComment, deleteComment }) => {
  
  return(
    <>
      <h3>{title}</h3>
      <h4> {body}</h4>
      <h4>Rating: {rating}</h4>
      <br/>
      <button onClick={() => updateComment(id)}>Edit</button>
      <button onClick={() => deleteComment(id)}>Delete</button>
    </>
  )
}

export default Comment;