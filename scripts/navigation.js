/**
 * On hover, show the navigation menu,
 */

let navigationState = false;
const toggleNavigation = () => {
    if( navigationState == false){
        /**
         * Show the navigation
         */
        //document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
        document.getElementsByClassName("hamburger-menu")[0].getElementsByTagName("ul")[0].style.width = "100vw";
        document.getElementsByClassName("hamburger-menu")[0].getElementsByTagName("ul")[0].style.whiteSpace = "unset";
        navigationState = true;

    } else {
        /**
         * Hide the navigation
         */
        //document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
        document.getElementsByClassName("hamburger-menu")[0].getElementsByTagName("ul")[0].style.width = "0vw";
        document.getElementsByClassName("hamburger-menu")[0].getElementsByTagName("ul")[0].style.whiteSpace = "nowrap";
        navigationState = false;
    }
}