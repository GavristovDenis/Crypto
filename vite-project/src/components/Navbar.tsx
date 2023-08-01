import React, { FC } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/crypto_logo.png";
interface NavbarProps {}
export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo" />
        <Link to="/">Crypto</Link>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">На главную</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/currencies">Курс</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/">Баланс</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
