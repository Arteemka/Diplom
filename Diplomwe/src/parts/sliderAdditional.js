"use strict";



function sliderHorizontal() {
  "use strict";

  var slider = document.querySelectorAll('.feedback-slider-item'),
      prevBtn = document.querySelector('.main-prev-btn'),
      nextBtn = document.querySelector('.main-next-btn'),
      slideIndexH = 1;

  function showSlider(n) {
    if (n > slider.length) {
      slideIndexH = 1;
    }

    if (n < 1) {
      slideIndexH = slider.length;
    }

    slider.forEach(function (item) {
      return item.style.display = 'none';
    });
    slider[slideIndexH - 1].style.display = 'block';
  }

  function plusSlider(n) {
    showSlider(slideIndexH += n);
  }

  prevBtn.addEventListener('click', function () {
    plusSlider(-1);
  });
  nextBtn.addEventListener('click', function () {
    plusSlider(1);
  });
  var timerHoriz = setInterval(function () {
    nextBtn.click();
  }, 5000);
  showSlider(timerHoriz);
}

module.exports = sliderHorizontal;