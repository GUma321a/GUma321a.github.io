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
    brealpoints:{
      1250: {
        slidesPerView: 2,
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