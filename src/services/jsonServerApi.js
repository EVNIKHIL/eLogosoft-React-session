import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (page = 1) => {
        const from = (page - 1) * 10;
        return `albums?_start=${from}&_limit=10`;
      },
      providesTags: ["Albums"],
    }),
    createAlbum: builder.mutation({
      query: (title) => ({
        url: `albums`,
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["Albums"],
    }),
    updateAlbum: builder.mutation({
      query: ({ id, title }) => ({
        url: `albums/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Albums"],
    }),

    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Albums"],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useCreateAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = jsonServerApi;
