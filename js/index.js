var modalOne = document.getElementById("my-modal-one");
var imgOne = document.getElementById("my-card-one");
var modalImgOne = document.getElementById("img-one");
var captionTextOne = document.getElementById("caption-one");

var modalTwo = document.getElementById("my-modal-two");
var imgTwo = document.getElementById("my-card-two");
var modalImgTwo = document.getElementById("img-two");
var captionTextTwo = document.getElementById("caption-two");

var modalThree = document.getElementById("my-modal-three");
var imgThree = document.getElementById("my-card-three");
var modalImgThree = document.getElementById("img-three");
var captionTextThree = document.getElementById("caption-three");

var modalFour = document.getElementById("my-modal-four");
var imgFour = document.getElementById("my-card-four");
var modalImgFour = document.getElementById("img-four");
var captionTextFour = document.getElementById("caption-four");

imgOne.onclick = function() {
    modalOne.style.display = "block";
    modalImgOne.src = this.src;
    captionTextOne.innerHTML = this.alt;
}

imgTwo.onclick = function() {
    modalTwo.style.display = "block";
    modalImgTwo.src = this.src;
    captionTextTwo.innerHTML = this.alt;
}

imgThree.onclick = function() {
    modalThree.style.display = "block";
    modalImgThree.src = this.src;
    captionTextThree.innerHTML = this.alt;
}

imgFour.onclick = function() {
    modalFour.style.display = "block";
    modalImgFour.src = this.src;
    captionTextFour.innerHTML = this.alt;
}

var exit = document.getElementsByClassName("close")[0];
exit.onclick = function() {
    modalOne.style.display = "none";
}

var exit = document.getElementsByClassName("close-two")[0];
exit.onclick = function() {
    modalTwo.style.display = "none";
}

var exit = document.getElementsByClassName("close-three")[0];
exit.onclick = function() {
    modalThree.style.display = "none";
}

var exit = document.getElementsByClassName("close-four")[0];
exit.onclick = function() {
    modalFour.style.display = "none";
}