const resolvers = {
    Query: {
        hello: () => {
            return 'Hello Bogdi, From GraphQL!';
        },
        goodbye: () => {
            return 'Goodbye Bogdi, From GraphQL!';
        },
    },
    Mutation: {
        changeStuff: () => {
            return '';
        },
    },
};

export default resolvers;