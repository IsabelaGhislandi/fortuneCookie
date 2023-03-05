const fortuneText = [
    'Não é uma vida ruim, é apenas um dia ruim, lembre-se disso',
    'Comece onde você está, use o que você tem e faça o que você pode.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Você nunca chegará ao seu destino se você parar para espantar cada cão que vier latir para você.',
    'Quanto maior a dificuldade maior é o mérito de superá-la.',
]

const screen1 = document.querySelector(".closedCookie")
const screen2 = document.querySelector(".openedCookie")
const cookie = document.querySelector("#btnCookie")
const randomizedPhrase = document.querySelector(".fortunePhrase")
const randomizeText = document.querySelector(".phraseText")
const btnReset = document.querySelector("#btnReset")


cookie.addEventListener('click', handleClick)
cookie.addEventListener('dblclick', stopAll)

function stopAll() {
    alert("Apenas 1 clique no biscoito")
    document.location.reload(true);
}

btnReset.addEventListener('click', handleReClick)

function handleClick(e){
    e.preventDefault()

    let hexString = "0123456789abcdef";
    let randomColor = () => {
        let hexCode = "#";
        for(let i = 0; i < 6; i++) {
            hexCode += hexString[Math.floor(Math.random() * hexString.length)];
        }
        return hexCode;
    }

    let generateGrad = () => {
        let colorOne = randomColor();
        let colorTwo = randomColor();
        let angle = Math.floor(Math.random() * 360);
        let outputColor = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
        document.body.style.background = outputColor
    }
    
    setTimeout(() => {    
        toggle()
        randomizedPhrase.classList.add("fwd-bottom")
        generateGrad();
      }, "500")
 
    randomize()
}



function handleReClick(){

    toggle()
    cookie.classList.remove("shake") 
    let outputColor = `linear-gradient(45deg, #190361, #BB00FF)`;
    document.body.style.background = outputColor
}

function randomize() {
    let phrase = Math.floor(Math.random() * fortuneText.length);
    document.querySelector(".phraseText").innerText = fortuneText[phrase]
}

function toggle() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}