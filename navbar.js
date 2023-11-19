document.addEventListener("DOMContentLoaded", function () {
    const content = `
        <div class="banner">
            <div class="menu">
                <ul class="menu-ul">
                    <li class="menu-li">
                        <a href="#navbar" id="menu_text" class="menu-text">Home</a>
                    </li>

                    <li class="menu-li">
                        <a href="#gl" class="menu-text">Gallery</a>
                    </li>

                    <li class="menu-li">
                        <a href="#special-section" class="menu-text">Locations</a>
                    </li>

                    <li class="menu-li">
                        <a href="#about-container" class="menu-text">About US</a>
                    </li>

                    <li class="menu-li">
                        <a href="#reservation" class="menu-text" id="checkAvailability">Reservation</a>
                    </li>

                    <li class="menu-li">
                        <a href="#" class="menu-text">Reviews</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="content">
            <h1>EliteStay Reservations</h1>
            <p> Your gateway to unparalleled luxury and personalized hospitality,<br> where each moment is crafted to create a bespoke experience tailored to exceed your expectations.
            </p>
        
            <div class="btn">
                <button type="button">Login</button>
                <button type="button">Registration</button>
            </div>
        </div>
    `;

    const navbarSection = document.getElementById("navbar");

    if (navbarSection) {
        navbarSection.innerHTML = content;
    }


    const menuItems = document.querySelectorAll('.menu-text');

    // Add click event listener to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));

            // Add 'active' class to the clicked menu item
            this.classList.add('active');

        });


        });
    });




   

