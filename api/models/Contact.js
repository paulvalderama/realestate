const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactInfoSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: new Date(Date.now())
    }
})

const Contact = mongoose.model("Contact", ContactInfoSchema);

module.exports = Contact;