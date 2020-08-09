import {gql} from 'apollo-boost'

import client from "./index";

const loginUser = async (user) => {
    const result = await client.mutate({
        mutation: gql`
            mutation($user: UserInput!) {
                loginUser(user: $user) {
                    name
                    id
                    role
                    token
                }
            }
        `,
        variables: { user }
    });
    const { data } = result;

    return data.loginUser;
};

const getUserByToken = async (token) => {
    console.log(token)
    const result = await client.query({
        query: gql`
            query {
                getUserByToken {
                    email
                    name
                    role
                }
            }
        `,
        context: {
            headers: {
                token
            }
        }
    });
    const { data } = result;

    return data.getUserByToken;
};

export {
    loginUser,
    getUserByToken
};
