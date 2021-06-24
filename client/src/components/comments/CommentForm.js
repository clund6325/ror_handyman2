import { useState, useEffect } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState({ title: "", body: "", rating: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment(comment)
    setComment({ title: "", body: "", rating: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={comment.title}
        onChange={(e) => setComment({ ...comment, title: e.target.value })}
        placeholder="Title"
        required
      />
      <input
        name="body"
        value={comment.body}
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
        placeholder="Body"
        required
      />
      <input
        name="rating"
        value={comment.rating}
        onChange={(e) => setComment({ ...comment, rating: e.target.value })}
        placeholder="Rating"
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  )
}

export default CommentForm;