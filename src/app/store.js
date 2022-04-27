import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../api/api";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
