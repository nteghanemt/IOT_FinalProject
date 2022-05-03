import React from "react"
import { view} from "../login/login.module.css"
import app from "../firebase"
import { navigate } from "@reach/router"
import { getDatabase, ref, get, set, update } from "firebase/database";
    
class Game extends React.Component {
    state = {
        move: ``,
        prevMove: ''
    }
    
    handleUpdate = event => {
        this.setState({
          [event.target.name]: event.target.value,
        })
    }
    handleSubmit = event => {
        this.state.prevMove = this.state.move

        event.preventDefault()
        var current_count = 0;
        const dbref = ref(getDatabase(), 'Games');
        get(dbref).then((snapshot) => {
            if(snapshot.exists()){
                current_count = snapshot.val().counter - 1;
            }
            else{
            console.log("no Data avalable");
            }
        });
        ////////////////////
        // I got as far as this yesterday. 
        // I was having trouble upgating the moves in dictionary
        // if you can figure that out that would be great
        /////////////////////
        /*
        const address = "Games/Game" + current_count;
        const db = ref(getDatabase(), );
        get(db).then((snapshot) => {
        if(snapshot.exists()){
            const current_count2 = snapshot.val().MoveCount;
            var temp = String(current_count2);
            temp = "Move" + temp;
            const stMove = String(this.state.move);
            const postData = {'player':stMove}
            const updates = {};
            update['Moves'] = postData;
            update(db, updates);
            update(db,{
                MoveCount: current_count2 + 1
            });
        }
        */
       console.log(this.state.move)
        const address = "move";
        const db = ref(getDatabase(), );
        get(db).then((snapshot) => {
        if(snapshot.exists()){
            update(db,{
                move: this.state.move
            });
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
                <h1>Make Your Move!</h1>
                <form
                method="post"
                onSubmit={event => {
                    this.handleSubmit(event)
                    navigate(`/app/game`)
                }}
                >
                <label>
                    Move
                    <input type="text" name="move" onChange={this.handleUpdate} />
                </label>
                <input type="submit" value="Enter" />
                <br>
                </br>
                <br>
                </br>
                <label>
                    Made move {this.state.prevMove}
                </label>
                </form>
                </div>
            </>
        )
    }
}
export default Game