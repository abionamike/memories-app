import mongoose from 'mongoose';

const memorySchema = new mongoose.Schema({
    creator: {
        required: true,
        type: String,
    }, 
    title: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Memory = mongoose.model('memory', memorySchema);

export default Memory;