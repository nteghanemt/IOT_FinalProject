import React from "react"
import { view,form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"

const Profile = ({ handleSubmit, handleUpdate }) => (
  <div className={ view } >
  <form
    className={form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/profile`)
    }}
  >
    
    <p>
      For this demo, please log in with the username <code>gatsby</code> and the
      password <code>demo</code>.
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
  </div>
)

export default Profile