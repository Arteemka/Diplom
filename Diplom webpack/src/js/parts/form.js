"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/web.dom.iterable");

function form() {
  "use strict";

  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.form'),
      inputForm = form.getElementsByTagName('input'),
      formone = document.querySelector('.form-one'),
      formtwo = document.querySelector('.form-two'),
      inputForm1 = formone.getElementsByTagName('input'),
      inputForm2 = formtwo.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  var inputFormm = function inputFormm(e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();
      e.appendChild(statusMessage);
      var request = new XMLHttpRequest();
      request.open('POST', 'mailer/smart.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      var formData = new FormData(e);
      var obj = {}; // создаем объект для формата JSON

      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      request.send(json);
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      });

      for (var i = 0; i < inputForm.length; i++) {
        inputForm[i].value = '';
      }

      for (var _i = 0; _i < inputForm1.length; _i++) {
        inputForm1[_i].value = '';
      }

      for (var _i2 = 0; _i2 < inputForm2.length; _i2++) {
        inputForm2[_i2].value = '';
      }
    });
  };

  inputFormm(form);
  inputFormm(formone);
  inputFormm(formtwo);
}

module.exports = form;