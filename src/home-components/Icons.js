import React from "react";
import "../home-styles/icons.css";
function Icons() {
  return (
    <section className="container-icons">
      <div className="wrapper-icons">
        <div className="wrapper-image">
          <img src="../img/iconOne.webp" alt="" />
        </div>
        <div className="description-wrapper">
          <h3 className="icon-title tomato">Work from everywhere</h3>
          <p className="icon-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            voluptate, officiis aut dolorem ullam autem veritatis facilis.
            Dolores maxime earum, delectus perferendis laborum culpa placeat
            possimus, tempore ipsum ratione quo?
          </p>
        </div>
      </div>
      <div className="wrapper-icons">
        <div className="wrapper-image">
          <img src="../img/iconTwo.webp" alt="" />
        </div>
        <div className="description-wrapper">
          <h3 className="icon-title slateblue">Manage your shedule</h3>
          <p className="icon-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            voluptate, officiis aut dolorem ullam autem veritatis facilis.
            Dolores maxime earum, delectus perferendis laborum culpa placeat
            possimus, tempore ipsum ratione quo?
          </p>
        </div>
      </div>
      <div className="wrapper-icons">
        <div className="wrapper-image">
          <img src="../img/iconThree.webp" alt="" />
        </div>
        <div className="description-wrapper">
          <h3 className="icon-title seagreen">Increase your workrates</h3>
          <p className="icon-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            voluptate, officiis aut dolorem ullam autem veritatis facilis.
            Dolores maxime earum, delectus perferendis laborum culpa placeat
            possimus, tempore ipsum ratione quo?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Icons;
