import React from "react";
import { Button, Drawer } from "antd";
import BarsIcon from "./BarsIcon";
import { pathDefault } from "../../../common/path";
import { Link } from "react-router-dom";
import DropDownFiverrPro from "./DropDownFiverrPro";
import DropdownLang from "./DropdownLang";
import DropdownCurrency from "./DropdownCurrency";

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
            <span>Hello !</span>
          </div>
        }
        placement="right"
        open={open}
        loading={""}
        onClose={() => setOpen(false)}
      >
        <div className="container_drawer">
          <div className="login_page items_drawer">
            <Link to={pathDefault.login}>Sign in</Link>
          </div>
          <div className="register_page items_drawer">
            <Link to={pathDefault.register}>Sign up</Link>
          </div>
          <div className="fiverrPro_mobie items_drawer">
            <DropDownFiverrPro />
          </div>
          <div className="">
            <p style={{ fontSize: "18px", color: "#404145" }}>General</p>
            <div className="items_drawer">
              <Link to={pathDefault.home}>Home</Link>
            </div>
            <div className="items_drawer">
              <DropdownLang />
            </div>
            <div className="items_drawer">
              <DropdownCurrency />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMobie;
