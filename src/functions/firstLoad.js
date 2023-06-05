import headerDiv from "../pages/header";
import home from "../pages/home";

const firstLoad = function(){
    const container = document.querySelector('#container');
    const header = headerDiv();
    container.append(header);
    home();
}

export default firstLoad;