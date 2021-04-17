const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newwords = "";
let randwords = "";
let words = ['crow', 'duck', 'wolf', 'cow', 'rabbit', 'dog', 'jaipur', 'delhi', 'noida', 'goa', 'apple']

const createnewwords = () => {
    let random = Math.floor(Math.random() * words.length);
    let newtempwords = words[random];
    return newtempwords;
}
const scramblewords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * i + 1);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;

}

let button = document.getElementsByClassName(".btn");
btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "Check";

        guess.classList.toggle('hidden');
        newwords = createnewwords();
        randwords = scramblewords(newwords.split("")).join("");
        msg.innerHTML = `Arrange the Letters:  ${randwords}`;
    } else {
        let tempwords = guess.value;
        if (tempwords === newwords) {
            play = false;
            msg.innerHTML = " Its Correct";
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
        } else {
            msg.innerHTML = `Oops! Its Incorrect:  ${randwords}`;
            btn.innerHTML = "Try Again";

        }

    }
})