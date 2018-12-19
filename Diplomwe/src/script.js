/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/accordion.js":
/*!********************************!*\
  !*** ./src/parts/accordion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/parts/burger.js":
/*!*****************************!*\
  !*** ./src/parts/burger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function burger() {
  "use strict";

  var burger = document.getElementsByClassName('burger')[0],
      li = document.getElementsByClassName('burger-menu');

  if (window.innerWidth <= 768) {
    
    burger.addEventListener('click', function () {
      if (li[0].style.display == 'none' || li[0].style.display == '') {
        li[0].style.display = 'block';
      } else {
        li[0].style.display = 'none';
      }
    });
  } else {
    li[0].style.display = 'none';
  }
}

module.exports = burger;

/***/ }),

/***/ "./src/parts/buttonModal.js":
/*!**********************************!*\
  !*** ./src/parts/buttonModal.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
        
      };
    }
  };

  if (but()) {
    check = false;
  } else {
    check = true;
  }

  

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

/***/ }),

/***/ "./src/parts/buttonStyle.js":
/*!**********************************!*\
  !*** ./src/parts/buttonStyle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function buttonStyle() {
  "use strict";

  var headerLg = document.querySelectorAll('.hidden-lg'),
      buttonTransparent = document.getElementsByClassName('button-transparent')[0];
  
  buttonTransparent.addEventListener('click', function () {
    for (var i = 0; i < headerLg.length; i++) {
      headerLg[i].style.setProperty('display', 'block', 'important');
      headerLg[i].style.float = 'left';
      headerLg[i].style.marginLeft = '0';
      headerLg[i].style.width = '25%';
      headerLg[i].style.paddingRight = '15px';
      headerLg[i].style.paddingLeft = '15px';
    }

    buttonTransparent.style.display = "none";
  });
}

module.exports = buttonStyle;

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function calc() {
  "use strict";

  var size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      priceInput = document.querySelector('.calc-price');
  var sizeChange = {
    1: 500,
    2: 1000,
    3: 1500,
    4: 2000
  },
      materialChange = {
    1: 500,
    2: 1000,
    3: 1500
  },
      optionsChange = {
    1: 500,
    2: 1000,
    3: 2000
  };

  function change() {
    if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
      var price = sizeChange[size.options.selectedIndex] + materialChange[material.options.selectedIndex];

      if (options.options.selectedIndex > 0) {
        price = price + optionsChange[options.options.selectedIndex];
      }

      if (promocode.value == 'IWANTPOPART') {
        price = price * 0.7;
      }

      priceInput.textContent = price;
    } else {
      priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }

  size.addEventListener('change', function () {
    change();
  });
  material.addEventListener('change', function () {
    change();
  });
  options.addEventListener('change', function () {
    change();
  });
  promocode.addEventListener('input', function () {
    change();
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/filter.js":
/*!*****************************!*\
  !*** ./src/parts/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function filter() {
  "use strict";

  var filter = document.querySelectorAll('.portfolio-menu li'),
      lovers = document.getElementsByClassName('portfolio-block lovers'),
      guy = document.getElementsByClassName('portfolio-block guy'),
      chef = document.getElementsByClassName('portfolio-block chef'),
      guyButton = document.getElementsByClassName('guy')[0],
      loversButton = document.getElementsByClassName('lovers')[0],
      girlButton = document.getElementsByClassName('girl')[0],
      chefButton = document.getElementsByClassName('chef')[0],
      allButton = document.getElementsByClassName('all')[0],
      grandFatherButton = document.getElementsByClassName('granddad')[0],
      grandMotherButton = document.getElementsByClassName('grandmother')[0],
      girl = document.getElementsByClassName('portfolio-block girl'),
      all = document.getElementsByClassName('portfolio-block all'),
      noPortfolio = document.getElementsByClassName('portfolio-no')[0];
  
  girlButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i = 0; _i < girl.length; _i++) {
      girl[_i].style.display = 'block';
    }

    for (var _i2 = 0; _i2 < lovers.length; _i2++) {
      lovers[_i2].style.display = 'none';
    }

    for (var _i3 = 0; _i3 < guy.length; _i3++) {
      guy[_i3].style.display = 'none';
    }

    for (var _i4 = 0; _i4 < chef.length; _i4++) {
      chef[_i4].style.display = 'none';
    }
  });
  guyButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i5 = 0; _i5 < guy.length; _i5++) {
      guy[_i5].style.display = 'block';
    }

    for (var _i6 = 0; _i6 < lovers.length; _i6++) {
      lovers[_i6].style.display = 'none';
    }

    for (var _i7 = 0; _i7 < girl.length; _i7++) {
      girl[_i7].style.display = 'none';
    }

    for (var _i8 = 0; _i8 < chef.length; _i8++) {
      chef[_i8].style.display = 'none';
    }
  });
  loversButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i9 = 0; _i9 < lovers.length; _i9++) {
      lovers[_i9].style.display = 'block';
    }

    for (var _i10 = 0; _i10 < guy.length; _i10++) {
      guy[_i10].style.display = 'none';
    }

    for (var _i11 = 0; _i11 < girl.length; _i11++) {
      girl[_i11].style.display = 'none';
    }

    for (var _i12 = 0; _i12 < chef.length; _i12++) {
      chef[_i12].style.display = 'none';
    }
  });
  chefButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i13 = 0; _i13 < chef.length; _i13++) {
      chef[_i13].style.display = 'block';
    }

    for (var _i14 = 0; _i14 < lovers.length; _i14++) {
      lovers[_i14].style.display = 'none';
    }

    for (var _i15 = 0; _i15 < girl.length; _i15++) {
      girl[_i15].style.display = 'none';
    }

    for (var _i16 = 0; _i16 < guy.length; _i16++) {
      guy[_i16].style.display = 'none';
    }
  });
  allButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i17 = 0; _i17 < all.length; _i17++) {
      all[_i17].style.display = 'block';
    }
  });
  grandFatherButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i18 = 0; _i18 < chef.length; _i18++) {
      chef[_i18].style.display = 'none';
    }

    for (var _i19 = 0; _i19 < lovers.length; _i19++) {
      lovers[_i19].style.display = 'none';
    }

    for (var _i20 = 0; _i20 < girl.length; _i20++) {
      girl[_i20].style.display = 'none';
    }

    for (var _i21 = 0; _i21 < guy.length; _i21++) {
      guy[_i21].style.display = 'none';
    }

    noPortfolio.style.display = 'block';
  });
  grandMotherButton.addEventListener('click', function () {
    for (var i = 0; i < filter.length; i++) {
      if (this.classList) {
        for (var j = 0; j < filter.length; j++) {
          filter[j].classList.remove('active');
        }

        this.classList.add('active');
      } else {
        this.active += '' + active;
      }
    }

    for (var _i22 = 0; _i22 < chef.length; _i22++) {
      chef[_i22].style.display = 'none';
    }

    for (var _i23 = 0; _i23 < lovers.length; _i23++) {
      lovers[_i23].style.display = 'none';
    }

    for (var _i24 = 0; _i24 < girl.length; _i24++) {
      girl[_i24].style.display = 'none';
    }

    for (var _i25 = 0; _i25 < guy.length; _i25++) {
      guy[_i25].style.display = 'none';
    }

    noPortfolio.style.display = 'block';
  });
}

module.exports = filter;

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function form() {
  "use strict";
  function sendForm(e) {
        
        let form = e,
            statusMessage = document.createElement('div'),
            input = form.querySelectorAll('input'),
            textarea = form.querySelectorAll('textarea');
        statusMessage.classList.add('status');

        form.addEventListener('submit', function (event) {
            let innerCode;
            event.preventDefault();
           

            function postData() {
                
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); // создаем запрос к серверу
                    request.open('POST', 'server.php'); // выставляем настройки запроса
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    let formData = new FormData(form); //получаем все данные с формы
                    request.send(formData); // отправляем данные на сервер
                    innerCode = form.innerHTML;
                    form.innerHTML = '';
                    form.appendChild(statusMessage);
                    request.addEventListener('readystatechange', function () { // смотрим состояние запроса
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
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                for (let i = 0; i < textarea.length; i++) {
                    textarea[i].value = '';
                }
            }
            function closeForm(status) {
                statusMessage.innerHTML = status;
                let timeLog = 0;
                let closeFormTimer = setInterval(function() {
                    timeLog = timeLog + 20;
                    if (timeLog == 2000) {
                        form.innerHTML = innerCode;
                        clearInput();
                        if (form.className.indexOf('popup') != -1) {
                            let popupClass = document.querySelector('.' + form.className.slice(0, -5));
                            popupClass.style.display = 'none';
                            document.querySelector('body').style.overflow = '';
                        }
                        clearInterval(closeFormTimer);
                    }
                }, 20);
            }

           
                postData()
                    .then(() => {
                        closeForm('<p>Загрузка подождите пожалуйста</p>');
                    })
                    .then(() => {
                        closeForm('<p>Запрос отправлем с вами свяжутся.</p>');
                    })
                    .catch(() => {
                        closeForm('<p>Произошла ошибка!</p>');
                    })
            
        });
    }
    var form = document.querySelectorAll('form');
    form.forEach(function (e) {
     
        sendForm(e);

    });
  
  } 


module.exports = form;

/***/ }),

/***/ "./src/parts/picture.js":
/*!******************************!*\
  !*** ./src/parts/picture.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function picture() {
  "use strict";

   var sizeOne = document.getElementsByClassName('size-1')[0],
      sizeTwo = document.getElementsByClassName('size-2')[0],
      sizeThree = document.getElementsByClassName('size-3')[0],
      sizeFour = document.getElementsByClassName('size-4')[0],
      sizes = document.querySelectorAll( '.size'),
      startPrice = document.querySelectorAll( '.starting-price'),
      finalprice = document.querySelectorAll( '.final-price');

      
  sizeOne.onmouseover = function () {
    sizes[0].style.display = 'none';
    startPrice[0].style.display = 'none';
    finalprice[0].style.display = 'none';
    this.src = './img/sizes-1-1.png';
    
  };

  sizeTwo.onmouseover = function () {
    sizes[1].style.display = 'none';
    startPrice[1].style.display = 'none';
    finalprice[1].style.display = 'none';
    this.src = './img/sizes-2-1.png';
  };

  sizeThree.onmouseover = function () {
    
    sizes[2].style.display = 'none';
    startPrice[2].style.display = 'none';
    finalprice[2].style.display = 'none';
    this.src = './img/sizes-3-1.png';
  };

  sizeFour.onmouseover = function () {
    sizes[3].style.display = 'none';
    startPrice[3].style.display = 'none';
    finalprice[3].style.display = 'none';
    this.src = './img/sizes-4-1.png';
  };

  sizeOne.onmouseout = function () {
    sizes[0].style.display = 'block';
    startPrice[0].style.display = 'block';
    finalprice[0].style.display = 'block';
    this.src = './img/sizes-1.png';
  };

  sizeTwo.onmouseout = function () {
    sizes[1].style.display = 'block';
    startPrice[1].style.display = 'block';
    finalprice[1].style.display = 'block';
    this.src = './img/sizes-2.png';
  };

  sizeThree.onmouseout = function () {
    sizes[2].style.display = 'block';
    startPrice[2].style.display = 'block';
    finalprice[2].style.display = 'block';
    this.src = './img/sizes-3.png';
  };

  sizeFour.onmouseout = function () {
    sizes[3].style.display = 'block';
    startPrice[3].style.display = 'block';
    finalprice[3].style.display = 'block';
    this.src = './img/sizes-4.png';
  };
}

module.exports = picture;

/***/ }),

/***/ "./src/parts/sliderAdditional.js":
/*!***************************************!*\
  !*** ./src/parts/sliderAdditional.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/parts/sliderMain.js":
/*!*********************************!*\
  !*** ./src/parts/sliderMain.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function slider() {
  "use strict";

  var sliderWrapper = document.querySelector('.main-slider'),
      slides = sliderWrapper.querySelectorAll('.main-slider-item'),
      slideIndex = 1,
      preventSlide = 1,
      height = slides[0].clientHeight;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    var top = 0;
    slides[slideIndex - 1].style.top = '-100%';
    var sliderAnimation = setInterval(function () {
      top = top + 5;

      if (preventSlide == slides.length) {
        slides[slides.length - 1].style.top = top + 'px';
      } else {
        slides[slideIndex - 2].style.top = top + 'px';
      }

      slides[slideIndex - 1].style.top = -height + top + 'px';

      if (top >= height) {
        preventSlide = slideIndex;
        clearInterval(sliderAnimation);
      }
    }, 5);
  }

  function plusSlides() {
    showSlides(slideIndex += 1);
  }

  var mainSliderTimer = setInterval(function () {
    plusSlides();
  }, 3000);
}

module.exports = slider;

/***/ }),

/***/ "./src/parts/validInput.js":
/*!*********************************!*\
  !*** ./src/parts/validInput.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




function validInput() {
  "use strict";

  var textArea = document.getElementsByTagName('textarea')[0],
      input = document.getElementsByTagName('input'),
      valid =true;

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

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", function() {
  let accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/parts/accordion.js"),
 burger = __webpack_require__(/*! ./parts/burger.js */ "./src/parts/burger.js"),
  buttonModal = __webpack_require__(/*! ./parts/buttonModal.js */ "./src/parts/buttonModal.js"),
  buttonStyle = __webpack_require__(/*! ./parts/buttonStyle.js */ "./src/parts/buttonStyle.js"),
  calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js"),
  filter = __webpack_require__(/*! ./parts/filter.js */ "./src/parts/filter.js"),
  form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
  picture = __webpack_require__(/*! ./parts/picture.js */ "./src/parts/picture.js"),
 sliderAdditional = __webpack_require__(/*! ./parts/sliderAdditional.js */ "./src/parts/sliderAdditional.js"),
  sliderMain= __webpack_require__(/*! ./parts/sliderMain.js */ "./src/parts/sliderMain.js"),
  validInput= __webpack_require__(/*! ./parts/validInput.js */ "./src/parts/validInput.js");

  accordion();
  burger();
  buttonModal();
  buttonStyle();
  calc();
  filter();
  form();
  picture();
  sliderAdditional();
  sliderMain();
  validInput();
});

/***/ })

/******/ });