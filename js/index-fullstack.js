// elements
let header = document.querySelector('header')
let statsContainer = document.getElementById('stats-container')
let navLinks = document.getElementsByClassName('nav-link')
let mobileNavLinks = document.getElementsByClassName('mobile-nav-link')
let mobileMenu = document.getElementById('mobile-nav-links-container')
let menuIcon = document.querySelector('#ham-menu .mdi')
let modal = document.getElementById('modal')
let modalGallery = document.getElementById('modal-gallery')
let modalHeader = document.getElementById('modal-header')
let modalText = document.getElementById('modal-text')
let modalAction = document.getElementById('modal-action')
let leftControl = document.getElementById('left-control')
let rightControl = document.getElementById('right-control')

let meBox = document.getElementById('me')


// variables
let ao = document.getElementById('about-container').offsetTop - 100
let po = document.getElementById('portfolio-container').offsetTop - 100
let co = document.getElementById('contact-container').offsetTop - 100

let currentImageIndex = -1


// element animation variables
let aniElements


// about text
let aboutTextIndex = -1
let aboutTexts = [
  { 
    text: '',
    label: 'show more (1/4)',
    skills: [
      { name: 'JS', value: 80 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 90 },
      { name: 'Vue.js', value: 75 },
      { name: 'JQuery', value: 60 },
      { name: 'React JS', value: 40 },
      { name: 'Figma', value: 40 }
    ]
  },
  {
    text: 'I am fascinated by the powers of web-development and I want to explore all the aspects of it.',
    label: 'uh huh? (2/4)',
    skills: [
      { name: 'Golang', value: 60 },
      { name: 'Laravel', value: 30 },
      { name: 'MySQL', value: 75 },
      { name: 'MongoDB', value: 50 },
    ]
  },
  {
    text: `The idea of <b class="highlight-text" onclick="goTo('p')">creating things</b> for the people gets me excited!`,
    label: 'anything else? (3/4)',
    skills: [
      { name: 'Creativity', value: 30 },
      { name: 'Logic', value: 60 },
      { name: 'Laziness', value: 50 }
    ]
  },
  {
    text: 'Besides web-development, I love &#127949; rides, listening to &#127925; and playing &#127918; games!',
    label: 'ok! show less (4/4)',
    skills: [
      { name: 'Bike Riding', value: 75 },
      { name: 'Gaming', value: 60 }
    ]
  }
]


// gallery
// re work on images and content
let projectsArray = [
  {
    name: 'Insurance Solutions',
    text: 'A complete web platform for "Insurance Solutions" policy agency and its customers to digitize their business.',
    link: 'https://insurancesolns.com/',
    images: [
      '../assets/images/is/is.webp',
      '../assets/images/is/explore.webp',
      '../assets/images/is/policies.webp'
    ]
  },
  {
    name: 'Trust Management System',
    text: 'A web-application to help a trust organization interact with the needy and manage daily data.',
    link: '',
    images: [
      '../assets/images/tms/tms.webp',
      '../assets/images/tms/applications.webp',
      '../assets/images/tms/receipt.webp',
      '../assets/images/tms/status.webp',
    ]
  },
  {
    name: 'Avid Games',
    text: 'A little games website which attempted to make the "lockdown" period a little less boring.',
    link: 'https://avidgames.site/',
    images: [
      '../assets/images/avid/avid.webp',
      '../assets/images/avid/homepage.webp',
      '../assets/images/avid/bird.webp',
      '../assets/images/avid/puzzle.webp',
    ]
  },
]

// document and window events
document.addEventListener('scroll', (e) => {
  if (window.scrollY > 64) {
    if (!header.classList.contains('scrolled'))
    header.classList.add('scrolled')
  } else {
    if (header.classList.contains('scrolled')) {
      header.classList.remove('scrolled')
    }
  }

  // header links active set
  if (window.scrollY > co) {
    if (!navLinks[2].classList.contains('active')) {
      navLinks[0].classList.remove('active')
      navLinks[1].classList.remove('active')
      navLinks[2].classList.add('active')
    }
    if (!mobileNavLinks[2].classList.contains('active')) {
      mobileNavLinks[0].classList.remove('active')
      mobileNavLinks[1].classList.remove('active')
      mobileNavLinks[2].classList.add('active')
    }
  } else if (window.scrollY > po) {
    if (!navLinks[1].classList.contains('active')) {
      navLinks[0].classList.remove('active')
      navLinks[2].classList.remove('active')
      navLinks[1].classList.add('active')
    }
    if (!mobileNavLinks[1].classList.contains('active')) {
      mobileNavLinks[0].classList.remove('active')
      mobileNavLinks[2].classList.remove('active')
      mobileNavLinks[1].classList.add('active')
    }
  } else if (window.scrollY > ao) {
    if (!navLinks[0].classList.contains('active')) {
      navLinks[1].classList.remove('active')
      navLinks[2].classList.remove('active')
      navLinks[0].classList.add('active')
    }
    if (!mobileNavLinks[0].classList.contains('active')) {
      mobileNavLinks[1].classList.remove('active')
      mobileNavLinks[2].classList.remove('active')
      mobileNavLinks[0].classList.add('active')
    }
  } else {
    navLinks[0].classList.remove('active')
    navLinks[1].classList.remove('active')
    navLinks[2].classList.remove('active')
    mobileNavLinks[0].classList.remove('active')
    mobileNavLinks[1].classList.remove('active')
    mobileNavLinks[2].classList.remove('active')
  }
})

window.addEventListener('load', (event) => {
  aniElements = document.querySelectorAll('.animate')
  setElementIntersections()
}, false)


// sets all elements intersection observer
function setElementIntersections() {
  let observer;
  let observerOptions = {
    threshold: 0.5
  }
  observer = new IntersectionObserver(observerCallback, observerOptions)
  aniElements.forEach((element) => {
    observer.observe(element)
  })
}
function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      let elementId = entry.target.id

      if (elementId === 'header') {
        animateHeader()
      } else if (elementId === 'about-stats-container') {
        toggleAboutStatsText()
      } else if (elementId === 'about-text-container') {
        toggleAboutText()
      } else if (elementId === 'is' || elementId === 'tms' || elementId === 'avid') {
        animatePorfolioCards(elementId)
      } else if (elementId === 'hire-card') {
        animateHire()
      } else if (elementId === 'contact-form') {
        animateContactForm()
      } else if (elementId === 'footer') {
        animateFooter()
      } else {
        if(screen.width > 768) {
          animateFromLeft('#' + entry.target.id)
        } else {
          animateFromBottom('#' + entry.target.id)
        }
      }
      observer.unobserve(entry.target)
    }
  })
}


// animation functions
function animateHeader() {
  let tl = anime.timeline({
    duration: 1000,
    easing: 'easeInOutQuart'
  })
  if (screen.width > 768) {
    // desktop
    // animating image and info container side by side
    tl.add({
      targets: '#cartoon-image',
      keyframes: [
        { opacity: 0, translateX: '280px' },
        { opacity: 1, translateX: '280px', duration: 1000 },
        { opacity: 1, translateX: '0', duration: 500 }
      ],
      easing: 'easeInOutCubic'
    })
    tl.add({
      targets: '#info-container',
      opacity: [0, 1]
    })
  } else if(screen.width > 576) {
    // tablet
    // animating image and info container top bottom
    tl.add({
      targets: '#cartoon-image',
      keyframes: [
        { opacity: 0, translateY: '80px' },
        { opacity: 1, translateY: '80px', duration: 1000 },
        { opacity: 1, translateY: '0', duration: 500 }
      ],
      easing: 'easeInOutCubic'
    })
    tl.add({
      targets: '#info-container',
      opacity: [0, 1],
      translateY: ['-25%', 0]
    }, 1500)
  } else {
    // mobile
    tl.add({
      targets: '#cartoon-image',
      keyframes: [
        { opacity: 0, translateY: '80px' },
        { opacity: 1, translateY: '80px', duration: 1000 },
        { opacity: 1, translateY: '0', duration: 500 }
      ],
      easing: 'easeInOutCubic'
    })
    tl.add({
      targets: '#info-container',
      opacity: [0, 1],
      translateY: ['-15%', 0]
    }, 1500)
  }
  tl.add({
    targets: '#chips-container .chip',
    opacity: [0, 1],
    delay: function(el, i, l) { return i*200 }
  })
  tl.add({
    targets: '#header-element',
    opacity: [0, 1],
    duration: 500
  }, 2000)
}


// about actions
function toggleAboutStatsText() {
  if (aboutTextIndex < aboutTexts.length - 1) {
    aboutTextIndex++
    if (aboutTextIndex == 1) {
      document.getElementById('about-action-icon').classList.add('invert')
    }
  } else {
    aboutTextIndex = 0
    document.getElementById('about-action-icon').classList.remove('invert')
  }
  document.getElementById('hidden-about-text').innerHTML = aboutTexts[aboutTextIndex].text
  document.getElementById('about-action-text').innerHTML = aboutTexts[aboutTextIndex].label
  animateSkills()
}

function toggleAboutText() {
  if (screen.width > 768) {
    animateFromLeft('#about-text-container')
  } else {
    animateFromBottom('#about-text-container')
  }
}

function animateSkills() {
  if (screen.width > 768 ) {
    // desktop
    animateFromRight(statsContainer)
  } else {
    // tablet
    animateFromBottom(statsContainer)
  }
  setTimeout(() => {
    let st = ``
    let delay = 0.3
    aboutTexts[aboutTextIndex].skills.forEach(skill => {
      st += `<span class="stat-name">`+skill.name+`</span>
      <div class="stat-progress-bar">
        <div class="stat-progress" style="--progress: `+skill.value+`%; --delay: `+delay+`s"></div>
      </div>
      <span class="stat-number">`+skill.value+`%</span>`;
      delay+= 0.1
    })
    statsContainer.innerHTML = st
  }, 500)
}

function animatePorfolioCards(card) {
  let delay = 0
  if (card === 'tms') {
    delay = 200
  } else if (card === 'avid') {
    delay = 400
  }
  if (screen.width > 768) {
    anime({
      targets: '#' + card,
      delay: delay,
      opacity: [0, 1],
      translateX: [-50, 0],
      easing: 'easeInOutQuart'
    })
  } else {
    anime({
      targets: '#' + card,
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeInOutQuart'
    })
  }
}

function animateHire () {
  animateFromBottom('#hire-card')
  meBox.classList.add('once')
  // webDevAnimation = anime({
  //   duration: 2000,
  //   easing: 'easeOutExpo',
  //   keyframes: [
  //     { translateX: 0, translateY: 0, borderRadius: '8px' },
  //     { translateX: 110, translateY: -8, borderRadius: '8px' }
  //   ]
  // })
}

function animateContactForm () {
  if (screen.width > 768) {
    animateFromRight('#contact-form')
  } else {
    animateFromBottom('#contact-form')
  }
}

function animateFooter() {
  let tl = anime.timeline({
    duration: 800,
    easing: 'easeOutQuart'
  })
  tl.add({
    targets: '#footer .social-link',
    delay: function(el, i) { return i*200 },
    opacity: [0, 1],
    translateY: [30, 0]
  })
  tl.add({
    targets: '#exit-link',
    opacity: [0, 1],
    translateY: [30, 0]
  }, 800)
  tl.add({
    targets: '#copyright',
    opacity: [0, 1],
    translateY: [30, 0]
  }, 1200)
}

// common animation functions 

function animateFromLeft(targetElement) {
  anime({
    targets: targetElement,
    keyframes: [
      { opacity: 0, translateX: '-50px' },
      { opacity: 1, translateX: 0}
    ],
    easing: 'easeOutQuart',
    duration: 1000
  })
}

function animateFromRight(targetElement) {
  anime({
    targets: targetElement,
    keyframes: [
      { opacity: 0, translateX: 50 },
      { opacity: 1, translateX: 0}
    ],
    easing: 'easeOutQuart',
    duration: 1000
  })
}

function animateFromBottom(targetElement) {
  anime({
    targets: targetElement,
    keyframes: [
      { opacity: 0, translateY: 50 },
      { opacity: 1, translateY: 0}
    ],
    easing: 'easeOutQuart',
    duration: 1000
  })
}



// other functions
function goTo(g) {
  if (g == 'a') {
    window.scrollTo({
      top: ao,
      behavior: "smooth"
    })
  } else if (g == 'p') {
    window.scrollTo({
      top: po,
      behavior: "smooth"
    })
  } else if (g == 'c') {
    window.scrollTo({
      top: co,
      behavior: "smooth"
    })
  }
}

function toggleMenu () {
  menuIcon.classList.toggle('mdi-menu')
  menuIcon.classList.toggle('mdi-close')
  mobileMenu.classList.toggle('active')
}

function openModal(i) {
  currentImageIndex = 0
  leftControl.classList.add('hidden')
  setModalContent(i)
  modal.classList.add('active')
  // modal.style.display = 'flex'
  // setModalContent(i)
  // anime({
  //   targets: modal,
  //   opacity: [0, 1],
  //   duration: 500,
  //   easing: 'easeOutCubic'
  // })
}

function setModalContent(i) {
  let currentProject = projectsArray[i]
  modalHeader.innerText = currentProject.name
  modalText.innerText = currentProject.text
  let actionText = ''
  if (currentProject.link) {
    actionText = `<a href="`+currentProject.link+`" target="_blank" class="btn">VISIT SITE<i class="mdi mdi-open-in-new"></i></a>`
  }
  modalAction.innerHTML = actionText
  let imageText = ``
  currentProject.images.forEach((image, index) => {
    let c = (index < currentImageIndex) ? 'left' : (index > currentImageIndex) ? 'right' : ''
    imageText += `<a href="`+image+`" target="_blank"><div class="image-container `+c+`"><img src="`+image+`" loading="lazy" alt="`+currentProject.name+`"></div></a>`
  })
  modalGallery.innerHTML = imageText
}

function closeModal() {
  modal.classList.remove('active')
  // anime({
  //   targets: modal,
  //   opacity: [1, 0],
  //   duration: 300,
  //   easing: 'easeOutCubic',
  // })
  // setTimeout(() => {modal.style.display = 'none'}, 300)
}

function changeStep(index) {
  let images = document.querySelectorAll('.image-container')
  let l = images.length
  if (currentImageIndex + index >= 0 && currentImageIndex + index <= (l - 1)) {
    currentImageIndex += index
    let classNames
    for(let i = 0; i < l; i++) {
      classNames = 'image-container'
      if (i < currentImageIndex) {
        classNames += ' left'
      } else if (i > currentImageIndex) {
        classNames += ' right'
      }
      images[i].className = classNames
    }
  }
  // set gallery controls according to current image index
  if (currentImageIndex === 0) {
    leftControl.classList.add('hidden')
  } else if (currentImageIndex === (l - 1)) {
    rightControl.classList.add('hidden')
  } else {
    leftControl.classList.remove('hidden')
    rightControl.classList.remove('hidden')
  }
}

function animateWeb() {
  if (meBox.style.animationPlayState === 'paused') {
    meBox.style.animationPlayState = 'running'
  } else if (meBox.classList.contains('once')) {
    meBox.classList.remove('once')
    meBox.classList.add('active')
    meBox.style.animationPlayState = 'running'
  }
}

function stopAnimateWeb() {
  if (meBox.style.animationPlayState === 'running') {
    meBox.style.animationPlayState = 'paused'
  }  
}

function submitMessage() {
  event.preventDefault()
  let btn = document.getElementById('submit-btn')
  btn.disabled = true
  btn.children[0].innerHTML = 'Sending Message'
  btn.children[1].classList = 'mdi mdi-timer-sand-full rotate'
  setTimeout(() => {
    btn.children[0].innerHTML = 'Message Sent'
  btn.children[1].classList = 'mdi mdi-check'
  }, 2000)
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}