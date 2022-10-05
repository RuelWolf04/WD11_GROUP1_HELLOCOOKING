import { data } from "./data.js";

const faqContainers = document.querySelector(".faq-accordion");

const faq = () => {
  return (faqContainers.innerHTML = data.map((content, index) => {
    return `
    <div class="faq-qa">
    <input
    type="checkbox"
    name="question${index}"
    id="question${index}"
    class="question-checkbox"
  />
  <label for="question${index}"
    >${content.question}
    <i class="fa-solid fa-circle-chevron-right"></i>
  </label>
  <div class="faq-answer-container">
    <p>
      ${content.answer}
    </p>
  </div>
  </div>
    `;
  }).join(''));
};

faq();
