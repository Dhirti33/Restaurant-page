const about = () => {
    const container = document.getElementById("container")

    const aboutContainer = document.createElement('div')
    aboutContainer.id = 'aboutContainer'
    container.append(aboutContainer)

    const label = document.createElement('label')
    label.className = 'aboutLabel'
    aboutContainer.append(label)
    label.textContent = 'About Us'

    const about = document.createElement('p')
    about.className = 'about'
    aboutContainer.append(about)
    about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit numquam rem aut cupiditate recusandae consectetur accusantium possimus nulla, nam, necessitatibus exercitationem optio dolore doloribus obcaecati similique nobis autem error.'

    const contact = document.createElement('div')
    contact.className = 'contact'
    aboutContainer.append(contact)

    const p = document.createElement('p')
    contact.append(p)
    p.textContent = 'Contact Us On'

    // === phone 1 ===
    const phone = document.createElement('div')
    phone.className = 'phone'
    contact.append(phone)

    const ph = document.createElement('p')
    ph.className = 'ph'
    phone.append(ph)
    ph.textContent = 'Phone : '

    const phI = document.createElement('p')
    phI.className = 'phI'
    phone.append(phI)
    phI.textContent = '0548341442'

    // === phone 2 ===
    const phone2 = document.createElement('div')
    phone2.className = 'phone'
    contact.append(phone2)

    const ph2 = document.createElement('p')
    ph2.className = 'ph'
    phone2.append(ph2)
    ph2.textContent = 'Email : '

    const phI2 = document.createElement('p')
    phI2.className = 'phI'
    phone2.append(phI2)
    phI2.textContent = 'lomokodesmond@gmail.com'

    // === phone 3 ===
    const phone3 = document.createElement('div')
    phone3.className = 'phone'
    contact.append(phone3)

    const ph3 = document.createElement('p')
    ph3.className = 'ph'
    phone3.append(ph3)
    ph3.textContent = 'Location : '

    const phI3 = document.createElement('p')
    phI3.className = 'phI'
    phone3.append(phI3)
    phI3.textContent = 'F451 SPROUT ST. WS-632-3810'

}

export default about;