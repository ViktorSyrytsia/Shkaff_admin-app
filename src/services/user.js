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
    console.log(result)

    return data.loginUser;
};

export {
    loginUser,
};
