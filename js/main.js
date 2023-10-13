const ingressos = []

function higlightCard(selector){
    let element = document.querySelector(selector)
    element.classList.toggle("card-higlight")
}

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {
        let ingresso1 = document.getElementById('quinta')
        let ingresso2 = document.getElementById('sexta')
        let ingresso3 = document.getElementById('sabado')
        let ingresso4 = document.getElementById('domingo')

        let code = event.code
        if(code == 'Digit1') {
            ingresso1.classList.toggle('card-higlight')
            ingresso2.classList.remove('card-higlight')
            ingresso3.classList.remove('card-higlight')
            ingresso4.classList.remove('card-higlight')
        } 
        if(code == 'Digit2') {
            ingresso1.classList.remove('card-higlight')
            ingresso2.classList.toggle('card-higlight')
            ingresso3.classList.remove('card-higlight')
            ingresso4.classList.remove('card-higlight')
        }
        if(code == 'Digit3') {
            ingresso1.classList.remove('card-higlight')
            ingresso2.classList.remove('card-higlight')
            ingresso3.classList.toggle('card-higlight')
            ingresso4.classList.remove('card-higlight') 
        }
        if(code == 'Digit4') {
            ingresso1.classList.remove('card-higlight')
            ingresso2.classList.remove('card-higlight')
            ingresso3.classList.remove('card-higlight')
            ingresso4.classList.toggle('card-higlight')
        }
    },false)
}

function selectCard(selector) {
    let element = document.querySelector(selector)
    element.classList.toggle('card-selected')
    if(ingressos.includes(selector)){
            ingressos.pop(selector)
        } else {
            ingressos.push(selector)
        }
}

function showSelectedCards(){
    if(ingressos.length > 0) {
        alert('Ingressos Selecionados:' + ingressos)
    }
}

addKeyboardEventListeners()
/*
function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {
        let nome = event.key
        let code = event.code

        alert(`Tecla pressionada ${nome} \r\n Key code: ${code}`)
    },false)
}

checkKeyboardCode()
*/


