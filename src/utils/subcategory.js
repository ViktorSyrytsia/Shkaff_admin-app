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
                        name
                    }
                }
            }
        `
    });
    await client.resetStore();
};

const updateSubcategory = async ({id, name}) => {
    await client.mutate({
        variables: {
            id,
            name,
        },
        mutation: gql`
            mutation($id: ID!, $name: String!) {
                updateSubcategory(id: $id, name: $name) {
                    name                    
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
