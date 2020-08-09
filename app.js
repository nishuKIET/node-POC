const express = require('express');
const result = require('./users.js');

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    result.getUser()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

app.get('/users/:id', (req, res) => {
    const urlId = req.params.id;
    result.getUserById(urlId)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    result.addNewUser(newUser)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

app.put('/users/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    const updatedUser = req.body;
    result.updateUser(urlId, updatedUser)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

app.delete('/users/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    result.deleteUser(urlId)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
    // res.send(JSON.stringify(result.deleteUser(urlId)));
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})