import productSwap from "../projects/productSwap.png";
import wordle from "../projects/wordle.png";
import todo from "../projects/todo.png";

export const featuredProjects = [
  {
    title: "Product exchange App",
    description: `A site for listing unwanted items, or gaining an item on offer from another user. The frontend is built with react.js utilizing hooks and redux, the backend is built with node express.js. The database used is Postgres Elephant (SQL), allowing for the user, role and product tables to be related. User authentication managed with Auth0.
        The application has three levels of user roles: unregistered user (view only), registered user (add and manage items, contact other users) and site administrator (monitor and delete all product entries and users). The different access/ views allowed for each level are protected.`,
    image: productSwap,
    liveUrl: "https://gumtree-swap.netlify.app/",
    githubUrl: {
      frontend: "https://github.com/dorian-rose/product-swap-front",
      backend: "https://github.com/dorian-rose/product-swap-back",
    },
    technologies: [
      "Javascript",
      "React.js",
      "PostgresSQL",
      "Node.js",
      "Express",
      "Firebase",
    ],
  },
  {
    id: 3,
    title: "Wordle",
    description: `React Word Guess Game: this application, made in React.js, is a word guessing game similar to Wordle of the NYT, where the objective is to guess a randomly selected five-letter word within six attempts. The app provides feedback after each guess, indicating if the guessed word contains letters that are an exact match in both letter and position with the answer word or if they are present but not in the correct position. An external list of words is used (https://random-word-api.herokuapp.com/home) and I made a corresponding validator list api using Node.js Express and MongoDB.`,
    image: wordle,
    liveUrl: "https://dorians-wordle.netlify.app/",
    githubUrl: {
      frontend: "https://github.com/dorian-rose/wordle",
      backend: "https://github.com/dorian-rose/wordlist-api",
    },
    technologies: ["Javascript", "React.js", "MongoDB", "Node.js", "Express"],
  },
  {
    id: 2,
    title: "To Do App",
    description: `A todo app where users can log tasks they need to do and view tasks with filter by date, search or view all. User authentication managed with firebase. Back end created with Node.js Express and using MongoDB. The frontend is created with React.js using redux and styled using TailWind. A previous to do exercise using reducers and contexts manually can be found at my gitHub`,
    image: todo,
    liveUrl: "https://todo-dorian.netlify.app/",
    githubUrl: {
      frontend: "https://github.com/dorian-rose/react-todo-project",
      backend: "https://github.com/dorian-rose/todo_back",
    },
    technologies: [
      "Javascript",
      "React.js",
      "MongoDB",
      "Node.js",
      "Express",
      "Firebase",
    ],
  },
  //   {
  //     id: 4,
  //     title: "To Do App v2",
  //     description: `An alternate, simpler to do app created using TypeScript in React.js and local storage`,
  //     image: projects_temp,
  //     liveUrl: "https://todo-dorian-ts.netlify.app/",
  //     technologies: ["TypeScript", "React.js"],
  //   },
];
