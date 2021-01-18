"use strict";

var _Question = _interopRequireDefault(require("./Question.js"));

var _PrintQuestion = _interopRequireDefault(require("./PrintQuestion.js"));

var _NotFoundQuestion = _interopRequireDefault(require("./NotFoundQuestion.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_toConsumableArray(document.getElementsByClassName('form-control')).forEach(function (selected) {
  selected.addEventListener('change', function () {
    return getQuestions();
  });
});

function getCategory() {
  var url = 'https://opentdb.com/api_category.php';
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (categoryData) {
    return printCategory(categoryData.trivia_categories);
  });
}

function printCategory(categoryData) {
  var container = document.getElementById('questions-category');
  categoryData.forEach(function (element) {
    container.innerHTML += "<option value=\"".concat(element.id, "\">").concat(element.name, "</option>");
  });
}

getCategory();

function getQuestions() {
  /* MODIFICA LA URL DE ACUERDO A LAS CATEGORÍAS SELECCIONADAS */
  var questionsQuantity = document.getElementById('questions-number').value;
  var questionsCategory = document.getElementById('questions-category').value;
  var questionsDifficulty = document.getElementById('questions-difficulty').value;
  var questionsType = document.getElementById('questions-type').value;
  var url = "https://opentdb.com/api.php?amount=".concat(questionsQuantity);
  if (questionsCategory != 'any') url += "&category=".concat(questionsCategory);
  if (questionsDifficulty != 'any') url += "&difficulty=".concat(questionsDifficulty);
  if (questionsType != 'any') url += "&type=".concat(questionsType);
  /* LIMPIAR PREGUNTAS ANTERIORES */

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';
  /* INICIALIZACIÓN DE VARIABLES GLOBALES QUE SERVIRÁN PARA MANEJAR LA CANT DE PREGUNTAS, INTENTO, NUM. PREGUNTA Y EL ARRAY DE PREGUNTAS CORRECTAS */

  var arrayCorrectAnswers = [];
  var tryAndId = [0, 0];
  /* FETCH DE LA URL DINÁMICA */

  fetch(url).then(function (response) {
    return response.json();
  })
  /* EVALUAR SI LA API ESTÁ DEVOLVIENDO DATOS O NO */

  /*.then(data => { data.results.length ?
                      printCards(data.results)
                      :
                      NoQuestions()}
  )*/
  .then(function (data) {
    if (data.results.length != 0) {
      data.results.forEach(function (dataQuestion) {
        var question = new _Question["default"](dataQuestion);
        var printQuestions = new _PrintQuestion["default"]();
        printQuestions.printCard(question, arrayCorrectAnswers, tryAndId, questionsQuantity);
      });
    } else {
      var noQuestions = new _NotFoundQuestion["default"](container);
      noQuestions.printMessageNotFoundQuestion();
    }
  });
}