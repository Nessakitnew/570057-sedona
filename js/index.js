var link = document.querySelector(".form-title");
var popup = document.querySelector(".hotel-search");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal");
});
