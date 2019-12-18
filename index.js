const fs = require('fs');

const data = [
  { word: 'Affable', meaning: ' He’s easy to talk to' },
  { word: 'Agreeable', meaning: ' He’s enjoyable to talk to' },
  { word: 'Amiable', meaning: ' He’s friendly and nice' },
  {
    word: 'Charming',
    meaning: ' He has a “magic” effect that makes people like him'
  },
  { word: 'Polite', meaning: ' He’s good at saying “please, thank you, etc.' },
  { word: 'Likeable', meaning: ' He’s easy to like.' },
  { word: 'Gregarious', meaning: ' He likes being with other people.' },
  {
    word: 'Considerate',
    meaning:
      ' He always thinks about other people when he does something or talks to someone.'
  },
  {
    word: 'Sympathetic',
    meaning:
      ' He shows that he understands and cares about other people’s problems.'
  },
  {
    word: 'Understanding',
    meaning:
      ' The same as “sympathetic” he understands other people’s problems well.'
  },
  {
    word: 'Diplomatic',
    meaning:
      ' He is very good at trying to help people see both sides of a situation.'
  },
  {
    word: 'Impartial',
    meaning: ' He doesn’t support just one side of a disagreement.'
  },

  { word: 'Sincere', meaning: ' He says what he really thinks and feels.' },
  { word: 'Straight-forward', meaning: ' He’s direct and honest.' },

  { word: 'Generous', meaning: ' He likes giving things to people.' },
  { word: 'Helpful', meaning: ' He likes helping.' },
  {
    word: 'Kind',
    meaning: ' He cares about others and likes to help them often emotionally.'
  },
  {
    word: 'Giving',
    meaning: ' He likes giving things to people it’s the same as “generous.”'
  },
  {
    word: 'Observant',
    meaning: ' She’s good at noticing different things around her.'
  },
  {
    word: 'Quick-witted',
    meaning: ' She can think quickly and intelligently.'
  },
  {
    word: 'Patient',
    meaning: ' She can accept difficult situations without getting angry.'
  },
  {
    word: 'Dynamic',
    meaning: ' She has a lot of energy and can think creatively.'
  },
  { word: 'Bright', meaning: ' She’s smart and intelligent.' },
  {
    word: 'Self-disciplined',
    meaning: ' She can control her own behaviour easily, and she’s organised.'
  },
  {
    word: 'Resourceful',
    meaning: ' She’s good at finding ways to solve problems.'
  },
  {
    word: 'Proactive',
    meaning: ' She doesn’t wait for things to happen. She makes them happen!'
  },
  {
    word: 'Practical',
    meaning: ' She’s good at finding the simplest and most efficient solution.'
  },
  { word: 'Organised', meaning: ' She knows how to organise things well.' },
  {
    word: 'Efficient',
    meaning: ' She can organise things quickly and clearly.'
  },
  { word: 'Hardworking', meaning: ' She works hard!' },
  {
    word: 'Diligent',
    meaning: ' She does her work carefully and cares about the details.'
  },

  {
    word: 'Versatile',
    meaning: ' She can do different things depending on the situation.'
  },
  {
    word: 'Intuitive',
    meaning:
      ' She can understand what’s happening using her feelings (not just facts).'
  },
  { word: 'Adaptable', meaning: ' She can change depending on the situation.' },

  {
    word: 'Dependable',
    meaning: ' If she says she will do something,she will do it.'
  },
  { word: 'Reliable', meaning: ' The same as “dependable”' },
  {
    word: 'Trustworthy',
    meaning: ' You can trust her to be honest and sincere.'
  },
  { word: 'Loyal', meaning: ' She will always be on your side.' },
  { word: 'Freya', meaning: ' the fun lady!' },
  { word: 'Energetic', meaning: ' She has a lot of energy.' },
  {
    word: 'Adventurous',
    meaning: ' She likes doing new and different things.'
  },
  {
    word: 'Enthusiastic',
    meaning: ' She shows a lot of excitement and interest in things.'
  },
  { word: 'Kooky', meaning: ' She’s a little crazy. But in a fun way.' },
  { word: 'Cheerful', meaning: ' She’s always happy.' },
  { word: 'Chatty', meaning: ' She loves talking and talks a lot.' },
  {
    word: 'Convivial',
    meaning: ' She’s always in a good mood and is always friendly.'
  },

  { word: 'Hilarious', meaning: ' She’s very, very, funny.' },
  {
    word: 'Witty',
    meaning: ' She’s funny and can tell good jokes in an intelligent way.'
  },
  { word: 'Humorous', meaning: ' She’s funny and entertaining.' },
  { word: 'Amusing', meaning: ' She’s funny and fun.' },
  {
    word: 'Non-judgemental',
    meaning:
      ' She won’t make you feel bad for something that you think believe or do even if it’s a mistake.'
  },
  { word: 'Laid-back', meaning: 'She’s very relaxed about everything.' },
  {
    word: 'Easy-going',
    meaning: ' This is the same as “laid-back” it means “relaxed”!'
  },

  {
    word: 'Ambitious',
    meaning: ' She has very high targets for herself in life.'
  },
  {
    word: 'Determined',
    meaning: ' She doesn’t quit, even when things get hard.'
  },
  {
    word: 'Passionate',
    meaning: ' She believes in her work and her success on an emotional level.'
  },
  { word: 'Persistent', meaning: ' She never gives up!' },
  {
    word: 'Decisive',
    meaning: ' She can make a decision quickly and confidently.'
  },
  { word: 'Courageous', meaning: ' She’s brave.' },
  { word: 'Fearless', meaning: ' She has no fear.' },
  { word: 'Clever', meaning: ' He is quick to learn and understand' },
  {
    word: 'Lazy',
    meaning: 'She is unwilling to work or she always avoids work'
  },
  {
    word: 'Shy',
    meaning: 'She is nervous, timid when in the company of other people'
  },
  {
    word: 'Empathethic',
    meaning:
      'He shows the ability to understand and share the feelings of another person'
  },
  {
    word: 'Frank',
    meaning: 'She is open and direct in speech or in writing'
  },
  {
    word: 'Friendly',
    meaning: 'He is kind and pleasant'
  },
  {
    word: 'Gentle',
    meaning: 'She has/shows a mild, kind, or tender temperament or character.'
  },
  {
    word: 'Optimistic',
    meaning: 'He is hopeful and confident about the future.'
  }
];

const sorted = data.sort((a, b) => {
  const wordA = a.word.toLowerCase();
  const wordB = b.word.toLowerCase();

  if (wordA > wordB) {
    return 1;
  }

  if (wordA < wordB) {
    return -1;
  }

  return 0;
});

const dataToWrite = `// Don't update this file directly refer to index.js file \nconst data = ${JSON.stringify(
  sorted
)}`;

fs.writeFile('data.js', dataToWrite, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Write to file complete');
});
