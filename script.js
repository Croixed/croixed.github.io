const scroll = document.querySelector('#scroll-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 290) {
    scroll.classList.remove('show');
  } else {
    scroll.classList.add('show');
  }
});



const mySkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"];
animUl = document.getElementById("anim-ul");
animUl2 = document.getElementById("anim-ul-2");

mySkills.forEach(item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  animUl.appendChild(listItem);
});

mySkills.forEach(item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  animUl2.appendChild(listItem);
});