const scroll = document.querySelector('#scroll-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 290) {
    scroll.classList.remove('show');
  } else {
    scroll.classList.add('show');
  }
});


const mySkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Python", "Linux", "Node", "mySQL", "Spring"];
const animUl = document.getElementById("anim-ul");
const animUl2 = document.getElementById("anim-ul-2");

// Generate enough content that it wraps scrolling without snapping.
// This is pretty weird so I'll probably rewrite it later
for (let i = 0; i < 4; i++) {
  mySkills.forEach(item => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    animUl.appendChild(listItem);
    animUl2.appendChild(listItem.cloneNode(true));
  });
}