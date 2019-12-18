function getElemId(id) {
  return document.getElementById(id);
}

const wordsDisplay = getElemId('words');
const generateBtn = getElemId('generate-btn');
const copyBtn = getElemId('copy');
const savedWords = [];
function generateRand(end) {
  return Math.floor(Math.random() * end);
}

function createWord({ word, meaning }) {
  const sectionElement = document.createElement('section');
  const wordElement = document.createElement('h2');
  const meaningElement = document.createElement('p');
  const saveButton = document.createElement('button');
  saveButton.addEventListener('click', e => saveWord(e))
  wordElement.textContent = word;
  meaningElement.textContent = meaning;
  saveButton.textContent = 'save';
  savedWords.forEach(e => {
    if (word === e.word) saveButton.textContent = 'saved';
  })

  sectionElement.appendChild(wordElement);
  sectionElement.appendChild(meaningElement);
  sectionElement.appendChild(saveButton)

  return sectionElement;
}

function saveWord(e) {
  let wordObject = {
    word: e.target.previousSibling.previousSibling.textContent,
    meaning: e.target.previousSibling.textContent
  }
  let exists  = false;
  savedWords.forEach(e => {
    if (e.word === wordObject.word) {
      exists = true;
    };
  })
  if (!exists && savedWords.length < 3) {
    e.target.textContent = 'saved';
    savedWords.push(wordObject);
  } 
  
  console.log(savedWords)
}

function getWords() {
  const len = data.length;

  const newWords = []

  for (let i = 0; i < 3 - savedWords.length; i++) {
    newWords.push(data[generateRand(len)])
    console.log(newWords);
  }

  const wordsToDisplay = savedWords.concat(newWords)
  wordsDisplay.innerHTML = '';
  wordsToDisplay.forEach(word => {
    const newWord = createWord(word);
    wordsDisplay.appendChild(newWord);
  });
}

function ToggleCopied() {
  const copied = getElemId('copied');
  const mainSection = document.getElementsByClassName('main')[0];

  if (!copied) {
    const copiedEl = document.createElement('p');
    copiedEl.id = 'copied';
    copiedEl.textContent = 'Copied Words 📝';
    copiedEl.style.fontSize = '2rem';
    copiedEl.style.margin = 'center';
    copiedEl.style.color = 'gray';
    copiedEl.style.borderRadius = '3px';
    copiedEl.style.fontWeight = '700';
    mainSection.appendChild(copiedEl);

    setTimeout(() => {
      mainSection.removeChild(copiedEl);
    }, 1000);
  }
}

function copyWords() {
  const el = document.createElement('textarea');
  const wordsEls = document.querySelectorAll('#words > section > h2');
  let wordsToCopy = '';
  wordsEls.forEach((el, index) => {
    if (index != 0) wordsToCopy += ', ';
    wordsToCopy += el.textContent;
  });
  el.value = wordsToCopy;
  el.setAttribute('readonly', '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  ToggleCopied(); // Invoke the copied function to display on page
  document.body.removeChild(el);
}

generateBtn.addEventListener('click', getWords);
copyBtn.addEventListener('click', copyWords);
getWords();
