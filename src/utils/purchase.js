import {gql} from 'apollo-boost'

import client from "./index";

const getPurchases = () =>
client.query({
    query: gql`
        {
            getPurchases {
                id,
                user {
                    name
                    surname
                    email
                    phone
                }
                deliveryMethod {
                    method
                    city
                    postOffice
                    address
                }
                connectionmethod
                status
                createdAt
            }
        }
    `
});

const updatePurchaseStatus = async ({id, status}) => {
    await client.mutate({
        variables: {
            id,
            status
        },
        mutation: gql`
            mutation($id: ID!, $status: String) {
                updateCategory(id: $id, status: $status) {
                   status
                }
            }
        `
    });
    await client.resetStore();
};

const deletePurchase = async (id) => {
    await client.mutate({
        variables: {
            id
        },
        mutation: gql`
            mutation($id: ID!) {
                deletePurchase(id: $id) {
                    name
                }
            }
        `
    })
    await client.resetStore();
};

export {
    getPurchases,
    updatePurchaseStatus,
    deletePurchase,
};
