import React from "react";
import Main from "../components/section/Main";
import { webdText } from "../data/webd";
import { Link } from "react-router-dom";

const Webd = () => {
  return (
    <Main title="웹디자인" description="웹디자인 페이지입니다.">
      <section id="webdSite">
        <h2>😄 웹디자인기능사 한번에 따자!</h2>

        <div className="video__inner">
          {webdText.map((video, key) => (
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

export default Webd;
