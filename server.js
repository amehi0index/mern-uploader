const express = require('express');
const connectDB = require('./database')
const path = require('path');
const cors = require('cors');
const fileRoutes = require('./routes/file-upload-route');
require('dotenv').config()

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

connectDB()

app.use(express.json({ extended: false }))     
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

//SERVE STATIC ASSETS IN PRODUCTION?
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {  
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) //
    })
}


app.listen(port, () => console.log(`Listening on port ${port}`));