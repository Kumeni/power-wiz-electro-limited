let swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:600,
    spaceBetween:10,
    slidesPerView:2,
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    allowTouchMove:false,
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
    /*breakpoints: {
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
    }*/
});
