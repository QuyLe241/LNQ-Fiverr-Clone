import React from "react";
import { Button, Drawer } from "antd";

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
      <Button type="primary" onClick={showLoading}>
        Open Drawer
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
          onClick={showLoading}
        >
          Reload
        </Button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default DrawerMobie;
