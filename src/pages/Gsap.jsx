import React from "react";
import Main from "../components/section/Main";
import { gsapText } from "../data/gsap";
import { Link } from "react-router-dom";

const Gsap = () => {
  return (
    <Main title="GSAP 채널" description="GSAP 페이지입니다.">
      <section id="gsapPage">
        <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className="video__inner">
          {gsapText.map((video, key) => (
            <div className="video" key={key}>
              <div className="video__thumb play__icon">
                <Link to={`/video/${video.videoId}`}>
                  <img src={video.img} alt={video.title} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Gsap;
