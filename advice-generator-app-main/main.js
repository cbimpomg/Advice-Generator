const adviceButton = document.getElementById('generate-advice');
const adviceParagraph = document.getElementById('advice');

adviceButton.addEventListener('click', generateAdvice);

function generateAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      adviceParagraph.textContent = advice;
    })
    .catch(error => console.error('Error:', error));
}