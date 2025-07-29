const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes')


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});