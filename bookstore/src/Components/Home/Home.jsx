import React from "react";
import "./Home.css";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home5 from "../../assets/img/home5.jpg";
import home6 from "../../assets/img/home6.jpg";

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
          <div className="h-sec2-imge1">
            <img src={home6} alt="" />
            <h3>
              Educational <br />
            </h3>
          </div>
          <div className="h-sec2-imges">
            <img src={home5} alt="" />
            <h3>Short Story</h3>
          </div>
          <div className="h-sec2-imges">
            <img src={home2} alt="" />
            <h3>Children</h3>
          </div>
          <div className="h-sec2-imges">
            <img src={home4} alt="" />
            <h3>Fiction</h3>
          </div>
          <div className="h-sec2-imges">
            <img src={home3} alt="" />
            <h3>Novel</h3>
          </div>
          <div className="h-sec2-imges">
            <img src={home5} alt="" />
            <h3>Language Learning</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
