// Recipe data that gets displayed on the page
const recipes = [
  {
    slug: 'tiramisu',
    title: 'Tiramisu',
    category: 'Dolce',
    description:
      'I love cheese, especially macaroni cheese babybel. Lancashire who moved my cheese cheddar the big cheese the big cheese cheeseburger jarlsberg parmesan.',
    image: 'https://picsum.photos/1000/700',
    ingredients: [
      ['Ingredient One', '3 cups'],
      ['Ingredient Two', '2 spoons'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially blue castello ricotta. Ricotta caerphilly
      caerphilly fromage frais pecorino cheeseburger say cheese st. agur blue
      cheese. Cream cheese fromage frais queso fromage fondue croque monsieur
      camembert de normandie fromage. Cow smelly cheese paneer roquefort feta
      lancashire taleggio pepper jack. Cheese triangles parmesan cow croque
      monsieur halloumi cheese strings cream cheese cow. Camembert de
      normandie monterey jack gouda queso melted cheese.
    </p>
    <p>
      Cheeseburger who moved my cheese dolcelatte. Who moved my cheese
      emmental cheesy feet cheese slices melted cheese stinking bishop brie
      cheesecake. Rubber cheese mozzarella manchego cheesy grin queso cheese
      slices stinking bishop monterey jack. Mozzarella pecorino st. agur blue
      cheese the big cheese cheesy grin brie cheese on toast the big cheese.
      Pepper jack stinking bishop caerphilly the big cheese dolcelatte ricotta
      cottage cheese babybel. Emmental ricotta pepper jack cheesy feet
      everyone loves fromage cheese triangles port-salut. Brie stinking bishop
      cheddar dolcelatte gouda cream cheese parmesan stinking bishop. Cheesy
      feet goat squirty cheese queso fromage frais melted cheese cauliflower
      cheese.
    </p>
    <p>
      Cheese slices mozzarella dolcelatte. Brie danish fontina fondue fondue
      when the cheese comes out everybody's happy cheesecake the big cheese
      dolcelatte. Monterey jack fromage frais st. agur blue cheese pepper jack
      lancashire mozzarella pepper jack cauliflower cheese. Cow stilton cheese
      triangles ricotta cheesy feet pecorino fromage airedale. Halloumi
      macaroni cheese paneer bavarian bergkase say cheese feta bavarian
      bergkase queso. Smelly cheese boursin port-salut cheese and biscuits.
    </p>
    <p>
      St. agur blue cheese squirty cheese cauliflower cheese. Mozzarella blue
      castello hard cheese boursin cheese and biscuits melted cheese danish
      fontina melted cheese. Cauliflower cheese macaroni cheese fromage
      pecorino swiss parmesan cheesecake cheese slices. Mozzarella cheese
      strings paneer halloumi st. agur blue cheese pecorino cauliflower cheese
      mozzarella. Queso taleggio fromage st. agur blue cheese emmental blue
      castello taleggio mascarpone. Cheese on toast cheesy feet croque
      monsieur queso mozzarella cheese on toast smelly cheese pepper jack.
      Danish fontina caerphilly squirty cheese cheesy grin bocconcini cheese
      triangles taleggio roquefort. Hard cheese feta emmental.
    </p>
    <p>
      Cheese slices caerphilly taleggio. Cheddar swiss brie cheese on toast
      roquefort dolcelatte cheddar red leicester. Boursin cheesy grin
      cheesecake bocconcini croque monsieur swiss blue castello cottage
      cheese. Camembert de normandie pepper jack smelly cheese cheesy grin
      airedale feta bocconcini ricotta. Paneer bocconcini babybel stinking
      bishop ricotta cheese and wine queso taleggio. Monterey jack fromage
      caerphilly.
    </p>`
  },
  {
    slug: 'caprese',
    title: 'Mozzarella Caprese',
    category: 'Antipasto',
    image: 'https://picsum.photos/1000/700',
    description:
      'I love cheese, especially pepper jack ricotta. Pecorino feta cheese on toast cow edam who moved my cheese goat camembert de normandie.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
    I love cheese, especially dolcelatte melted cheese. Macaroni cheese cheeseburger st. agur blue cheese edam cheese and biscuits boursin parmesan cheeseburger. Pecorino ricotta when the cheese comes out everybody's happy chalk and cheese fondue port-salut babybel cow. Cheesy grin everyone loves gouda cow bavarian bergkase chalk and cheese camembert de normandie who moved my cheese. Mozzarella fromage cheese triangles mascarpone.
    </p>
    <p>
    Everyone loves lancashire queso. Fromage when the cheese comes out everybody's happy feta ricotta say cheese cheddar stinking bishop mozzarella. Brie dolcelatte croque monsieur manchego cheese on toast cheese strings cauliflower cheese cottage cheese. Cheese strings pepper jack st. agur blue cheese.
    </p>
    <p>
    Queso goat parmesan. Cheese slices boursin mascarpone fromage frais parmesan smelly cheese babybel when the cheese comes out everybody's happy. Bocconcini pepper jack cheese slices airedale cut the cheese squirty cheese cut the cheese airedale. Ricotta babybel fondue emmental.
    </p>
    <p>
    Brie dolcelatte babybel. The big cheese gouda gouda melted cheese halloumi pecorino parmesan cream cheese. Roquefort cheeseburger everyone loves bavarian bergkase fondue cheese on toast who moved my cheese cheesecake. Jarlsberg cheese triangles jarlsberg babybel blue castello feta halloumi.
    </p>`
  }
];

// Fetching the recipe-query from the URL (`recipe=[something]`)
const params = new URL(document.location).searchParams;
const query = params.get('recipe'); // for `recipe.html?recipe=tiramisu`, this variable would now be 'tiramisu'

// Defining all the page elements that need to change
// (By applying `id="el-something"`, we can select them in JS with getElementById)
const elTag = document.getElementById('el-tag');
const elHeadline = document.getElementById('el-headline');
const elDescription = document.getElementById('el-description');
const elImage = document.getElementById('el-image');
const elIngredients = document.getElementById('el-ingredients');
const elInstructions = document.getElementById('el-instructions');

// We look through the data array to get the recipe data we need
const recipe = recipes.filter((item) => item.slug == query)[0];

// Before applying all the data to the page, we need to check if the query query actually relates to something in our data
// If it does, we keep going
if (recipe) {
  // First we set all the simple elements
  // ('Simple' meaning elements that only need to have their inner text set to the correct value)
  elTag.innerHTML = recipe.category;
  elHeadline.innerHTML = recipe.title;
  elDescription.innerHTML = recipe.description;
  elInstructions.innerHTML = recipe.instructions;

  // For the image, we need to set the src-attribute instead of innerHTML
  // And also the alt-text
  elImage.setAttribute('src', recipe.image);
  elImage.setAttribute('alt', recipe.title);

  // Finally, we need to generate the ingredients list
  // First we define a function that appends a list item to the list on the page.
  // As arguments, it needs an ingredient description and the amount
  function generateIngredientItem(ingredient, amount) {
    // Create the element & apply the necessary classes
    const elIngredient = document.createElement('li');
    elIngredient.className =
      'list-group-item d-flex justify-content-between align-items-center';

    // Create another element for the amount & apply classes
    const elAmount = document.createElement('span');
    elAmount.className = 'badge badge-primary badge-pill';

    // Since the amount is nested inside of the ingredient element, we first
    // set the innerHTML of the amount
    elAmount.innerHTML = amount;

    // Next, we set the innerHTML of the ingredient element and append the amount element
    elIngredient.innerHTML = ingredient;
    elIngredient.appendChild(elAmount);

    // Finally, we append the created element to the ingredients list on the page
    elIngredients.appendChild(elIngredient);
  }

  // Now, we iterate through the array of ingredients and call our function for each of them
  recipe.ingredients.forEach((tuple) =>
    generateIngredientItem(tuple[0], tuple[1])
  );
} else {
  // This code block will run, if the param in the URL isn't found on the recipe data array
  elHeadline.innerHTML = 'Error 404: Page not found :(';
}
