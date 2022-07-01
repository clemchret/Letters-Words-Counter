function countWords(){
    let text = document.getElementById('textArea').value;
    let number = text.split(' ').length;
    return number;
};

function countLetters(){
    let text = document.getElementById('textArea').value;
    let numberOnlyLetters = text.replace(/\W/g, ''); //Replace any non-word character
    let number = numberOnlyLetters.split('').length;
    return number;
};

function AllResultat(){
    let resultatWords = document.getElementById('resultatWords');
    resultatWords.innerHTML = (`Le nombre de mots est de ${countWords()}`);

    let resultatLetters = document.getElementById("resultatLetters");
    resultatLetters.innerHTML = (`le nombre de lettres est de ${countLetters()}`);
};

document.getElementById('btnTexte').addEventListener('click', AllResultat);