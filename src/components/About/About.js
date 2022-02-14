import React, { useContext } from "react";
import "./about.css";
import { LanguageContext } from "../../context/LanguageContext";
import personalImage from "../../img/personal.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaCircle } from "react-icons/fa";

const About = () => {
  const context = useContext(LanguageContext);
  console.log(context);
  console.log(`isEnglish:${context.isEngLish}`);
  return (
    <div className="about-container" id="about">
      <h1 className="title">ABOUT ME</h1>
      <div className="about-content">
        <div className="personal">
          <div className="image">
            <img src={personalImage} alt="personal image" />
            <div className="icons">
              <FaHtml5 className="icon" style={{ color: "#DC4D25" }} />
              <FaCss3Alt className="icon" style={{ color: "#146EB0" }} />
              <FaReact className="icon" style={{ color: "#00D1F7" }} />
            </div>
          </div>
        </div>
        <div className="self-intro">
          <div className="header">
            <FaCircle
              className="icon"
              style={{ color: "#ED4C5C", marginLeft: "0.8rem" }}
            />
            <FaCircle className="icon" style={{ color: "#FDCB58" }} />
            <FaCircle className="icon" style={{ color: "#78B159" }} />
          </div>
          <div className="content">
            <h1>Hi ^^.</h1>
            <p>
              I'm Tran Nhat Hiep. I'm a 4th-year student of the University of
              Science. I'm working with Reactjs and looking for a job as an
              Front-End developer. What you're seeing now is my portfolio - a
              project by me. Hope you will enjoy it. Thank you.
            </p>
          </div>
        </div>
      </div>
      {/* <h1 className="title">THÔNG TIN VỀ TÔI</h1>
          <div className="about-content">
            <div className="personal">
              <div className="image">
                <img src={personalImage} alt="personal image" />
                <div className="icons">
                  <FaHtml5 className="icon" style={{ color: "#DC4D25" }} />
                  <FaCss3Alt className="icon" style={{ color: "#146EB0" }} />
                  <FaReact className="icon" style={{ color: "#00D1F7" }} />
                </div>
              </div>
            </div>
            <div className="self-intro">
              <div className="header">
                <FaCircle
                  className="icon"
                  style={{ color: "#ED4C5C", marginLeft: "0.8rem" }}
                />
                <FaCircle className="icon" style={{ color: "#FDCB58" }} />
                <FaCircle className="icon" style={{ color: "#78B159" }} />
              </div>
              <div className="content">
                <h1>Chào anh, chị ^^.</h1>
                <p>
                  Em là Trần Nhật Hiệp, một sinh viên năm cuối của Trường Đại
                  học Khoa học Tự nhiên. Em đang làm việc với Reactjs và đang
                  tìm kiếm một công việc thực tập cho lập trình viên Front-End.
                  Anh chị đang xem website portfolio do chính em làm. Hi vọng
                  anh chị sẽ thích nó, em cảm ơn.
                </p>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default About;
