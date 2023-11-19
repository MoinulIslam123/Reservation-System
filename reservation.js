document.addEventListener("DOMContentLoaded", function () {
    const reservationContent = `
        <div class="res">
            <h1>Reserve Your Hotel</h1>
        </div>

        <div class="container1">
            <h1>Hotel Reservation</h1>
            <form id="reservationForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="checkIn">Check-In Date:</label>
                <input type="date" id="checkIn" name="checkIn" required>

                <label for="checkOut">Check-Out Date:</label>
                <input type="date" id="checkOut" name="checkOut" required>

                <label for="roomType">Room Type:</label>
                <select id="roomType" name="roomType" required>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="suite">Suite</option>
                </select>

                

                <button class="btn1" type="submit">Submit</button>
            </form>
        </div>

        <div id="reservationDataDisplay"></div>
    `;

    const reservationSection = document.getElementById("reservation");

    if (reservationSection) {
        reservationSection.innerHTML = reservationContent;
    }

    const reservationForm = document.getElementById("reservationForm");

    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                checkIn: document.getElementById("checkIn").value,
                checkOut: document.getElementById("checkOut").value,
                roomType: document.getElementById("roomType").value,
            };

            // Get existing reservations or initialize an empty array
            const existingReservations = JSON.parse(localStorage.getItem("allReservations")) || [];

            // Add the new reservation to the array
            existingReservations.push(formData);

            // Store the updated array in local storage
            localStorage.setItem("allReservations", JSON.stringify(existingReservations));

        
            location.reload();
            
        });
    }

  
   
});
