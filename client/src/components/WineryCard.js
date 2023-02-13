import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const WineryCard = ({winery, currentUser}) => {
   
    const {id, name, appellation, comments, visits } = winery


    const handleClick = () => {
        console.log("Click Tile")
    }
    const handleAddComment = () => {
        console.log("Add Comment")
    }
    const handleAddRating = () => {
        console.log("Add Rating")
    }
    const userVisit = winery.visits.find(visit => visit.userId === currentUser)

    const editRatingButton = <Button>Edit Rating</Button>

    const addRatingButton = <Button>Add Rating</Button>
    

  return (
    <Card style={{ margin: '2rem', padding: '1em', width:"24rem"}} cols={2}
            >
        <Link to={`/wineries/${id}`}>{name}</Link>
        <Card.Body onClick={handleClick} >
            <Card.Subtitle>Appellation: {appellation}</Card.Subtitle>
            <Card.Text>Comments: {comments.length}</Card.Text>
            <Card.Text>Visits: {visits.length}</Card.Text>
            <Card.Text>Avg Rating: TBD </Card.Text>
            <Card.Text>{userVisit? `Your Rating: ${userVisit.rating}` : '' }</Card.Text>
        </Card.Body>
        <Button onClick={handleAddComment}>Add Comment</Button>
       <div>{userVisit? editRatingButton : addRatingButton} </div>
    </Card>
  )
}

export default WineryCard