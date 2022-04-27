import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../../api/api";
import { Col, Row, Statistic, Typography, Card } from "antd";
import { Link } from "react-router-dom";

import millify from "millify";

export default function Currencies() {
  const { data: cryptoList, isFetching } = useGetCryptoQuery();
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
  }, []);

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map(
          (currencies) => (
            console.log(currencies),
            (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currencies?.uuid}
              >
                <Link to={`/crypto/${currencies?.uuid}`}>
                  <Card
                    title={`${currencies?.rank} ${currencies?.name}`}
                    extra={
                      <img className="crypto-image" src={currencies?.iconUrl} />
                    }
                    hoverable
                  >
                    <p>Price:{currencies?.price}</p>
                    <p>Cap:{currencies?.marketCap}</p>
                    <p>Daily change {currencies?.change}</p>
                  </Card>
                </Link>
              </Col>
            )
          )
        )}
      </Row>
    </>
  );
}
