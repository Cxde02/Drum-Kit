window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return; // stop the function from running all together
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    //key.classList.remove("playing");
    //key.classList.toggle("playing");
    //setTimeout(function () {}, 0.07);
  }
});

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; //skip if not a transform
  } else {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
//keys.addEventListener('transitionend');
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

const errorText = document.getElementById("errorText");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    errorText.textContent = "Use the keyboard only!!!";
    setTimeout(() => {
      errorText.textContent = "";
    }, 1000); // Set the timeout to 1000 milliseconds (1 second)
  });
});
