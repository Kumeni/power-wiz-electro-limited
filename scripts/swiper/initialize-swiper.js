let swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:600,
    spaceBetween:10,
    slidesPerView:2,
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    allowTouchMove:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    autoplay:{
      delay:500,
      disableOnInteraction:false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // Responsive breakpoints
    breakpoints: {
        //when window width is <=425px
        0:{
          slidesPerView:1,
        },
        // when window width is >= 580px
        580: {
            slidesPerView: 2,
            //spaceBetween: 20
        },
        // when window width is >= 1088px
        1088: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

let swiperLanding = new Swiper('.swiper-landing', {
  // Optional parameters
  speed:1000,
  spaceBetween:10,
  slidesPerView:1,
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  allowTouchMove:true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  autoplay:{
    delay:10000,
    disableOnInteraction:false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Responsive breakpoints
  // breakpoints: {
  //     //when window width is <=425px
  //     0:{
  //       slidesPerView:1,
  //     },
  //     // when window width is >= 580px
  //     580: {
  //         slidesPerView: 2,
  //         //spaceBetween: 20
  //     },
  //     // when window width is >= 1088px
  //     1088: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //     },
  // }
});