import React from 'react'
import AuthApp from './AuthApp'
import { Context } from './context/authContext'
import UnAuthApp from './UnAuthApp'

const App = () => {
  const { auth } = React.useContext(Context)

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