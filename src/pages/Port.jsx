import React from "react";
import Main from "../components/section/Main";
import { portfolioText } from "../data/portfolio";
import { Link } from "react-router-dom";

const Port = () => {
  return (
    <Main title="포트폴리오" description="포트폴리오 페이지입니다.">
      <section id="portfolioPage">
        <h2>🫣 나만의 포트폴리오 사이를 만들고 싶다면.</h2>
        <div className="video__inner">
          {portfolioText.map((video, key) => (
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

export default Port;
