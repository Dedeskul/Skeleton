const card = document.querySelector('.card')
const icons = document.querySelectorAll('.icon')
const titleDescription = document.querySelector('.titleDescription')
const titleContent = document.querySelector('.titleContent')
const participantPrice = document.querySelector('.participantPrice')
const newComesPrice = document.querySelector('.newComesPrice')
const dateInfo = document.querySelector('.dateInfo')



const cardData = {
    backgroundImagePath: 'images/1582.webp',
    iconsPath: ['./images/21.svg', './images/36.svg', './images/60.svg', './images/111.svg'],
    title: {
        description: 'Норвегія: назустріч фіордам',
        content: 'Великі скандинавські пригоди',
    },
    price: {
        participants: '690',
        newComes: '750'
    },
    date: '17 - 23 червня 2022p.'
}

const simulateServerRequest = () => new Promise(resolve => {
    setTimeout(() => resolve(cardData), 3000)
})

const createIcon = (iconPath) => {
    const img = document.createElement('img')
    img.src = iconPath
    img.style.width = '24px'
    img.style.height = '24px'

    return img
}

const setCardInfo = (cardInfo) => {
    const {
        backgroundImagePath,
        iconsPath,
        title:{ description, content },
        price:{ participants, newComes },
        date
    } = cardInfo
    card.style.backgroundImage = "url(" + backgroundImagePath + ")"
    icons.forEach((iconContainer, index) => {
        const icon = createIcon(iconsPath[index])
        iconContainer.appendChild(icon)
    })
    titleDescription.innerHTML = description
    titleContent.innerHTML = content
    participantPrice.innerHTML = participants
    newComesPrice.innerHTML = newComes
    dateInfo.innerHTML = date
}

const displaySkeleton = () => {
    icons.forEach(iconContainer => iconContainer.classList.add('skeleton'))
    titleDescription.classList.add('skeleton', 'skeleton-text')
    titleContent.classList.add('skeleton', 'skeleton-text')
    participantPrice.classList.add('skeleton', 'skeleton-text')
    newComesPrice.classList.add('skeleton', 'skeleton-text')
    dateInfo.classList.add('skeleton', 'skeleton-text')
}

const hideSkeleton = () => {
    icons.forEach(iconContainer => iconContainer.classList.remove('skeleton'))
    titleDescription.classList.remove('skeleton', 'skeleton-text')
    titleContent.classList.remove('skeleton', 'skeleton-text')
    participantPrice.classList.remove('skeleton', 'skeleton-text')
    newComesPrice.classList.remove('skeleton', 'skeleton-text')
    dateInfo.classList.remove('skeleton', 'skeleton-text')
}

const fillCard = async () => {
    displaySkeleton()
    const data = await simulateServerRequest()
    setCardInfo(data)
    hideSkeleton()
}

document.addEventListener('DOMContentLoaded', fillCard, false);