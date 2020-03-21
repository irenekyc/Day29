const portfolioCard = document.querySelector('.portfolio-cards-container')
const qcardcontainer = document.querySelector('.qualification-cards')
const qcards = document.querySelectorAll('.qualification-card')
const aboutmeItems = document.querySelectorAll('.title-to-be-revealed')
const aboutmeContainer = document.querySelector('.about-hero-container')
const quoteContainer = document.querySelector('.quote-to-be-revealed')
let previousScrollY = window.scrollY
const windowHeight = window.innerHeight
let scrollDirection , scrollPercentage


//determin scrolling direction
window.addEventListener('scroll', ()=>{
    // if (window.scrollY>previousScrollY){
    //     scrollDirection = 'down'
        
    // } else (
    //     scrollDirection = 'up'
    // )
    // console.log(scrollDirection)
    // previousScrollY = window.scrollY;
    if (window.scrollY + windowHeight > portfolioCard.offsetTop){
        scrollPercentage = (portfolioCard.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage > 99){
        portfolioCard.classList.add('is-reveal')
        }
    }
    if (window.scrollY + windowHeight > qcardcontainer.offsetTop){
        scrollPercentage = (qcardcontainer.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage > 99){
        qcards.forEach((card)=>{
            card.classList.add('card-reveal')
        })}}
    
    if (window.scrollY + windowHeight > aboutmeContainer.offsetTop){
        scrollPercentage = (aboutmeContainer.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage > 95){
        aboutmeItems.forEach((item)=>{
            item.classList.add('fadeFromLeft')
        })
        quoteContainer.classList.add('fadeFromRight')}
    }
    })


