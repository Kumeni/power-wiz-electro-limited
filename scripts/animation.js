/**
 * We need a function that monitors all the sections if they are in the viewport
 */

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        //rect.top >= -window.innerHeight &&
        rect.top >= 0 && rect.top <= 0 + (window.innerHeight) &&
        rect.left >= 0 && rect.left <= window.innerWidth
        //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        //rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const minitorAllTheElements = () => {
    let contentSections = document.getElementsByClassName("section-content"), i, j;

    for(i=0; i<contentSections.length; i++){
        /**
         * If the element is in view port slide in animation else slide out animations
         */

        if(isElementInViewport(contentSections[i])){
            /**
             * Initiate the slide in animation
             */
            contentSections[i].style.opacity = "1";
            contentSections[i].style.top = "0rem";
            let slideInFromLeftElements = document.getElementsByClassName("slide-in-from-left");
            for(j=0; j<slideInFromLeftElements.length; j++){
                //slideInFromLeftElements[j].style.left = "unset";
                //slideInFromLeftElements[j].style.animation = "slide-in-from-left-animation 0.5s linear";
            }
            let slideInFromRightElements = document.getElementsByClassName("slide-in-from-right");
            for(j=0; j<slideInFromRightElements.length; j++){
                //slideInFromRightElements[j].style.right = "unset";
                //slideInFromRightElements[j].style.animation = "flyInFromRightAnimation 0.5s linear";
            }
        } else {
            /**
             * Initiate the slide out animation
             */
            contentSections[i].style.opacity = "0";
            contentSections[i].style.top = contentSections[i].getBoundingClientRect().top < 0? "-6rem": "6rem";
            let slideInFromLeftElements = document.getElementsByClassName("slide-in-from-left");
            for(j=0; j<slideInFromLeftElements.length; j++){
                //slideInFromLeftElements[j].style.left = "20%";
                //slideInFromLeftElements[j].style.animation = "slide-in-from-left-animation 0.5s reverse";
            }
            let slideInFromRightElements = document.getElementsByClassName("slide-in-from-right");
            for(j=0; j<slideInFromRightElements.length; j++){
                //slideInFromRightElements[j].style.right = "20%";
                //slideInFromRightElements[j].style.animation = "flyInfromRightAnimation 0.5s reverse";
            }
        }
    }
}

document.addEventListener('scroll', minitorAllTheElements);