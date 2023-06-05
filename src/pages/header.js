import logo from '../image/logo.svg'

const headerDiv = () => {
    
    const navBar = document.createElement('div')
    navBar.id = 'navBar'
    container.append(navBar)

    const restNameInfo = document.createElement('div')
    restNameInfo.className = 'restNameInfo'
    navBar.append(restNameInfo)

    const image = document.createElement('div')
    restNameInfo.append(image)
    image.className = 'img'

    const svg = document.createElement('img')
    image.append(svg)
    svg.src = logo

    const restName = document.createElement('h3')
    restName.className = 'restName'
    restNameInfo.append(restName)
    restName.textContent = 'CHEF SENSEI'

    const nav = document.createElement('nav')
    nav.className = 'nav'
    navBar.append(nav)

    const homeBtn = document.createElement('button')
    homeBtn.className = 'homeBtn'
    nav.append(homeBtn)
    homeBtn.textContent = 'Home'

    const menuBtn = document.createElement('button')
    menuBtn.className = 'menuBtn'
    nav.append(menuBtn)
    menuBtn.textContent = 'Menu'

    const aboutBtn = document.createElement('button')
    aboutBtn.className = 'aboutBtn'
    nav.append(aboutBtn)
    aboutBtn.textContent = 'About'

    
    return navBar;
}

export default headerDiv;