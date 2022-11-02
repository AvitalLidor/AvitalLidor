import "./App.css";
import React, { Component } from "react";
import AboutPage from "./components/about";
import Homepage from "./components/homepage";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./components/registerpage";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "./services/userService";
import LogOut from "./components/logout";
import SignupBiz from "./components/signupBiz";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import Signin from "./components/signin";
import EditCard from "./components/editCards";
import MyCards from "./components/myCards";
import Footer from "./components/footer";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Switch>
            <ProtectedRoute
              path="/my-cards/edit/:id"
              component={EditCard}
              biz={true}
            />
            <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
            <ProtectedRoute
              path="/create-card"
              component={CreateCard}
              biz={true}
            />
            <Route path="/biz-signup" component={SignupBiz} />
            <Route path="/logout" component={LogOut} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
