import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile/profile"
import Game from "../components/game/game"
import Login from "../components/login/login"

const App = () => (
  <Layout>
    <Router>
    <Login path="/app/login" />
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/game" component={Game} />
    </Router>
  </Layout>
)

export default App