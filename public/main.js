const socket = io.connect('http://localhost:4000');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const opponent = document.getElementById('opponent');

rock.addEventListener('click', () => {
    socket.emit('rock', { data: 'Rock' })
});

paper.addEventListener('click', () => {
    socket.emit('paper', { data: 'Paper' })
});

scissor.addEventListener('click', () => {
    socket.emit('scissor', { data: 'Scissor' })
});

//Listen for events
socket.on('rock', (data) => {
    console.log(data);
    opponent.innerHTML = data.data;
});

socket.on('scissor', (data) => {
    console.log(data);
    opponent.innerHTML = data.data;
});

socket.on('paper', (data) => {
    console.log(data);
    opponent.innerHTML = data.data;
});