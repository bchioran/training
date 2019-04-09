import ClientModel from '../models/ClientModel';
import mongoose from "mongoose";

const resolvers = {
    Query: {
        create: (root, params) => {
            const newClient = new ClientModel(params);
            const client = newClient.save();
            if (!client) {
                throw new Error('Error')
            }
            return client;
        },
        get: (root, params) => {
            const client = ClientModel.findById(params.id);
            if (!client) {
                throw new Error('Error')
            }
            return client;
        },
        update: (root, params) => {
            const client = ClientModel.findOneAndUpdate({_id: params.id}, params);
            if (!client) {
                throw new Error('Error')
            }
            return client;
        },
        delete: (root, params) => {
            const client = ClientModel.remove({_id: params.id});
            if (!client) {
                throw new Error('Error')
            }
            return client;

        },
        list: () => {
            return ClientModel.find();
        }
    },
    Mutation: {
        changeStuff: () => {
            return '';
        },
    },
};

export default resolvers;