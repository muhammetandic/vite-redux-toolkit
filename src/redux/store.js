import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from './postsSlice';
import { todoApi } from "../services/todos";
import { authApi } from "../services/auth";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // counter: counterReducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, authApi.middleware),
});
