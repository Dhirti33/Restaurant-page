const render = function(){
    const container = document.querySelector('#container')
    container.style = "";
    while(container.children.length > 1){
        container.children[1].remove();
    }
}

export default render;