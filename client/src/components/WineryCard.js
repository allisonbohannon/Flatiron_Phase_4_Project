import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from '../styles';
import { Link } from 'react-router-dom';
import StarRatingShow from './StarRatingShow';
import StarRatingEdit from './StarRatingEdit';

const WineryCard = ({winery, currentUser, onChangeRating, onAddRating}) => { 
  
   
    const {id, name, appellation, comments, visits, avgRating } = winery
    
    const userVisit = visits.find(visit => visit.userId === currentUser)

    const [showAddRating, setShowAddRating] = useState(false)


    const handleClick = () => {
    }

    const handleAddComment = () => {
        console.log("Add Comment")
    }
    const handleShowAddRating = () => {
        setShowAddRating(true)
    }

    const handleAddRating = () => {
        const newVisitObj = {
            userId: currentUser,
            wineryId: winery.id,
            rating: 0
        }
        onAddRating(newVisitObj)
    }

    const handleChangeRating = (rating) => {
        const updatedVisitObj = {
            id: userVisit.id,
            userId: currentUser,
            wineryId: winery.id,
            rating: rating
        }

        onChangeRating(updatedVisitObj)

    }
    
    const displayAvgRating = () =>  <StarRatingShow rating={avgRating}/>
    const displayUserRating = () => <div>Your Rating: <StarRatingEdit userRating={userVisit.rating} onChange={handleChangeRating} /></div> 
 

  return (
    <Card style={{ margin: '2rem', padding: '1em', width:"24rem"}} cols={2}
            >
        <Link to={`/wineries/${id}`}>{name}</Link>
        <Card.Body onClick={handleClick} >
            <Card.Subtitle>Appellation: {appellation}</Card.Subtitle>
            <Card.Text>Comments: {comments.length}</Card.Text>
            <Card.Text>Visits: {visits.length}</Card.Text>
            <Card.Text>Avg Rating: {displayAvgRating()}  </Card.Text>
            <Card.Text>{userVisit? displayUserRating() : '' }</Card.Text> 
        </Card.Body>
              {userVisit? "" : <Button onClick={handleAddRating}>Add Rating</Button>}
             <Button onClick={handleAddComment}>Add Comment</Button>
    </Card>
  )
}

export default WineryCard