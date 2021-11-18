// Init the image index
let setImage = 1;

// set the image for preview
document.getElementById(0).src = document.getElementById(setImage).src;

// mark the thumbnail as selected
document.getElementById(setImage).className = "small-img selected";

function preview(img) {
  // on click thumbnail set the previous image class to normal
  document.getElementById(setImage).className = "small-img";
  img.className = "small-img selected";
  document.getElementById(0).src = img.src;
  setImage = parseInt(img.id);
}

function next() {
  if (setImage + 1 == 8) {
    setImage = 1;
    document.getElementById(7).className = "small-img";
  } else {
    setImage += 1;
  }
  const element = document.getElementById(setImage);
  document.getElementById(0).src = element.src;
  document.getElementById(setImage - 1 == 0? 7: setImage-1).className = "small-img";
  element.className = "small-img selected";
}

function previous() {
  if (setImage - 1 == 0) {
    setImage = 7;
    document.getElementById(1).className = "small-img";
  } else {
    setImage -= 1;
  }
  const element = document.getElementById(setImage);
  document.getElementById(0).src = element.src;
  document.getElementById(setImage + 1 == 8 ? 1 : setImage + 1).className =
    "small-img";
  element.className = "small-img selected";
}
