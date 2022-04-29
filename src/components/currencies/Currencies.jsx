import React, { useEffect, useState, useLayoutEffect } from "react";
import { useGetCryptoQuery } from "../../api/api";
import { Col, Row, Card, Input } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import millify from "millify";

export default function Currencies({ simplified }) {
  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useLayoutEffect(() => {
    try {
      const coins = cryptoList?.data?.coins;
      const filteredData = coins?.filter((coin) =>
        coin?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [searchTerm]);
  if (isFetching) return "...Loading";
  return (
    <>
      {!simplified && (
        <div>
          <input
            className="search__input"
            placeholder="Search for coin"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className="row">
        {cryptos?.map((currency) => (
          <div className="col p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <img
                  class="card-img-right card__logo d-inline"
                  src={currency?.iconUrl}
                  alt="Card image cap"
                />
                <h5 class="card-title d-inline px-2">{currency?.name}</h5>

                <hr></hr>
                <p class="card-text">Price: {millify(currency?.price)}</p>
                <p class="card-text">
                  Market cap:{millify(currency?.marketCap)}
                </p>
                <p class="card-text">
                  Price change:{millify(currency?.change)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
