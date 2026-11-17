
const buttons = document.querySelectorAll(".buy-btn");
const aboutBtn = document.querySelector(".about-btn");
const message = document.querySelector("#message");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let answer = confirm("Do you want to buy this pen?");

        if (answer == true) {
            alert("Thank you for choosing Pen Store!");
        } else {
            alert("Thank you for visiting our store!");
        }
    });
});

aboutBtn.addEventListener("click", function() {
    if (message.textContent == "") {
        message.textContent = "Welcome to Pen Store! Thank you for visiting us.";
    } else {
        message.textContent = "";
    }
});