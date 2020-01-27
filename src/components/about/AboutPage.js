import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h2>About</h2>

    <p>React, Redux and REact Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default AboutPage;
