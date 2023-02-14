import React from 'react'
import SignUpForm from '../components/SignupForm'

const SignUp = ({onLogin}) => {
  return (
    <SignUpForm onLogin={onLogin}/>
  )
}

export default SignUp