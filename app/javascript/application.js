// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap
import "jquery";
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("turbo:load", function () {
    console.log("JavaScript file loaded");

    $('#js-hamburger-menu').off('click').on('click', function () {
      console.log("Hamburger menu clicked");
      $('.navigation').toggleClass('open');
      $(this).toggleClass('hamburger-menu--open');

      if ($('.navigation').hasClass('open')) {
        console.log("Menu is open");  
      } else {
        console.log("Menu is closed");
      }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const profileInput = document.querySelector(".profile-input");
  if (profileInput) {
    const adjustHeight = () => {
      profileInput.style.height = "auto";
      profileInput.style.height = `${profileInput.scrollHeight}px`; 
    };

    adjustHeight();

    profileInput.addEventListener("input", adjustHeight);
  }
});