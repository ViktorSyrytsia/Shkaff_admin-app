import { gql } from 'apollo-boost';

import client from "./index";

const getSubcategories = () =>
    client.query({
        query: gql`
            {
                getSubcategories {
                    id
                    name
                    category {
                        id
                        name
                    }
                }
            }
        `
});

const addSubcategory = async (subcategory) => {
    await client.mutate({
        variables: {
            subcategory
        },
        mutation: gql`
            mutation($subcategory: SubcategoryInput!) {
                addSubcategory(subcategory: $subcategory) {
                    name,
                    category {
                        id
                        name
                    }
                }
            }
        `
    });
    await client.resetStore();
};

const updateSubcategory = async (payload) => {
    await client.mutate({
        variables: {
            id: payload.id,
            subcategory: payload.subcategory
        },
        mutation: gql`
            mutation($id: ID!, $subcategory: SubcategoryInput!) {
                updateSubcategory(id: $id, subcategory: $subcategory) {
                    name
                    category {
                        id
                        name
                    }
                }
            }
        `
    });
    await client.resetStore();
};

const deleteSubcategory = async (id) => {
   await client.mutate({
        variables: {
            id
        },
        mutation: gql`
            mutation($id: ID!) {
                deleteSubcategory(id: $id) {
                    name
                }
            }
        `
    });
    await client.resetStore();
};

export {
    getSubcategories,
    addSubcategory,
    updateSubcategory,
    deleteSubcategory
};
