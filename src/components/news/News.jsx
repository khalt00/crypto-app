import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../../api/api";
import { useGetNewsQuery } from "../../api/newsapi";
import "./style.css";
export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("CryptoCurrency");
  const { data } = useGetCryptoQuery(100);
  const [cryptos, setCryptos] = useState([]);
  const [selected, setSelected] = useState();
  const { data: News, isFetching } = useGetNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 100,
  });
  const news = News?.value;
  const coins = data?.data?.coins;

  if (isFetching) return "...Loading";
  return (
    <>
      <div className="row">
        {!simplified && (
          <div className="news__first">
            <h1>News</h1>
            <select
              className="form-select news__select"
              onChange={(value) => console.log(value)}
            >
              <option defaultValue>Currency</option>
              {coins?.map((coin) => (
                <option>{coin?.name}</option>
              ))}
            </select>
          </div>
        )}
        {news?.map((news) => (
          <div className="col p-3 col-lg-3 col-md-4 col-sm-12">
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img-right d-inline news__logo"
                    src={news?.image?.thumbnail.contentUrl}
                    alt="Card cap"
                  />
                  <h5 className="card-title d-inline px-2">{news.name}</h5>
                  <hr></hr>
                  <p className="card-text">{news.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
