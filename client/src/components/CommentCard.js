import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User';
import { Button, Card } from '../styles';


const CommentCard = ({comment, winery}) => {

  console.log(comment)

    const currentUser = useContext(UserContext)

    const checkIfCurrentUser = currentUser.currentUser === comment.userId ? true : false 
    
    const author = <p>{comment.userId}</p>
    const button = <Link to={`/wineries/${winery.id}/comments/${comment.id}/edit`}>
                    <Button>Edit</Button>
                    </Link>

  return (
    <div>
        <p>{comment.text}</p>
        {checkIfCurrentUser ? button : author}

    </div>
  )
}

export default CommentCard