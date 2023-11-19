    const products = [
        { id: 'product1', name: 'Maldives', image: 'images/ml.jpeg', price: 'An ultimate luxurious destination.' },
        { id: 'product1', name: 'Mauritius', image: 'images/mauritius.jpeg', price: 'One of the best beach in the world.' },
        { id: 'product1', name: 'Cayman-Island', image: 'images/cayman-island.jpeg', price: 'An eye satisfying view of beach.' },
        { id: 'product1', name: 'Indonesia', image: 'images/indo.jpeg', price: 'Captivates tourists with its stunning landscapes. ' },
        { id: 'product2', name: 'Austria', image: 'images/des4.jpeg', price: 'Charms visitors with its rich history.' },
        { id: 'product2', name: 'Russia', image: 'images/russ.jpeg', price:  'A mesmerizing blend of natural splendor.' },
        { id: 'product2', name: 'Mexico', image: 'images/des3.jpeg', price: 'Creating a fiesta for the senses.' },
        { id: 'product2', name: 'Switzerland', image: 'images/switz.jpeg', price: 'A symphony of natural and cultural excellence.' },
        { id: 'product3', name: 'Astro resort', image: 'images/relax1.jpeg', price: 'A holiday getaway where the universe awaits.' },
        { id: 'product3', name: 'Red Lion Resort', image: 'images/relax2.jpeg', price: 'Do an unforgettable adventure.' },
        { id: 'product3', name: 'Beachfront Resort', image: 'images/relax3.jpeg', price: 'A tropical waterfront resort. ' },
        { id: 'product3', name: 'Elite Resort', image: 'images/elite.jpeg', price: 'Experience Pure Bliss and Relaxation.' },
        { id: 'product4', name: 'Pattaya', image: 'images/des1.jpeg', price: 'A lively and vibrant coastal city.' },
        { id: 'product4', name: 'Mumbai', image: 'images/des2.jpeg', price: 'Cosmpolitan and financial capital of India.' },
        { id: 'product4', name: 'Honk Kong', image: 'images/des3.jpeg', price: 'Honk kong dazzles with its iconic skyline.' },
        { id: 'product4', name: 'Costa Rica', image: 'images/cr.jpeg', price: ' A portrait of a tropical paradise. ' },
    

    ];






    function changegal(val) {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.8s, transform 0.8s';
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);


        // Access the passed value
        console.log("Selected value:", val);

        // Access the product container by index
        let pro = document.getElementsByClassName("product-container")[0];
        pro.innerHTML ="";
        // Create a new div for products
        // let d = document.createElement('div');

        for (let i = 0; i < products.length; i++) {
        
            const productElement = document.createElement('div');
            productElement.classList.add('product');
        
            // productElement.id = products[i].id;
            if (products[i].id === val || val === "pd") {
                // Modify this part to display relevant product information
            // p.innerText = `Product Name: ${products[i].name}, Price: ${products[i].price}`;
                productElement.innerHTML = `
                <h2>${products[i].name}</h2>
                <img src="${products[i].image}" class="img" alt="Product Image">
                <p>${products[i].price}</p>
                <button class="btn1" type="button">View more</button>
            `;  
            // Append the product container div to the main product container
        pro.append(productElement);
        observer.observe(productElement);
        productElement.style.opacity = 0;
        productElement.style.transform = 'translateX(50%)';
        setTimeout(() => {
            observer.observe(productElement);
        }, 1000 * i);
                // Append the paragraph to the product container div
                // d.appendChild(productElement);
            }
        }
        // Highlighting menu items
        const menuItems = document.querySelectorAll(".menu-bar a");
        menuItems.forEach((item) => {
            item.classList.remove('active');
            if (val === "pd" && item.getAttribute("data-target") === "all") {
                item.classList.add('active');
            } else if (item.getAttribute("data-target") === val) {
                item.classList.add('active');
            }
        });
    }
    

    changegal("pd");
