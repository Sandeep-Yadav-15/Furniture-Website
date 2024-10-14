// Smooth scrolling for navigation links
const navLinksArray = document.querySelectorAll('.nav-links a'); // Renamed to 'navLinksArray'
/*
•document.querySelectorAll('.nav-links a') selects all <a> elements inside the .nav-links container. These are the links in the navigation bar.
•The variable navLinksArray stores all the navigation links. It’s renamed from navLinks to avoid conflict with the hamburger menu functionality.
*/

//Adding Event Listener for Smooth Scrolling:
navLinksArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump to section
        /*
        •We loop through each link using .forEach() and add an event listener for the click event.
        •The e.preventDefault() method stops the browser from immediately jumping to the section, allowing us to implement smooth scrolling instead.
        */

        //Smooth Scrolling Behavior:
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
       /*
       •link.getAttribute('href') retrieves the href value of the clicked link (e.g., #home or #service).
        •substring(1) removes the # symbol, leaving only the section ID (like home, service, etc.).
        •document.getElementById(targetId) gets the corresponding section element by its ID.
       */ 

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        /*
        •window.scrollTo() scrolls the page to the position of the target section.
        •targetSection.offsetTop gets the vertical position (from the top) of the target section.
        •behavior: 'smooth' ensures that the scrolling is smooth rather than an abrupt jump.
        */

        //Auto-Close the Mobile Menu:
        // Optionally close the mobile menu after clicking on a link
        if (window.innerWidth <= 576) { // Check if on mobile
            navLinks.classList.remove('show'); // Close the menu
        }
        /*•This check ensures that if the window width is less than or equal to 576px (small devices like smartphones), the mobile navigation menu will automatically close after clicking a link.
        •navLinks.classList.remove('show') removes the show class from the mobile navigation, hiding the menu after a link is clicked.*/
    });
});


//Hamburger Menu Toggle:
// Selecting the hamburger icon and the navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
/*
•hamburger selects the hamburger icon by its ID (#hamburger).
•navLinks selects the navigation links container by its ID (#nav-links). This refers to the entire list of navigation links.
*/


// Event listener to toggle the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});
/*
•We add an event listener to the hamburger icon for the click event.
•navLinks.classList.toggle('show') toggles the show class on the navigation links. This makes the menu appear (when show is added) or disappear (when show is removed).
•The show class is defined in CSS to display the navigation links in mobile view.*/ 

 // Script to dynamically set the current year
 document.getElementById('current-year').textContent = new Date().getFullYear();

 // JavaScript to toggle the visibility of the hidden section
// document.getElementById('btn').addEventListener('click', function() {
document.getElementById('btn').addEventListener('click', ()=> {
    const moreInfoSection = document.getElementById('more-info');
    
    // Toggle the 'hidden' class
    moreInfoSection.classList.toggle('hidden');
    
    // if (!moreInfoSection.classList.contains('hidden')) {
    //     this.textContent = 'Show Less';
    // } else {
    //     this.textContent = 'Discover More';
    // }
    document.getElementById('btn').textContent = !moreInfoSection.classList.contains('hidden') 
    ? 'Show Less' 
    : 'Discover More';
    //"If the 'more-info' element does not have the 'hidden' class, set the button text to 'Show Less', otherwise set it to 'Discover More'."
});


// JavaScript to handle 'Buy Now' button clicks
// Selecting All Buy Now Buttons:
document.querySelectorAll('.btn').forEach(button => {
    /*document.querySelectorAll('.btn'): This line selects all the elements in the document with the class .btn (these are the "Buy Now" buttons).
forEach(button => {...}): It loops through each of these button elements. For each button, it runs the code inside the block.*/ 

// Adding an Event Listener to Each Button:
    button.addEventListener('click', (event) => {
        /*addEventListener('click', ...): This attaches an event listener to the button. It listens for a click event. When the button is clicked, it triggers the function inside the parentheses.
(event) => {...}: The function runs when the button is clicked, and the event object (event) gives information about the click event.*/

        // Get the product name from the 'data-product' attribute of the clicked button
        const productName = event.target.getAttribute('data-product');
        /*event.target: Refers to the button that was clicked.
getAttribute('data-product'): This gets the value of the data-product attribute from the button element. The data-product attribute holds the name of the product. For example, if the button has data-product="Bruna Cush Chair", the value returned will be "Bruna Cush Chair".*/ 
        
        // Show an alert to confirm the purchase
        alert(`You have successfully purchased: ${productName}! Thank you for shopping at Heritage Home Furniture.`);
        /*alert(...): Shows a popup alert to the user with a message. It confirms that the user has purchased the product. The message includes the product name (e.g., "You have successfully purchased: Bruna Cush Chair!").*/
        
        // Redirect to the checkout page with the product name in the query parameter
        window.location.href = 'checkout.html?product=' + productName;

        /*window.location.href: This changes the current webpage URL to the provided one, redirecting the user to another page.
'checkout.html?product=' + productName: Redirects the user to checkout.html, passing the product name as a query parameter (e.g., checkout.html?product=Bruna%20Cush%20Chair). The product name is passed in the URL to be retrieved on the checkout page.*/ 
    });
});


//Getting the search input field
const searchInput = document.querySelector('#search input[type="text"]');
/*
• This line selects the search input field from the HTML and stores in the searchInput variable.
• The input field is found using a query selector for the input[type="text"] element inside the #search section.
*/

//Event listener for user input
searchInput.addEventListener('input',(event) =>{
    const query = event.target.value.toLowerCase().trim();
    /*
    •An event listener is added to the search input that triggers whenever the user types something.
    • event.target.value gets the current value (text) the user is typing.
    •toLowerCase() converts the search query to lowercase for case-insensitive comparison.
    • .trim() remove any extra spaces before and after the input to ensure clean comparisions.
    */

    //List of Sections to search
    const sections = [
        {id: 'home',title: 'Home'},
        {id: 'service', title: 'Service'},
        {id: 'product', title: 'Product'},
        {id: 'store', title: 'Store'},
        {id: 'search', title: 'Search'}
    ];
    /*
    • This array contains objects representing each section on the page.Each object has two properties
    • id: The HTML id of the section.
    • title: The name of the section that will be compared to the user's search query.
    • These sections correspond to the navigation links or major sections of the website (Home, Service, Product, etc.) 
    */

     // Get all products (h4 titles and descriptions).
    const products = document.querySelectorAll('.product .info');
    /*•This line selects all elements with the .info class inside .product containers. The .info class contains product details such as the product name (h4)
     and product description (p.description).
    •querySelectorAll() returns a NodeList of all .info elements for each product.
    */

     // First, check for section matches
    let matchedSection = sections.find(section => section.title.toLowerCase().includes(query));
    /*
    • The find method is used to search through the sections array.It checks if the search query is part of any section title. 
    •section.title.toLowerCase().includes(query) performs a case-insensitive search.
    •If a section matches the query, it is stored in the matchedSection variable.
    */

    // If a section matches, scroll to the section
    if (matchedSection) {
        const targetSection = document.getElementById(matchedSection.id);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
    
    /*
    •If a section is found, the getElementById method is used to locate that section in the DOM.
    •window.scrollTo() is then used to scroll smoothly to the section. The behavior: 'smooth' ensures the scrolling transition is smooth, and top: targetSection.offsetTop moves the page to the top of the matched section.
    */

    
    else {
        //Clearing Previous Product Highlights
        products.forEach(product => {
            product.closest('.product').style.border='none';
    });
    /*•Before starting the product search, any previously highlighted products are reset by removing their borders.
       • forEach() iterates over all products, and closest('.product') ensures we target the full product container. The border is then set to none.*/

    // Search through products (both name and description)
    let matchedProduct = Array.from(products).find(product => {
        const productName = product.querySelector('h4').textContent.toLowerCase();
        const productDescription = product.querySelector('.description').textContent.toLowerCase();
        return productName.includes(query) || productDescription.includes(query);
    });
    /*
    •We now search through the product list (products) using the find() method.
    •The querySelector('h4') fetches the product name inside the .info container, and querySelector('.description') fetches the product description.
    •We use toLowerCase() to convert both the product name and description to lowercase to perform a case-insensitive search.
    •includes(query) checks if the product name or description contains the search query.
    •If a match is found, the product is stored in matchedProduct.*/

    // If a product matches, highlight and scroll to it
    if (matchedProduct) {
        const productElement = matchedProduct.closest('.product');
            productElement.scrollIntoView({ behavior: 'smooth' });
            productElement.style.border = '2px solid #6a5a4d'; // Highlight the product with a border
    }
    /*
    •If a product matches the query, the closest('.product') method is used to find the parent container for the product.
    •scrollIntoView() scrolls smoothly to the product so that the user can see it.
    •The product is highlighted by adding a border (2px solid #6a5a4d) to its container.
    */
    }
});












