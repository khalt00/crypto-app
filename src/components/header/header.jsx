import icon from "../../images/cryptocurrency.png";
import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
function Navbar() {
  const items = [
    {
      icon: <HomeOutlined />,
      label: <Link to="/HomePage">Home</Link>,
    },
    {
      icon: <MoneyCollectOutlined />,
      label: <Link to="/Currencies">Cryptocurrencies</Link>,
    },
    {
      icon: <BulbOutlined />,
      label: <Link to="/Exchanges">Exchanges</Link>,
    },
    { icon: <FundOutlined />, label: <Link to="/News">News</Link> },
  ];
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container">
          <MenuOutlined />
        </Button>
      </div>
      <Menu items={items} theme="dark"></Menu>
    </div>
  );
}
export default Navbar;
