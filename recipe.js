// Recipe data that gets displayed on the page

// Vitello Tonnato, Mozzarella caprese, prociutto melone
// Primo: Taglietelle al tartufo, rissoto con calamari, spaghetti bolognese
// secondo: filetto di maiale ai funghi, Milanese, branzino al sale
// dolce: Tiramisu, panna cotta, semifreddo al bergamotto
const recipes = [
  {
    slug: 'vitellotonnato',
    title: 'Vitello Tonnato',
    category: 'Antipasto',
    description:
      "I love cheese, especially dolcelatte port-salut. Cheesy feet macaroni cheese cut the cheese when the cheese comes out everybody's happy halloumi say cheese say cheese blue castello.",
    image: 'Images/antiVit.jpg',
    ingredients: [
      ['Ingredient One', '3 cups'],
      ['Ingredient Two', '2 spoons'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `
    <p>
      I love cheese, especially dolcelatte port-salut. Cheesy feet macaroni cheese cut the cheese when the cheese comes out everybody's happy halloumi say cheese say cheese blue castello. Chalk and cheese mozzarella who moved my cheese who moved my cheese red leicester mozzarella st. agur blue cheese cheesecake. Blue castello boursin halloumi squirty cheese bocconcini cheesy feet mascarpone taleggio. Ricotta boursin chalk and cheese cheesy feet smelly cheese parmesan smelly cheese gouda. Dolcelatte the big cheese st. agur blue cheese cheese triangles.
    </p>
    <p>
      Swiss mascarpone who moved my cheese. Cheesecake blue castello stilton paneer hard cheese chalk and cheese cow roquefort. Cheesecake airedale bavarian bergkase pecorino squirty cheese mozzarella rubber cheese port-salut. Monterey jack jarlsberg cheese triangles cheese and biscuits fromage say cheese cheese strings monterey jack. Boursin roquefort fromage frais camembert de normandie halloumi feta goat squirty cheese. Pepper jack melted cheese goat jarlsberg fromage dolcelatte cottage cheese taleggio. Caerphilly roquefort port-salut say cheese cheese strings fromage frais bavarian bergkase mascarpone. Brie queso cheese and wine cheddar cheese slices.
    </p>
    `
  },
  {
    slug: 'mozzarellacaprese',
    title: 'Mozzarella Caprese',
    category: 'Antipasto',
    description:
      'I love cheese, especially cheese and wine stilton. Bocconcini chalk and cheese fromage frais say cheese pepper jack monterey jack cottage cheese bavarian.',
    image: 'Images/antiMoz.jpg',
    ingredients: [
      ['Ingredient One', '3 cups'],
      ['Ingredient Two', '2 spoons'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially cheese and wine stilton. Bocconcini chalk and cheese fromage frais say cheese pepper jack monterey jack cottage cheese bavarian bergkase. Swiss cottage cheese gouda st. agur blue cheese red leicester st. agur blue cheese st. agur blue cheese parmesan. Taleggio mascarpone rubber cheese bavarian bergkase croque monsieur cheddar cheese triangles danish fontina. Cut the cheese melted cheese cut the cheese macaroni cheese croque monsieur manchego lancashire ricotta. Manchego feta pecorino manchego when the cheese comes out everybody's happy st. agur blue cheese.
    </p>
    <p>
      Say cheese smelly cheese cheeseburger. Airedale cheese on toast the big cheese pepper jack jarlsberg jarlsberg bavarian bergkase cheese on toast. Cauliflower cheese port-salut monterey jack dolcelatte cut the cheese squirty cheese pepper jack boursin. The big cheese swiss babybel caerphilly smelly cheese bavarian bergkase port-salut camembert de normandie. Cheesy grin blue castello squirty cheese fondue feta blue castello feta fromage. Cheese triangles port-salut port-salut bavarian bergkase chalk and cheese rubber cheese queso cheese and wine. Cheese and wine swiss manchego pepper jack fromage frais lancashire cut the cheese mozzarella. Cheddar say cheese queso dolcelatte cheese strings.
    </p>`
  },
  {
    slug: 'prosciuttomelone',
    title: 'Prosciutto Melone',
    category: 'Antipasto',
    description:
      'I love cheese, especially cheesy feet macaroni cheese. The big cheese fromage frais cheese and wine swiss rubber cheese hard cheese halloumi mozzarella.',
    image: 'Images/antiProci.jpg',
    ingredients: [
      ['Ingredient One', '3 cups'],
      ['Ingredient Two', '2 spoons'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially cheesy feet macaroni cheese. The big cheese fromage frais cheese and wine swiss rubber cheese hard cheese halloumi mozzarella. Everyone loves cottage cheese cheddar the big cheese brie babybel fromage frais fromage. Say cheese the big cheese stilton manchego cheesecake cheddar babybel cottage cheese. Hard cheese chalk and cheese cream cheese lancashire cheesecake cheesecake smelly cheese mascarpone. Goat dolcelatte dolcelatte edam danish fontina stinking bishop.
    </p>
    <p>
      Bocconcini ricotta stilton. Cheese strings cheesecake hard cheese brie cheese and wine feta fondue croque monsieur. Squirty cheese manchego boursin cheese strings taleggio manchego boursin fromage frais. Monterey jack cheesecake mascarpone dolcelatte cheesecake jarlsberg cut the cheese cheese and biscuits. Cheddar halloumi red leicester cheese triangles jarlsberg cheesy feet pecorino cheddar. Hard cheese cheddar when the cheese comes out everybody's happy cottage cheese parmesan everyone loves cheesecake fondue. Swiss feta paneer stilton hard cheese goat lancashire danish fontina. When the cheese comes out everybody's happy jarlsberg.
    </p>`
  },
  {
    slug: 'tagliatelle',
    title: 'Taglietelle Al Tartufo',
    category: 'Primo',
    image: 'Images/primTag.jpg',
    description:
      'I love cheese, especially fromage cheddar. Danish fontina who moved my cheese cream cheese pecorino cow queso melted cheese goat.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially fromage cheddar. Danish fontina who moved my cheese cream cheese pecorino cow queso melted cheese goat. Halloumi cheese slices cream cheese melted cheese stilton squirty cheese red leicester feta. Pepper jack roquefort paneer fondue halloumi fondue rubber cheese cheese and wine. Cheeseburger swiss mascarpone stinking bishop roquefort halloumi hard cheese paneer. Mozzarella jarlsberg cheese on toast the big cheese cheese triangles cheese strings smelly cheese cut the cheese. Everyone loves cauliflower cheese babybel.
    </p>
    <p>
      Cream cheese the big cheese gouda. Stinking bishop cheese and wine squirty cheese the big cheese stilton stilton gouda red leicester. Pecorino boursin mozzarella feta macaroni cheese taleggio everyone loves st. agur blue cheese. Cauliflower cheese cheese triangles cheesecake parmesan cut the cheese cauliflower cheese cottage cheese cheesy grin. Manchego swiss cottage cheese halloumi croque monsieur cheese slices babybel dolcelatte. Smelly cheese parmesan airedale macaroni cheese cut the cheese.
    </p>`
  },
  {
    slug: 'risotto',
    title: 'Risotto Con Calamari',
    category: 'Primo',
    image: 'Images/primRisso.jpg',
    description:
      'I love cheese, especially cream cheese everyone loves. Port-salut parmesan queso cheesecake port-salut monterey jack caerphilly lancashire.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially cream cheese everyone loves. Port-salut parmesan queso cheesecake port-salut monterey jack caerphilly lancashire. Macaroni cheese cheesy feet red leicester brie cheesy feet red leicester bavarian bergkase manchego. Chalk and cheese caerphilly port-salut goat dolcelatte goat everyone loves stinking bishop. Dolcelatte chalk and cheese red leicester blue castello jarlsberg camembert de normandie say cheese camembert de normandie. Cheese triangles cut the cheese cheese triangles gouda cheese triangles mozzarella cheesy grin feta. Cheesecake brie.
    </p>
    <p>
      Hard cheese cheese and wine cheesy feet. Cheddar cheesecake chalk and cheese everyone loves mozzarella cut the cheese cheese slices cream cheese. Chalk and cheese danish fontina fondue emmental cheese slices cheese strings edam cheese and wine. Fromage frais cheese slices mascarpone cheddar hard cheese cheese strings pecorino smelly cheese. Pepper jack the big cheese camembert de normandie stilton jarlsberg mozzarella port-salut who moved my cheese. Caerphilly dolcelatte halloumi paneer hard cheese stinking bishop dolcelatte manchego. Croque monsieur gouda goat.
    </p>`
  },
  {
    slug: 'spaghettibolognese',
    title: 'Spaghetti Bolognese',
    category: 'Primo',
    image: 'Images/priSpag.jpg',
    description:
      'I love cheese, especially edam swiss. Stilton croque monsieur cheese and wine bocconcini say cheese blue castello roquefort babybel.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially edam swiss. Stilton croque monsieur cheese and wine bocconcini say cheese blue castello roquefort babybel. Cream cheese goat who moved my cheese cheese triangles port-salut cheese and wine pecorino cut the cheese. Hard cheese gouda jarlsberg when the cheese comes out everybody's happy cheeseburger squirty cheese fromage frais squirty cheese. Mozzarella emmental cream cheese smelly cheese gouda stilton boursin ricotta. Lancashire stilton cauliflower cheese blue castello jarlsberg croque monsieur edam smelly cheese. Paneer goat cheesy grin when the cheese comes out everybody's happy.
    </p>
    <p>
      Emmental cheese triangles edam. Jarlsberg cheese on toast monterey jack roquefort cheddar paneer mascarpone cream cheese. Taleggio lancashire cut the cheese danish fontina bocconcini when the cheese comes out everybody's happy cheese and biscuits camembert de normandie. Cream cheese feta goat cheesecake monterey jack chalk and cheese cream cheese parmesan. Lancashire who moved my cheese cut the cheese swiss fromage the big cheese croque monsieur cheese on toast. Parmesan everyone loves cream cheese cauliflower cheese rubber cheese.
    </p>`
  },
  {
    slug: 'filetto',
    title: 'Filetto Di Maiale Ai Funghi',
    category: 'Secondo',
    image: 'Images/secFil.jpg',
    description:
      'I love cheese, especially bavarian bergkase ricotta. Airedale dolcelatte roquefort port-salut red leicester squirty cheese emmental edam.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially bavarian bergkase ricotta. Airedale dolcelatte roquefort port-salut red leicester squirty cheese emmental edam. Melted cheese camembert de normandie the big cheese cheese triangles manchego dolcelatte cheese and biscuits caerphilly. Cheese and biscuits cheese triangles danish fontina say cheese blue castello swiss macaroni cheese smelly cheese. Cheese strings cheesy feet babybel stinking bishop babybel squirty cheese pecorino pepper jack. Cheddar cheese strings camembert de normandie mascarpone cheese slices manchego queso rubber cheese. Red leicester stinking bishop macaroni cheese cheese on toast cheesy feet smelly cheese camembert de normandie feta. Mascarpone edam.
    </p>
    <p>
      Camembert de normandie queso pepper jack. Cheese triangles everyone loves taleggio cheese and wine macaroni cheese cream cheese cream cheese airedale. Halloumi cheeseburger cheesy grin cheese on toast cheese and biscuits chalk and cheese danish fontina camembert de normandie. Everyone loves swiss cheese and biscuits roquefort fromage parmesan fondue caerphilly. Cheddar roquefort roquefort queso fondue caerphilly mascarpone cauliflower cheese. Roquefort cauliflower cheese when the cheese comes out everybody's happy paneer pepper jack babybel bocconcini when the cheese comes out everybody's happy. Cheesy grin macaroni cheese brie.
    </p>`
  },
  {
    slug: 'milanese',
    title: 'Milanese',
    category: 'Secondo',
    image: 'Images/secMil.jpg',
    description:
      'I love cheese, especially cottage cheese bavarian bergkase. Croque monsieur camembert de normandie hard cheese chalk and cheese ricotta fromage the big cheese jarlsberg.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially cottage cheese bavarian bergkase. Croque monsieur camembert de normandie hard cheese chalk and cheese ricotta fromage the big cheese jarlsberg. Swiss mascarpone pepper jack babybel everyone loves pepper jack babybel caerphilly. Cheesecake stilton monterey jack who moved my cheese mozzarella caerphilly cheese and wine boursin. Croque monsieur cheese strings parmesan squirty cheese roquefort gouda red leicester cheese triangles. Cheesy grin swiss cheese on toast port-salut cheesy feet.
    </p>
    <p>
      Lancashire cut the cheese cream cheese. Cheese slices hard cheese cheese and biscuits boursin stinking bishop ricotta stilton cheese strings. Cheesy grin caerphilly jarlsberg fondue stinking bishop rubber cheese chalk and cheese bocconcini. Red leicester squirty cheese cheese slices feta cow fromage lancashire cheeseburger. Cauliflower cheese stinking bishop cheddar queso goat fromage frais fondue croque monsieur. Fromage roquefort ricotta roquefort macaroni cheese mascarpone lancashire taleggio. Cheesy feet gouda camembert de normandie port-salut cheese strings cut the cheese cheeseburger cheesy feet. Cheddar cheese triangles airedale roquefort babybel cheese and wine.
    </p>`
  },
  {
    slug: 'branzino',
    title: 'Branzino Al Sale',
    category: 'Secondo',
    image: 'Images/secBran.jpg',
    description:
      'I love cheese, especially airedale cheesecake. Fondue blue castello cheese on toast cottage cheese pecorino cheesecake cut the cheese croque monsieur.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially airedale cheesecake. Fondue blue castello cheese on toast cottage cheese pecorino cheesecake cut the cheese croque monsieur. Rubber cheese fromage frais macaroni cheese cut the cheese taleggio cheese on toast fromage cheesy feet. Lancashire dolcelatte stilton fromage cauliflower cheese cheddar cheesecake the big cheese. Cheese on toast fromage halloumi halloumi hard cheese boursin roquefort swiss. Pepper jack fondue swiss cheesecake feta.
    </p>
    <p>
      Everyone loves queso fondue. Fromage cheese slices goat paneer cream cheese swiss emmental everyone loves. Danish fontina croque monsieur cheese and wine stinking bishop cheeseburger cheesy feet rubber cheese cottage cheese. Cream cheese pepper jack swiss boursin red leicester monterey jack blue castello rubber cheese. Edam swiss pecorino everyone loves ricotta manchego port-salut who moved my cheese. Cheese triangles paneer pepper jack rubber cheese goat cheese and wine taleggio.
    </p>`
  },
  {
    slug: 'tiramisu',
    title: 'Tiramisu',
    category: 'Dolce',
    image: 'Images/dolcTirami.jpg',
    description:
      'I love cheese, especially cream cheese fromage frais. Chalk and cheese taleggio cheeseburger who moved my cheese stilton cheese strings cheesy grin halloumi.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially cream cheese fromage frais. Chalk and cheese taleggio cheeseburger who moved my cheese stilton cheese strings cheesy grin halloumi. Cheese strings melted cheese manchego cheese slices emmental bocconcini croque monsieur dolcelatte. Cream cheese airedale bavarian bergkase manchego paneer the big cheese hard cheese fromage frais. Cheesy feet fondue.
    </p>
    <p>
      Bavarian bergkase brie cut the cheese. Cottage cheese roquefort hard cheese the big cheese cut the cheese brie croque monsieur macaroni cheese. Swiss bocconcini blue castello manchego queso everyone loves cheese on toast stilton. Croque monsieur feta fromage when the cheese comes out everybody's happy stilton goat boursin port-salut. Airedale cream cheese dolcelatte.
    </p>`
  },
  {
    slug: 'pannacotta',
    title: 'Panna Cotta',
    category: 'Dolce',
    image: 'Images/dolcCotta.jpg',
    description:
      'I love cheese, especially airedale red leicester. Red leicester ricotta cheese triangles bavarian bergkase emmental jarlsberg mascarpone st. agur blue cheese.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially airedale red leicester. Red leicester ricotta cheese triangles bavarian bergkase emmental jarlsberg mascarpone st. agur blue cheese. Chalk and cheese stinking bishop cheese slices swiss cheese and biscuits roquefort cheeseburger melted cheese. Babybel roquefort jarlsberg bocconcini edam hard cheese ricotta edam. Red leicester cauliflower cheese.
    </p>
    <p>
      Paneer feta port-salut. Queso swiss macaroni cheese fondue caerphilly cheesecake feta bocconcini. Cheese slices edam cauliflower cheese say cheese rubber cheese cut the cheese caerphilly when the cheese comes out everybody's happy. Paneer parmesan pecorino.
    </p>`
  },
  {
    slug: 'semifreddo',
    title: 'Semifreddo Al Bergamotto',
    category: 'Dolce',
    image: 'Images/dolcsem.jpg',
    description:
      'I love cheese, especially brie st. agur blue cheese. Taleggio pecorino brie edam cheese and wine fromage frais cheesecake cream cheese.',
    ingredients: [
      ['Ingredient One', '34 cups'],
      ['Ingredient Two', '212 spoons'],
      ['Mozarella', '2 planets'],
      ['Cheese', 'all of it, obvs']
    ],
    instructions: `<p>
      I love cheese, especially brie st. agur blue cheese. Taleggio pecorino brie edam cheese and wine fromage frais cheesecake cream cheese. Say cheese mascarpone stinking bishop queso chalk and cheese dolcelatte cheddar swiss. Mozzarella caerphilly rubber cheese roquefort cheese slices mozzarella danish fontina fondue. Macaroni cheese.
    </p>
    <p>
      Cut the cheese parmesan everyone loves. Gouda the big cheese hard cheese who moved my cheese airedale cauliflower cheese the big cheese pepper jack. Fromage frais caerphilly cheese triangles cream cheese cheese and biscuits camembert de normandie lancashire parmesan. Gouda bocconcini cheese strings cream cheese fromage airedale.
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

// We also need the navigation items as elements in our JS,
// so we can add the "active"-class to the category we're looking at
const navAntipasto = document.getElementById('nav-antipasto');
const navPrimo = document.getElementById('nav-primo');
const navSecondo = document.getElementById('nav-secondo');
const navDolce = document.getElementById('nav-dolce');

// We look through the data array to get the recipe data we need
const recipe = recipes.filter((item) => item.slug == query)[0];

// Before applying all the data to the page, we need to check if the query actually relates to something in our data
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

  function injectRecipeLinks(category, slug) {
    const categoryRecipes = recipes.filter(
      (item) => item.category === category
    );
    const otherRecipes = categoryRecipes.filter(
      (item) => item.slug !== recipe.slug
    );

    elRecipeHeadlines = document.getElementById('recipes-headline');
    elRecipeHeadlines.innerHTML = `Other Recipes in ${category}`;

    // elRecipeOneTitlelink = document.getElementById('recipe-one-titlelink');
    // elRecipeOneTitlelink.innerHTML = otherRecipes[0].title;
    // elRecipeOneTitlelink.setAttribute('href', `recipe.html?recipe=vitellotonnato`)

    const otherRecipesHTML = `
    <div class="col-md">
          <div
            class="card border-primary mb-3 mx-auto"
            style="max-width: 20rem;"
          >
            <div class="card-body">
              <h4 class="card-title">
                <a
                  href="recipe.html?recipe=${otherRecipes[0].slug}"
                >
                  ${otherRecipes[0].title}
                </a>
              </h4>
              <div class="image mb-3">
                <img
                  src="${otherRecipes[0].image}"
                  alt="${otherRecipes[0].title}"
                  class="rounded img img-responsive full-width"
                />
                <div class="middle">
                  <i class="fas fa-clock solid"> 15 min</i>
                  <br />
                  <i class="fas fa-smile solid"> Easy</i>
                  <br />
                  <i class="fas fa-fire-alt solid"> Calories</i>
                </div>
              </div>
              <p class="card-text">
              ${otherRecipes[0].description}
              </p>
              <button
                type="button"
                class="btn btn-primary"
                onclick="loadRecipe('${otherRecipes[0].slug}')"
              >
                Read
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onclick="showShareModal('${otherRecipes[0].slug}')"
              >
                Share
              </button>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div
            class="card border-primary mb-3 mx-auto"
            style="max-width: 20rem;"
          >
            <div class="card-body">
              <h4 class="card-title">
                <a
                  href="recipe.html?recipe=${otherRecipes[1].slug}"
                >
                  ${otherRecipes[1].title}
                </a>
              </h4>
              <div class="image mb-3">
                <img
                  src="${otherRecipes[1].image}"
                  alt="${otherRecipes[1].title}"
                  class="rounded img img-responsive full-width"
                />
                <div class="middle">
                  <i class="fas fa-clock solid"> 15 min</i>
                  <br />
                  <i class="fas fa-smile solid"> Easy</i>
                  <br />
                  <i class="fas fa-fire-alt solid"> Calories</i>
                </div>
              </div>
              <p class="card-text">
              ${otherRecipes[1].description}
              </p>
              <button
                type="button"
                class="btn btn-primary"
                onclick="loadRecipe('${otherRecipes[1].slug}')"
              >
                Read
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onclick="showShareModal('${otherRecipes[1].slug}')"
              >
                Share
              </button>
            </div>
          </div>
        </div>
    `;

    const elOtherRecipes = document.getElementById('other-recipes');
    elOtherRecipes.innerHTML = otherRecipesHTML;
  }

  // Next, we do the navigation. We want to highlight the button that relates
  // to the category we are looking at right now. So we need to go through
  // the possible values and then apply the "active"-class when we find a match.
  switch (recipe.category) {
    case 'Antipasto':
      navAntipasto.classList.add('active');
      injectRecipeLinks('Antipasto', recipe.slug);
      break;
    case 'Primo':
      navPrimo.classList.add('active');
      injectRecipeLinks('Primo', recipe.slug);
      break;
    case 'Secondo':
      navSecondo.classList.add('active');
      injectRecipeLinks('Secondo', recipe.slug);
      break;
    case 'Dolce':
      navDolce.classList.add('active');
      injectRecipeLinks('Dolce', recipe.slug);
      break;
    default:
    // do nothing
  }

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
    elAmount.className = 'badge badge-secondary badge-pill';

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
