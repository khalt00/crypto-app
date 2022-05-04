import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../api/api";
import { newsApi } from "../api/newsapi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
