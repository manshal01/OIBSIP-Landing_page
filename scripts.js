// Add the following JavaScript code to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const menu = document.querySelector(".menu");
  
    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });
  