import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../../api/api";
import { Col, Row, Card, Input } from "antd";
import { Link } from "react-router-dom";

import millify from "millify";

export default function Currencies({ simplified }) {
  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const coins = cryptoList?.data?.coins;
    const filteredData = coins?.filter((coin) =>
      coin?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
    // eslint-disable-next-line
  }, [searchTerm]);
  if (isFetching) return "...Loading";
  return (
    <>
      {!simplified && (
        <div>
          <Input
            placeholder="Search for coin"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currencies) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currencies?.uuid}
          >
            <Link to={`/detail/${currencies?.uuid}`}>
              <Card
                title={`${currencies?.rank} ${currencies?.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currencies?.iconUrl}
                    alt="coin pic"
                  />
                }
                hoverable
              >
                <p>Price:{millify(currencies?.price)} USD</p>
                <p>Cap:{millify(currencies?.marketCap)}</p>
                <p>Daily change {currencies?.change}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
