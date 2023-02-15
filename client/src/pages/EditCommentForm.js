import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardContainer, FormField, Button } from '../styles';






const EditCommentForm = ({wineries, currentUser, handleCommentEdit}) => {

    const navigate = useNavigate()

    const {wineryId, commentId} = useParams()

    const winery = wineries.find(winery => winery.id === parseInt(wineryId))
    const comment = winery.comments.find(comment => comment.id === parseInt(commentId))

    
    useEffect(() => {
        if (comment.userId !== currentUser) {
            navigate(`/wineries/${winery.id}/comments/${comment.id}`)
            console.log("Edit Access Denied")
        }
    })

    const [commentText, setCommentText] = useState(comment.text)
  
    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedComment = {...comment, text: commentText}

        const updatedWinery = {...winery, comments: winery.comments.map(originalComment => {
            if (comment.id === originalComment.id) {
                return updatedComment
            } else {
                return originalComment
            }
        })}

        // fetch(`${process.env.REACT_APP_API_URL}/comments/${id}`, { 
        //     method: "PATCH", 
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(commentObj)
        //      })
        //  .then(response => response.json())
        //  .then(data => handleCommentEdit(data))

        handleCommentEdit(updatedWinery)

       // navigate(-1)
    }

    const handleChange = (e) => {
        setCommentText(e.target.value)
    }
    
  
   
  return (
    <CardContainer>
        <form c onSubmit={handleSubmit}>
                <FormField type="text" 
                        name="name"
                        onChange={handleChange} 
                        value={commentText}>
                </FormField> 
                <Button type="submit">Submit</Button>
        </form>
      
    </CardContainer>
  )
}

export default EditCommentForm