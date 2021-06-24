import Comment from './Comment';

const CommentList = ({serviceId, comments, updateComment, deleteComment}) => (
  <>
    { comments.map( c => 
      <Comment {...c} updateComment={updateComment} deleteComment={deleteComment}/>
      )}
  </>
)

export default CommentList;