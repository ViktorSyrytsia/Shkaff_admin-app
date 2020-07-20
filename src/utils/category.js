const getAllNews = () =>
client.query({
    query: gql`
        {
            getAllNews {
                _id
                author {
                    name {
                        lang
                        value
                    }
                    image {
                        small
                    }
                }
                title {
                    lang
                    value
                }
            }
        }
    `
});

const getNewsItemById = (id) =>
client.query({
    variables: { id },
    query: gql`
        query($id: ID!) {
            getNewsById(id: $id) {
                title {
                    lang
                    value
                }
                text {
                    lang
                    value
                }
                images {
                    primary {
                        large
                    }
                    additional {
                        large
                    }
                }
                video
                author {
                    name {
                        lang
                        value
                    }
                    image {
                        large
                    }
                }
                date
            }
        }
    `
});

const deleteNewsItem = async (id) => {
    await client.mutate({
        variables: { id },
        mutation: gql`
            mutation($id: ID!) {
                deleteNews(id: $id) {
                    author {
                        name {
                            value
                        }
                    }
                }
            }
        `
    });
    client.resetStore();
};

const createNewsItem = async (news) => {
    await client.mutate({
        mutation: gql`
            mutation($news: NewsInput!) {
                addNews(news: $news) {
                    video
                }
            }
        `,
        variables: { news }
    });
    client.resetStore();
};

const updateNewsItem = (id, news) => {
    client.mutate({
        variables: {
            id,
            news
        },
        mutation: gql`
            mutation($id: ID!, $news: NewsInput!) {
                updateNews(id: $id, news: $news) {
                    video
                }
            }
        `
    });
};

export {
    getAllNews,
    deleteNewsItem,
    getNewsItemById,
    createNewsItem,
    updateNewsItem
};
