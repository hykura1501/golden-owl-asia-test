const express = require('express');
const db = require('./src/db/models');
const app = express();
require('dotenv').config();

app.get('/', async (req, res) => {
    const record = await db.scores.findOne({ where: { number: '01000001' } });
    return res.json({ message: 'Hello World', record: record.toJSON() });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
