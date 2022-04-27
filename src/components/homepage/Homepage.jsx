import { Col, Row, Statistic, Typography } from "antd";

import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../../api/api";
import Currencies from "../currencies/Currencies";
import News from "../news/News";

const { Title } = Typography;

function HomePage() {
  const { data, isFetching } = useGetCryptoQuery();
  if (isFetching) return "...Loading";
  const stats = data?.data?.stats;
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        {"Global stats"}
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crytocurrencies"
            value={stats?.total}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h"
            value={stats?.total24hVolume}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={stats?.totalExchanges}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total marketcap"
            value={stats?.totalMarketCap}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Martket"
            value={stats?.totalMarkets}
          ></Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Currencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/Currencies">Show more</Link>
        </Title>
      </div>
      <Currencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="news-title">
          News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/Currencies">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}
export default HomePage;
