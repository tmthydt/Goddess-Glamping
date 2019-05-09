"use strict";

// Get the modal
var liveModal = document.getElementById('liveModal');

// Get the button that opens the modal
var liveBtn = document.getElementById("liveBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
liveBtn.onclick = function() {
    liveModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    liveModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == liveModalClass) {
        liveModal.style.display = "none";
    }
}

// Get the modal
var laughModal = document.getElementById('laughModal');

// Get the button that opens the modal
var laughBtn = document.getElementById("laughBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
laughBtn.onclick = function() {
    laughModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    laughModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == lauodal) {
            laughModal.style.display = "none";
        }