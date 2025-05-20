import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="h-sec1">
        <div className="h-sec1-txt">
          <h1>
            Buy <span>your</span> <br></br> Favorite <span>book</span> <br></br>
            from <span>here</span>
          </h1>
        </div>
        <div className="h-sec1-imge">
          <img src={""} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
