var hotelSearch = document.querySelector(".search-btn");
var popup = document.querySelector(".modal-search");
var date = popup.querySelector("[name=arrival-date]");

hotelSearch.addEventListener("click", function () {
  console.log("Клик по кнопке");
  popup.classList.add("modal-hide");
});

hotelSearch.addEventListener("click", function () {
  console.log("Клик по кнопке");
  popup.classList.toggle("modal-hide");
});
