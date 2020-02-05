import React from "react";

export default function Background({ backgroundLoad }) {
  if (backgroundLoad) {
    return (
      <>
        <div className="background-container">
          <img src="../img/background.webp" alt="background" />
          <div className="second-background">
            <img
              src="../img/bg-two.webp"
              className="shape-second"
              alt="background-second"
            />
          </div>
          <div className="people-image-container">
            <img src="../img/peopleIT.webp" alt="IT" />
          </div>
          <div className="description-background">
            <h2 className="descrtiption-title">
              Startup with your business now
            </h2>
            <p className="descrtiption-long">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi
              molestiae laudantium magni mollitia, ex sunt, aspernatur corrupti
              natus, nihil sapiente.
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
