import React from 'react'
import AuthApp from './AuthApp'
import { Context } from './context/authContext'
import useToken from './hook/useToken'
import UnAuthApp from './UnAuthApp'

const App = () => {
  const { auth } = React.useContext(Context)
  const [token] = useToken()

  if (auth) {
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