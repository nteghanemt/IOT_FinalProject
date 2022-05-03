import app from "../components/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const isBrowser = () => typeof window !== "undefined" 

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        return setUser({
            username: `temp`,
            name: `User`,
            email: `temp1`,
          })
        //const user = ;
        
        // ...
    })
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}