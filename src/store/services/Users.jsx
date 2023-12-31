import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BACKEND_BASE_URL,
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
    updateUser: build.mutation({
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
    deleteUser: build.mutation({
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
