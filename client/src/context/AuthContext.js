import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext();

function AuthContextProvider(props) {
 const [loggedIn, setLoggedIn] = useState(undefined);

 async function getLoggedIn() {
  // https://sunrise-management-system.herokuapp.com/auth/loggedIn http://localhost:5000/auth/loggedIn
  // http://localhost:5000/auth/loggedIn
  const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
  setLoggedIn(loggedInRes.data);
 }

 useEffect(() => {
  getLoggedIn();
 }, []);
 return (
  <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthContext
export { AuthContextProvider };