import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import BarsIcon from "./BarsIcon";
import { pathDefault } from "../../../common/path";
import { Link } from "react-router-dom";
import DropDownFiverrPro from "./DropDownFiverrPro";
import DropdownLang from "./DropdownLang";
import DropdownCurrency from "./DropdownCurrency";
import { getLocalStorage, removeLocalStorage } from "../../../utils/utils";

const DrawerMobie = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const [dataLocal, setDataLocal] = useState();
  // Check for token
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = getLocalStorage("user");
    setDataLocal(token);
    // const checkToken = token.token;
    if (token && token.token) {
      setIsLoggedIn(true);
    }
    // else {navigate(pathDefault.login)}
  }, []);
  return (
    <div>
      <Button
        className=""
        style={{ border: "none" }}
        type=""
        onClick={showLoading}
      >
        <div className="">
          <BarsIcon width={"30px"} height={"30px"} />
        </div>
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={
          <div className="pl-3">
            {isLoggedIn && (
              <>
                <div className="flex items-center">
                  <div className="px-2">
                    <span>Hello</span>
                  </div>
                  <div className="">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                      }}
                      src={dataLocal.user.avatar}
                      alt={dataLocal.user.id}
                    />
                  </div>
                </div>
              </>
            )}
            {!isLoggedIn && (
              <>
                <div className="">
                  <span>Hello!</span>
                </div>
              </>
            )}
          </div>
        }
        placement="right"
        open={open}
        loading={""}
        onClose={() => setOpen(false)}
      >
        <div className="container_drawer">
          {/* <div className="login_page items_drawer">
            <Link to={pathDefault.login}>Sign in</Link>
          </div>
          <div className="register_page items_drawer">
            <Link to={pathDefault.register}>Sign up</Link>
          </div> */}
          {!isLoggedIn && (
            <>
              <div className="login_page items_drawer">
                <Link to={pathDefault.login}>Sign in</Link>
              </div>
              <div className="register_page items_drawer">
                <Link to={pathDefault.register}>Sign up</Link>
              </div>
            </>
          )}
          {isLoggedIn && (
            <>
              <div className="login_page items_drawer">
                <Link to={pathDefault.profileuser}>Update Avatar</Link>
              </div>
              <div className="register_page items_drawer">
                <Link to={pathDefault.profileuser}>Profile</Link>
              </div>
            </>
          )}
          <div className="fiverrPro_mobie items_drawer">
            <DropDownFiverrPro />
          </div>
          <div className="">
            <p
              className="mt-3"
              style={{ fontSize: "22px", color: "#404145", fontWeight: 600 }}
            >
              General
            </p>
            <div className="items_drawer">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to={"/"}
              >
                Home
              </Link>
            </div>
            <div className="items_drawer">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to={pathDefault.becomeASeller}
              >
                Become a Seller
              </Link>
            </div>
            <div className="items_drawer">
              <DropdownLang />
            </div>
            <div className="items_drawer">
              <DropdownCurrency />
            </div>
          </div>

          {/* logout */}
          {isLoggedIn && (
            <>
              <div className="items_drawer">
                <div className="btn_logout">
                  <button
                    onClick={() => {
                      removeLocalStorage("user");
                      window.location.href = "/";
                    }}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMobie;
