import Reducers from "./reducers/Reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

// import { batchedSubscribe } from 'redux-batched-subscribe'
// const debounceNotify = _.debounce(notify => notify());

export default configureStore({
    reducer:Reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    // enhancers: [batchedSubscribe(debounceNotify)],
  })
