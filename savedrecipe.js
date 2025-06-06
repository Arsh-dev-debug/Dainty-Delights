// Save or Unsave Recipe Functionality
document.querySelectorAll('.recipe-card').forEach((card) => {
    const saveBtn = card.querySelector('.save-recipe-btn');
    const unsaveBtn = card.querySelector('.unsave-recipe-btn');
  
    const recipeTitle = saveBtn.getAttribute('data-title');
    const recipeText = card.querySelector('.recipe-text').innerHTML;
  
    // Check if the recipe is already saved
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const isRecipeSaved = savedRecipes.some((recipe) => recipe.title === recipeTitle);
  
    // Toggle button visibility based on saved status
    if (isRecipeSaved) {
      saveBtn.style.display = 'none';
      unsaveBtn.style.display = 'inline-block';
    }
  
    // Save Recipe
    saveBtn.addEventListener('click', () => {
      const updatedRecipes = [...savedRecipes, { title: recipeTitle, content: recipeText }];
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  
      saveBtn.style.display = 'none';
      unsaveBtn.style.display = 'inline-block';
  
      alert(`"${recipeTitle}" has been saved!`);
    });
  
    // Unsave Recipe
    unsaveBtn.addEventListener('click', () => {
      const updatedRecipes = savedRecipes.filter((recipe) => recipe.title !== recipeTitle);
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  
      saveBtn.style.display = 'inline-block';
      unsaveBtn.style.display = 'none';
  
      alert(`"${recipeTitle}" has been unsaved!`);
    });
  });
  