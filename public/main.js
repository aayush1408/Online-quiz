const socket = io.connect('http://localhost:4000');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const opponent = document.getElementById('opponent');
const yourself = document.getElementById('yourself');
const winner = document.getElementById('result');
var yourChoice = '';

rock.addEventListener('click', () => {
    socket.emit('rock', { data: 'Rock' });
    yourself.innerHTML = 'You : Rock';
    yourChoice = 'Rock'
});

paper.addEventListener('click', () => {
    socket.emit('paper', { data: 'Paper' });
    yourself.innerHTML = 'You : Paper';
    yourChoice = 'Paper'
});

scissor.addEventListener('click', () => {
    socket.emit('scissor', { data: 'Scissor' });
    yourself.innerHTML = 'You : Scissor';
});

//Listen for events
socket.on('rock', (data) => {
    console.log(data);
    opponent.innerHTML = 'Opponent : ' + data.data;
    result(data.data);
});

socket.on('scissor', (data) => {
    console.log(data);
    opponent.innerHTML = 'Opponent : ' + data.data;
    result(data.data);
});

socket.on('paper', (data) => {
    console.log(data);
    opponent.innerHTML = 'Opponent : ' + data.data;
    result(data.data);
});

function result(opponentValue) {
    console.log(opponentValue);
    console.log(yourChoice);
    if (opponentValue === yourChoice) {
        winner.innerHTML = 'No winner';
    }
    if ((opponentValue == 'Scissor' && yourChoice == 'Paper') || (opponentValue == 'Paper' && yourChoice == 'Rock') || (opponentValue == 'Rock' && yourChoice == 'Scissor')) {
        winener.innerHTML = 'You Lost';
    }
    if ((opponentValue == 'Paper' && yourChoice == 'Scissor') || (opponentValue == 'Rock' && yourChoice == 'Paper') || (opponentValue == 'Scissor' && yourChoice == 'Rock')) {
        winner.innerHTML = 'You won';
    }
}