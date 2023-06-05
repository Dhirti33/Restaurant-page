import me from '../image/Instagram.jpeg'


const home = () => {
    const container = document.getElementById("container")
    
    const homeContainer = document.createElement('div')
    homeContainer.id = 'homeContainer'
    container.append(homeContainer)

    const homeImage = document.createElement('div')
    homeImage.className = 'homeImage'
    homeContainer.append(homeImage)

    const img = document.createElement('img')
    homeImage.append(img)
    img.src = me

    const homeInfo =document.createElement('div')
    homeInfo.className = 'homeInfo'
    homeContainer.append(homeInfo)

    const h1 = document.createElement('h1')
    homeInfo.append(h1)
    h1.textContent = 'Welcome Value Customer'

    const span = document.createElement('span')
    homeInfo.append(span)
    span.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus consequatur quo libero nesciunt quae quidem error voluptatibus earum accusantium est voluptas, excepturi, aliquid corrupti maxime molestias ex. Perferendis, in?'
        
}

export default home;