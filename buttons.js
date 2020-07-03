// For the Read-Button, we need a function that redirects the user to the recipe
function loadRecipe(slug) {
  window.location.href = `recipe.html?recipe=${slug}`;
}

// For the Share-Button, we need to show the Modal as well as fill it with
// the correct information about the chosen recipe
function showShareModal(slug) {
  // First we select the Modal element and remove the CSS class that hides it
  document.querySelector('.cb-modal-container').classList.remove('hide');

  // Next, we put the URL together, then we drop it into the input field inside
  // of the Modal.
  //
  // Step One: Get the current URL
  var href = window.location.href;
  //
  // Step Two: Remove the filename, if there is one ('index.html') and end with a slash
  var dir = href.substring(0, href.lastIndexOf('/')) + '/';
  //
  // Step Three: Assemble the rest of the URL
  const shareUrl = `${dir}recipe.html?recipe=${slug}`;

  // Now we drop the URL into the input field in the Modal
  document.getElementById('share-link').setAttribute('value', shareUrl);
}

// We also need a function to hide the Modal, once the user closes it
function hideModal() {
  // To hide the modal, we simply add the "hide"-class back to its container
  document.querySelector('.cb-modal-container').classList.add('hide');

  // Just to be thorough, we also empty the value attribute of the input inside of the Modal, so it doesn't linger in the markup
  document.getElementById('share-link').setAttribute('value', '');
}
