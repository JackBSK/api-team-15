"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PrintButton =
/*#__PURE__*/
function () {
  function PrintButton(container) {
    _classCallCheck(this, PrintButton);

    this.container = container;
  }

  _createClass(PrintButton, [{
    key: "addSubmitButton",
    value: function addSubmitButton(submitButton) {
      var button = "<div class=\"text-center p-2\">\n                          <button id=\"envio\" type=\"submit\" data-toggle=\"model\" class=\"btn btn-warning btn-lg m-2 \"/>submit</button>\n                        </div>";
      submitButton.container.innerHTML += button;
    }
  }, {
    key: "addDefaultAction",
    value: function addDefaultAction(arrayCorrectAnswers, tryAndId) {
      var _this = this;

      document.getElementById("envio").addEventListener("click", function (event) {
        event.preventDefault();

        _this.subbmitAnswers(arrayCorrectAnswers, tryAndId);
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.container.reset();
    }
  }, {
    key: "subbmitAnswers",
    value: function subbmitAnswers(arrayCorrectAnswers, tryAndId) {
      var contador = 0;
      var numberQuestion = 0;
      var finalScore = 0;
      arrayCorrectAnswers.forEach(function (correctAnswer) {
        numberQuestion++;
        var correct = correctAnswer;
        var answerChecked = document.querySelector("input[name=\"question".concat(numberQuestion, "\"]:checked"));

        if (answerChecked == null) {
          alert("Responda todas las preguntas");
        }

        var labelAnswerChecked = answerChecked.labels[0].innerHTML;

        if (labelAnswerChecked.trim() == correct) {
          contador++;
        }
      });
      finalScore = contador * 100 / arrayCorrectAnswers.length;
      this.showResults(contador, tryAndId, arrayCorrectAnswers, finalScore);
    }
  }, {
    key: "showResults",
    value: function showResults(corrects, tryAndId, arrayCorrectAnswers, finalScore) {
      var textCorrects = '';
      var container = document.getElementById('resultados');
      tryAndId[1]++;
      corrects == 1 ? textCorrects = "correcta" : textCorrects = "correctas";
      var results = "\n                        <p>Intento ".concat(tryAndId[1], " </p>\n                        <p>Score Final: ").concat(finalScore, " / 100.</p>\n                        <div class=\"progress m-2\">\n                          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ").concat(finalScore, "%;\"></div>\n                        </div>\n                        <p>\"Tienes ").concat(corrects, "/").concat(arrayCorrectAnswers.length, " respuestas ").concat(textCorrects, " \"</p>                \n                      \n                      ");
      /*this.container.innerHTML += results*/

      this.resetForm();
      this.addDefaultAction(arrayCorrectAnswers, tryAndId);
      container.innerHTML += results;
    }
  }]);

  return PrintButton;
}();

exports["default"] = PrintButton;