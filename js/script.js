var hotelSearch = document.querySelector(".search-btn");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=date-of-departure]");
var adultsNumber = popup.querySelector("[name=adults]");
var childrenNumber = popup.querySelector("[name=children]");
var isStorageSupport = true;
var storage = "";

try {
  adultsStorage = localStorage.getItem("adultsNumber");
  childrenStorage = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
}



hotelSearch.addEventListener("click", function () {
  popup.classList.toggle("modal-show");
  arrivalDate.focus();
  if (adultsStorage) {
    adultsNumber.value = adultsStorage;
  };
  if (childrenStorage) {
    childrenNumber.value = childrenStorage;
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsNumber", adultsNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-error");
    }
  }
});
