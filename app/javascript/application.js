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

document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript file loaded");

  const profileTextArea = document.querySelector('.auto-resize');
  if (profileTextArea) {
    const resizeTextArea = function() {
      this.style.height = 'auto';  // 高さをリセット
      this.style.height = (this.scrollHeight) + 'px';  // 入力内容に合わせて高さを変更
    };

    profileTextArea.addEventListener('input', resizeTextArea);
    resizeTextArea.call(profileTextArea);  // 初期状態で高さ調整
  }
});