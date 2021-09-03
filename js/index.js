
const swiper1 = new Swiper('.galery__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },
});

/*Селекты*/
document.querySelector('.genre__menu__item-1').addEventListener('click', function () {
  document.querySelector('.dropdown-1').classList.toggle('dropdown-1--is-open')
});

document.querySelector('.genre__menu__item-2').addEventListener('click', function () {
  document.querySelector('.dropdown-2').classList.toggle('dropdown-2--is-open')
});
document.querySelector('.genre__menu__item-3').addEventListener('click', function () {
  document.querySelector('.dropdown-3').classList.toggle('dropdown-3--is-open')
});
document.querySelector('.genre__menu__item-4').addEventListener('click', function () {
  document.querySelector('.dropdown-4').classList.toggle('dropdown-4--is-open')
});
document.querySelector('.genre__menu__item-5').addEventListener('click', function () {
  document.querySelector('.dropdown-5').classList.toggle('dropdown-5--is-open')
});
document.querySelectorAll('.dropdown-item-1').forEach(function (listItem){
  listItem.addEventListener('click',function (e1) {
    e1.stopPropagation ();
    document.querySelector ('.genre__menu__item-1').innerText = this.innerText;
    document.querySelector('.dropdown-1').classList.remove('dropdown-1--is-open');
  });
});
document.querySelectorAll('.dropdown-item-2').forEach(function (listItem){
  listItem.addEventListener('click',function (e2) {
    e2.stopPropagation();
    document.querySelector ('.genre__menu__item-2').innerText = this.innerText;
    document.querySelector('.dropdown-2').classList.remove('dropdown-2--is-open');
  });
});
document.querySelectorAll('.dropdown-item-3').forEach(function (listItem){
  listItem.addEventListener('click',function (e3) {
    e3.stopPropagation ();
    document.querySelector ('.genre__menu__item-3').innerText = this.innerText;
    document.querySelector('.dropdown-3').classList.remove('dropdown-3--is-open');
  });
});
document.querySelectorAll('.dropdown-item-4').forEach(function (listItem){
  listItem.addEventListener('click',function (e4) {
    e4.stopPropagation ();
    document.querySelector ('.genre__menu__item-4').innerText = this.innerText;
    document.querySelector('.dropdown-4').classList.remove('dropdown-4--is-open');
  });
});
document.querySelectorAll('.dropdown-item-5').forEach(function (listItem){
  listItem.addEventListener('click',function (e5) {
    e5.stopPropagation ();
    document.querySelector ('.genre__menu__item-5').innerText = this.innerText;
    document.querySelector('.dropdown-5').classList.remove('dropdown-5--is-open');
  });
});
document.addEventListener ('click', function (e1) {
  if (e1.target !== document.querySelector ('.genre__menu__item-1')) {
    document.querySelector('.dropdown-1').classList.remove('dropdown-1--is-open')
  }
});
document.addEventListener ('click', function (e2) {
  if (e2.target !== document.querySelector ('.genre__menu__item-2')) {
    document.querySelector('.dropdown-2').classList.remove('dropdown-2--is-open')
  }
});
document.addEventListener ('click', function (e3) {
  if (e3.target !== document.querySelector ('.genre__menu__item-3')) {
    document.querySelector('.dropdown-3').classList.remove('dropdown-3--is-open')
  }
});
document.addEventListener ('click', function (e4) {
  if (e4.target !== document.querySelector ('.genre__menu__item-4')) {
    document.querySelector('.dropdown-4').classList.remove('dropdown-4--is-open')
  }
});
document.addEventListener ('click', function (e5) {
  if (e5.target !== document.querySelector ('.genre__menu__item-5')) {
    document.querySelector('.dropdown-5').classList.remove('dropdown-5--is-open')
  }
});

const element = document.querySelector('.galery__select');
  const choices = new Choices(element, {
    searchEnabled: false
  });
 /**/   
document.addEventListener('DOMContentLoaded', function() {
     document.querySelectorAll('.lang-btn').forEach(function(tabsBtn) {
       tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
           
            document.querySelectorAll('.tab_content').forEach(function(tabContent) {
              tabContent.classList.remove('tab_content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab_content-active')
          })
        })
      });


document.addEventListener('DOMContentLoaded',function(){
     document.querySelector('#events-btn').addEventListener('click', function(event){
      document.querySelectorAll('.event__item').forEach(function(spoiler){
        spoiler.classList.toggle('hidden')
      })
     })
});

      //Кнопка все события
 document.getElementById('events-btn').onclick = function(){
   document.getElementById('events-btn').classList.add('hidden');
      };



// Свайпер изданий
const swiper2 = new Swiper('.editions__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  slidesPerColumn: 1,
  pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
  },
  navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
  },
});

const swiper3 = new Swiper('.project__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  slidesPerColumn: 1,
 
  navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
  },
});


ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758468, 37.601088],
            zoom: 16
        });
    
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Point.svg',
      iconImageSize: [20, 20],
      iconImageOffset:[-3, -42]
    });
  myMap.geoObjects.add(myPlacemark); 
}