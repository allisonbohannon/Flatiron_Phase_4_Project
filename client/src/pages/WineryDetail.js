import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import CommentCard from '../components/CommentCard';
import Card from 'react-bootstrap/Card';
import { DetailCard, Button, CardContainer, CardHeader, CardHeading, CardScroller } from '../styles';



const WineryDetail = ({wineries}) => {

  const { wineryId } = useParams()
  const navigate = useNavigate()

  const displayWinery = wineries.find(winery => winery.id === parseInt(wineryId))

  const displayComments = displayWinery.comments.map(comment => {
    return <CommentCard key={comment.id} comment={comment} winery={displayWinery} /> 
  })

  const handleClick = () => {
    navigate(-1)
  }
  

  return (
    <div>
      <Button onClick={handleClick}>Back to Wineries</Button>
      <br></br>
      <CardContainer>
        <DetailCard >
        <CardHeader>
            <img src={displayWinery.img} style={{ width:'38em'} }/>
        </CardHeader>
          <CardHeading>{displayWinery.name}</CardHeading>
          <p>{displayWinery.appellation}</p>
          <p>Ratings: TBD</p>
          <CardScroller>Comments: {displayComments}</CardScroller>
        </DetailCard>
      </CardContainer>

    </div>
  )
}

export default WineryDetail