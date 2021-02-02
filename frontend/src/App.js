import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import RewardsList from "./components/rewards-list.component";
import EditReward from "./components/edit-reward.component";
import RegisterReward from "./components/create-reward.component";
import CreatePupil from "./components/create-pupil.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={RewardsList} />
      <Route path="/edit/:id" component={EditReward} />
      <Route path="/register" component={RegisterReward} />
      <Route path="/pupil" component={CreatePupil} />
      </div>
    </Router>
  );
}

export default App;
