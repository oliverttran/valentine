const dialogue = document.querySelector(".dialogue");
const buttonOne = document.querySelector('.button-1');
const buttonTwo = document.querySelector('.button-2');
const gif = document.querySelector('.gif');

let index = 0;
let liarCount = 1;
let tempTrue = false;

function handleOptionTwo() {
    refreshDialogue(false);
}

function handleOptionOne() {
    refreshDialogue(true);
}

function refreshDialogue(b) {
    switch (index) {
        case 0:
            if(b === true || tempTrue) {
                tempTrue = false;
                dialogue.textContent = "How'd the test go :)"
                buttonOne.textContent = "Perfect 100 😎"
                buttonTwo.textContent = "I did terrible..."
                index++;
            } else {
                dialogue.textContent = "Hey that's mean :("
                buttonOne.textContent = "I'm sorry. Please come back!"
                buttonTwo.textContent = "I'm sorry. Please come back!"
                gif.src = "https://media.tenor.com/t7yxNky6vVoAAAAj/sebusun-mocha.gif"
                index = 100
            }
            break;
        case 100:
            dialogue.textContent = "YAY OKAYY :>"
            buttonOne.textContent = "..."
            buttonTwo.textContent = "..."
            gif.src = "https://media.tenor.com/696wTG8M8hoAAAAj/tkthao219-peach.gif"
            index = 0
            tempTrue = true;
            break;

        case 1:
            if(b === true) {
                dialogue.textContent = "THATS MY POOKIE! I alr knew you aced it :)"
                buttonOne.textContent = "hehe"
                buttonTwo.textContent = "teehee"
                gif.src = "https://media.tenor.com/ASn97P78H1MAAAAj/peach-cat-goma.gif"
                index++
            } else {
                dialogue.textContent = "...terribl-y GREAT! YAYYY"
                buttonOne.textContent = "..."
                buttonTwo.textContent = "..."
                gif.src = "https://media.tenor.com/ASn97P78H1MAAAAj/peach-cat-goma.gif"
                index = 101
            }
            break;
        case 101:
            index = 1;
            refreshDialogue(true)
            break;

        case 2:
            dialogue.textContent = "so uhh... you busy on the 14th? 👀👀"
            buttonOne.textContent = "i'm as free as can be :)"
            buttonTwo.textContent = "nope. not for you"
            gif.src = "https://media.tenor.com/O9je1FH0zQ0AAAAj/peach-goma-peach-and-goma.gif"
            index++
            break;

        case 3:
            if(b === true) {
                window.location.href = "ask.html";
            } else {
                if(liarCount < 2)
                    dialogue.textContent = "liar >:C"
                else
                    dialogue.textContent = liarCount + "x liar >:C"
                buttonOne.textContent = "you're right, I'll answer honestly now 😔"
                buttonTwo.textContent = "nuh uh"
                gif.src = "https://media.tenor.com/0nb_g8Y5NzQAAAAj/milk-and-mocha-cute.gif"
                index = 103
                liarCount++
            }
            break;
        case 103:
            if(b === true) {
                index = 2
                refreshDialogue(true)
            } else {
                index = 3
                refreshDialogue(false)
            }
            break;
    }
}