const img = document.querySelector("img");

const callback = (event) => {
  console.log(event);
};

//img.addEventListener("click", callback);

const callbackList = (event) => {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
};

const animaisList = document.querySelector(".animais-lista");

//animaisList.addEventListener("click", callbackList);

//console.log(animaisList);

const linkExterno = document.querySelector('a[href^="http"]');

const handleLinkExterno = (event) => {
  //console.log('Clicou')
  console.log(this);
  console.log(event.currentTarget);
  event.preventDefault();
};

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

const handleEvent = (event) => {
  console.log(event.type, event);
};

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);

const handleKeyBoard = (event) => {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }
}
window.addEventListener("keydown", handleKeyBoard);

const imgs = document.querySelectorAll('img');

const handleImg = (event) => {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})