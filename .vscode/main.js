//#HOME OWL CAROUSEL INITIALIZER

window.addEventListener('DOMContentLoaded', function () {

   $('.owl-one').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      loop:true,
      margin:10,
      responsiveClass:true,
      dots:false,
      nav:true,
      navText: ['<img src="assets/icons/homeleft.png" alt="">', '<img src="assets/icons/homeright.png" alt="">'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:1,
              nav:true
          },
          1000:{
              items:1,
              nav:true,
              loop:true
          }
      }
  })

//   this.document.getElementsByClassName('owl-next')[0].style.backgroundColor = "red"

  $('.owl-two').owlCarousel({
   center: true,
   autoplay: true,
   autoplayHoverPause: true,
   loop:true,
   margin: 100,
   responsiveClass:true,
   dots:false,
   nav:true,
   navText: ['<img src="assets/icons/left.png" alt="">', '<img src="assets/icons/right.png" alt="">'],
   responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:1,
           nav:true
       },
       1000:{
           items:1,
           nav:true,
           loop:true
       }
   }
})

//REMOVE INSTAGRAM WIDGET POP-UP
function vermelho(){document.querySelector('a.eapps-link').style.opacity = "0";}
setTimeout(vermelho,1000)

   //GLIDER.JS AUTOPLAY

   // slideAutoPlay(slider, '#home .col-b');

   // function slideAutoPlay(glider, selector, delay = 5000, repeat = true) {
   //    let autoplay = null;
   //    const slidesCount = glider.track.childElementCount;
   //    let nextIndex = 1;
   //    let pause = true;

   //    function slide() {
   //       autoplay = setInterval(() => {
   //          if (nextIndex >= slidesCount) {
   //             if (!repeat) {
   //                clearInterval(autoplay);
   //             } else {
   //                nextIndex = 0;
   //             }
   //          }
   //          glider.scrollItem(nextIndex++);
   //       }, delay);
   //    }

   //    slide();

   //    // TO STOP WHEN HOVERED ON IMAGE

   //    var element = document.querySelector(selector);
   //    element.addEventListener('mouseover', (event) => {
   //       if (pause) {
   //          clearInterval(autoplay);
   //          pause = false;
   //       }
   //    }, 300);

   //    element.addEventListener('mouseout', (event) => {
   //       if (!pause) {
   //          slide();
   //          pause = true;
   //       }
   //    }, 300);
   // }
})

//TO CHECK WHICH SECTION YOU ARE IN
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
   showNavOnScroll()
   // showBackToTopButtonOnScroll()

   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(about)
   activateMenuAtCurrentSection(what)
   activateMenuAtCurrentSection(portfolio)
}

function activateMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2

   //verificar se a seção passou da linha
   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

   //verificar se a base está abaixo da linha alvo
   const sectionEndsAt = sectionTop + sectionHeight
   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

   //limites da seção
   const sectionBoundaries =
      sectionTopReachOrPassedTargetLine &&
      !sectionEndPassedTargetLine

   const sectionId = section.getAttribute(`id`)
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuElement.classList.remove('active')
   if (sectionBoundaries) {
      menuElement.classList.add('active')
   }
}

function showNavOnScroll() {
   const navigation = document.querySelector('#navigation')

   if (scrollY > 0) {
      navigation.classList.add('scroll')
   } else {
      navigation.classList.remove('scroll')
   }
}

// function showBackToTopButtonOnScroll() {
//    if (scrollY > 1400) {
//       backToTopButton.classList.add('show')
//    } else {
//       backToTopButton.classList.remove('show')
//    }
// }

function openMenu() {
   document.body.classList.add('menu-expanded')
}

function closeMenu() {
   document.body.classList.remove('menu-expanded')
}

//SCROLL REVEAL

ScrollReveal({
   origin: 'left',
   distance: '150px',
   duration: 1000
}).reveal(`
   #homeToScroll , 
   #about,
   #about img`)


ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 700
}).reveal(` 
   #what,
   #portfolio,
   #feedback,
   #medias`)

// ScrollReveal({
//    origin: 'left',
//    distance: '120px',
//    duration: 1400
// }).reveal(`
//    #homeToScroll,
//    #homeToScroll header,
//    #homeToScroll .content,`)

// ScrollReveal({
//    origin: 'top',
//    distance: '100px',
//    duration: 1000
// }).reveal(`
//    #about`)

//MODAL WINDOW

// function modalClick(img) {
//    var modalW = document.getElementById("modalWindow")
//    var modalI = document.getElementById("modalImg")
//    var modalB = document.getElementById("btnClose")
//    setTimeout(() => {

//    const navigation = document.querySelector('#navigation')
//    navigation.style.display = "none"
//    document.body.style.overflowY = "hidden"

//    modalW.style.display = 'block'
//    modalI.src = img

//    }, 100)
//    setTimeout(() => {hey()}, 120)
//    modalB.onclick = function () {
//       const navigation = document.querySelector('#navigation')
//       modalW.style.display = 'none'

//       navigation.style.display = "block"
//       document.body.style.overflowY = "scroll"
//    }
   
// }

//#PROPERTIES GLIDER.JS INITIALIZER

// function hey() {
//    new Glider(document.querySelector('.glider-prop'), {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       scrollLock: true,
//       scrollLockDelay: 100,
//       draggable: true,
//       dragVelocity: 1.5,
//       duration: 3,
//       arrows: {
//          prev: '.glider-prev',
//          next: '.glider-next'
//       }
//    });
// }