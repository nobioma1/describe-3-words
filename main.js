function getElemId(id) {
  return document.getElementById(id);
}

const wordsDisplay = getElemId("words");
const generateBtn = getElemId("generate-btn");
const copyBtn = getElemId("copy");

// create placeholders to save words
let savedWords = [null, null, null];
function generateRand(end) {
  return Math.floor(Math.random() * end);
}

function createWord({ word, meaning }) {
  const sectionElement = document.createElement("section");
  const wordElement = document.createElement("h2");
  const meaningElement = document.createElement("p");
  const saveButton = document.createElement("button");
  saveButton.addEventListener("click", e => saveWord(e));
  wordElement.textContent = word;
  meaningElement.textContent = meaning;
  saveButton.textContent = "save";
  sectionElement.appendChild(wordElement);
  sectionElement.appendChild(meaningElement);
  sectionElement.appendChild(saveButton);
  savedWords.forEach(e => {
    if (e && word === e.word) {
      saveButton.textContent = "saved";
      saveButton.previousSibling.previousSibling.classList.add("saved");
    }
  });

  return sectionElement;
}

function saveWord(e) {
  // create word object from the selected DOM element
  let wordObject = {
    word: e.target.previousSibling.previousSibling.textContent,
    meaning: e.target.previousSibling.textContent
  };

  // check if the word has been saved
  let exists = false;
  savedWords.forEach(e => {
    if (e && e.word === wordObject.word) {
      exists = true;
    }
  });

  // if the word has been saved, unsave it
  if (exists) {
    savedWords = savedWords.map(e => {
      if (e && e.word !== wordObject.word) {
        return e;
      }
      return null;
    });
    e.target.textContent = "save";
    e.target.previousSibling.previousSibling.classList.remove("saved");
  }

  // if the word has not been saved, save it
  if (!exists) {
    e.target.textContent = "saved";
    e.target.previousSibling.previousSibling.classList.add("saved");
    let sectionLists = e.target.parentElement.parentElement.children;
    sectionLists = Array.from(sectionLists);
    sectionLists.forEach((element, index) => {
      if (element.children[0].textContent == wordObject.word)
        savedWords[index] = wordObject;
    });
  }
}

function getWords() {
  const len = data.length;

  // create a copy of the savedWords array
  const newWords = savedWords.concat();

  // create an hashtable of the newWords
  let wordsTable = {};
  newWords.forEach(e => {
    if (e && e.word) {
      wordsTable[e.word] = e;
    }
  });

  // loop through newWords array and generate data to fill empty positions
  for (let i = 0; i < newWords.length; i++) {
    if (!newWords[i]) {
      let dataGenerated = data[generateRand(len)];
      // if data  generated is already in view generate another
      while (wordsTable[dataGenerated.word]) {
        // uncomment the next comment to see how we captured words that wants to appear twice
        // console.log("I caught you ", wordsTable[dataGenerated.word]);
        dataGenerated = data[generateRand(len)];
      }
      newWords[i] = dataGenerated;
      wordsTable[newWords[i].word] = newWords
    }
  }

  wordsDisplay.innerHTML = "";
  newWords.forEach(word => {
    const newWord = createWord(word);
    wordsDisplay.appendChild(newWord);
  });
}

function ToggleCopied() {
  const copied = getElemId("copied");
  const mainSection = document.getElementsByClassName("main")[0];

  if (!copied) {
    const copiedEl = document.createElement("p");
    copiedEl.id = "copied";
    copiedEl.textContent = "Copied Words 📝";
    copiedEl.style.fontSize = "2rem";
    copiedEl.style.margin = "center";
    copiedEl.style.color = "gray";
    copiedEl.style.borderRadius = "3px";
    copiedEl.style.fontWeight = "700";
    mainSection.appendChild(copiedEl);

    setTimeout(() => {
      mainSection.removeChild(copiedEl);
    }, 1000);
  }
}

function copyWords() {
  const el = document.createElement("textarea");
  const wordsEls = document.querySelectorAll("#words > section > h2");
  let wordsToCopy = "";
  wordsEls.forEach((el, index) => {
    if (index != 0) wordsToCopy += ", ";
    wordsToCopy += el.textContent;
  });
  el.value = wordsToCopy;
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  ToggleCopied(); // Invoke the copied function to display on page
  document.body.removeChild(el);
}

generateBtn.addEventListener("click", getWords);
copyBtn.addEventListener("click", copyWords);
getWords();
