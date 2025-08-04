// 1. Select the form and resultArea using document.getElementById
const form = document.getElementById('studentForm');
const resultArea = document.getElementById('resultArea');
const toggleButton = document.getElementById('toggleTheme');

// 2. Add an event listener to the form's "submit" event
form.addEventListener('submit', function (event) {
  // Use preventDefault() to stop form from reloading the page
  event.preventDefault();

  // 3a. Get values of name, age, gender, and subject using .value
  let name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const subject = document.getElementById('subject').value;

  // 3b. Use a WHILE loop to keep asking (prompt) if name is empty
  while (name === '') {
    name = prompt('Please enter your name:').trim();
  }

  // 3c. Use IF/ELSE to check age
  let ageMessage = '';
  if (age < 18) {
    ageMessage = 'You are a high school student.';
  } else {
    ageMessage = 'You might be in university.';
  }

  // 3d. Use SWITCH on subject to set a comment
  let subjectComment = '';
  switch (subject) {
    case 'Math':
      subjectComment = 'You’re a numbers lover.';
      break;
    case 'English':
      subjectComment = 'Words are your power.';
      break;
    case 'Science':
      subjectComment = 'Future innovator!';
      break;
    default:
      subjectComment = 'Interesting choice!';
  }

  // 3e. Create a paragraph and insert all data into resultArea
  resultArea.innerHTML = `
    <p>Hello <strong>${name}</strong>!</p>
    <p>Gender: ${gender}</p>
    <p>Age: ${age} - ${ageMessage}</p>
    <p>Favorite Subject: ${subject} - ${subjectComment}</p>
  `;
});

// 4. Toggle theme
toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});