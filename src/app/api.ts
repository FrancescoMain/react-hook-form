import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Nation } from "./type";

export const nationsApi = createApi({
  reducerPath: "nationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    nations: builder.query<Nation[], void>({
      query: () => "all",
    }),
  }),
});

export const { useNationsQuery } = nationsApi;
