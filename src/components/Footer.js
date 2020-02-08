import React from "react";
import "../home-styles/footer.css";

export default function Footer() {
  return (
    <section className="container-footer">
      <div className="wrapper-footer">
        <div className="footer-description">
          <span className="footer-sub-title">What we do</span>
          <h3 className="footer-title">Our Product Features</h3>
          <p className="footer-info">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
