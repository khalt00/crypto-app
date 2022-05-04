import React, { useState, useLayoutEffect } from "react";
import { useGetCryptoQuery } from "../../api/api";

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
            <Link
              to={`detail/${currency.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card" key={currency?.uuid}>
                <div className="card-body">
                  <img
                    className="card-img-right card__logo d-inline"
                    src={currency?.iconUrl}
                    alt="Card cap"
                  />
                  <h5 className="card-title d-inline px-2">{currency?.name}</h5>

                  <hr></hr>
                  <p className="card-text">Price: {millify(currency?.price)}</p>
                  <p className="card-text">
                    Market cap:{millify(currency?.marketCap)}
                  </p>
                  <p className="card-text">
                    Price change:{millify(currency?.change)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
