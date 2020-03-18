const prevBtn = document.querySelector('.prev-Btn')
const nextBtn = document.querySelector('.next-Btn')
const portfolioSlide = document.querySelector('.portfolio-slider')
let currentView = 0;


console.log(currentView)


prevBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (currentView>0){
    portfolioSlide.style.transform=`translateX(0)`
    console.log('clicked')
    console.log(currentView)
    currentView = 0;}

    return currentView
})


nextBtn.addEventListener('click', (e)=>{
    console.log(currentView)
    e.preventDefault()
    if (currentView >= 95) {

        return portfolioSlide.style.transform=`translateX(-150vw)`
    }
    currentView=currentView+95;
    portfolioSlide.style.transform=`translateX(-${currentView}vw)`;
    return currentView

})


