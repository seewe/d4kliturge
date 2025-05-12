$(document).ready(function () {
  // Handle click on .tbm-item-number
  $(".tbm-item-number").on("click", function () {
    let ch_number = $(this).data("value");
    Shiny.setInputValue("chant_clicked", ch_number);
  });

  // Handle click on .ch-nav-btn
  $(".ch-nav-btn").on("click", function () {
    let ch_number = $(this).data("value");
    Shiny.setInputValue("chant_clicked", ch_number);
  });
});

function openPageTop(event) {
  event.preventDefault();
  window.scrollTo(0, 0, "smooth"); // Forces the page to load at the top
}