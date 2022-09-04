//// val to range length
let length = document.querySelector('.range-length');
const lengthText = document.querySelector('.length-txt');

///for mobile
const asteriskEffect = () => {
    passtxt.textContent = '*'.repeat(length.value);
    copyButton.style.display = 'none';
};

length.addEventListener('touchmove', (e) => {
    lengthText.textContent = length.value;
    asteriskEffect();
});

length.addEventListener('mousemove', (e) => {
    lengthText.textContent = length.value;
    asteriskEffect();
});

////options ****
const opt = document.querySelector('.options');
let passtxt = document.querySelector('.passtxt');
opt.addEventListener('click', () => {
    asteriskEffect();
});


//// pass gen
const form = document.querySelector('.pass-form');
const digits = document.querySelector('.checkbox-digits');
const capitalLet = document.querySelector('.checkbox-capital-letters');
const symbols = document.querySelector('.checkbox-special-letters');
const copyButton = document.querySelector('.copyButton');
const sound = new Audio('Sounds/genSound.wav');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let lowList = 'abcdefghijklmnopqrstuvwxyz';
    let alloptions = lowList;
    if (digits.checked) {
        let numbersList = '01234567890';
        alloptions += alloptions.concat(numbersList);
    }
    if (capitalLet.checked) {
        let highList = 'ABCDEFGHIJKMNOLPQRSTUVWXYZ';
        alloptions = alloptions.concat(highList);
    }
    if (symbols.checked) {
        let SymList = '%^$@#?-&!*_+=<>~';
        alloptions = alloptions.concat(SymList);
    }

    let password = "";
    for(let i=0; i < length.value; i++) {
        let ran = Math.floor(Math.random() * alloptions.length);
        password += alloptions[ran];
    }
    scrollTo(0, 0);
    passtxt.textContent = password;
    copyButton.style.display = 'block';
    sound.play();
});

////copy to clipboard
const clickSound = new Audio('Sounds/clickSound.mp3');
const clipBoardButt = () => {
    clickSound.play();
    navigator.clipboard.writeText(passtxt.textContent);
    alert("Your Password has been copied to clipboard");
};

copyButton.addEventListener('click', clipBoardButt);

