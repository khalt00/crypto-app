import create from "@ant-design/icons/lib/components/IconFont";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "1261296db0msh880c71a5646648ep1cc2c3jsnc64b18b84626",
};

const createRequest = (url) => ({
  url,
  Headers: cryptoHeaders,
});
const key = process.env.REACT_APP_RAPIDAPI_KEY;
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) =>
        createRequest(`/coins?rapidapi-key=${key}&limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges?rapidapi-key=${key}`),
    }),
    getCryptoDetail: builder.query({
      query: (id) => createRequest(`/coin/${id}?rapidapi-key=${key}`),
    }),
  }),
});
export const {
  useGetCryptoQuery,
  useGetExchangesQuery,
  useGetCryptoDetailQuery,
} = cryptoApi;
