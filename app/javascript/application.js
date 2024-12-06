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

    if (typeof initMap === "function") {
      console.log("Initializing Google Maps");
      initMap();
    } else {
      console.warn("initMap function not found.");
    }
});

// document.addEventListener("turbo:load", function() {
//   console.log("JavaScript file loaded");

  // const mapElement = document.getElementById("map");
  // if (mapElement && typeof initMap === "function") {
  //   console.log("Initializing Google Maps");
  //   initMap();
  // }
  const profileTextArea = document.querySelector('.auto-resize');
  if (profileTextArea) {
    const resizeTextArea = function() {
      this.style.height = 'auto';  // 高さをリセット
      this.style.height = `${this.scrollHeight}px`;
    };

    profileTextArea.addEventListener('input', resizeTextArea);
    resizeTextArea.call(profileTextArea);
  }

});

