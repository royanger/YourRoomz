import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlClient } from '../graphql'
import { ROOMS_QUERY } from '../graphql/room-queries'
// import gpl from 'graphql-tag'
import { request, gql, ClientError } from 'graphql-request'

// import { ClientError } from

export const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    // { baseUrl } ) =>
    // async ({ body }) => {
    try {
      // const results = await graphqlClient.query({ query, variables })
      const results = await request(baseUrl, body)
      console.log(results)
      return { data: results }
    } catch (error) {
      return {
        error: { status: error.response?.status, data: error.response?.data },
      }
    }
  }

export const api = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: process.env.REACT_APP_GRAPHQL_URI,
  }),
  endpoints: builder => ({
    getRooms: builder.query({
      query: userId => ({
        body: gql`
            query findRoomById($userId: String!) {
               findRoomsByUser(userId: ${userId}) {
                 id
                 name
                 wallColor
                 floorColor
                 roomtype {
                   id
                   name
                 }
                 cartitems {
                   id
                 }
                 furniture {
                   id
                 }
               }
             }
            `,
        //   variables: { userId },
      }),
      transformResponse: response => response.rooms,
    }),
  }),
})

export const { useGetRoomsQuery } = api
