"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NotFoundQuestion =
/*#__PURE__*/
function () {
  function NotFoundQuestion(container) {
    _classCallCheck(this, NotFoundQuestion);

    this.container = container;
  }

  _createClass(NotFoundQuestion, [{
    key: "printMessageNotFoundQuestion",
    value: function printMessageNotFoundQuestion() {
      this.container.innerHTML = "<div class=\"alert alert-dismissible alert-primary mt-4\">\n                                      <h4 class=\"alert-heading\">Question not found</h4>\n                                      <p class=\"mb-0\">Aun no contamos con preguntas suficientes para esta categoria, por favor intente otra.</p>\n                                      <p class=\"mb-0\">Agregue sus propias preguntas <a href=\"https://opentdb.com/login.php\">AQUI</a></p>\n                                    </div>";
    }
  }]);

  return NotFoundQuestion;
}();

exports["default"] = NotFoundQuestion;