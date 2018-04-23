const express = require('express');
const socket = require('socket.io');
const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })
app.use(express.static('public'));
const server = app.listen('4000', () => {
    console.log('Server on port 4000');
});

const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('rock', (data) => {
        console.log(data);
        socket.broadcast.emit('rock', data);
    });
});