"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/web.dom.iterable");

function forms() {
  function sendForm(e) {
    var form = e,
        statusMessage = document.createElement('div'),
        input = form.querySelectorAll('input'),
        textarea = form.querySelectorAll('textarea');
    statusMessage.classList.add('status-message');
    form.addEventListener('submit', function (event) {
      var innerCode;
      event.preventDefault();
      var tel = form.querySelector('input[name=phone]');

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest(); // создаем запрос к серверу

          request.open('POST', 'server.php'); // выставляем настройки запроса

          request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          var formData = new FormData(form); //получаем все данные с формы

          request.send(formData); // отправляем данные на сервер

          innerCode = form.innerHTML;
          form.innerHTML = '';
          form.appendChild(statusMessage);
          request.addEventListener('readystatechange', function () {
            // смотрим состояние запроса
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState == 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }

        for (var _i = 0; _i < textarea.length; _i++) {
          textarea[_i].value = '';
        }
      }

      function closeForm(status) {
        statusMessage.innerHTML = status;
        var timeLog = 0;
        var closeFormTimer = setInterval(function () {
          timeLog = timeLog + 20;

          if (timeLog == 2000) {
            form.innerHTML = innerCode;
            clearInput();

            if (form.className.indexOf('popup') != -1) {
              var popupClass = document.querySelector('.' + form.className.slice(0, -5));
              popupClass.style.display = 'none';
              document.querySelector('body').style.overflow = '';
            }

            clearInterval(closeFormTimer);
          }
        }, 20);
      }

      if (tel.value.length != 17) {
        tel.style.border = '2px solid red';
      } else {
        tel.style.border = '';
        postData().then(function () {
          closeForm('<p>Идет отправка</p>');
        }).then(function () {
          closeForm('<p>Ваш запрос отправлен.<br>Наши менеджеры свжутся с вами.</p>');
        }).catch(function () {
          closeForm('<p>Произошла ошибка</p>');
        });
      }
    });
  }

  var form = document.querySelectorAll('form');
  form.forEach(function (e) {
    if (!e.classList.contains('calculator-form')) {
      sendForm(e);
    }
  });
}


module.exports = form;