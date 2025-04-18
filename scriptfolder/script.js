const startBtn = document.querySelector(".start-btn");
const popUp = document.querySelector(".pop-up");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const quizBox = document.querySelector(".quiz-box");
const answerOption = document.querySelector(".answer-option");
const nextBtn = document.querySelector(".next-btn");
const questionStatus = document.querySelector(".question-total");
const scoreDisplay = document.querySelector(".header-score");
const showResultBox = document.querySelector(".result-box");
const goHomeBtn = document.querySelector(".go-home-btn");

startBtn.onclick = () => {
  popUp.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popUp.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  container.classList.add("active");
  popUp.classList.remove("active");
  main.classList.remove("active");
  header.classList.add("hide-header");

  questionIndexHistory.length = 0;
  score = 0;
  correctAnswersCount = 0;
  updateScoreDisplay();

  quizBox.classList.add("active");
  quizBox.style.display = "block";

  renderQuestions();
};

let quizCategory = "programming";
let currentQuestion = null;
let score = 0;
let numberOfQuestions = 10;
const questionIndexHistory = [];
let correctAnswersCount = 0;

const scoreElement = document.querySelector(".header-score");

function updateScoreDisplay() {
  scoreElement.textContent = `Score: ${score} / ${numberOfQuestions}`;
}
updateScoreDisplay();

document.querySelector(".category-btn:nth-child(1)").classList.add("active"); 
document.querySelector(".question-btn:nth-child(2)").classList.add("active"); 

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    quizCategory = btn.textContent.trim().toLowerCase();
    document.querySelector(".quiz-app").textContent = btn.textContent.trim();
  });
});

const questionButtons = document.querySelectorAll(".question-btn");
questionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    questionButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    numberOfQuestions = parseInt(btn.textContent.trim());
    updateScoreDisplay();
  });
});

const showQuizResult = () => {
  quizBox.style.display = "none";
  showResultBox.classList.add("active");

  const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly.`;
  document.querySelector(".score-text").innerHTML = resultText;

  //Animation of the progress bar
  const percentage = Math.round(
    (correctAnswersCount / numberOfQuestions) * 100
  );
  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");

  let startValue = 0;
  let endValue = percentage;
  let speed = 20;

  let progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    circularProgress.style.background = `conic-gradient(#df4075 ${
      startValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (startValue >= endValue) {
      clearInterval(progress);
    }
  }, speed);
};

const getRandomQuestions = () => {
  const categoryQuestions =
    questions.find(
      (get) => get.category.toLowerCase() === quizCategory.toLowerCase()
    ).questions || [];

  if (
    questionIndexHistory.length >=
    Math.min(categoryQuestions.length, numberOfQuestions)
  ) {
    return showQuizResult();
  }

  const availableQuestions = categoryQuestions.filter(
    (_, index) => !questionIndexHistory.includes(index)
  );

  const randomQuestion =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
};

const highlightCorrectAnswer = () => {
  const correctOption =
    answerOption.querySelectorAll(".answer-options")[
      currentQuestion.correctAnswer
    ];

  correctOption.classList.add("correct");
};

const handleAnswers = (option, answerIndex) => {
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");
  option.classList.add("answered");

  if (isCorrect) {
    score++;
  }
  scoreDisplay.textContent = `Score: ${score} / ${numberOfQuestions}`;

  !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;
  answerOption
    .querySelectorAll(".answer-options")
    .forEach((option) => (option.style.pointerEvents = "none"));

  nextBtn.style.pointerEvents = "auto";
  nextBtn.classList.add("active");
};

const renderQuestions = () => {
  currentQuestion = getRandomQuestions();

  if (!currentQuestion) return;

  answerOption.innerHTML = "";
  nextBtn.style.pointerEvents = "none";
  nextBtn.classList.remove("active");
  document.querySelector(".quiz-question").textContent =
    currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-options");
    li.textContent = option;
    answerOption.appendChild(li);
    li.addEventListener("click", () => handleAnswers(li, index));
  });
};

const tryAgainBtn = document.querySelector(".try-again-btn");

tryAgainBtn.addEventListener("click", () => {
  score = 0;
  correctAnswersCount = 0;
  questionIndexHistory.length = 0;

  scoreDisplay.textContent = `Score: 0 / ${numberOfQuestions}`;
  showResultBox.classList.remove("active");
  quizBox.style.display = "block";

  document.querySelector(".progress-value").textContent = "0%";
  document.querySelector(".circular-progress").style.background =
    "conic-gradient(#df4075 0deg, rgba(255, 255, 255, .1) 0deg)";

  renderQuestions();
});

goHomeBtn.addEventListener("click", () => {
  score = 0;
  correctAnswersCount = 0;
  questionIndexHistory.length = 0;

  scoreDisplay.textContent = `Score: 0 / ${numberOfQuestions}`;
  document.querySelector(".progress-value").textContent = "0%";
  document.querySelector(".circular-progress").style.background =
    "conic-gradient(#df4075 0deg, rgba(255, 255, 255, .1) 0deg)";

  showResultBox.classList.remove("active"); 
  quizBox.classList.remove("active"); 

  container.classList.remove("active");
  main.classList.remove("active");

  header.classList.remove("hide-header");
});

renderQuestions();

nextBtn.addEventListener("click", renderQuestions);


