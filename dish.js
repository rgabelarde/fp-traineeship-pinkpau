async function getRandomRecipe() {
	const url = "https://api.spoonacular.com/recipes/random";
	try {
		const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
	return json;
  } catch (error) {
    console.error(error.message);
  }
}

const recipe = getRandomRecipe();
document.getElementById("recipe-title").innerHTML = recipe.title;
document.getElementById("recipe-image").innerHTML = recipe.image;
document.getElementById("recipe-image").innerHTML = recipe.image;
document.getElementById("recipe-image").innerHTML = recipe.image;