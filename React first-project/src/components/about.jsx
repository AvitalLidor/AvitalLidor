import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        zIndex: "1",
        position: "relative",
        opacity: 0.8,
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
        >
          If you sign up as a business, We Will Post Your Cards And Make it
          Known All Over the World
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
