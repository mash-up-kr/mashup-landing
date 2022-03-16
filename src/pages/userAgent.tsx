import React, { useEffect, useState } from 'react'

function UserAgent() {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
  },[])
  return (
    <div>{userAgent}</div>
  )
}

export default UserAgent
