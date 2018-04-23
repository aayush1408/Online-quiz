const socket = io.connect('http://localhost:4000');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const opponent = document.getElementById('opponent');
const yourself = document.getElementById('yourself');
const winner = document.getElementById('result');

//Send events
rock.addEventListener('click', () => {
    socket.emit('rock', { data: 'Rock' });
    yourself.innerHTML = 'Rock';
});

paper.addEventListener('click', () => {
    socket.emit('paper', { data: 'Paper' });
    yourself.innerHTML = 'Paper';
});

scissor.addEventListener('click', () => {
    socket.emit('scissor', { data: 'Scissor' });
    yourself.innerHTML = 'Scissor';
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

//Finding the winner
setTimeout(
    function () {
        if (opponent.innerHTML !== '' && yourself.innerHTML !== '') {
            opponent.style.visibility = 'visible';
            (function () {
                let opponentValue = opponent.innerHTML;
                let yourChoice = yourself.innerHTML;
                console.log(yourChoice);
                if (opponentValue === yourChoice) {
                    winner.innerHTML = 'No winner';
                }
                if ((opponentValue == 'Scissor' && yourChoice == 'Paper') || (opponentValue == 'Paper' && yourChoice == 'Rock') || (opponentValue == 'Rock' && yourChoice == 'Scissor')) {
                    winner.innerHTML = 'You Lost';
                }
                if ((opponentValue == 'Paper' && yourChoice == 'Scissor') || (opponentValue == 'Rock' && yourChoice == 'Paper') || (opponentValue == 'Scissor' && yourChoice == 'Rock')) {
                    winner.innerHTML = 'You won';
                }
            })();
        }
        else {
            alert('Someone timed out');
        }
    }, 11000);