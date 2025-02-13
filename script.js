const messages = [
    "pookie???",
    "why the red one? :(",
    "did you mean to pick no? 🥺",
    "are you sure???",
    "like REALLY REALLY sure?????",
    "please don't say no, I'll be sad :(",
    "really really sad :<",
    "im sad now️ ☹️",
    "ig i'll stop asking then 😔😔",
    "i lied. please say yes",
    "boo boo... wtf.",
    "i cant believe you scrolled down just to say no :(",
    "fine. be like that >:(",
    "hehe",
    "boom :)",
    "YES ABSOLUTELY"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector('.gif');
    noButton.textContent = messages[messageIndex];

    if (messageIndex >= messages.length) {
        handleYesClick();
    } else {
        if (messageIndex === 1)
            gif.src = "https://media.tenor.com/pj-WvOM7W2oAAAAi/mocha-and.gif";
        else if (messages.length - 2 <= messageIndex)
            noButton.style.backgroundColor = '#4caf50';

        messageIndex = (messageIndex + 1);
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes.html";
}