import React from "react";
import BannerIntro from "./BannerIntro";
import LogoMakec from "./LogoMake";
import LogoMake from "./LogoMake";

const VideoIntro = () => {
  return (
    <div className="w-full py-6 container mx-auto px-2">
      <video
        crossOrigin="anonymous"
        src="/img/How Fiverr Works EN Subs 16x9.mp4"
        poster="/img/thumbnail.jpg"
        role="video"
        preload="auto"
        controls
        autoPlay
        muted
        width={2000}
        className="rounded-lg"
      >
        <source
          role="source"
          src="/img/How Fiverr Works EN Subs 16x9.mp4"
          type="video/mp4"
        />
      </video>

      <BannerIntro />
      <LogoMake />
    </div>
  );
};

export default VideoIntro;
