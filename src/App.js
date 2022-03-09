import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DonationCard from "./components/DonationCard";
import MembershipCard from "./components/MembershipCard";
import UserCard from "./components/UserCard";
import DonationForm from "./components/DonationForm.js";
import MembershipForm from "./components/MembershipForm.js";
import UserForm from "./components/UserForm";
import DonationsContainer from "./containers/DonationsContainer"
import MembershipsContainer from "./containers/MembershipsContainer"
import UsersContainer from "./containers/UsersContainer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch >
          <Route path="/mermberships/new">
            <MembershipForm />
          </Route>

          <Route path="/donations/new">
            <DonationForm />
          </Route>

          <Route path="/users/new">
            <UserForm />
          </Route>

          <Route path="/mermberships/:id">
            <MembershipCard />
          </Route>

          <Route path="/donations/:id">
            <DonationCard />
          </Route>

          <Route path="/users/:id">
            <UserCard />
          </Route>

          <Route path="/mermberships">
            <MembershipsContainer />
          </Route>

          <Route path="/donations">
            <DonationsContainer />
          </Route>

          <Route path="/users">
            <UsersContainer />
          </Route>

        </Switch>



      </Router>
      
    </div>
  );
}

export default App;
