import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = 'http://localhost:5000/api/v1/to-do';
const userApi = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        }
    }),
    endpoints: (builders) => ({
        registerUser: builders.mutation({
            query: ({ name, email, password }) => ({
                url: `/register`,
                method: 'POST',
                body: {
                    name,
                    email,
                    password
                }
            }),
            // invalidate tags for force refetch of the data from the server
        }),

        loginUser: builders.query({
            query: ({ email, password }) => ({
                url: `/login`,
                method: 'POST',
                body: {
                    email,
                    password
                }
            }),
            // invalidate 
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserQuery
} = userApi;

export default userApi;