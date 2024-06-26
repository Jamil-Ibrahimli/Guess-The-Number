'use strict'

let game = document.querySelector('.game');
let gameHeading = document.querySelector('.heading')

let randomNumber = Math.floor((Math.random() * 100) + 1);

let input = document.querySelector('.inp');

let result = document.querySelector('.result');

let btn = document.querySelector('.btn');

let total = document.querySelector('.total');

let arr = [];
console.log(randomNumber)

let count = 5;


function gameRules() {

    if (isNaN(input.value)) { alert('Please enter only Numbers !!!') }

    else if (input.value == 0) { alert('Should be numbers  between 1-100') }

    else {

        input.focus()
        total.innerHTML = ''

        let guesses = document.querySelector('.guesses').innerHTML = --count;

        arr.push(input.value)


        arr.map((i) => total.innerHTML += ` ${i}; `)


        if (input.value == randomNumber) {
            game.classList.remove('active2')
            game.classList.add('active')

            setTimeout(() => {

                result.innerHTML = 'Winner, winner, chicken dinner!';
                result.classList.add('result-active1')

            }, 100)


            btn.disabled = true

            setTimeout(() => {

                if (confirm(`You Win! Do you wanna play again?`) == true) {

                    location.reload()

                }

                else {
                    btn.disabled = true;

                }

            }, 3000)

        }

        else if (input.value > randomNumber - 5 && input.value < randomNumber) {

            result.innerHTML = '"So close! Just a bit bigger for the win!"'


        }

        else if (input.value < randomNumber + 5 && input.value > randomNumber) {

            result.innerHTML = '"Almost there! A bit less for the win!"'


        }


        else if (input.value < randomNumber) {

            result.innerHTML = '"Go more bigger! You are getting closer!"'

        }


        else if (input.value > randomNumber) {

            result.innerHTML = '"Think more smaller! You are on the right track."'
        }


        if (count < 1 && randomNumber != input.value) {

            game.classList.remove('active2')
            game.classList.add('active1')
            btn.disabled = true

            result.innerHTML = 'Losses make the wins sweeter!'
            result.classList.add('result-active2')

            setTimeout(() => {

                if (confirm(`YOU ARE LOST!! The secret number was ${randomNumber}\n  Do you wanna play again?`) == true) {

                    location.reload()
                 
                }

                else {
                    btn.disabled = true;

                }


            }, 3000)

        }

    }

    input.value = ""



}


btn.addEventListener('click', () => {

    setTimeout(() => { game.classList.add('active2') }, 200)

    setTimeout(() => { input.classList.add('input-active') },200)
    btn.disabled = true;
})

document.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {

        gameRules()

    }

})


