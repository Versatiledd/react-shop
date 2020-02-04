import React from "react";
import Featured from "../home-components/Featured";
import Background from "../home-components/Background";
import "../home-styles/background.css";
function Home() {
  return (
    <>
      <div className="container">
        <Background />
        <div className="wrapper">
          <h4>
            <b> Creative Code </b> lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Earum quos saepe sint itaque, facere voluptatem
            perferendis excepturi exercitationem in ad asperiores aperiam et
            minus accusamus sequi deleniti ut ratione error.
          </h4>
        </div>
        <Featured></Featured>
      </div>
    </>
  );
}

export default Home;
