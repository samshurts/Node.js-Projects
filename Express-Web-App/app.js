const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send('Hello from my app');
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})