/* eslint-disable no-unused-vars */
import React from "react";
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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "../components/TextBlock";

function home() {
  document.body.style.margin = 0;
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="hill1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="hill2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="hill3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="hill4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="hill5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <h1 id="text">Book app</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="leaf"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.48}>
          <div class="animation_layer parallax" id="tree"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="plant"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock/>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default home;
