import React from "react";
import Icons from "../home-components/Icons";
import Featured from "../home-components/Featured";
function Home() {
  return (
    <>
      <div className="container">
        <Icons />
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
