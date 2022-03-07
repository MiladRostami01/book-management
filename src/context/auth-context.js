import React, {useState, useContext} from 'react'

const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
})

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider 
      value={{
        isAuth: isLoggedIn,
        login: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

function useLogin () {
  return useContext(AuthContext)
}

export {useLogin}
export default AuthContextProvider