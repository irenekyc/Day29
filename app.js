// DOM clarification for each items that need to be reveal
const portfolioCard = document.querySelector('.portfolio-cards-container')
const qcardcontainer = document.querySelector('.qualification-cards')
const qcards = document.querySelectorAll('.qualification-card')
const aboutmeItems = document.querySelectorAll('.title-to-be-revealed')
const aboutmeContainer = document.querySelector('.about-hero-container')
const quoteContainer = document.querySelector('.quote-to-be-revealed')
const windowHeight = window.innerHeight
let scrollPercentage

// add event listener on scroll

window.addEventListener('scroll', ()=>{
//calculate the elements items in relation to the window broswer height
    if (window.scrollY + windowHeight > portfolioCard.offsetTop){

// if the item reach the bottom of window browser , add css class to reveal item 
        scrollPercentage = (portfolioCard.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage < 70){
        portfolioCard.classList.add('is-reveal')
        }
    }
    if (window.scrollY + windowHeight > qcardcontainer.offsetTop){
        scrollPercentage = (qcardcontainer.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage < 50){
        qcards.forEach((card)=>{
            card.classList.add('card-reveal')
        })}}
    
    if (window.scrollY + windowHeight > aboutmeContainer.offsetTop){
        scrollPercentage = (aboutmeContainer.getBoundingClientRect().y / windowHeight)*100
        if (scrollPercentage < 50){
        aboutmeItems.forEach((item)=>{
            item.classList.add('fadeFromLeft')
        })
        quoteContainer.classList.add('fadeFromRight')}
    }
    })











