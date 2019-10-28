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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
console.log(document)
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// let navItems = [siteContent['nav']]
// siteContent.nav.forEach(item => navItems.push(item))
// let newt = []
// console.log(navItems[0])
// .navItems.forEach(element => {
//   newt.push(element)
// });
// console.log(newt)
let atag = document.querySelectorAll('a')
console.log(atag)
// for (let i = 0; i < newt.length; i++){
//   atag[i].textContent = newt[i + 1]
// }

atag[0].textContent = siteContent.nav["nav-item-1"]
atag[1].textContent = siteContent.nav["nav-item-2"]
atag[2].textContent = siteContent.nav["nav-item-3"]
atag[3].textContent = siteContent.nav["nav-item-4"]
atag[4].textContent = siteContent.nav["nav-item-5"]
atag[5].textContent = siteContent.nav["nav-item-6"]

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













// for (let a = 0; a < atag.length; a++){
//   let name = []
//   name.push(siteContent.nav[a])
//   console.log(siteContent.nav[a])
//   console.log(name)
//   atag[a].innerHTML = name
  
//     // atag[a].innerHTML = siteContent['nav'][a]
//   }


