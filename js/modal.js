// Get the modal
const modal = document.querySelector('.modal');

// Get the <span> element that closes the modal.
const closeSpan = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal.
closeSpan.onclick = function() {
    modal.classList.remove('modal-on');
}

// When the user clicks anywhere outside of the modal, close it.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('modal-on');
    }
}

//Modal switch on - default is off.
modal.classList.add('modal-on');

//Listening for clicking on pictures.
modal.addEventListener ('click', function (event) {

  if (event.target.nodeName === 'IMG') {

//Set new Player.
    player.newPlayer('images/char-' + player.players[event.target.getAttribute('id')] + '.png');

//Close modal.
    modal.classList.remove('modal-on');

//Player can move, if modal closed - default is false.
    player.enabled = true;
  }
});
