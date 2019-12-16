function getElemId(id) {
  return document.getElementById(id);
}

const wordsDisplay = getElemId('words');
const generateBtn = getElemId('generate-btn');
const copyBtn = getElemId('copy');

function generateRand(end) {
  return Math.floor(Math.random() * end);
}

function createWord({ word, meaning }) {
  const sectionElement = document.createElement('section');
  const wordElement = document.createElement('h2');
  const meaningElement = document.createElement('p');

  wordElement.textContent = word;
  meaningElement.textContent = meaning;

  sectionElement.appendChild(wordElement);
  sectionElement.appendChild(meaningElement);

  return sectionElement;
}

function getWords() {
  const len = data.length;
  console.log(len);
  const words = [
    data[generateRand(len)],
    data[generateRand(len)],
    data[generateRand(len)],
  ];
  wordsDisplay.innerHTML = '';
  words.forEach(word => {
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
