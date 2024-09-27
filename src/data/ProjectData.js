// --------------------------------------- Project List
import ecom from '../images/Ecommerce.png'
import webchat from '../images/web_chat_app.jpg'
import emi from '../images/EMI-Calculator.jpg'
import postgresql from '../images/skills/postgresql.png'

export const ProjectList = [
  {
    img: ecom,
    title: "E-Commerce",
    description:
      "Developed a fully functional e-commerce website using React.js for the frontend and Django REST framework for the backend, featuring user authentication, product listings, a shopping cart, and order management.",
    tech_stack: ["React Js", "Django Rest Framework", "SqlLite"],
    github_url: "https://github.com/JerlineJose22/E-commerce",
    demo_url: "",
  },
  {
    img: webchat,
    title: "Web Chat application",
    description:
      "Developed a real-time web chat application using Kafka for communication",
    tech_stack: ["HTML","CSS","Javascript","Kafka","Flask","PostgreSql"],
    github_url: "https://github.com/JerlineJose22/web-chat-app",
    demo_url: "",
  },
  {
    img: emi,
    title: "EMI Calculator",
    description:
      "Developed a static EMI calculator website using HTML, CSS, and JavaScript to calculate monthly loan payments based on principal, interest rate, and loan tenure inputs.",
    tech_stack: ["HTML", "CSS", "React Js"],
    github_url: "",
    demo_url: "",
  }
];

// // // --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
    name: "Flask",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img:postgresql,
    name: "PostgreSQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
