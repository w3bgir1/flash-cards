const Testcards = {
        title: "Spanish - English Vocabulary",
        flashcards: [
            {   
            
                question: "la escuela",
                answer: "school"
            },
            {   
                
                question: "la prueba",
                answer: "quiz"
            },
            {   
                
                question: "la materia",
                answer: "subject"
            },
            {   
                
                question: "ensenar",
                answer: "to teach"
            },
            {   
                
                question: "mirar",
                answer: "to watch, to look at"
            }
        ]
}
// State

let currentPile = Testcards
let currentQuestionIndex = getRandom(currentPile)
let id = 0


const pilesList = document.getElementById('pilesList')
const cardElement = document.getElementById('card')
const header = document.querySelector('h1')
const button1 = document.getElementById('flip')
const data = document.getElementById('inputData')
 


function getTitle () {
    header.innerText = `${currentPile.title}`
}

function clearCards () {
   cardElement.innerHTML = ``

}

function getRandom (arr) {
    return Math.floor(Math.random() * arr.flashcards.length)

}

function displayCard(card) {
    const markup = `
        <div><p> ${card}</p> </div>
    `
    cardElement.insertAdjacentHTML('beforeend', markup)

}

function flipCard(arr) {
    
    const text = card.innerText
    clearCards()
    
    if (text === arr.flashcards[currentQuestionIndex].answer) {
        clearCards()
        displayCard(arr.flashcards[currentQuestionIndex].question)
    } else {
        clearCards()
        displayCard(arr.flashcards[currentQuestionIndex].answer)
    }

}

function next(arr) {
    currentQuestionIndex = getRandom(arr)
    clearCards()
    displayCard(arr.flashcards[currentQuestionIndex].question)

}

function addDataInput () {
    data.style.display = "block";
    
}

function addDataToArray (event) {
    
        event.preventDefault()
    const newQuestion = document.getElementById('question').value
    const newAnswer = document.getElementById('answer').value
        const newCard = {
            question: newQuestion,
            answer: newAnswer
        }

        document.getElementById('form').reset()

        currentPile.flashcards.push(newCard)
        localStorage.setItem(id, JSON.stringify(currentPile))
        
}

const addNewPileForm = (event) => {
    event.preventDefault()
    document.querySelector('.main').style.display = "none"
    const markup = `
    <div id="addPile">
        <form id="pileForm" onsubmit="saveNewPile(event), addPilesList()">
            <input type="text" name="pileTitle" placeholder="Pile name">
            <div id="addQuestions">
                <input type="text" name="question" placeholder="Question">
                <input type="text" name="answer" placeholder="Answer">
            </div>
            <button type="submit" id="addMore">Add more questions</button>
            <button type="submit" id="submitPileButton">Submit</button>
        </form>
    </div>
    `
    document.querySelector('body').insertAdjacentHTML('beforeend', markup)
    document.getElementById('addMore').addEventListener('click', (event) => {
        event.preventDefault()
        const markupMore = `
        <input type="text" name="question" placeholder="Question">
        <input type="text" name="answer" placeholder="Answer">
        `
        document.getElementById('addQuestions').insertAdjacentHTML('beforeend', markupMore)
    })
}

const saveNewPile = (event) => {
    event.preventDefault()
    const form = document.getElementById('pileForm')
    const data = new FormData(form)
    const newTitle = data.get('pileTitle')
    const newQuestions = data.getAll('question')
    const newAnswers = data.getAll('answer')
    const newPile = {
        title: newTitle,
        flashcards: []
    }
    for (let i = 0; i < newQuestions.length; i++) {
        newPile.flashcards[i] = {
            question: newQuestions[i],
            answer: newAnswers[i]
        }
    }
    localStorage.setItem(localStorage.length, JSON.stringify(newPile))
    form.reset()
    form.insertAdjacentHTML('beforeend', '<p>Data is saved</p>')
    
}

const addPilesList = () => {
    pilesList.innerHTML=''
    pilesList.insertAdjacentHTML('beforeend', `<button onclick="addNewPileForm(event)">Add new pile of cards</button>`)
    if (localStorage.length === 0) {
        return
    }
    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.getItem(i);
        item = JSON.parse(item)
        const markupList = `
        <div><ul offset="${i}" onclick="activatePile(this)">${item.title}, has ${item.flashcards.length} flashcards<ion-icon name="close-circle-outline"></ion-icon></ul>
        </div>
        `
        pilesList.insertAdjacentHTML('beforeend', markupList)
    }
    
    
}

const activatePile = (identifier) => {
        id = identifier.getAttribute("offset")
        currentPile = localStorage.getItem(id);
        currentPile = JSON.parse(currentPile);
        getTitle()
        currentQuestionIndex = getRandom(currentPile)
        clearCards()
        displayCard(currentPile.flashcards[currentQuestionIndex].question)
}


displayCard(currentPile.flashcards[currentQuestionIndex].question)
getTitle()
addPilesList()










       




