const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markdown Language",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "#", "//", "**"],
        correctAnswer: 2,
      },
      {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: 2,
      },
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctAnswer: 3,
      },
      {
        question: "Which company developed the React library?",
        options: ["Google", "Microsoft", "Facebook", "Apple"],
        correctAnswer: 2,
      },
      {
        question: "Which of these is not a JavaScript data type?",
        options: ["Boolean", "Undefined", "Float", "Symbol"],
        correctAnswer: 2,
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style System",
          "Coded Style Syntax",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which method converts JSON data to a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.decode()",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to include JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used to assign a value?",
        options: ["==", "=", "!=", "==="],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a loop in JavaScript?",
        options: ["for", "repeat", "next", "until"],
        correctAnswer: 0,
      },
      {
        question: "How do you declare an arrow function?",
        options: [
          "function => ()",
          "() => {}",
          "=> function()",
          "() => function",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does DOM stand for?",
        options: [
          "Document Object Model",
          "Data Object Method",
          "Document Order Module",
          "Data Oriented Method",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used for a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        correctAnswer: 1,
      },
      {
        question: "How do you start a function in JavaScript?",
        options: [
          "start myFunction()",
          "function myFunction()",
          "def myFunction()",
          "fun myFunction()",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of these is used for version control?",
        options: ["Node.js", "Git", "NPM", "Webpack"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["Laravel", "Spring", "React", "Django"],
        correctAnswer: 2,
      },
      {
        question: "Which attribute specifies the file input type in HTML?",
        options: ["text", "file", "input-file", "upload"],
        correctAnswer: 1,
      },
      {
        question:
          "Which function is used to display output in the browser console?",
        options: ["log()", "console.log()", "print()", "alert()"],
        correctAnswer: 1,
      },
      {
        question: "Which tag is used to display an image in HTML?",
        options: ["<img>", "<src>", "<image>", "<picture>"],
        correctAnswer: 0,
      },
    ],
  },
  //Football
  {
    category: "football",
    questions: [
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        correctAnswer: 2,
      },
      {
        question: "Who is known as 'The King of Football'?",
        options: ["Maradona", "Pele", "Messi", "Ronaldo"],
        correctAnswer: 1,
      },
      {
        question: "Which player has won the most Ballon d'Or titles?",
        options: [
          "Cristiano Ronaldo",
          "Ronaldinho",
          "Lionel Messi",
          "Zinedine Zidane",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which club has the most UEFA Champions League titles?",
        options: [
          "AC Milan",
          "Manchester United",
          "Bayern Munich",
          "Real Madrid",
        ],
        correctAnswer: 3,
      },
      {
        question: "In which year was the first FIFA World Cup held?",
        options: ["1930", "1940", "1925", "1950"],
        correctAnswer: 0,
      },
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Brazil", "Italy"],
        correctAnswer: 2,
      },
      {
        question:
          "Who is the all-time top scorer in the English Premier League?",
        options: [
          "Thierry Henry",
          "Harry Kane",
          "Alan Shearer",
          "Wayne Rooney",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which nation hosted the 2022 FIFA World Cup?",
        options: ["USA", "Qatar", "Russia", "Japan"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the standard duration of a professional football match?",
        options: ["80 minutes", "90 minutes", "100 minutes", "75 minutes"],
        correctAnswer: 1,
      },
      {
        question: "Which player is known as CR7?",
        options: [
          "Cristiano Ronaldo",
          "Carlos Roberto",
          "Craig Richards",
          "Cristian Romero",
        ],
        correctAnswer: 0,
      },
      {
        question: "Who won the UEFA Euro 2020 tournament?",
        options: ["Spain", "Italy", "England", "France"],
        correctAnswer: 1,
      },
      {
        question: "Which African country has won the AFCON the most times?",
        options: ["Nigeria", "Cameroon", "Egypt", "Ghana"],
        correctAnswer: 2,
      },
      {
        question: "Which club is nicknamed 'The Red Devils'?",
        options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
        correctAnswer: 2,
      },
      {
        question:
          "How many players are on the field for one team in a football match?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 2,
      },
      {
        question: "Who is the coach of Manchester City as of 2025?",
        options: [
          "Jurgen Klopp",
          "Carlo Ancelotti",
          "Pep Guardiola",
          "Jose Mourinho",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which country won the Women's World Cup in 2019?",
        options: ["England", "Germany", "USA", "Japan"],
        correctAnswer: 2,
      },
      {
        question: "What is awarded for a foul inside the penalty box?",
        options: ["Goal kick", "Free kick", "Throw-in", "Penalty kick"],
        correctAnswer: 3,
      },
      {
        question: "Which club is based in London?",
        options: ["Manchester United", "Chelsea", "Liverpool", "Barcelona"],
        correctAnswer: 1,
      },
      {
        question: "Who wears jersey number 10 for Argentina (as of 2024)?",
        options: ["Messi", "Di Maria", "Alvarez", "Dybala"],
        correctAnswer: 0,
      },
      {
        question: "Which country will host the 2026 FIFA World Cup?",
        options: ["Mexico", "Canada", "USA", "All of the above"],
        correctAnswer: 3,
      },
    ],
  },
  //Entertainment
  {
    category: "entertainment",
    questions: [
      {
        question:
          "Who played the role of Iron Man in the Marvel Cinematic Universe?",
        options: [
          "Chris Evans",
          "Robert Downey Jr.",
          "Chris Hemsworth",
          "Mark Ruffalo",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which TV series features the Stark, Lannister, and Targaryen families?",
        options: ["Vikings", "The Witcher", "Game of Thrones", "The Crown"],
        correctAnswer: 2,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Shawn Mendes", "Ed Sheeran", "Bruno Mars", "Justin Bieber"],
        correctAnswer: 1,
      },
      {
        question: "Which streaming platform released 'Stranger Things'?",
        options: ["Amazon Prime", "Disney+", "HBO Max", "Netflix"],
        correctAnswer: 3,
      },
      {
        question: "Who directed the movie 'Titanic'?",
        options: [
          "Steven Spielberg",
          "James Cameron",
          "Christopher Nolan",
          "Martin Scorsese",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which pop star is known as the 'Queen of Pop'?",
        options: ["Beyoncé", "Lady Gaga", "Madonna", "Rihanna"],
        correctAnswer: 2,
      },
      {
        question: "Which movie won Best Picture at the 2023 Oscars?",
        options: [
          "The Whale",
          "Everything Everywhere All At Once",
          "Top Gun: Maverick",
          "Elvis",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which artist painted the Mona Lisa?",
        options: [
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Vincent van Gogh",
          "Michelangelo",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the name of the wizarding school in Harry Potter?",
        options: ["Durmstrang", "Beauxbatons", "Hogwarts", "Ilvermorny"],
        correctAnswer: 2,
      },
      {
        question: "Which series features a character named Eleven?",
        options: [
          "The Umbrella Academy",
          "Stranger Things",
          "Dark",
          "Locke & Key",
        ],
        correctAnswer: 1,
      },
      {
        question: "Who played Jack in 'Titanic'?",
        options: [
          "Matt Damon",
          "Brad Pitt",
          "Leonardo DiCaprio",
          "Johnny Depp",
        ],
        correctAnswer: 2,
      },
      {
        question: "What genre is the TV series 'Friends'?",
        options: ["Thriller", "Sitcom", "Drama", "Reality"],
        correctAnswer: 1,
      },
      {
        question: "Which song begins with the lyrics 'Hello, it's me'?",
        options: [
          "Easy on Me",
          "Someone Like You",
          "Hello",
          "Rolling in the Deep",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which superhero is known as the 'Caped Crusader'?",
        options: ["Iron Man", "Batman", "Superman", "Spider-Man"],
        correctAnswer: 1,
      },
      {
        question: "Who voiced Simba in the original Lion King (1994)?",
        options: [
          "Matthew Broderick",
          "James Earl Jones",
          "Elton John",
          "Tom Hanks",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which actress played Hermione Granger?",
        options: [
          "Emma Stone",
          "Emma Watson",
          "Natalie Portman",
          "Kristen Stewart",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which movie is famous for the line 'I'll be back'?",
        options: ["RoboCop", "Predator", "The Terminator", "Die Hard"],
        correctAnswer: 2,
      },
      {
        question: "Who won the first ever American Idol?",
        options: [
          "Kelly Clarkson",
          "Carrie Underwood",
          "Fantasia",
          "Jennifer Hudson",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the name of the fictional African country in 'Black Panther'?",
        options: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
        correctAnswer: 1,
      },
      {
        question: "Who played Deadpool?",
        options: [
          "Hugh Jackman",
          "Ryan Reynolds",
          "Chris Pratt",
          "Chris Evans",
        ],
        correctAnswer: 1,
      },
    ],
  },
  //Science
  {
    category: "science",
    questions: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: 0,
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
      },
      {
        question: "What is the center of an atom called?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        correctAnswer: 3,
      },
      {
        question: "Which part of the human body controls most functions?",
        options: ["Heart", "Liver", "Brain", "Lungs"],
        correctAnswer: 2,
      },
      {
        question: "What force keeps us grounded on Earth?",
        options: ["Friction", "Magnetism", "Gravity", "Inertia"],
        correctAnswer: 2,
      },
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Hydrogen", "Water", "Oxygen"],
        correctAnswer: 2,
      },
      {
        question: "Which organ is responsible for pumping blood?",
        options: ["Lungs", "Kidney", "Heart", "Liver"],
        correctAnswer: 2,
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Ag", "Au", "Go"],
        correctAnswer: 2,
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        correctAnswer: 2,
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: 1,
      },
      {
        question: "What state of matter is lightning?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctAnswer: 3,
      },
      {
        question: "What kind of blood cells help fight infections?",
        options: ["Red", "White", "Platelets", "Plasma"],
        correctAnswer: 1,
      },
      {
        question: "Which gas is essential for human respiration?",
        options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
        correctAnswer: 1,
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1,
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Silver", "Aluminum"],
        correctAnswer: 1,
      },
      {
        question: "What phenomenon causes the sky to appear blue?",
        options: ["Reflection", "Refraction", "Diffusion", "Scattering"],
        correctAnswer: 3,
      },
      {
        question: "How many chromosomes do humans have?",
        options: ["23", "42", "46", "64"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Intestine"],
        correctAnswer: 1,
      },
      {
        question: "Which scientist proposed the laws of motion?",
        options: ["Einstein", "Galileo", "Isaac Newton", "Darwin"],
        correctAnswer: 2,
      },
      {
        question: "What part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Flower", "Leaf"],
        correctAnswer: 3,
      },
    ],
  },
];

//console.log(questions[3].questions[0])
