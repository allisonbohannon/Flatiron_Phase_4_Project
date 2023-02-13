import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CommentCard = ({comment, currentUser}) => {

    const checkIfCurrentUser = currentUser == comment.userId ? true : false 
        

    const handleEditComment = {
    }

    const handleDeleteComment = {

    } 

    
    const author = <Card.Subtitle>{comment.userId}</Card.Subtitle>
    const button = <Link to={`/wineries/${comment.id}/edit`}>
                    <Button onClick={handleEditComment}>Edit</Button>
                    </Link>

  return (
    <Card>
        <Card.Text>{comment.text}</Card.Text>
        {checkIfCurrentUser ? button : author}

    </Card>
  )
}

export default CommentCard