import React from "react";
import "./Home.css";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home5 from "../../assets/img/home5.jpg";
import home6 from "../../assets/img/home6.jpg";
import home8 from "../../assets/img/home8.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="h-sec1">
        <div className="h-sec1-txt">
          <h1>
            Buy <span>your</span> <br /> Favorite <span>book</span> <br />
            from <span>here</span>
          </h1>
        </div>
        <div className="h-sec1-imge">
          <img src={""} alt="" />
        </div>
      </div>

      <div className="h-sec2">
        <h1>Book Categories</h1>
        <div className="h-sec2-imge">
          <div className="h-sec2-imges">
            <Link to={"/education"}>
              <img src={home6} alt="" />
            </Link>
            <h3>
              Educational <br />
            </h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/short"}>
              <img src={home5} alt="" />
            </Link>
            <h3>Short Story</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/children"}>
              <img src={home2} alt="" />
            </Link>
            <h3>Children</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/fiction"}>
              <img src={home4} alt="" />
            </Link>
            <h3>Fiction</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/novel"}>
              <img src={home3} alt="" />
            </Link>
            <h3>Novel</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/languagelearning"}>
              <img src={home8} alt="" />
            </Link>
            <h3>Languages</h3>
          </div>
        </div>
      </div>

      <div className="home-sec3">
        <div className="h-sec3-imge">
          <img src={""} alt="" />
        </div>
        <div className="h-sec3-txt">
          <h4>Stay with us</h4>
          <p>dafdf</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
