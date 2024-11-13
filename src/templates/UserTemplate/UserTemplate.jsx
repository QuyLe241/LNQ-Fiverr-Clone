// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";

// const UserTemplate = () => {
//   //  header , content , footer
//   return (
//     <>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default UserTemplate;

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArrowTop from "./IconUserTemPlate/ArrowTop";
import "./style.scss";

const UserTemplate = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showButton && (
        <button className="back_to_top" onClick={scrollToTop} style={{}}>
          <ArrowTop width={"22px"} height={"22px"} />
        </button>
      )}
    </div>
  );
};

export default UserTemplate;
