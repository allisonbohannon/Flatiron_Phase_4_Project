import React, {useState} from 'react'
import { Button, Card, CardHeader, CardHeading, CardImage, CardBody, CardLink, CardButton } from '../styles';
import StarRatingShow from './StarRatingShow';
import StarRatingEdit from './StarRatingEdit';

const WineryCard = ({winery, currentUser, onChangeRating, onAddRating}) => { 
  
   
    const {id, name, img, appellation, comments, visits, avgRating } = winery
    
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
    <Card>
        <CardHeader>
            <img src={img} style={{ width:'23em'} }/>
        </CardHeader>
        <CardLink to={`/wineries/${id}`}>
                <CardHeading>{name}</CardHeading>
        </CardLink>
        <CardHeading style={{'font-size':'1.1em', color:'rgb(150,78,108)' }}>{appellation}</CardHeading>
        <CardBody>
            <p>Visits: {visits.length}</p>
            <p>Comments: {comments.length}</p>
        </CardBody>
            <span>
                <p>Avg Rating: {displayAvgRating()}  </p>
            {userVisit? "" : <Button  onClick={handleAddRating}>Add Rating</Button>}
            </span>
            <p>{userVisit? displayUserRating() : '' }</p> 
           
    
              
             <CardButton onClick={handleAddComment}>Add Comment</CardButton>
    </Card>
  )
}

export default WineryCard