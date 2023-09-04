// const hangmanImage = document.querySelector(".hangman-box img");
// const wordDisplay = document.querySelector(".word-display");
// const guessesText = document.querySelector(".guesses-text b");
// const keyboardDiv= document.querySelector(".keyboard");
// const gameModal = document.querySelector(".game-modal");    
// const PlayAgainbtn = document.querySelector(".play-again");    

// const wordList=[
//     {
//         word: "algorithm",
//         hint: "A step-by-step set of instructions for solving a problem in programming."
//         },
        
//         {
//         word: "database",
//         hint: "A structured collection of data that can be stored and retrieved electronically."
//         },
        
//         {
//         word: "debugging",
//         hint: "The process of finding and fixing errors or bugs in computer code."
//         },
        
//         {
//         word: "encryption",
//         hint: "The process of converting data into a secret code to protect it from unauthorized access."
//         },
        
//         {
//         word: "framework",
//         hint: "A pre-built structure or set of tools that simplifies software development."
//         },
        
//         {
//         word: "JavaScript",
//         hint: "A popular programming language used for building interactive websites."
//         },
        
//         {
//         word: "API",
//         hint: "An Application Programming Interface, a set of rules that allows different software applications to communicate with each other."
//         },
        
//         {
//         word: "compiler",
//         hint: "A program that translates human-readable source code into machine code that a computer can execute."
//         },
        
//         {
//         word: "server",
//         hint: "A computer or software that provides services or resources to other computers or programs."
//         },
        
//         {
//         word: "version control",
//         hint: "A system for tracking changes to code and collaborating with others in software development."
//         },

//         {
//             word: "responsive",
//             hint: "Design or layout that adjusts to different screen sizes and devices in web development."
//             },
            
//             {
//             word: "cybersecurity",
//             hint: "Practices and technologies used to protect computer systems and data from theft, damage, or unauthorized access."
//             },
            
//             {
//             word: "API endpoint",
//             hint: "A specific URL or URI that represents a specific resource in a web API."
//             },
            
//             {
//             word: "cloud computing",
//             hint: "The delivery of computing services like servers, storage, databases, networking, and software over the internet."
//             },
            
//             {
//             word: "repository",
//             hint: "A central location where code and other resources are stored and managed using version control."
//             },
            
//             {
//             word: "machine learning",
//             hint: "A subset of artificial intelligence that focuses on the development of algorithms that enable computers to learn from and make predictions or decisions based on data."
//             },
            
//             {
//             word: "framework",
//             hint: "A pre-built structure or set of tools that simplifies software development."
//             },
            
//             {
//             word: "frontend",
//             hint: "The part of a web application that the user interacts with directly, typically the user interface."
//             },
            
//             {
//             word: "serverless",
//             hint: "A cloud computing model where the cloud provider manages the infrastructure, allowing developers to focus solely on code."
//             },
            
//             {
//             word: "agile development",
//             hint: "A software development methodology that emphasizes iterative and collaborative development with a focus on customer feedback."
//             },

//             {
//                 word: "neural network",
//                 hint: "A type of AI model inspired by the structure and function of the human brain, used for tasks like image recognition and natural language processing."
//                 },
                
//                 {
//                 word: "chatbot",
//                 hint: "A computer program that uses AI to simulate human conversation, often used for customer support or information retrieval."
//                 },
                
//                 {
//                 word: "deep learning",
//                 hint: "A subset of machine learning that involves neural networks with multiple layers, used for complex tasks like speech recognition and autonomous driving."
//                 },
                
//                 {
//                 word: "reinforcement learning",
//                 hint: "A machine learning paradigm where agents learn to make decisions through trial and error, often used in gaming and robotics."
//                 },
                
//                 {
//                 word: "computer vision",
//                 hint: "A field of AI that focuses on teaching computers to interpret and understand visual information from the world, such as images and videos."
//                 },
                
//                 {
//                 word: "natural language processing",
//                 hint: "The branch of AI that deals with the interaction between computers and human language, used for tasks like language translation and sentiment analysis."
//                 },
                
//                 {
//                 word: "AI ethics",
//                 hint: "The study of moral and ethical issues related to artificial intelligence, including fairness, transparency, and bias in AI systems."
//                 },
                
//                 {
//                 word: "generative adversarial network (GAN)",
//                 hint: "A type of AI model that consists of two neural networks, one generating data and the other evaluating it, often used for creating realistic images and videos."
//                 },
                
//                 {
//                 word: "autonomous vehicles",
//                 hint: "Vehicles that can operate without human intervention, using AI and sensors for navigation and decision-making."
//                 },
                
//                 {
//                 word: "robotics",
//                 hint: "The interdisciplinary field that combines AI, engineering, and mechanics to create machines capable of performing tasks autonomously or semi-autonomously."
//                 },        
// ]

// let currentWord ,correctLetters, wrongGuessCount;
// const maxGuesses=6;

// const resetGame=()=>{
//     correctLetters=[];
//     wrongGuessCount=0;
//     guessesText.innerText=`${wrongGuessCount}/ ${maxGuesses}`;
//     keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled =false);
//     hangmanImage.src= `hangman-${wrongGuessCount}.svg`;
//     wordDisplay.innerHTML= currentWord.split("").map(()=>`<li class="letter"></li>`).join("");
//     gameModal.classList.remove("show");


// }

// const getRandomWord =() =>{
//     const {word, hint}= wordList[Math.floor(Math.random()* wordList.length)]
//     currentWord=word;
//     console.log(word);
//     document.querySelector(".hint-text b").innerText = hint;
//     resetGame();
   
// }
// const gameOver=(isVictory)=>{
//     setTimeout(() => {
//         const modalText = isVictory? `You found the word:`: `The correct word was:`;
//         gameModal.querySelector("img").src= `${isVictory ? 'victory' : 'lost'}.gif`;
//         gameModal.querySelector("h4").innerText= `${isVictory ? 'congrats' : 'Game Over!'}`;
//         gameModal.querySelector("p").innerHTML= `${modalText} <b>${currentWord}</b>`;
//     }, 300);
// }

// const initGame=(button, clickedLetter)=>{
//  if(currentWord.includes(clickedLetter)){
//    [...currentWord].forEach((letter, index)=>{
//     if(letter ===  clickedLetter){
//         correctLetters.push(letter)
//         wordDisplay.querySelectorAll("li")[index].innerText=letter;
//         wordDisplay.querySelectorAll("li")[index].classList.add("guessed");

//     }
//    })
//  }
//  else{
//     wrongGuessCount++;
//     hangmanImage.src= `hangman-${wrongGuessCount}.svg`;
//  }
//  button.disabled=true;
//  guessesText.innerText=`${wrongGuessCount}/ ${maxGuesses}`;

//  if ( wrongGuessCount === maxGuesses) return  gameOver(false);
//  if ( correctLetters.length === currentWord.length) return  gameOver(true);

 
// }
// //creating keyboard buttons
// for (let i= 97; i <= 122 ; i++){
//     const button= document.createElement("button");
//     button.innerText= String.fromCharCode(i);
//     keyboardDiv.appendChild(button);
//     button.addEventListener("click", e =>  initGame(e.target, String.fromCharCode(i)));
// }
// getRandomWord();
// PlayAgainbtn.addEventListener("click" , getRandomWord);

const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const PlayAgainbtn = document.querySelector(".play-again");

    const wordList=[
        {
            word: "algorithm",
            hint: "A step-by-step set of instructions for solving a problem in programming."
            },
            
            {
            word: "database",
            hint: "A structured collection of data that can be stored and retrieved electronically."
            },
            
            {
            word: "debugging",
            hint: "The process of finding and fixing errors or bugs in computer code."
            },
            
            {
            word: "encryption",
            hint: "The process of converting data into a secret code to protect it from unauthorized access."
            },        
    ];

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
  keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  hangmanImage.src = `hangman-${wrongGuessCount}.svg`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(word);
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the word:`
      : `The correct word was:`;
    gameModal.querySelector("img").src = isVictory ? 'victory.gif' : 'lost.gif'; // Fix image source
    gameModal.querySelector("h4").innerText = isVictory ? 'Congratulations!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show"); // Show the game over modal
  }, 300);
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Creating keyboard buttons
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

PlayAgainbtn.addEventListener("click", getRandomWord);

// Initial game start
getRandomWord();

