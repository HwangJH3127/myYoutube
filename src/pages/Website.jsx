import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { websiteText } from "../data/website";
import VideoCards from "../components/videos/VideoCards";

const Website = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const websitePageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="웹표준" description="웹표준 페이지입니다.">
      <section id="webdsitePage" className={websitePageClass}>
        <h2>😄 웹사이트의 기초는 이 강의로~</h2>

        <div className="video__inner">
          <VideoCards videos={websiteText} />
        </div>
      </section>
    </Main>
  );
};

export default Website;
