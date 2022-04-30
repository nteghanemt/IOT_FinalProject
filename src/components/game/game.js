import React from "react"
import { getUser } from "../../services/auth"
import { navigate } from "gatsby"
import { view, 
    pictureFormat} from "../login/login.module.css"

class Game extends React.Component {
    state = {
        username: ``,
        password: ``,
      }
    render() {

        return (
          <>
          <div className={ view } >
            <h1>Log in!</h1>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/app/profile`)
              }}
            >
              <label>
                Username
                <input type="text" name="username" onChange={this.handleUpdate} />
              </label>
              <label>
                Password
                <input
                  type="password" name="password" onChange={this.handleUpdate} />
              </label>
              <input type="submit" value="Log In" />
            </form>
            </div>
          </>
        )
    }
}
export default Game