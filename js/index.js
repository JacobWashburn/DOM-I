const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};
console.log(document)
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let atag = document.querySelectorAll('a')
console.log(atag)

atag[0].textContent = siteContent.nav["nav-item-1"]
atag[1].textContent = siteContent.nav["nav-item-2"]
atag[2].textContent = siteContent.nav["nav-item-3"]
atag[3].textContent = siteContent.nav["nav-item-4"]
atag[4].textContent = siteContent.nav["nav-item-5"]
atag[5].textContent = siteContent.nav["nav-item-6"]

const newNav1 = document.createElement('a')
newNav1.textContent = "thing1"
const newNav2 = document.createElement('a')
newNav2.textContent = 'thing2'

const navBar = document.querySelector('nav')
navBar.prepend(newNav1)
navBar.appendChild(newNav2, atag[5])

let newNavATag = document.querySelectorAll('nav a')
console.log(newNavATag)
newNavATag.forEach(atag => atag.style.color = 'green')

const cta = document.querySelector('.cta-text h1');
const brTag = document.createElement('br');
const brTag2 = document.createElement('br');
const dom = document.createTextNode('DOM');
const is = document.createTextNode('Is');
const awesome = document.createTextNode('Awesome');
console.log(cta);
cta.append(dom);
cta.appendChild(is);
cta.appendChild(awesome);
cta.insertBefore(brTag, is);
cta.insertBefore(brTag2, awesome)

let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let ctaBtn = document.querySelector('.cta-text button')
ctaBtn.textContent = 'Get Started'

let topTextTitle = document.querySelectorAll('.top-content .text-content h4')
console.log(topTextTitle)
topTextTitle[0].textContent = siteContent['main-content']['features-h4']
topTextTitle[1].textContent = siteContent['main-content']['about-h4']

let topTextContent = document.querySelectorAll('.top-content .text-content p')
topTextContent[0].textContent = siteContent['main-content']['features-content']
topTextContent[1].textContent = siteContent['main-content']['about-content']

let midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottContentTitle = document.querySelectorAll('.bottom-content .text-content h4')
console.log(bottContentTitle)
bottContentTitle[0].textContent = siteContent['main-content']['services-h4']
bottContentTitle[1].textContent = siteContent['main-content']['product-h4']
bottContentTitle[2].textContent = siteContent['main-content']['vision-h4']

let bottContentText = document.querySelectorAll('.bottom-content .text-content p')
bottContentText[0].textContent = siteContent['main-content']['services-content']
bottContentText[1].textContent = siteContent['main-content']['product-content']
bottContentText[2].textContent = siteContent['main-content']['vision-content']

let contactInfoH4 = document.querySelector('.contact h4')
contactInfoH4.textContent = siteContent['contact']['contact-h4']

let contactInfoText = document.querySelectorAll('.contact p')
const brTag3 = document.createElement('br');
const addy1 = document.createTextNode('123 Way 456 Street');
const addy2 = document.createTextNode('Somewhere, USA');
contactInfoText[0].append(addy1)
contactInfoText[0].append(brTag3)
contactInfoText[0].append(addy2)
contactInfoText[1].textContent = siteContent['contact']['phone']
contactInfoText[2].textContent = siteContent['contact']['email']

let footerText = document.querySelector('footer p')
footerText.textContent = 'Copyright Great Idea! 2018'