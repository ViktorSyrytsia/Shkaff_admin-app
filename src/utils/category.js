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

const getCategory = ({id}) =>
    client.query({
        variables: {id},
        query: gql`
            query($id: ID!) {
                getCategory(id: $id) {
                    id
                    name
                    image
                }
            }
        `
});

const addCategory = async ({name, image}) => {
    await client.mutate({
        variables: {
            name,
            image
        },
        mutation: gql`
            mutation($name: String!, $image: String!) {
                addCategory(name: $name, image: $image) {
                    name,
                    image
                }
            }
        `
    });
    await client.resetStore();
};

const updateCategory = async ({id, name, image}) => {
    await client.mutate({
        variables: {
            id,
            name,
            image
        },
        mutation: gql`
            mutation($id: ID!, $name: String!, $image: String!) {
                updateCategory(id: $id, name: $name, image: $image) {
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
    });
    await client.resetStore();
};

export {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
};
