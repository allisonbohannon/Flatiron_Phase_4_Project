import React, { useContext } from 'react'
import { Button, Card, CardHeader, CardHeading, CardBody, CardLink, CardButton } from '../styles';
import { Link } from 'react-router-dom';
import StarRatingShow from './StarRatingShow';
import StarRatingEdit from './StarRatingEdit';
import { UserContext } from '../context/User';

const WineryCard = ({winery, onChangeRating, onAddRating}) => { 

    const currentUser = useContext(UserContext)
  
    const {id, name, about, tastingcost, rezrequired, imagesrc, address, city } = winery
    
    // const userVisit = visits.find(visit => visit.userId === currentUser)

    const handleAddRating = () => {
        const newVisitObj = {
            userId: currentUser,
            wineryId: winery.id,
            rating: 0
        }
        onAddRating(newVisitObj)
    }

    // const handleChangeRating = (rating) => {
    //     const updatedVisitObj = {
    //         id: userVisit.id,
    //         userId: currentUser,
    //         wineryId: winery.id,
    //         rating: rating
    //     }

    //     onChangeRating(updatedVisitObj)

    // }
    
    // const displayAvgRating = () =>  <StarRatingShow rating={avgRating}/>
    // const displayUserRating = () => <div>Your Rating: <StarRatingEdit userRating={userVisit.rating} onChange={handleChangeRating} /></div> 
 

  return (
    <Card>
        <CardHeader>
            <img src={imagesrc} style={{ width:'23em'} }/>
        </CardHeader>
        <Link to={`/wineries/${id}`} style={{display: 'inline-block',
                                    fontSize: '1.2em',
                                    textDecoration: 'none',
                                    color: '#aaa',
                                    borderBottom: '1px solid #ddd',
                                    justifySelf: 'center',
                                    padding:'1em',
                                    cursor: 'pointer',
                                    transition: 'color 0.25s ease-in',
                                    '&':'hover {color: #777;}'}}>
                {name}</Link>
        <CardHeading style={{'font-size':'1.1em', color:'rgb(150,78,108)' }}>{city}</CardHeading>
        <CardBody>
            <p>{about}</p>
        </CardBody>
            {/* <span>
                <p>Avg Rating: {displayAvgRating()}  </p>
            {userVisit? "" : <Button  onClick={handleAddRating}>Add Rating</Button>}
            </span>
            <p>{userVisit? displayUserRating() : '' }</p>  */}
           
             <CardButton ><Link to={`/wineries/${id}/comments/new`} style={{color:'white', textDecoration:'none'}} >Add Comment</Link></CardButton>
    </Card>
  )
}

export default WineryCard