import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
  const navigate = useNavigate()
  localStorage.clear()
  // props.history.push('/login')
  navigate('/login')
  return <></>
}

export default Logout
