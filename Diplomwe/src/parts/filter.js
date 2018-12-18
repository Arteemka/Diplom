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
  console.log(noPortfolio);
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