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

        if (messageIndex === 5)
            gif.src = "https://media.tenor.com/Enb26_N_bbIAAAAm/sad-cry.webp"

        if (messageIndex === 7)
            gif.src = "https://media.tenor.com/cxwmE_VPWoMAAAAm/peachcat-cat.webp"

        if (messageIndex === 9)
            gif.src = "https://media.tenor.com/qb003OCeBzQAAAAm/peach-goma-peach-and-goma.webp"

        if (messageIndex === 13)
            gif.src = "https://media.tenor.com/Msun0vVLS_4AAAAm/al1stiker-ilovemei.webp"

        messageIndex = (messageIndex + 1);
        if (messageIndex <= 14) {
            const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize * 1.4}px`;
        }
    }
}

function handleYesClick() {
    window.location.href = "yes.html";
}