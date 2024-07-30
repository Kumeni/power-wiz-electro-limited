swiperLanding.on('slideChange', function (event) {
    let dynamicTexts = document.getElementsByClassName("dynamic-text"), i = 0, hambergerMenu = document.getElementsByClassName("hamburger-menu-ul")[0];
    monitorAllTheElements();
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


