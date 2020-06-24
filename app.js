const express = require('express');
const result = require('./users.js');

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(JSON.stringify(result.getUser()));
});

app.get('/users/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    res.send(JSON.stringify(result.getUserById(urlId)));
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    res.send(JSON.stringify(result.addNewUser(newUser)));
});

app.put('/users/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    const updatedUser = req.body;
    res.send(JSON.stringify(result.updateUser(urlId, updatedUser)));
});

app.delete('/users/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    res.send(JSON.stringify(result.deleteUser(urlId)));
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})