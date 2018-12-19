"use strict";

function button() {
  "use strict";

  var buttonDesign = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      gift = document.getElementsByClassName('fixed-gift wow pulse infinite')[0],
      popupGift = document.querySelector('.popup-gift'),
      buttonConsultation = document.querySelectorAll('.button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation'),
      close = document.querySelectorAll('.popup-close'),
      elements = document.getElementsByTagName('img')[0];
  buttonDesign.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      popupDesign.style.display = 'block';
      popupDesign.classList.add('.more-splash');
      document.body.style.overflow = 'hidden';
    });
  });
  gift.addEventListener('click', function (e) {
    e.preventDefault();
    popupGift.style.display = 'block';
    popupGift.classList.add('.more-splash');
    document.body.style.overflow = 'hidden';
    elements.parentNode.removeChild(elements);
  });
  buttonConsultation.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      popupConsultation.style.display = 'block';
      popupConsultation.classList.add('.more-splash');
      document.body.style.overflow = 'hidden';
    });
  });
  close.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      popupConsultation.style.display = 'none';
      popupDesign.style.display = 'none';
      popupGift.style.display = 'none';
      popupGift.classList.remove('.more-splash');
      popupGift.remove(popupGift);
      document.body.style.overflow = '';
    });
  });
  window.addEventListener('click', function (e) {
    
    if (e.target == popupDesign) {
      popupDesign.style.display = 'none';
      document.body.style.overflow = '';
    } else if (e.target == popupConsultation) {
      popupConsultation.style.display = 'none';
      document.body.style.overflow = '';
    } else if (e.target == popupGift) {
      popupGift.remove(popupGift);
      popupGift.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  setTimeout(function () {
    popupConsultation.style.display = 'block';
    popupConsultation.classList.add('.more-splash');
    document.body.style.overflow = 'hidden';
  }, 60000);

  var b = document.getElementsByTagName('button'),
      check;

  var but = function but() {
    for (var i = 0; i < b.length; i++) {
      b[i].onclick = function () {
        console.log(this.innerHTML);
      };
    }
  };

  if (but()) {
    check = false;
  } else {
    check = true;
  }

  console.log(check);

  if (check) {
    window.onscroll = function () {
      var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
      var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
      var scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

      if (documentHeight - clientHeight <= scrollTop) {
        if (popupGift) {
          popupGift.style.display = 'block';
          popupGift.classList.add('.more-splash');
          document.body.style.overflow = 'hidden';
          elements.remove(elements);
          document.body.style.overflow = '';
        }
      }
    };
  }

}

module.exports = button;