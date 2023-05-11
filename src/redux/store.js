import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from './postsSlice';
import { todoApi } from '../services/todos';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    // counter: counterReducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
