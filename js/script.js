function mudaCor() {

    const red = document.getElementById(`rangeRed`).value;
    const green = document.getElementById(`rangeGreen`).value;
    const blue = document.getElementById(`rangeBlue`).value;
    
    const numRed = document.getElementById(`numRed`);
    const numGreen = document.getElementById(`numGreen`);
    const numBlue = document.getElementById(`numBlue`);
    
    const quadradinho = document.querySelector(`.quadradinho`);
    
        numRed.value = red;
        numGreen.value = green;
        numBlue.value = blue;
    
        quadradinho.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }