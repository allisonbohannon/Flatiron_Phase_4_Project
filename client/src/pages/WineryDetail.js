import React, {useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CommentCard from '../components/CommentCard';
import { Link } from 'react-router-dom';
import { DetailCard, Button, Container, CardHeader, CardHeading, CardScroller, CardBody, CardButton } from '../styles';
import StarRatingShow from '../components/StarRatingShow';
import StarRatingEdit from '../components/StarRatingEdit';
import { UserContext } from '../context/User';


const WineryDetail = ({wineries, onChangeRating, onAddRating}) => {

  const { wineryId } = useParams()
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()

  //delete me!
  setCurrentUser(1)

  const displayWinery = wineries.find(winery => winery.id === parseInt(wineryId))

  const displayComments = displayWinery.comments.map(comment => {
    return <CommentCard key={comment.id} comment={comment} winery={displayWinery} /> 
  })

  const userVisit = displayWinery.visits.find(visit => visit.userId === currentUser)

  const handleClick = () => {
    navigate(-1)
  }

  const handleAddRating = () => {
    const newVisitObj = {
        userId: currentUser,
        wineryId: displayWinery.id,
        rating: 0
    }
    onAddRating(newVisitObj)
}

  const handleChangeRating = (rating) => {
    const updatedVisitObj = {
        id: userVisit.id,
        userId: currentUser,
        wineryId: displayWinery.id,
        rating: rating
    }

    onChangeRating(updatedVisitObj)

  }

  const displayAvgRating = () =>  <StarRatingShow rating={displayWinery.avgRating}/>
  const displayUserRating = () => <div>Your Rating: <StarRatingEdit userRating={userVisit.rating} onChange={handleChangeRating} /></div> 
  

  return (
    <div>
      <Button onClick={handleClick}>Back to Wineries</Button>
      <br></br>
      <Container>
        <DetailCard >
        <CardHeader>
            <img src={displayWinery.img} style={{ width:'38em'} }/>
        </CardHeader>
          <CardHeading style={{'font-size':'2em', color:'#aaa', borderBottom: '1px solid #ddd', padding:'1em', }}>{displayWinery.name}</CardHeading>
          <CardHeading style={{'font-size':'1.1em', color:'rgb(150,78,108)' }}>{displayWinery.appellation}</CardHeading>
          <CardBody>
            <p>Avg Rating: {displayAvgRating()}  </p>
            {userVisit? "" : <Button  onClick={handleAddRating}>Add Rating</Button>}
            <p>{userVisit? displayUserRating() : '' }</p> 
          </CardBody>
          <CardScroller>Comments: {displayComments}</CardScroller>
          <CardButton ><Link to={`/wineries/${displayWinery.id}/comments/new`} style={{color:'white', textDecoration:'none'}} >Add Comment</Link></CardButton>
        </DetailCard>
      </Container>

    </div>
  )
}

export default WineryDetail