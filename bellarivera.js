/* Name: Bella Rivera
  Description: This is the JavaScript file for my personal webiste. It defines the functionality
  for all the buttons/links, as well as dictates when to implement certain
  animations */

"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {

    // keep track of previous page, so we know whether or not to run animation
    window.addEventListener('beforeunload', checkPage);
    console.log(localStorage.getItem('execute'));
    let body = document.querySelector("body");
    // if we are on the homepage and animation is turned on, run it
    if ((localStorage.getItem('execute') === 'on'
      || localStorage.getItem('execute') == null)
      && body.classList.contains('homebody')) {

        let logo = document.getElementById("logovid");
        logo.style.display = "inline";

        let maincontent = document.querySelector(".homebody #wrapper");
        maincontent.classList.remove("visited");
        maincontent.classList.add("not-visited");
    }


    // add event listeners to project titles for corresponding image to appear
    let titles = document.querySelectorAll("#project-list h4");

    for (let i = 0; i < titles.length; i++)  {
      titles[i].addEventListener("mouseover", fadeInImg);
      titles[i].addEventListener("mouseout", fadeOutImg);
    }

    // add event listeners to hamburger menu buttons to appear
    let menus = document.querySelectorAll('.dropdown-btn');
    for (let i = 0; i < menus.length; i++)  {
      menus[i].addEventListener("click", openMenu);
    }
  }

  /**
   * When a project title is hovered over, change #projectspic to corresponding image
   */
  function fadeInImg(event) {
    let id = event.currentTarget.id;
    let pic = document.getElementById("projectspic");
    // console.log(pic);
    pic.classList.remove('hideimg');
    pic.classList.add('showimg');
    pic.src = 'images/'+ id +'.png';
  }

    /**
   * When cursor is removed from project title, fade image out
   */
     function fadeOutImg(event) {
      let id = event.currentTarget.id;
      let pic = document.getElementById("projectspic");
      // console.log(pic);
      pic.classList.remove('showimg');
      pic.classList.add('hideimg');
      pic.src = 'images/'+ id +'.png';
    }

    /** code for hamburger menu from Fabian Tan on Codepen
     * https://codepen.io/ftkz5755/pen/BaKpmvY
     */
    function openMenu() {
      // make menu icon into x icon
      let menu = document.querySelector('.dropdown-btn');
      if (menu.classList.contains("transform")) {
        menu.classList.remove("transform");
      } else {
        menu.classList.add("transform");
      }

      // make tabs slide in
      let navbar = document.querySelector('.dropdownnav');

      // if nav bar is hidden, show it
      if (navbar.classList.contains("hidenav")) {
        navbar.classList.remove("hidenav");
        navbar.classList.add("shownav");
      }

      // if we're at beginning, remove beginning and show nav
      else if (navbar.classList.contains("beginning")) {
        navbar.classList.remove("beginning");
        navbar.classList.add("shownav");
      }

      // if nav is showing, hide it
      else {
        navbar.classList.add("hidenav");
        navbar.classList.remove("shownav");
      }
    }

    /**
     * check what the current page is to determine whether or not to turn on
     * main screen logo animation
     *
     * if current screen is the main screen, turn it on, otherwise, turn it off
     */
    function checkPage(event) {
      let body = document.querySelector("body");
      // if the prev page was not the homepage, don't run the animation
      if (!(body.classList.contains('homebody'))) {
        localStorage.setItem('execute', 'off');
      } else {
        localStorage.setItem('execute', 'on');
      }
    }
})();