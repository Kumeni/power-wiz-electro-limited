swiperLanding.on('slideChange', function (event) {
    let dynamicTexts = document.getElementsByClassName("dynamic-text"), i = 0, hambergerMenu = document.getElementsByClassName("hamburger-menu-ul")[0];
    if(event.realIndex == 0){
        //slide 1 is active
        for( i=0; i < dynamicTexts.length; i++ ){
            //dynamicTexts[i].style.color = "white !important";
            document.getElementsByClassName("power-wiz-logo")[0].src = "./assets/icons/power-wiz electro limited logo - blue background.png";
            dynamicTexts[i].style.color = "white";
            hambergerMenu.style.backgroundColor = "#3F2B73";
        }
    } else if( event.realIndex == 1) {
        //slide 2 is active
        for( i=0; i < dynamicTexts.length; i++ ){
            //dynamicTexts[i].style.color = "black !important";
            document.getElementsByClassName("power-wiz-logo")[0].src = "./assets/icons/power-wiz electro limited - yellow background.png";
            dynamicTexts[i].style.color = "black";
            hambergerMenu.style.backgroundColor = "#FCC22C";
        }
    } else if( event.realIndex == 2) {
        //slide 3 is active
        for( i=0; i < dynamicTexts.length; i++ ){
            //dynamicTexts[i].style.color = "white !important";
            document.getElementsByClassName("power-wiz-logo")[0].src = "./assets/icons/power-wiz electro limited - green background.png";
            dynamicTexts[i].style.color = "white";
            hambergerMenu.style.backgroundColor = "#089547";
        }
    }
    //console.log(event.progress);
  });

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Usage example
document.addEventListener('scroll', function() {
    const element = document.querySelector('#yourElementId');
    if (isElementInViewport(element)) {
        console.log('Element is in the viewport');
    } else {
        console.log('Element is not in the viewport');
    }
});
