"use strict";

function accordion() {
  "use strict";

  var accordionHeading = document.querySelectorAll('.accordion-heading');

  var _loop = function _loop(i) {
    accordionHeading[i].addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        for (var j = 0; j < accordionHeading.length; j++) {
          accordionHeading[j].classList.remove('active');
          accordionHeading[j].style.color = "black";
        }

        this.classList.add('active');
        accordionHeading[i].style.color = "red";
      }
    });
  };

  for (var i = 0; i < accordionHeading.length; i++) {
    _loop(i);
  }
}

module.exports = accordion;