const express = require('express')
const companion = require('@uppy/companion')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path');
require('dotenv').config()


if (
  !process.env.SERVER_BASE_URL
) {
  console.log('Add SERVER_BASE_URL to your .env file.');

  process.exit();
}

const app = express();
app.set('view engine', 'ejs');

app.use("/dist", express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json())
app.use(session({
  secret: 'some-secret',
  resave: true,
  saveUninitialized: true
}))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept, *');
  next()
})

// Routes
app.get('/', (req, res) => {
  res.render(path.join(__dirname, "..", "client", "index"), {
    SERVER_BASE_URL: process.env.SERVER_BASE_URL
  });
})

// initialize uppy
const uppyOptions = {
  providerOptions: {
    drive: {
      key: process.env.DRIVE_KEY,
      secret: process.env.DRIVE_SECRET,
    },
    dropbox: {
      key: process.env.DROPBOX_KEY,
      secret: process.env.DROPBOX_SECRET
    }
  },
  server: {
    host: new URL(process.env.SERVER_BASE_URL).host, // the host including port e.g. localhost:3020
    protocol: new URL(process.env.SERVER_BASE_URL).protocol.replace(":","") // it should be http or https
  },
  filePath: '/home/eyaz/Documents/my-app-demo/temp',
  secret: 'some-secret',
  debug: true
}

const { app: companionApp } = companion.app(uppyOptions)

app.use(companionApp)

//companion.socket(app.listen(3020), uppyOptions)


