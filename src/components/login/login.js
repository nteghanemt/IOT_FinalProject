import React from "react"
import { navigate } from "gatsby"
import { view, 
pictureFormat} from "./login.module.css"
import { handleLogin, isLoggedIn } from "../../services/auth"
import { StaticImage } from 'gatsby-plugin-image'

class Login extends React.Component {
  state = {
    email: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state);
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
      <div className={ view } >
      <div className={ pictureFormat }>
        <StaticImage src="../../images/tigerhawk.jpeg"/>
        </div>
        <h1>Log in!</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <label>
            Email
            <input type="text" name="email" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password" name="password" onChange={this.handleUpdate} />
          </label>
          <input type="submit" value="Log In" />
        </form>
        </div>
        <div className={ view } >
        </div>
      </>
    )
  }
}

export default Login