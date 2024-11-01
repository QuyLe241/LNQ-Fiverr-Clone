import React from "react";
import Banner from "../Banner/Banner";
import Content from "../Content/Content";
import Jobs from "../Jobs/Jobs";
import VideoIntro from "../VideoIntro/VideoIntro";
import MadeOnFiverr from "../MadeOnFiverr/MadeOnFiverr";

const Body = () => {
  return (
    <div className="container">
      <Banner />
      <Jobs />
      <VideoIntro />
      <MadeOnFiverr />
    </div>
  );
};

export default Body;
