const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS)

app.post('/calculate', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/calculate', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error communicating with Python API." });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
