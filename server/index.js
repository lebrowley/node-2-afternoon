const express = require('express');
const app = express();
const SERVER_PORT = 3001;

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const ctrl = require('./controller/messages_controller');

app.post('/api/messages', ctrl.createMessage)

app.get('/api/messages', ctrl.readMessage)

app.put('/api/messages/:id', ctrl.updateMessage)

app.delete('/api/messages/:id', ctrl.deleteMessage)