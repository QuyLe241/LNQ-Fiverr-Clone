import React, { useState } from "react";
import logoFooter from "../../assets/svg/logoFooter.svg";
import "./style.scss";
import { Dropdown, Space, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import IconLogoFooter from "../../icon/IconLogoFooter";
import IconTiktok from "../../icon/IconTiktok";
import IconIg from "../../icon/IconIg";
import Linked from "../../icon/IconLinked";
import IconFaceBook from "../../icon/IconFaceBook";
import IconPinteres from "../../icon/IconPinteres";
import IconX from "../../icon/IconX";
import IconLinked from "../../icon/IconLinked";
import Iconset from "../../icon/Iconset";
import SetLanguage from "../header/SetLanguage";

const Footer = () => {
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="footer py-6">
      <div className=" container mx-auto px-1">
        <div className="footer_start pb-5 grid grid-cols-5 grid-rows-1 gap-10">
          <div className="footer_item">
            <div className="">
              <h5 className="my-5" style={{ fontWeight: 600 }}>
                Categorles
              </h5>
            </div>
            <div className="footer_content">
              <ul>
                <li className="">
                  <Link>Graphics & Design</Link>
                </li>
                <li>
                  <Link>Digital Marketing</Link>
                </li>
                <li>
                  <Link>Writing & Translation</Link>
                </li>
                <li>
                  <Link>Video & Animation</Link>
                </li>
                <li>
                  <Link>Music & Audio</Link>
                </li>
                <li>
                  <Link>Fiverr Logo Maker</Link>
                </li>
                <li>
                  <Link>Programming & Tech</Link>
                </li>
                <li>
                  <Link>Data</Link>
                </li>
                <li>
                  <Link>Business</Link>
                </li>
                <li>
                  <Link>Personal Growth & Hobbies</Link>
                </li>
                <li>
                  <Link>Photography</Link>
                </li>
                <li>
                  <Link>Finance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <div className="">
              <h5 className="my-5" style={{ fontWeight: 600 }}>
                About
              </h5>
            </div>
            <div className="footer_content">
              <ul>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Press & News</Link>
                </li>
                <li>
                  <Link>Partnerships</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Intellectual Property Claims</Link>
                </li>
                <li>
                  <Link>Investor Relations</Link>
                </li>
                <li>
                  <Link></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <div className="">
              <h5 className="my-5" style={{ fontWeight: 600 }}>
                Support and Education
              </h5>
            </div>
            <div className="footer_content">
              <ul>
                <li>
                  <Link>Help & Support</Link>
                </li>
                <li>
                  <Link>Trust & Safety</Link>
                </li>
                <li>
                  <Link>Quality Guide</Link>
                </li>
                <li>
                  <Link>Selling on Fiverr</Link>
                </li>
                <li>
                  <Link>Buying on Fiverr</Link>
                </li>
                <li>
                  <Link>Fiverr Guides</Link>
                </li>
                <li>
                  <Link>Learn</Link>
                </li>
                <li>
                  <Link></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <div className="">
              <h5 className="my-5" style={{ fontWeight: 600 }}>
                Community
              </h5>
            </div>
            <div className="footer_content">
              <ul>
                <li>
                  <Link>Customer Success Stories</Link>
                </li>
                <li>
                  <Link>Community Hub</Link>
                </li>
                <li>
                  <Link>Forum</Link>
                </li>
                <li>
                  <Link>Events</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Creators</Link>
                </li>
                <li>
                  <Link>Affiliates</Link>
                </li>
                <li>
                  <Link>Podcast</Link>
                </li>
                <li>
                  <Link>Invite a Friend</Link>
                </li>
                <li>
                  <Link>Become a Seller</Link>
                </li>
                <li>
                  <Link>Community Standards</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <div className="">
              <h5 className="my-5" style={{ fontWeight: 600 }}>
                Business Solutions
              </h5>
            </div>
            <div className="footer_content">
              <ul>
                <li>
                  <Link>About Business Solutions</Link>
                </li>
                <li>
                  <Link>Fiverr Pro</Link>
                </li>
                <li>
                  <Link>Fiverr Certified</Link>
                </li>
                <li>
                  <Link>Become an Agency</Link>
                </li>
                <li>
                  <Link>Fiverr Enterprise</Link>
                </li>
                <li>
                  <Link>ClearVoice</Link>
                </li>
                <li>
                  <Link>Working Not Working</Link>
                </li>
                <li>
                  <Link>Contact Sales</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_end grid grid-cols-2 grid-rows-1 gap-3 pt-5 space-x-8">
          <div className="left flex space-x-5">
            <div className="">
              <IconLogoFooter />
            </div>
            <div className="copyright mt-1">
              <span className="">
                © Fiverr International Ltd. {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="right grid grid-cols-2 grid-rows-1 gap-3">
            <div className="social flex items-center">
              <ul className="flex space-x-5 items-center social_item">
                <li>
                  <a href="">
                    <IconTiktok />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconIg />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconLinked />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconFaceBook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconPinteres />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconX />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-x-3 flex items-center setting">
              <button onClick={showModal}>
                {" "}
                <i class="fa-solid fa-globe"></i>
                <span className="ml-2">English</span>
              </button>
              <Modal
                title="Select your preferences"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <SetLanguage />
              </Modal>
              <button onClick={showModal}>US$ USD</button>
              <button>
                <Iconset />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
