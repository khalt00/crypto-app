import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../../api/api";
import Currencies from "../currencies/Currencies";
import News from "../news/News";
import millify from "millify";
import "./style.css";

function HomePage() {
  const { data, isFetching } = useGetCryptoQuery(10);
  console.log(data);
  if (isFetching) return "...Loading";
  const globalStats = data?.data?.stats;
  return (
    <>
      <div className="home__container">
        <div className="coin__stats">
          <div className="title">
            <h2>Global stats</h2>
          </div>
          <div className="row the__row">
            <div className="col col-sm-12 col-md-6 col-lg-6 ">
              <p className="stats__title">Total Cryptocurrencies:</p>
              <div className="stats__value">{millify(globalStats?.total)}</div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6">
              <p className="stats__title">Total Exchanges:</p>
              <div className="stats__value">
                {millify(globalStats.totalExchanges)}
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 ">
              <p className="stats__title">Total MarketCap:</p>
              <div className="stats__value">
                {millify(globalStats.totalMarketCap)}
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 ">
              <p className="stats__title">Total 24h Volume:</p>

              <div className="stats__value">
                {millify(globalStats.total24hVolume)}
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 ">
              <p className="stats__title">Total Cap:</p>
              <div className="stats__value">{globalStats.total}</div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 ">
              <p className="stats__title">Total Market:</p>
              <div className="stats__value">
                {millify(globalStats.totalMarkets)}
              </div>
            </div>
          </div>
        </div>
        <div className="top__currencies">
          <h1>Top 10 Currencies</h1>
          <div className="show__more">
            <Link to={"/Currencies"} style={{ textDecoration: "none" }}>
              <h2 style={{ color: "aqua" }}>Show more</h2>
            </Link>
          </div>
          <Currencies simplified />
        </div>

        <div className="top__news">
          <h1>Latest Crypto News</h1>
          <div className="show__more">
            <Link to={"/News"} style={{ textDecoration: "none" }}>
              <h2 style={{ color: "aqua" }}>Show more</h2>
            </Link>
          </div>
          <News simplified />
        </div>
      </div>

      {/* <Title level={2} className="heading">
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
      </Row> */}
      {/* <div className="home-heading-container">
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
          <Link to="/News">Show more</Link>
        </Title>
      </div>
      <News simplified /> */}
    </>
  );
}
export default HomePage;
