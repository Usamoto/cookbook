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

  // Finally, we apply the link to the social network icons.
  // Pinterest
  document
    .getElementById('share-pinterest')
    .setAttribute(
      'href',
      `https://pinterest.com/pin/create/button/?url=${shareUrl}&media=&description=`
    );
  // Facebook
  document
    .getElementById('share-facebook')
    .setAttribute(
      'href',
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
    );
  // Mail
  document
    .getElementById('share-mail')
    .setAttribute('href', `mailto:info@example.com?&subject=&body=${shareUrl}`);
}

// We also need a function to hide the Modal, once the user closes it
function hideModal() {
  // To hide the modal, we simply add the "hide"-class back to its container
  document.querySelector('.cb-modal-container').classList.add('hide');

  // Just to be thorough, we also empty the value attribute of the input inside of the Modal, so it doesn't linger in the markup
  document.getElementById('share-link').setAttribute('value', '');

  // We should also reset the href attributes on the share buttons
  document.getElementById('share-pinterest').setAttribute('href', '');
  document.getElementById('share-facebook').setAttribute('href', '');
  document.getElementById('share-mail').setAttribute('href', '');

  // And we also set the clipboard-message to be hidden (see function below)
  document.getElementById('clipboard-message').classList.add('hide');
}

// For the "Copy"-button, we want to copy the URL to the user's clipboard,
// which is a little tricky but doable.
function copyToClipboard() {
  // First, we need the value that we want to copy, which is in the input element
  const value = document.getElementById('share-link').getAttribute('value');

  // We create a textarea element and set its content to the thing we want to copy
  const el = document.createElement('textarea');
  el.value = value;

  // We make the textarea non-editable and hide it away out of sight
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';

  // We add it to the page, so we can select it
  document.body.appendChild(el);
  el.select();

  // We copy the value of the selection
  document.execCommand('copy');

  // We remove the textarea from the document
  document.body.removeChild(el);

  // Finally, we tell the user that we copied the value to their clipboard.
  // For that, we have a message in our markup that is hidden by default.
  // We simply remove the "hide"-class of it.
  document.getElementById('clipboard-message').classList.remove('hide');
}

// We want to hide the modal as soon as the user clicks outside of it.
// For that, we need to check wether the background element
// was clicked or a child of it. If it's the background, it should call
// the `hideModal()` function.
//
// First, we select the background element.
var elModalBackground = document.getElementById('modal-background');
// We add a click event listener to it that triggers a function when
// the element is clicked.
elModalBackground.onclick = function (e) {
  // We check if the target of the click was a child. If it was, we simply
  // return void and trigger no action.
  if (e.target !== this) return;
  // At this point, we know the background was clicked. So we close the modal.
  hideModal();
};
