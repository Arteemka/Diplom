"use strict";

function form() {
  "use strict";
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
    function sendForm(e) {
      var form = e,
          statusMessage = document.createElement('div'),
          input = form.querySelectorAll('input'),
          textarea = form.querySelectorAll('textarea');
      statusMessage.classList.add('status-message');
      form.addEventListener('submit', function (event) {
       
        event.preventDefault();
         console.log(1);
  
        function postData() {
          return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest(); // создаем запрос к серверу
           
            request.open('POST', 'server.php'); // выставляем настройки запроса
  
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var formData = new FormData(form); //получаем все данные с формы
  
            request.send(formData); // отправляем данные на сервер
  
            
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
  
        
          postData().then(function () {
            return statusMessage.innerHTML = message.loading;
          }).then(function () {
            return statusMessage.innerHTML = message.success;
          }).catch(function () {
            return statusMessage.innerHTML = message.failure;
          }).then(clearInput);
          
          });
        
      
    }
  
    var form = document.querySelectorAll('form');
    form.forEach(function (e) {
     
        sendForm(e);

    });
  
  } 


module.exports = form;