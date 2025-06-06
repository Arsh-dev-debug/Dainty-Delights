document.addEventListener('DOMContentLoaded', function () {
    const recipeSelect = document.getElementById('recipe');
    const recipeDetailsSection = document.querySelector('.recipe-details');
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const userNameSpan = document.getElementById('user-name');

    // Function to toggle the recipe details visibility
    function toggleRecipeDetails() {
        if (recipeSelect.value === 'yes') {
            recipeDetailsSection.style.display = 'block'; // Show the recipe details section
        } else {
            recipeDetailsSection.style.display = 'none'; // Hide the recipe details section
        }
    }

    // Initially set the visibility based on the default selection
    toggleRecipeDetails();

    // Event listener for change on the 'recipe' select element
    recipeSelect.addEventListener('change', toggleRecipeDetails);

    // Form submit handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from actually submitting

        const userName = document.getElementById('name').value;

        // Display the thank you message
        userNameSpan.textContent = userName;
        thankYouMessage.style.display = 'block';

        // Redirect to the main website after 3 seconds
        setTimeout(function() {
            window.location.href = "DAINTYDELIGHTS.html";  // Replace with your website's URL
        }, 3000); // Redirect after 3 seconds

        responseMessage.innerText = `Thank you, ${name}! Your feedback has been submitted.`;

    // Clear the form
    this.reset();
     // Redirect to the homepage after a short delay
     setTimeout(() => {
        window.location.href = 'DAINTYDELIGHTS.html'; 
    }, 2000);
    });
});
