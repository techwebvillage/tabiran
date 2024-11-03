// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap
import "@hotwired/turbo-rails"
import "controllers"

$(function () {
    $('#js-hamburger-menu').on('click', function () {
      $('.navigation').toggleClass('open');
      $(this).toggleClass('hamburger-menu--open');
    });
});