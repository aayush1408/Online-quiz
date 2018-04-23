const socket = io.connect('http://localhost:4000');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click', () => {
    socket.emit('rock', { data: 'Rock' })
});

//Listen for events

socket.on('rock', (data) => {
    console.log(data);
});
