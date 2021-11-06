const card = document.querySelector(".card2")
const container = document.querySelector(".container2")

//Items
const title = document.querySelector('.title')
const logo = document.querySelector('.logo2 img')
const visit = document.querySelector('.visit2 a')
const description = document.querySelector('.info h3')
const technologies = document.querySelector('.technologies2')

//Moving Animation effect
container.addEventListener("mousemove", (e) => {
let xAxis = (window.innerwidth / 2 - e.pageX) /25;
let yAxis = (window.innerwidth / 2 - e.pageY) /5;
card.getElementsByClassName.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)"
    logo.style.transform = "translateZ(200px) rotateZ(-45deg)"
    description.style.transform = "translateZ(125px)"
    technologies.style.transform = "translateZ(100px)"
    visit.style.transform = "translateZ(75px)"
})

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    title.style.transform = "translateZ(0px)"
    logo.style.transform = "translateZ(0px) rotateZ(0deg)"
    description.style.transform = "translateZ(0px)"
    technologies.style.transform = "translateZ(0px)"
    visit.style.transform = "translateZ(0px)"
})