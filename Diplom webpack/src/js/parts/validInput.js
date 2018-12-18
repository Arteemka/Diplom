"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.replace");

function validInput() {
  "use strict";

  var textArea = document.getElementsByTagName('textarea')[0],
      input = document.getElementsByTagName('input');

  var _loop = function _loop(i) {
    if (input[i].name == 'phone' && valid == true) {
      input[i].addEventListener('keyup', function () {
        input[i].value = input[i].value.replace(/[^\+0-9\(\) ]/ig, '');
      });
    } else if (input[i].name == 'name' && valid == true) {
      input[i].addEventListener('keyup', function () {
        input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
      });
    } else if (input[i].name == 'email' && valid == true) {
      input[i].addEventListener('keyup', function () {
        input[i].value = input[i].value.replace(/[^a-zA-Z0-9/.@.\.]/ig, '');
      });
    } else if (input[i].name == 'message' && valid == true) {
      input[i].addEventListener('keyup', function () {
        input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
      });
    }
  };

  for (var i = 0; i < input.length; i++) {
    _loop(i);
  }

  textArea.addEventListener('keyup', function () {
    textArea.value = textArea.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
  });
}

module.exports = validInput;