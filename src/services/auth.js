//import app from "../components/firebase";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const isBrowser = () => typeof window !== "undefined" 

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
    if (username === `toby` && password === `pass` ) {
        return setUser({
          username: `temp`,
          name: `toby`,
          email: `temp1`,
        })
    }
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