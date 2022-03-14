const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

app.get('/info', (req, res) => {
    res.send({
        name: 'backend',
        version: '1.0.0'
    });
});

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM demo.users ORDER BY id ASC', (error, results) => {
        if (error) {
            console.error(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});
