var link = document.querySelector(".write-us");
var writeUsPopup = document.querySelector(".contacts-form");
var close = writeUsPopup.querySelector(".close-writeus");

var nameField = writeUsPopup.querySelector("[id=contacts-name]");
var emailField = writeUsPopup.querySelector("[id=contacts-email]");
var textField = writeUsPopup.querySelector("[id=contacts-text]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("nameField");
} catch (err) {
    isStorageSupport = false;
}


var form = document.querySelector("form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("visually-hidden");
    writeUsPopup.classList.remove("animation");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("animation");

    // if (storage) {
    //     nameField.value = storage;
    //     emailField.focus();
    //         if (storage) {
    //             emailField.value = storage;
    //             textField.focus();}
    //             else {
    //                 emailField.focus();
    //               }
    //   } else {
        nameField.focus();
    //   }
    
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("visually-hidden");
    writeUsPopup.classList.remove("animation");
    writeUsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !textField.value) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("nameField", nameField.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (writeUsPopup.classList.add("visually-hidden")) {
        writeUsPopup.classList.remove("visually-hidden");
        writeUsPopup.classList.remove("animation");
        writeUsPopup.classList.remove("modal-error");
      }
    }
  });
// 

var buttonDelivery = document.querySelector(".button-delivery");
var buttonGuarantee = document.querySelector(".button-guarantee");
var buttonCredit = document.querySelector(".button-credit");

var servisesDelivery = document.querySelector(".servises-delivery");
var servisesGuarantee = document.querySelector(".servises-guarantee");
var servisesCredit = document.querySelector(".servises-credit");


buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();

    servisesDelivery.classList.remove("visually-hidden");
    servisesGuarantee.classList.add("visually-hidden");
    servisesCredit.classList.add("visually-hidden");
});

buttonGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    servisesDelivery.classList.add("visually-hidden");
    servisesGuarantee.classList.remove("visually-hidden");
    servisesCredit.classList.add("visually-hidden");
});

buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    servisesDelivery.classList.add("visually-hidden");
    servisesGuarantee.classList.add("visually-hidden");
    servisesCredit.classList.remove("visually-hidden");
});