let numberOfButtons = document.querySelectorAll(".drum").length;

//detect key clicked on 
for (let i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

//detect keyboard key 
document.addEventListener("keydown", function (event) {

  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed)

});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1Sound = new Audio('sounds/tom-1.mp3');
      tom1Sound.play();
      break;

    case 'a':
      var tom2Sound = new Audio('sounds/tom-2.mp3');
      tom2Sound.play();
      break;

    case 's':
      var tom3Sound = new Audio('sounds/tom-3.mp3');
      tom3Sound.play();
      break;

    case 'd':
      var tom4Sound = new Audio('sounds/tom-4.mp3');
      tom4Sound.play();
      break;

    case 'j':
      var crashSound = new Audio('sounds/crash.mp3');
      crashSound.play();
      break;

    case 'k':
      var kickSound = new Audio('sounds/kick-bass.mp3');
      kickSound.play();
      break;

    case 'l':
      var snareSound = new Audio('sounds/snare.mp3');
      snareSound.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

