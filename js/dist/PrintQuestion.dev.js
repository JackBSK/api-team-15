"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PrintButton = _interopRequireDefault(require("./PrintButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PrintQuestion =
/*#__PURE__*/
function () {
  function PrintQuestion() {
    _classCallCheck(this, PrintQuestion);
  }

  _createClass(PrintQuestion, [{
    key: "printCard",
    value: function printCard(question, arrayCorrectAnswers, tryAndId, questionQuantity) {
      var container = document.getElementsByClassName('container')[0];
      var card = this.returnCardHTML(question.dataQuestion, arrayCorrectAnswers, tryAndId);
      container.innerHTML += card;
      var submitButton = new _PrintButton["default"](container);

      if (arrayCorrectAnswers.length == questionQuantity) {
        submitButton.addSubmitButton(submitButton);
        submitButton.addDefaultAction(arrayCorrectAnswers, tryAndId); // prevent default and show results
      }
    }
  }, {
    key: "returnCardHTML",
    value: function returnCardHTML(q, arrayCorrectAnswers, tryAndId) {
      // crear un nuevo array con todas las preguntas
      var answers = [];
      arrayCorrectAnswers.push(q.correct_answer);
      answers.push.apply(answers, _toConsumableArray(q.incorrect_answers)); // mezclar respuestas para que la respuesta correcta no esté siempre en el mismo lugar

      var numRandom = Math.floor(Math.random() * answers.length);
      answers.splice(numRandom, 0, q.correct_answer);
      var card = "<div id=\"preguntas\" class=\"card m-2 \">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">".concat(q.category, "</h5>\n                          <h6 class=\"card-subtitle mb-2 text-muted\">").concat(q.question, "</h6>\n                          ").concat(this.returnAnswersHTML(answers, arrayCorrectAnswers, tryAndId), "\n                        </div>\n                      </div>\n                    ");
      return card;
    }
  }, {
    key: "returnAnswersHTML",
    value: function returnAnswersHTML(answers, arrayCorrectAnswers, tryAndId) {
      var answerHTML = '';
      answers.forEach(function (answer) {
        answerHTML += "<div class=\"form-check\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"question".concat(arrayCorrectAnswers.length, "\" id=\"answer").concat(1 + tryAndId[0] + answers.indexOf(answer), "\" value=").concat(1 + tryAndId[0] + answers.indexOf(answer), ">\n                            <label class=\"form-check-label\" for=\"answer").concat(1 + tryAndId[0] + answers.indexOf(answer), "\" >").concat(answer, "</label>\n                          </div>");
      });
      tryAndId[0] += answers.length;
      return answerHTML;
    }
  }]);

  return PrintQuestion;
}();

exports["default"] = PrintQuestion;