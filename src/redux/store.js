import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from './postsSlice';
import { todosApi } from "../services/todos";
import { authApi } from "../services/auth";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // counter: counterReducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware, authApi.middleware),
});
