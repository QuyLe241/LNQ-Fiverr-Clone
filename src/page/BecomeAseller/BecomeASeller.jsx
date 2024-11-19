import React from "react";
import "./style.scss";
import BecomeImg1 from "../../assets/Img/becomeImg1.png";
import BecomeImg2 from "../../assets/Img/becomeImg2.png";
import BecomeImg3 from "../../assets/Img/becomeImg3.png";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";

const BecomeASeller = () => {
  return (
    <div>
      <div className="become_container">
        <div className="container py-5">
          <h2
            className="text-center"
            style={{ fontSize: "25px", fontWeight: 700 }}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-3">
            <div className="">
              <div className="flex justify-center items-center py-2">
                <img src={BecomeImg1} alt="" />
              </div>
              <div className="text-center become_content">
                <h3 className="py-2">1. Create a Gig</h3>
                <p>
                  Sign up for free, set up your Gig, and offer your work to our
                  global audience.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <img src={BecomeImg2} alt="" />
              </div>
              <div className="text-center become_content">
                <h3 className="py-2">2. Deliver great work</h3>
                <p>
                  Get notified when you get an order and use our system to
                  discuss details with customers.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <img src={BecomeImg3} alt="" />
              </div>
              <div className="text-center become_content">
                <h3 className="py-2">3. Create a Gig</h3>
                <p>
                  Sign up for free, set up your Gig, and offer your work to our
                  global audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="become_getStarted">
        <div className="container py-6">
          <h3
            className="text-center py-2"
            style={{
              color: "rgb(98, 100, 106)",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Sign up and create your first Gig today
          </h3>
          <div className="flex justify-center items-center py-2">
            <Link
              to={pathDefault.register}
              style={{ fontSize: "18px", fontWeight: 600 }}
              className="py-2 px-6 rounded-md text-white bg-green-500 hover:bg-green-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeASeller;
