const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

const headerContent = document.querySelector('.header-content');
const serviceCard = document.querySelector('.service-card');
const serviceCards = document.querySelector('.service-cards');
const project = document.querySelector('.project');
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const headerImg = document.querySelector('.header-img');

const tl = gsap.timeline({defaults: {duration: 1}});

tl.from(headerContent, {x: -400, opacity: 0})
  .from(headerImg, {x: 400, opacity: 0, duration: 0.5})
  .from(serviceCard, {scale: 2, opacity: 0})
  .from(serviceCards, {scale: 2, opacity: 0})

tl.from(project, {y: 300, opacity: 0})
  .from(project1, {y: 300, opacity: 0})
  .from(project2, {y: 300, opacity: 0})

