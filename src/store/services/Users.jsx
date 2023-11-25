import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65621395dcd355c083248933.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "Users", id })),
            { type: "Users", id: "LIST" },
          ]
          : [{ type: "Users", id: "LIST" }],
    }),
    addUser: build.mutation({
      query(body) {
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    updateTask: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `users/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    deleteTask: build.mutation({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
