function toggleGridView() {
  const gridElement = document.getElementById('grid-view');
  const listElement = document.getElementById('list-view');
  if (gridElement.classList.contains('hide'))
    gridElement.classList.remove('hide');
  if (!listElement.classList.contains('hide'))
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
  if (listElement.classList.contains('hide'))
    listElement.classList.remove('hide');
  if (!gridElement.classList.contains('hide'))
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
