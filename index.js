const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.aside')
const body = document.querySelector('body')
const menu = document.querySelector(".fas");

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show')
    body.classList.toggle('body-overflow')
})



      function menuHandler(menu) {
        
          hamburger.onclick = () => {
            if (menu.classList.contains("fa-bars")) {
                menu.classList.remove("fa-bars");
                menu.classList.add("fa-times");
            } else {
                menu.classList.remove("fa-times");
                menu.classList.add("fa-bars");
            }
          };
        }
      
      menuHandler(menu);