const searchList = [
  { title: "The quick brown fox jumps over the lazy dog." },
  { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "A stitch in time saves nine." },
  { title: "Actions speak louder than words." },
  { title: "Beauty is in the eye of the beholder." },
  { title: "Birds of a feather flock together." },
  { title: "Curiosity killed the cat." },
  { title: "Don't count your chickens before they hatch." },
  {
    title:
      "Early to bed and early to rise, makes a man healthy, wealthy, and wise.",
  },
  { title: "Every cloud has a silver lining." },
  { title: "Fortune favors the bold." },
  { title: "Haste makes waste." },
  { title: "Ignorance is bliss." },
  { title: "In for a penny, in for a pound." },
  { title: "Kill two birds with one stone." },
  { title: "Let sleeping dogs lie." },
  { title: "Make hay while the sun shines." },
  { title: "No pain, no gain." },
  { title: "Once bitten, twice shy." },
  { title: "Practice makes perfect." },
  { title: "The early bird catches the worm." },
  { title: "Time heals all wounds." },
  { title: "Two heads are better than one." },
  { title: "When in Rome, do as the Romans do." },
  { title: "You reap what you sow." },
];

const inputField = document.getElementById("inputField");
const resultField = document.getElementById("result");
let inputFieldValue = "";
let finalList = [];

inputField.addEventListener("input", () => {
  inputFieldValue = inputField.value;

  while (resultField.firstChild) {
    resultField.removeChild(resultField.firstChild);
  }

  if (inputFieldValue) {
    finalList = searchList.filter((searchItem) =>
      searchItem.title.toLowerCase().includes(inputFieldValue.toLowerCase())
    );

    finalList.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = item.title;
      resultField.appendChild(div);
    });
  } else {
    const div = document.createElement("div");
    resultField.appendChild(div);
  }
});
