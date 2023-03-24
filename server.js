const express = require('express');
const app = express();
const port = 8001;
app.listen(port, ()=> console.log(`The server is running on port ${port}`));
app.use(express.static('public'));

app.post('/api', (req,res) => {
    console.log(req.body);
    res.send('Received POST request!');
});