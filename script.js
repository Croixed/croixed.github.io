const scroll = document.querySelector('#scroll-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 290) {
    scroll.classList.remove('show');
  } else {
    scroll.classList.add('show');
  }
});



const mySkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Python", "Linux", "Node", "mySQL", "Spring", "HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Python", "Linux", "Node", "mySQL", "Spring"];
animUl = document.getElementById("anim-ul");
animUl2 = document.getElementById("anim-ul-2");
animUl3 = document.getElementById("anim-ul-3");
animUl4 = document.getElementById("anim-ul-4");

// generate enough that it wraps without snapping
for (let i = 0; i < 3; i++) {
  console.log(i);
}
mySkills.forEach(item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  animUl.appendChild(listItem);
  animUl2.appendChild(listItem.cloneNode(true));
  animUl3.appendChild(listItem.cloneNode(true));
  animUl4.appendChild(listItem.cloneNode(true));
});