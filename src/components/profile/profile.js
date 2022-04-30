import React from "react"
import { view } from "./form.module.css"
import { navigate } from "@reach/router"
import { getDatabase, ref, get, update } from "firebase/database";

class Profile extends React.Component {
  state = {
    startColor: ``,
    difficulty: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const dbref = ref(getDatabase(), 'Games');
    get(dbref).then((snapshot) => {
      if(snapshot.exists()){
        const current_count = snapshot.val().counter;
        update(dbref,{
          counter: current_count + 1
        });
      }
      else{
      console.log("no Data avalable");
      }
    });
    const db = ref(getDatabase(), 'Games');
    get(db).then((snapshot) => {
      if(snapshot.exists()){
        const current_count2 = snapshot.val().counter;
        var temp = String(current_count2);
        temp = "Game" + temp;
        const stColor = String(this.state.startColor);
        const stDiff = String(this.state.difficulty);
        const postData = {'MoveCount':0,
                          'color':stColor,
                          'difficulty':stDiff,
                          'Moves':{'player':'',
                                   'computer':''}}
        const updates = {};
        updates[temp] = postData;
        update(db, updates);

      }
      else{
      console.log("no Data avalable");
      }
    });
  }

  render() {
    return (
      <>
      <div className={ view } >
        <h1>Start A Game!</h1>
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
