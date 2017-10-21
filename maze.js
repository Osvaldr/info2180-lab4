var loser = false;  // whether the user has hit a wall

window.onload = function() {

    document.getElementById("end").onmouseover = overEnd;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

function startClick() {
    loser = false;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
}

function overEnd() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}