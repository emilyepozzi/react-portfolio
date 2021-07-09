import karpeDiem from "../Gifs/karpediem.png";
import employeeTracker from "../Gifs/employeetracker.png";


const projects = [
  {
    id: 1,
    projectName: "Karp-E Diem",
    exampleGif: karpeDiem,
    summary:
      "Karp-E Diem is a web application designed to help users compete against their friends in an interactive old school game. Asking questions about your day and earning points the more you accomplish. Rewarding you for being active.",
    techUsed:
      "React, MongoDB, Express, Node.js, Reactstrap, React-Router-Dom, Mongoose, Passport.js, Moment.js, Axios, Bcrypt, and Bootstrap. This project is deployed with Heroku.",
    githubLink: "https://github.com/emilyepozzi/karpediem",
    deployedLink: "https://karp-ediem.herokuapp.com/",
  },
  {
    id: 2,
    projectName: "Employee Tracker",
    exampleGif: employeeTracker,
    summary:
      "The Employee Tracker keeps track of your employees using an internal database.",
    techUsed:
      "Tech Used: React, MongoDB, Express, Node.js, Reactstrap, Bootstrap, and Mongoose.",
    githubLink: "https://github.com/emilyepozzi/employee-tracker",
    deployedLink: "https://drive.google.com/file/d/1qnNBQ37w09qKw2ZMrjwuzBSJiFzG6ctV/view",
  }
];

export default projects;
