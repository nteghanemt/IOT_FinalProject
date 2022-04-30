import React from "react"
import { view,form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"
import { getUser } from "../../services/auth"
import database from "../firebase";

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
      Enter your move in the form, <code>L4</code>,<code>demo</code>.
    </p>
    <label className={form__label}>
      Move
      <input
        className={form__input}
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className={form__label}>
      Password
      <input
        className={form__input}
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className={form__button} type="submit" value="Enter Move" />
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