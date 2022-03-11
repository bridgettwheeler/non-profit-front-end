import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DonationCard from "./components/DonationCard";
import MembershipCard from "./components/MembershipCard";
import UserCard from "./components/UserCard";
import DonationForm from "./components/DonationForm";
import MembershipForm from "./components/MembershipForm";
import UserForm from "./components/UserForm";
import Search from "./components/Search";
import DonationsContainer from "./containers/DonationsContainer";
import MembershipsContainer from "./containers/MembershipsContainer";
import UsersContainer from "./containers/UsersContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch >
          <Route path="/memberships/new">
            <MembershipForm />
          </Route>

          <Route path="/donations/new">
            <DonationForm />
          </Route>

          <Route path="/users/new">
            <UserForm />
          </Route>

          <Route path="/search">
           <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
