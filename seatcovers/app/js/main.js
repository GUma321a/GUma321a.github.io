$(function(){






    
});








///////////////////////////////////////////////////////////////////////////////////
let tabNavItem = document.querySelectorAll('.options__tabs-link-content');
let tabContentItem = document.querySelectorAll('.options__tabs-content');

tabNavItem.forEach(function(elem) {
    elem.addEventListener('click', activeTab);
})
function activeTab() {
    tabNavItem.forEach(function(elem) {
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function(item) {
        if (item.classList.contains(tabName)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}
//////////////////////////////////////////////////////////////////

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: false
      },
      761: {
        slidesPerView: 2,
        centeredSlides: false
      },
      986: {
        slidesPerView: 3,
        centeredSlides: false
      },
      1150: {
        slidesPerView: 3,
        centeredSlides: true
      }
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

//////////////////////////////////////////////////////////////
var mixer = mixitup('.catalog__list');
//////////////////////////////////////////////////////////////
// Мобильное меню бургер
function burgerMenu() {
  let burger = document.querySelector('.header__menu-burger')
  let menu = document.querySelector('.header__menu-items')
  const body = document.querySelector('body')

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      document.body.style.overflow = 'visible';
    }
  })
  menu.addEventListener('click', handMenuClick);
  function handMenuClick(event) {
    if(event.target instanceof HTMLAnchorElement) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      document.body.style.overflow = 'visible';
    }
  }
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 999) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('_lock')
    }
  })
}
burgerMenu()
/////////////////////////////////////////////////////////////
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

