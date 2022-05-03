import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import { view } from "../components/layout.module.css"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className={ view } >
      <h1>Hello {isLoggedIn() ? getUser().name : "this is our chess app"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see your profile
            content
          </>
        )}
      </p>
      </div>
    </Layout>
  )
}