const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
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

require('./server/config/database');

app
    .use(parser.urlencoded({extended: true}))
    .use(parser.json())
    .use(session(sessionConfig))
    .use(cookieParser('ldahflsdnfsdlncasld/N/VS/LS/VNSDVJL/SDNVDLSJBVLDJSCBNDJDS/D'))
    .use(cors())
    .use(express.static(path.join(__dirname, 'dist')))
    .use('/api', require('./server/routes'))
    .use(require('./server/routes/catch-all.routes'))
    .listen(port, () => console.log(`Port is on ${port}`));
