import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const clientSchema = new Schema({
    username: {
        type: String
    }
});
clientSchema.virtual('id').get(function(){
    return this._id;
});
const ClientModel = mongoose.model('ClientModel', clientSchema);
export default ClientModel;
