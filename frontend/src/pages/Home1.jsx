/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useEffect } from "react";
import {
  hill1,
  hill2,
  hill3,
  hill4,
  hill5,
  tree,
  plant,
  leaf,
} from "../bgimgs";
import TextBlock from "../components/TextBlock";
import ViewBookBtn from "../components/ViewBookBtn";

const Home1 = () => {
  document.body.style.margin = 0;
  document.body.style.overflowX = "hidden";

  useEffect(() => {
    let text = document.getElementById("text");
    let leaf = document.getElementById("leaf");
    let hill1 = document.getElementById("hill1");
    let hill4 = document.getElementById("hill4");
    let hill5 = document.getElementById("hill5");
    const onScroll = (event) => {
      let value = window.scrollY;
      text.style.marginTop = value * 2.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header>
        <h2>Bookapp</h2>
      </header>
      <section className="parallax">
        <img src={hill1} id="hill1"></img>
        <img src={hill2} id="hill2"></img>
        <img src={hill3} id="hill3"></img>
        <img src={hill4} id="hill4"></img>
        <img src={hill5} id="hill5"></img>
        <img src={tree} id="tree"></img>
        <h2 id="text">Book App</h2>
        <img src={leaf} id="leaf"></img>
        <img src={plant} id="plant"></img>
      </section>
      <br></br>
      <br></br>

      <section className="sec">
        <h2>About bookapp</h2>
        <p>
          BookApp is your comprehensive companion for immersive reading and
          language expansion. Seamlessly integrating a revolutionary
          personalized word storage system, BookApp enhances your literary
          exploration.  
          <br />
          <br />
          Effortlessly capture and organize unfamiliar words with a
          simple tap, highlight, or even by snapping pictures from physical
          books using OCR. Navigate your digital bookshelf effortlessly,
          accessing saved words for each book, creating a comprehensive
          vocabulary archive. 
          behind.
          <br />
          <br />
          Dive deep into word meanings with detailed
          definitions, example sentences, and pronunciation guides. Tailor your
          language growth with personalized learning goals, word challenges, and
          dynamic exercises like flashcards and quizzes. Experience seamless
          access across devices, fostering a vibrant community of language
          enthusiasts to share intriguing words and recommendations.
        </p>
        <ViewBookBtn />
      </section>
    </>
  );
};

export default Home1;
