import { Component } from "react";
import userService from "../services/userService";

class LogOut extends Component {
  componentDidMount() {
    userService.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogOut;
