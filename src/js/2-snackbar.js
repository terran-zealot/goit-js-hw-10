// Описаний у документації
// import iziToast from "izitoast";
// Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";







const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
    event.preventDefault();

 
    const userDelay = parseInt(form.querySelector('input[name="delay"]').value, 10);

    if (isNaN(userDelay)) {
        iziToast.error({
            title: "Error",
            message: "Please provide a valid delay in milliseconds.",
        });
        return;
    }

    const userState = form.querySelector('input[name="state"]:checked').value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userState === "fulfilled") {
                resolve(userDelay);
            } else if (userState === "rejected") {
                reject(userDelay);
            }
        }, userDelay);
    });
    promise
        .then((delay) => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
            });
        });
});