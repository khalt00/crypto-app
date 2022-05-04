import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const key = process.env.REACT_APP_RAPIDAPI_KEY;
const baseUrl = process.env.REACT_APP_NEWS_API_URL;
const createRequest = (url) => ({
  url,
  Headers: newsHeader,
});

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?rapidapi-key=${key}&q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
