import { gql } from 'apollo-boost'

import client from "./index";

const getProducts = () =>
  client.query({
    query: gql`
            {
                getProducts {
                        id,
                        name,
                        category {
                          id,
                          name
                        },
                        subcategory {
                          id,
                          name
                        },
                        sizes {
                          xs
                          s
                          m
                          l
                          xl
                          xxl
                        },
                        description,
                        price,
                        images {
                          link
                        },
                        rating {
                          value
                        }
                        createdAt
                      }
            }
        `
  });

const addProduct = async (product) => {
  await client.mutate({
    variables: {
      product
    },
    mutation: gql`
            mutation($product: ProductInput!) {
                addProduct(product: $product) {
                        name,
                        category {
                          id,
                          name
                        },
                        subcategory {
                          id,
                          name
                        },
                        sizes {
                          xs
                          s
                          m
                          l
                          xl
                          xxl
                        },
                        description,
                        price,
                        images {
                          link
                        },
                        rating {
                          value
                        }
                }
            }
        `
  });
  await client.resetStore();
};

const updateProduct = async ({ id, product }) => {
  await client.mutate({
    variables: {
      id,
      product
    },
    mutation: gql`
            mutation($id: ID!, $product: ProductInput!) {
                updateProduct(id: $id, product: $product) {
                        name,
                        category {
                          id,
                          name
                        },
                        subcategory {
                          id,
                          name
                        },
                        sizes {
                          xs
                          s
                          m
                          l
                          xl
                          xxl
                        },
                        description,
                        price,
                        images {
                          link
                        },
                        rating {
                          value
                        }
                }
            }
        `
  });
  await client.resetStore();
};

const deleteProduct = async (id) => {
  await client.mutate({
    variables: {
      id
    },
    mutation: gql`
            mutation($id: ID!) {
                deleteProduct(id: $id) {
                    name
                }
            }
        `
  })
  await client.resetStore();
};

export {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
