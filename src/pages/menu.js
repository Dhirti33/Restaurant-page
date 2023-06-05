import pizza from "../image/img1.jpeg"
import bowl from "../image/img1.jpg"
import ball from "../image/img2.jpg"
import pizza2 from "../image/img12.jpg"
import burger from "../image/notification-image.jpg"
import cream from "../image/bg.jpg"

const menu = () => {
    const container = document.getElementById("container")

    const menuContainer = document.createElement('div')
    menuContainer.id = 'menuContainer'
    container.append(menuContainer)

    const label = document.createElement('label')
    label.className = 'label'
    menuContainer.append(label)
    label.textContent = 'Serve Dishes'

    const menuCard = document.createElement('div')
    menuCard.className = 'menuCard'
    menuContainer.append(menuCard)

    // ==== card 1 ===
    const menu = document.createElement('div')
    menu.className ='menu'
    menuCard.append(menu)

    const menuImg = document.createElement('div')
    menuImg.className ='menuImg'
    menu.append(menuImg)

    const jpg = document.createElement('img')
    menuImg.append(jpg)
    jpg.src = pizza;

    const menuInfo = document.createElement('div')
    menuInfo.className ='menuInfo'
    menu.append(menuInfo)

    const menuName = document.createElement('div')
    menuName.className ='menuName'
    menuInfo.append(menuName)
    menuName.textContent = 'Pizza'

    const menuPrice = document.createElement('div')
    menuPrice.className ='menuPrice'
    menuInfo.append(menuPrice)
    menuPrice.textContent = 'Price Range : 10$ - 20$'


    // ==== card 2 ===
    const menu2 = document.createElement('div')
    menu2.className ='menu'
    menuCard.append(menu2)

    const menuImg2 = document.createElement('div')
    menuImg2.className ='menuImg'
    menu2.append(menuImg2)

    const jpg2 = document.createElement('img')
    menuImg2.append(jpg2)
    jpg2.src = bowl

    const menuInfo2 = document.createElement('div')
    menuInfo2.className ='menuInfo'
    menu2.append(menuInfo2)

    const menuName2 = document.createElement('div')
    menuName2.className ='menuName'
    menuInfo2.append(menuName2)
    menuName2.textContent = 'Vegetable Soup'

    const menuPrice2 = document.createElement('div')
    menuPrice2.className ='menuPrice'
    menuInfo2.append(menuPrice2)
    menuPrice2.textContent = 'Price Range : 10$ - 20$'


    // ==== card 3 ===
    const menu3 = document.createElement('div')
    menu3.className ='menu'
    menuCard.append(menu3)

    const menuImg3 = document.createElement('div')
    menuImg3.className ='menuImg'
    menu3.append(menuImg3)

    const jpg3 = document.createElement('img')
    menuImg3.append(jpg3)
    jpg3.src = ball

    const menuInfo3 = document.createElement('div')
    menuInfo3.className ='menuInfo'
    menu3.append(menuInfo3)

    const menuName3 = document.createElement('div')
    menuName3.className ='menuName'
    menuInfo3.append(menuName3)
    menuName3.textContent = 'Meat Ball'

    const menuPrice3 = document.createElement('div')
    menuPrice3.className ='menuPrice'
    menuInfo3.append(menuPrice3)
    menuPrice3.textContent = 'Price Range : 10$ - 20$'


    // ==== card 4 ===
    const menu4 = document.createElement('div')
    menu4.className ='menu'
    menuCard.append(menu4)

    const menuImg4 = document.createElement('div')
    menuImg4.className ='menuImg'
    menu4.append(menuImg4)

    const jpg4 = document.createElement('img')
    menuImg4.append(jpg4)
    jpg4.src = pizza2

    const menuInfo4 = document.createElement('div')
    menuInfo4.className ='menuInfo'
    menu4.append(menuInfo4)

    const menuName4 = document.createElement('div')
    menuName4.className ='menuName'
    menuInfo4.append(menuName4)
    menuName4.textContent = 'Creamy Pizza'

    const menuPrice4 = document.createElement('div')
    menuPrice4.className ='menuPrice'
    menuInfo4.append(menuPrice4)
    menuPrice4.textContent = 'Price Range : 10$ - 20$'


    // ==== card 5 ===
    const menu5 = document.createElement('div')
    menu5.className ='menu'
    menuCard.append(menu5)

    const menuImg5 = document.createElement('div')
    menuImg5.className ='menuImg'
    menu5.append(menuImg5)

    const jpg5 = document.createElement('img')
    menuImg5.append(jpg5)
    jpg5.src = burger

    const menuInfo5 = document.createElement('div')
    menuInfo5.className ='menuInfo'
    menu5.append(menuInfo5)

    const menuName5 = document.createElement('div')
    menuName5.className ='menuName'
    menuInfo5.append(menuName5)
    menuName5.textContent = 'Burger'

    const menuPrice5 = document.createElement('div')
    menuPrice5.className ='menuPrice'
    menuInfo5.append(menuPrice5)
    menuPrice5.textContent = 'Price Range : 10$ - 20$'


    // ==== card 6 ===
    const menu6 = document.createElement('div')
    menu6.className ='menu'
    menuCard.append(menu6)

    const menuImg6 = document.createElement('div')
    menuImg6.className ='menuImg'
    menu6.append(menuImg6)

    const jpg6 = document.createElement('img')
    menuImg6.append(jpg6)
    jpg6.src = cream

    const menuInfo6 = document.createElement('div')
    menuInfo6.className ='menuInfo'
    menu6.append(menuInfo6)

    const menuName6 = document.createElement('div')
    menuName6.className ='menuName'
    menuInfo6.append(menuName6)
    menuName6.textContent = 'Diety Veg'

    const menuPrice6 = document.createElement('div')
    menuPrice6.className ='menuPrice'
    menuInfo6.append(menuPrice6)
    menuPrice6.textContent = 'Price Range : 10$ - 20$'
    
   
   

   
}

export default menu;