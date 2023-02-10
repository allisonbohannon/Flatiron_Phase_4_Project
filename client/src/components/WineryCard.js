import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const WineryCard = ({winery}) => {
   
    const {name, appellation, comments, visits } = winery

    const visitsArr = []

    visits.forEach(visit => visitsArr.push(visit.rating))

    const averageRating = visitsArr.reduce((a,b) => a + b)/visits.length

    const handleClick = () => {
        console.log("Click Tile")
    }
    const handleAddComment = () => {
        console.log("Add Comment")
    }
    const handleAddRating = () => {
        console.log("Add Rating")
    }

  return (
    <Card style={{ margin: '2rem', padding: '1em', width:"24rem"}} cols={2}
            >
        <Card.Title onClick={handleClick} >{name}</Card.Title>
        <Card.Body onClick={handleClick} >
            <Card.Subtitle>Appellation: {appellation}</Card.Subtitle>
            <Card.Text>Comments: {comments.length}</Card.Text>
            <Card.Text>Visits: {visits.length}</Card.Text>
            <Card.Text>Rating: {averageRating}</Card.Text>
        </Card.Body>
        <Button onClick={handleAddComment}>Add Comment</Button>
        <Button onClick={handleAddRating}>Add Rating</Button>
    </Card>
  )
}

export default WineryCard