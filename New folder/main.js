'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navToggleBtn = document.querySelector('[data-nav-toggler]');

$navToggleBtn.addEventListener('click', () => $navbar.classList.toggle('active'));

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
})

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
$toggleBtns.forEach($toggleBtns=> {
  $toggleBtns.addEventListener("click", () => {
    $toggleBtns.classList.toggle("active")
  })
})