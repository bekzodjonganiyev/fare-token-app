import React from 'react'
import AuthApp from './AuthApp'
import useToken from './hook/useToken'
import UnAuthApp from './UnAuthApp'


const App = () => {
  const [token] = useToken()

  if (token) {
    return (
        <AuthApp />
    )
  }
  else {
    return (
        <UnAuthApp />
    )
  }
}

export default App