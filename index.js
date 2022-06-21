const btn = document.querySelector('#btn');
btn.onclick = () => alert("Menu of things");

const contact = document.querySelector('#contact');
contact.onclick = () => alert("Contact info");

const about = document.querySelector('#about');
about.addEventListener('click', () => {
  alert("Nakey Time?");
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Nakey Time?");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

btn4.addEventListener('click', alertFunction);
