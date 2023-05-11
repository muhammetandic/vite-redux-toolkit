import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch(URL, { method: 'GET' });
  return await response.json();
});

export const addPost = createAsyncThunk('posts/addPost', async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        return { ...state, status: 'loading' };
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        return { ...state, status: 'success', posts: action.payload };
      })
      .addCase(getPosts.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.error.message };
      })

      .addCase(addPost.pending, (state, action) => {
        return { ...state, status: 'loading' };
      })
      .addCase(addPost.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'success',
          posts: [...state.posts, action.payload],
        };
      })
      .addCase(addPost.rejected, (state, action) => {
        return { ...state, status: 'error', error: action.error.message };
      });
  },
});

export const getAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
