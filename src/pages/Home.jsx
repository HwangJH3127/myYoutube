import React from "react";
import Main from "../components/section/Main";

import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
import VideoSlider from "../components/videos/VideoSlider";
import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { portfolioText } from "../data/portfolio";
import { youtubeText } from "../data/youtube";

const Home = () => {
  return (
    <Main>
      <Today />
      <Developer />
      <VideoSlider
        videos={webdText}
        title="😄 웹디자인기능사 한번에 따자!"
        id="webd"
      />
      <VideoSlider
        videos={websiteText}
        title="😄 웹사이트의 기초는 이 강의로~"
        id="website"
      />
      <VideoSlider
        videos={gsapText}
        title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!"
        id="gsap"
      />
      <VideoSlider
        videos={portfolioText}
        title="🫣 나만의 포트폴리오 사이를 만들고 싶다면."
        id="portfolio"
      />
      <VideoSlider
        videos={youtubeText}
        title="😱 지금 이 코딩을 영상으로"
        id="youtube"
      />
    </Main>
  );
};

export default Home;
