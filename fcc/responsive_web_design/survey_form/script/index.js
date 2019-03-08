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
