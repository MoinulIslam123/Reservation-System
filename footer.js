document.addEventListener("DOMContentLoaded", function () {
    const footer = `
    <div class="box-container">
        <div class="box">
            <a href="#">+123-456-7890</a>
            <a href="tel:1112223333">+111-222-3333</a>
            <a href="mailto:moinulislam@gmail.com">moinulislam@gmail.com</a>
            <a href="#">Dhaka, Bangladesh</a>
        </div>

        <div class="box">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
        </div>
    </div>
    <div class="credit">&copy; copyright @ 2023 by mr. web designer | all rights reserved!</div>
`;

    const footerSection = document.querySelector(".footer");

    if (footerSection) {
        footerSection.innerHTML = footer;
    }
});
