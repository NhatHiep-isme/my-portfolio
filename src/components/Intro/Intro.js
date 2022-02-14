import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import avatar from "../../img/avt.jpg";
import ukFlag from "../../img/united-kingdom.png";
import vnFlag from "../../img/vietnam.png";
import "./intro.css";

const Intro = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="intro-container">
      <div className="intro">
        <img src={avatar} alt="avatar" className="img-avt" />
        <h1 className="name">Trần Nhật Hiệp</h1>
        <h1 className="pos">FRONT-END INTERN</h1>
        <div className="flags-container">
          <div className="flag" onClick={() => toggleLanguage("EN")}>
            <img src={ukFlag} alt="uk flag" />
          </div>
          <div className="flag" onClick={() => toggleLanguage("VN")}>
            <img src={vnFlag} alt="vn flag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
