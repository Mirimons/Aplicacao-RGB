const rangeRed = document.getElementById(`rangeRed`);
const rangeGreen = document.getElementById(`rangeGreen`);
const rangeBlue = document.getElementById(`rangeBlue`);

const numRed = document.getElementById(`numRed`);
const numGreen = document.getElementById(`numGreen`);
const numBlue = document.getElementById(`numBlue`);

const quadradinho = document.querySelector(`.quadradinho`);

function mudaCor() {
    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;

    numRed.value = red;
    numGreen.value = green;
    numBlue.value = blue;

    quadradinho.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}