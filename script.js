document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar a");
    const products = document.querySelectorAll(".product");

    // Initially, display all products
    products.forEach((product) => {
        product.style.display = "block";
    });

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (event) => {
            event.preventDefault();
            const target = menuItem.getAttribute("data-target");

            // Hide all products except the selected one
            products.forEach((product) => {
                if (product.id === target) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});




/* highlighter*/
document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-bar li a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all menu items
            menuItems.forEach(function (menuItem) {
                menuItem.classList.remove('active');
            });

            // Add 'active' class to the clicked menu item
            item.classList.add('active');
        });
    });
});



/* reserve now to reservation*/


document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons with class 'btn1'
    var reserveButtons = document.querySelectorAll('.btn1');

    // Add click event listener to each button
    reserveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Scroll to the reservation section
            document.getElementById('reservation').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});





