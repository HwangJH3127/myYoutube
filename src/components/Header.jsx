import React from "react";
import { ImBlogger } from "react-icons/im";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  CiBaseball,
  CiBoxes,
  CiBullhorn,
  CiCoffeeCup,
  CiCoins1,
  CiDumbbell,
  CiFries,
  CiMoneyBill,
} from "react-icons/ci";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <em aria-hidden="true"></em>
          <span>
            hwang's <br />
            YOUTUBE
          </span>
        </a>
      </h1>
      <nav className="header__menu">
        <ul className="menu">
          <li className="active">
            <a href="/">
              <CiBaseball /> 웹스토리보이
            </a>
          </li>
          <li>
            <a href="/today">
              <CiMoneyBill /> 추천 영상
            </a>
          </li>
          <li>
            <a href="/developer">
              <CiCoins1 /> 추천 개발자
            </a>
          </li>
          <li>
            <a href="/webd">
              <CiBoxes /> 웹디자인기능사
            </a>
          </li>
          <li>
            <a href="/website">
              <CiBullhorn /> 웹표준 사이트
            </a>
          </li>
          <li>
            <a href="/gsap">
              <CiCoffeeCup /> GSAP Parallax
            </a>
          </li>
          <li>
            <a href="/port">
              <CiDumbbell /> 포트폴리오 사이트
            </a>
          </li>
          <li>
            <a href="/youtube">
              <CiFries /> 유튜브 클론 사이트
            </a>
          </li>
        </ul>
        <ul className="keyword">
          <li className="active">
            <a href="/search/webstoryboy">webstoryboy</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
          <li>
            <a href="/search/next.js">Next.js</a>
          </li>
          <li>
            <a href="/search/node.js">Node.js</a>
          </li>
          <li>
            <a href="/search/sql">SQL</a>
          </li>
          <li>
            <a href="/search/React Portfolio">portfolio</a>
          </li>
          <li>
            <a href="/search/NewJeans">music</a>
          </li>
        </ul>
      </nav>
      <div className="header__sns">
        <ul>
          <li>
            <a
              href="https://github.com/whdgusdldl22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@_bong821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@whdgus3127/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImBlogger />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bong82.h/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
