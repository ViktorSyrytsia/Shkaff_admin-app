import { gql } from 'apollo-boost'

import client from "./index";

const getCategories = () =>
    client.query({
        query: gql`
            {
                getCategories {
                    id
                    name
                    image
                }
            }
        `
});

const addCategory = async (category) => {
    await client.mutate({
        variables: {
            category
        },
        mutation: gql`
            mutation($category: CategoryInput!) {
                addCategory(category: $category) {
                    name,
                    image
                }
            }
        `
    });
    await client.resetStore();
};

const updateCategory = async (payload) => {
    console.log(payload.category)
    await client.mutate({
        variables: {
            id: payload.id,
            category: payload.category
        },
        mutation: gql`
            mutation($id: ID!, $category: CategoryInput!) {
                updateCategory(id: $id, category: $category) {
                    name
                    image
                }
            }
        `
    });
    await client.resetStore();
};

const deleteCategory = async (id) => {
    await client.mutate({
        variables: {
            id
        },
        mutation: gql`
            mutation($id: ID!) {
                deleteCategory(id: $id) {
                    name
                }
            }
        `
    })
    await client.resetStore();
};

export {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
};
