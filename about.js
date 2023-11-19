document.addEventListener("DOMContentLoaded", function () {
    const about = `
        <center>About Us</center>
        <div class="about">
            <div>
                <img src="images/about us.jpg" class="about-us" alt="About Us"/>
            </div>
            <div>
                <h2><u>About Our Website</u></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nulla totam laborum eius quos itaque sed voluptates rem ab, iste dignissimos sint porro doloremque quod delectus voluptatem expedita quibusdam aperiam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta a dolores consequuntur odio possimus voluptas ea repellat excepturi? Odio autem iure officiis at veritatis temporibus suscipit dolor. A, fuga!</p>
                <button class="btn1" type="button">Contact us</button>
            </div>
        </div>
    `;

    const aboutContainer = document.getElementById("about-container");

    if (aboutContainer) {
        aboutContainer.innerHTML = about;
    }
});
