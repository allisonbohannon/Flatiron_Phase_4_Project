import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


const CommentCard = ({comment}) => {

    const handleEditComment = {
    }

    const handleDeleteComment = {

    }

  return (
    <Card>
        <Card.Text>{comment.text}</Card.Text>
        <Card.Subtitle>{comment.user}</Card.Subtitle>
        <Button onClick={handleEditComment }>Edit</Button>
        <Button onClick={handleDeleteComment}>Delete</Button>

    </Card>
  )
}

export default CommentCard