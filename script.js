const scroll = document.querySelector('#scroll-down');

// make the scroll down div disappear when the page is scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 290) {
    scroll.classList.remove('show');
  } else {
    scroll.classList.add('show');
  }
});


const mySkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Python", "Linux", "Node", "mySQL", "Spring"];
const scrollContainer = document.querySelector(".scroll-container");

// create a set number of lists for the scrolling animation
for (let i = 0; i < 12; i++) {

  // generate an ordered list
  let tempList = document.createElement("ol");

  // and add list elements to it
  mySkills.forEach(item => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    tempList.appendChild(listItem);
  });

  // then add list to the scroll container
  scrollContainer.appendChild(tempList);
}