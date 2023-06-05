import "./styles/home.css"
import "./styles/menu.css"
import "./styles/about.css"
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about"
import firstLoad from "./functions/firstLoad";
import render from "./functions/render";


firstLoad();

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');

homeBtn.addEventListener('click',() =>{
    render();
    home();
})
menuBtn.addEventListener('click',() =>{
    render();
    menu();
})
aboutBtn.addEventListener('click',() =>{
    render();
    about();
})
