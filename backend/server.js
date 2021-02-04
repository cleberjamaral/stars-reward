const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const rewardsRouter = require('./routes/rewards');
const pupilsRouter = require('./routes/pupils');

app.use('/rewards', rewardsRouter);
app.use('/pupils', pupilsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});