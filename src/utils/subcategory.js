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

const addSubcategory = async ({name, categoryId}) => {
    await client.mutate({
        variables: {
            name,
            categoryId
        },
        mutation: gql`
            mutation($name: String!, $categoryId: ID!) {
                addSubcategory(name: $name, categoryId: $categoryId) {
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

const updateSubcategory = async ({id, name, categoryId}) => {
    await client.mutate({
        variables: {
            id,
            name,
            categoryId
        },
        mutation: gql`
            mutation($id: ID!, $name: String!, $categoryId: ID!) {
                updateSubcategory(id: $id, name: $name, categoryId: $categoryId) {
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
