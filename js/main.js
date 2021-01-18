import Question from './Question.js'
import PrintQuestion from './PrintQuestion.js'
import NotFoundQuestion from './NotFoundQuestion.js'

[...document.getElementsByClassName('form-control')].forEach(selected => {
    selected.addEventListener('change', () => getQuestions())
})

function getCategory() {
    const url = 'https://opentdb.com/api_category.php';

    fetch(url)
        .then(response => response.json())
        .then((categoryData) => printCategory(categoryData.trivia_categories));
}

function printCategory(categoryData) {
    const container = document.getElementById('questions-category');

    categoryData.forEach(element => {
        container.innerHTML += `<option value="${element.id}">${element.name}</option>`;
    });
}
getCategory();


function getQuestions() {
    /* MODIFICA LA URL DE ACUERDO A LAS CATEGORÍAS SELECCIONADAS */
    const questionsQuantity = document.getElementById('questions-number').value;
    const questionsCategory = document.getElementById('questions-category').value;
    const questionsDifficulty = document.getElementById('questions-difficulty').value;
    const questionsType = document.getElementById('questions-type').value;
    let url = `https://opentdb.com/api.php?amount=${questionsQuantity}`
    if (questionsCategory != 'any') url += `&category=${questionsCategory}`
    if (questionsDifficulty != 'any') url += `&difficulty=${questionsDifficulty}`
    if (questionsType != 'any') url += `&type=${questionsType}`

    /* LIMPIAR PREGUNTAS ANTERIORES */
    const container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';

    /* INICIALIZACIÓN DE VARIABLES GLOBALES QUE SERVIRÁN PARA MANEJAR LA CANT DE PREGUNTAS, INTENTO, NUM. PREGUNTA Y EL ARRAY DE PREGUNTAS CORRECTAS */
    let arrayCorrectAnswers = []
    let tryAndId = [0, 0]
        /* FETCH DE LA URL DINÁMICA */
    fetch(url)
        .then(response => response.json())
        /* EVALUAR SI LA API ESTÁ DEVOLVIENDO DATOS O NO */
        /*.then(data => { data.results.length ?
                            printCards(data.results)
                            :
                            NoQuestions()}
        )*/
        .then(data => {
            if (data.results.length != 0) {
                data.results.forEach(dataQuestion => {
                    const question = new Question(dataQuestion)
                    const printQuestions = new PrintQuestion()
                    printQuestions.printCard(question, arrayCorrectAnswers, tryAndId, questionsQuantity)
                })
            } else {
                const noQuestions = new NotFoundQuestion(container)
                noQuestions.printMessageNotFoundQuestion()
            }
        })
}