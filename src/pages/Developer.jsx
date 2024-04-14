import React from "react";
import Main from "../components/section/Main";
import { developerText } from "../data/developer";
import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <Main title="개발자 채널" description="개발자 채널페이지입니다.">
      <section id="developerPage">
        <h2>🥰 추천 개발자를 소개합니다.</h2>
        <div className="developerPage__inner">
          {developerText.map((developer, key) => (
            <div className="developer" key={key}>
              <div className="developer__img">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              <div className="developer__info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Developer;
