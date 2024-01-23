const generateNumber = document.querySelector('.generateNumber')

function generatingNumber() {

const min = Math.ceil(document.querySelector('.input-min').value)
const max = Math.floor(document.querySelector('.input-max').value)
const numberGenerate = document.querySelector('.number-generate')

const result = Math.floor(Math.random() * (max - min + 1)) + min;

if (max > min) {
    numberGenerate.innerHTML = result
} else {
    alert('O valor MÁXIMO tem que ser MAIOR que o valor MINIMO')
}

}

generateNumber.addEventListener('click', generatingNumber)