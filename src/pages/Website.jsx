import React from "react";
import Main from "../components/section/Main";
import { websiteText } from "../data/website";
import { Link } from "react-router-dom";

const Website = () => {
  return (
    <Main title="웹표준" description="웹표준 페이지입니다.">
      <section id="webdSite">
        <h2>😄 웹사이트의 기초는 이 강의로~</h2>

        <div className="video__inner">
          {websiteText.map((video, key) => (
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

export default Website;
