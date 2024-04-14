let wordsArray = [];

function fillArray() {
  for (let i = 0; i < 3; i++) {
    let word = prompt(`Enter word ${i + 1}:`);
    wordsArray.push(word);
  }
  displayWords();
}

function displayWords() {
  const ul = document.getElementById("myList");
  ul.innerHTML = "";
  wordsArray.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    ul.appendChild(li);
  });
}

function convertToCaps() {
  const capsArray = wordsArray.map(word => word.toUpperCase());
  displayWordsFromArray(capsArray);
}

function displayWordsFromArray(array) {
  const ul = document.getElementById("myList");
  ul.innerHTML = "";
  array.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    ul.appendChild(li);
  });
}

function redify() {
  const liElements = document.querySelectorAll("#myList li");
  liElements.forEach(li => {
    li.style.color = "red";
  });
};

function swapLetters() {
  const swappedArray = wordsArray.map(word =>
    word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0)
  );
  displayWordsFromArray(swappedArray);
}

fillArray();
