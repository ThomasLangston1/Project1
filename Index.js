const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
let newWinner = () => {
    const winner = buttons[math.floor(math.random() * buttons.length)];

    return winner.innerHTML;
};

[].forEach.call(buttons, (button) =>{
    button.addEventListener('click', (e) =>{
        const winner = newWinner();

        if(e.target.innerHTML === winner) {
            result.innerHTML = 'You win! Wanna play again?';
        } else {
            result.innerHTML = 'You lose! Wanna play again?';
        }
    })
})