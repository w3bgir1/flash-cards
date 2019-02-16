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
const flashcards = Testcards.flashcards
let currentQuestionIndex = getRandom(flashcards)

function getTitle () {
    document.querySelector('h1').innerText = `${Testcards.title}`
}

function clearCards () {
    document.getElementById("card").innerHTML = ``

}

function getRandom (arr) {
    return Math.floor(Math.random() * arr.length)

}

function displayCard(card) {
    const markup = `
        <div><p> ${card}</p> </div>
    `
    document.getElementById("card").insertAdjacentHTML('beforeend', markup)

}

function flipCard(arr) {
    const button1 = document.getElementById('flip')
    const text = document.getElementById('card').innerText
    clearCards()
    
    if (text === arr.answer) {
        clearCards()
        displayCard(arr.question)
    } else {
        clearCards()
        displayCard(arr.answer)
    }

}

function next(arr) {
    currentQuestionIndex = getRandom(arr)
    clearCards()
    displayCard(arr[currentQuestionIndex].question)

}

function addDataInput () {
    const data = document.getElementById('inputData')
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

        flashcards.push(newCard)
        
}

displayCard(flashcards[currentQuestionIndex].question)
getTitle()



    






       




