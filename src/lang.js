const navTitle = document.querySelectorAll(".nav-sec");
const subTitle = document.querySelector(".subtitle");
const artTexts = document.querySelectorAll(".art-text");
const sectionTitles = document.querySelectorAll(".section_title");
const footerContent = document.querySelector(".footer_content");
const projectsTitle = document.querySelectorAll(".title-project");
const projectsDescription = document.querySelectorAll(".desc-project");
const aboutTitle = document.querySelectorAll(".about_title");
const contactContent = document.querySelector(".contact_content");
const aboutContent = document.querySelectorAll(".about_content");
const btnLang = document.querySelector(".change-lang");
const btnEnglish = document.querySelector(".lang-en");
const btnPortuguese = document.querySelector(".lang-pt");

btnLang.addEventListener("click", () => {
  const attr = (btnEnglish.classList.contains("hiddden") ? btnPortuguese : btnEnglish).getAttribute("language");

  navTitle.forEach((el, index) => (el.textContent = data[attr].navbar[index]));
  sectionTitles.forEach((title, index) => (title.textContent = data[attr].navbar[index]));
  projectsTitle.forEach((project_titles, index) => (project_titles.textContent = data[attr].project_titles[index]));
  projectsDescription.forEach((project_description, index) => (project_description.textContent = data[attr].project_description[index]));
  aboutTitle.forEach((about_title, index) => (about_title.textContent = data[attr].about_title[index]));
  aboutContent.forEach((about_content, index) => (about_content.textContent = data[attr].about_content[index]));

  contactContent.textContent = data[attr].contact_content;
  subTitle.textContent = data[attr].subtitle;
  footerContent.textContent = data[attr].footer_content;
});

let data = {
  english: {
    navbar: ["Projects", "About", "Contact"],
    subtitle: "Web developer",
    project_titles: ["CRUD Vanilla JavaScript", "Rock, Paper and Scissors"],
    project_description: [
      "CRUD created to learn new methods and coding aspects of the JavaScript language. Usage of the localStorage to store data from the user.",
      "Game created to learn and represent some random and aspects of the JavaScript language.",
    ],
    about_title: ["Abstract", "Hobbies", "Skills"],
    about_content: [
      "My name is Guilherme Lopes and I’m a self taught web developer. I have studied using free resources and books talking about coding. I have a huge interest about the web development. Right now I'm studying React and NodeJS.",
      "When I'm not coding or studying, I'm lifting weights or running. You can access my Spotify playlist for lifting weights here.",
      "Coding technologies",
      "Other tools",
    ],
    contact_content: "You can always contact me by email or LinkedIn.",
    footer_content: "Made with love and coffee by Guilherme Lopes.",
  },
  portuguese: {
    navbar: ["Projetos", "Sobre", "Contato"],
    subtitle: "Desenvolvedor web",
    project_titles: ["CRUD JavaScript Puro", "Pedra, Papel e Tesoura"],
    project_description: [
      "CRUD criado para aprender novos métodos e aspectos da linguagem JavaScript. Uso do localStorage para guardar informações pertinentes ao usuário",
      "Jogo criado para treinar e aprender diversos aspectos e funções JavaScript",
    ],
    about_title: ["Resumo", "Hobbies", "Habilidades"],
    about_content: [
      "Meu nome é Guilherme Lopes e eu aprendi a programar por minha conta. Eu estudei por diversas plataformas e metodologias sobre programação. Eu tenho um grande interesse no desenvolvimento web. Neste momento, estou estudando React e NodeJS.",
      "Quando não estou programando, estou na academia ou correndo. Você pode acessar a minha playlist do Spotify pra levantar muito peso aqui.",
      "Tecnologias de programação",
      "Outras ferramentas",
    ],
    contact_content: "Você pode sempre me contactar por e-mail ou por LinkedIn.",
    footer_content: "Feito com amor e café pelo Guilherme Lopes.",
  },
};