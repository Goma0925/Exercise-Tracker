import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.js"
import ExercisesList from "./components/exercises-list.js";
import EditExercise from "./components/edit-exercise.js";
import CreateExercise from "./components/create-exercise.js";
import CreateUser from "./components/create-user.js";

function App(props) {
  console.log("App props", props);
  return (
    <Router>
      <Navbar />

      <div className="container">
        <br/>
        <Route path="/app" exact render={() => <ExercisesList apiRoot={props.apiRoot} />} />
        <Route path="/app/edit/:id" render={(routeProps) => <EditExercise {...routeProps} apiRoot={props.apiRoot} />} />
        <Route path="/app/create" render={() => <CreateExercise apiRoot={props.apiRoot} />} />
        <Route path="/app/user" render={() => <CreateUser apiRoot={props.apiRoot} />} />
      </div>
    </Router>
  );
}

export default App;
