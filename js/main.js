// код который открывает ссылку в новом окне по ножатию на кнопку

const project__btn = document.getElementsByClassName("project__btn");

for (let i = 0; i < project__btn.length; i++) {
  const el = project__btn[i];
  const url = el.getAttribute("data-url");
  console.log(url);
  el.addEventListener("click", function (event) {
    window.open(url, "_blank");
  });
}

// код который по ножатию на ссылку плавно переходит на секцию


const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    
    const id = link.getAttribute("href");
    const targetElement = document.querySelector(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// кнопка которая открывает меню на мобильных экранах

// Get the elements you want to add click event listeners to
const menuBtns = document.querySelectorAll('.menu__btn, .menu a');
const headerTopInner = document.querySelector('.header__inner');

// Define the click event handler function
function toggleHeaderTopInner() {
  headerTopInner.classList.toggle('header__top-inner--active');
}

// Add click event listeners to the selected elements
menuBtns.forEach(function (element) {
  element.addEventListener('click', toggleHeaderTopInner);
});
