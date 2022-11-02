const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//cors stops cross origin errors
app.use(cors());

mongoose.connect("mongodb+srv://paulv:realestate@cluster0.xllc2pd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB'))
    .catch(console.error);



const Contact = require('./models/Contact');
const { application } = require('express');

app.get('/contact', async (req, res) => {
    const contact = await Contact.find();
    res.json(contact);
})

app.post('/contact/new', (req, res) => {
    const contact = new Contact({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.day,
        time: req.body.time
    })
    contact.save();
    res.json(contact);
})


app.listen(3001, () => console.log('Server started on port 3001'))