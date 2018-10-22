const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = {
    saveUninitialized: true,
    secret: 'sessionSecret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 30000
    }
}


app
    .use(parser.json())
    .use(session(sessionConfig))
    .use(cookieParser('ldahflsdnfsdlncasld/N/VS/LS/VNSDVJL/SDNVDLSJBVLDJSCBNDJDS/D'))
    .use(cors());

app.get('/', (req,res) => {
    Task.find({})
        .then(tasks => res.json(tasks))
        .catch(console.log('Error in find'));
});
app.get('/:id', (req,res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(console.log('Error in findbyid'));
});
app.post('/new', (req, res) => {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(console.log('Error in new'))
});
app.put('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.book_id, { $set: req.body }, { new: true })
        .then(task => res.json(task))
        .catch(console.log('Error in update'))
});
app.delete('/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id)
        .then(task => res.json(task))
        .catch(console.log('Error in delete'))
});


app
    .listen(port, () => console.log(`Port is on ${port}`));
