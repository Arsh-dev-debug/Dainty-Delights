// Select all recipe images
const recipeImages = document.querySelectorAll('.recipe-img');

// Loop through each image and add an event listener
recipeImages.forEach(image => {
  image.addEventListener('click', () => {
    // Get the parent .recipe-card of the clicked image
    const parentCard = image.closest('.recipe-card');
    
    // Find all recipe cards
    const allCards = document.querySelectorAll('.recipe-card');
    
    // Close all recipe cards first (remove the 'active' class)
    allCards.forEach(card => {
      if (card !== parentCard) {
        card.classList.remove('active');
      }
    });
    
    // Toggle the 'active' class on the clicked card to show or hide its recipe details
    parentCard.classList.toggle('active');
  });
});
