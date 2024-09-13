const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".form-email");
const textArea = document.querySelector(".form-area");
const localStorageKey = "feedback-form-state";
const STORAGE = {
    email: "",
    message: "",
};

const getLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) ?? "";

if (localStorage.getItem(localStorageKey) == null) {
    emailInput.value = "";
    textArea.value = "";
} else {
    emailInput.value = getLocalStorage.email;
    textArea.value = getLocalStorage.message;
};

form.addEventListener("input", (event) => {
    switch (event.target.className) {
        case "form-email":
            STORAGE.email = event.target.value;
            localStorage.setItem(localStorageKey, JSON.stringify(STORAGE).trim());       
            break;
        case "form-area":
            STORAGE.message = event.target.value;
            localStorage.setItem(localStorageKey, JSON.stringify(STORAGE).trim());       
            break;
        default:
            break;
    }
});

form.addEventListener("submit", (event) => {
    if (emailInput.value == "" || textArea.value == "") {
        alert("You can't leave blank fields!"); 
    } else {
        event.preventDefault();
        console.log(STORAGE);
        localStorage.removeItem(localStorageKey);
        form.reset();
    };
});
