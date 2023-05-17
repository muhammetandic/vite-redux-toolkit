import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://antpos.onrender.com/api/",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("accessToken");
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),

  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Todos"],
    }),

    updateTodo: builder.mutation({
      query: (id, body) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
