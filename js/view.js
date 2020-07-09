//
//  This file contains all the logic needed to toggle the index view between
//  grid view and list view. It does that through toggling the 'hide' class
//  on the appropriate elements on the page. We also swap out the links on the
//  Navbar, so they will connect to the elements that are actually visible on
//  the page. The code should be self-explanatory.
//

function toggleGridView() {
  const gridElement = document.getElementById('grid-view');
  const listElement = document.getElementById('list-view');
  gridElement.classList.remove('hide');
  listElement.classList.add('hide');

  document
    .getElementById('navlink-antipasto')
    .setAttribute('href', '#antipasto');
  document.getElementById('navlink-primo').setAttribute('href', '#primo');
  document.getElementById('navlink-secondo').setAttribute('href', '#secondo');
  document.getElementById('navlink-dolce').setAttribute('href', '#dolce');
}

function toggleListView() {
  const listElement = document.getElementById('list-view');
  const gridElement = document.getElementById('grid-view');
  listElement.classList.remove('hide');
  gridElement.classList.add('hide');

  document
    .getElementById('navlink-antipasto')
    .setAttribute('href', '#antipasto-list');
  document.getElementById('navlink-primo').setAttribute('href', '#primo-list');
  document
    .getElementById('navlink-secondo')
    .setAttribute('href', '#secondo-list');
  document.getElementById('navlink-dolce').setAttribute('href', '#dolce-list');
}

document
  .getElementById('toggle-grid-view')
  .addEventListener('click', () => toggleGridView());
document
  .getElementById('toggle-list-view')
  .addEventListener('click', () => toggleListView());
