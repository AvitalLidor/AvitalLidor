import React, { Component } from "react";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/12/21/58/new-york-1819861_960_720.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          zIndex: "1",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            position: "relative",
            zIndex: "2",
            color: "#FFD700",
            marginLeft: "auto",
            marginRight: "auto",
            width: "300px",
            border: "15px solid black",
            padding: "50px",
            opacity: 0.8,
          }}
        >
          <div
            style={{
              fontSize: "20px",
            }}
          ></div>
          <h2>Sign up to become known</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
