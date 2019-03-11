let displayedSection = 0;

// hide all sections but the first one
const sections = Array.from(document.getElementsByTagName('section'));
for (let i = displayedSection + 1; i < sections.length; i += 1) {
  sections[i].classList.add('hide');
}

// Each simple button down a section hides the current section and displays the next
const buttons = Array.from(document.querySelectorAll('button[type="button"]'));
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    sections[displayedSection].classList.add('hide');
    displayedSection += 1;
    sections[displayedSection].classList.remove('hide');
  }, true);
});

// eslint-disable-next-line spaced-comment
/********************
* Fields validation *
*********************/
buttons[displayedSection].setAttribute('disabled', true);

function validateNotEmpty(trackedEvent, element) {
  element.addEventListener(trackedEvent, (event) => {
    if (!event.target.value) {
      element.classList.add('validation-ko');
      buttons[displayedSection].setAttribute('disabled', true);
    } else {
      element.classList.remove('validation-ko');
      element.classList.add('validation-ok');
      buttons[displayedSection].removeAttribute('disabled');
    }
  }, true);
}

function validateEmail(trackedEvent, element) {
  const regex = /^[a-zA-Z0-9_'.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]+$/;
  element.addEventListener(trackedEvent, (event) => {
    if (!regex.test(event.target.value)) {
      element.classList.add('validation-ko');
      buttons[displayedSection].setAttribute('disabled', true);
    } else {
      element.classList.remove('validation-ko');
      element.classList.add('validation-ok');
      buttons[displayedSection].removeAttribute('disabled');
    }
  }, true);
}

function validateGlobalScore(trackedEvent, element) {
  const regex = /[0-9]{1,2}/;
  element.addEventListener(trackedEvent, (event) => {
    const note = event.target.value;
    if (!note || !regex.test(note) || (note < 1 || note > 10)) {
      element.classList.add('validation-ko');
      buttons[displayedSection].setAttribute('disabled', true);
    } else {
      element.classList.remove('validation-ko');
      element.classList.add('validation-ok');
      buttons[displayedSection].removeAttribute('disabled');
    }
  }, true);
}

const firstName = document.getElementById('firstName');
validateNotEmpty('change', firstName);
validateNotEmpty('focusout', firstName);

const lastName = document.getElementById('name');
validateNotEmpty('change', lastName);
validateNotEmpty('focusout', lastName);

const email = document.getElementById('email');
validateEmail('change', email);
validateEmail('focusout', email);

const gScore = document.getElementById('number');
validateGlobalScore('change', gScore);
validateGlobalScore('focusout', gScore);
