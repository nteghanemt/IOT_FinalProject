import React from "react"
import { view,form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"
import { pictureFormat} from "../login/login.module.css"
import { handleLogin, isLoggedIn } from "../../services/auth"
import { getUser } from "../../services/auth"

class Profile extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
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
            navigate(`/app/game`)
          }}
        >
          <label>
            Start Color
            <input type="text" name="startColor" onChange={this.handleUpdate} />
          </label>
          <label>
            Difficulty
            <input
              type="text" name="difficulty" onChange={this.handleUpdate} />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Start Game" />
        </form>
        </div>
      </>
    )
  }
}

export default Profile
/*
const Profile = ({ handleSubmit, handleUpdate }) => (
  <div className={ view } >
  <form
    className={form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/game`)
    }}
  >
    
    <p>
      Start a new game, <code>L4</code>,<code>demo</code>.
    </p>
    <label className={form__label}>
      Start Color
      <input
        className={form__input}
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className={form__label}>
      Difficulty
      <input
        className={form__input}
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className={form__button} type="submit" value="" />
  </form>
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </>
  </div>
  
)

export default Profile
*/