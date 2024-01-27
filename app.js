
    
function myFunction(View)
{
    let fullImage =  document.getElementById("fullImage")
    fullImage.src = View.src;
}



const count = document.getElementById("count")
const cart = document.getElementById("cart")
const cancel = document.getElementById("cancel")
cart.addEventListener("click" , increaseNumber)
let number = 0;
function increaseNumber() {
        number++;
    count.textContent = number;

    }
    
    cancel.addEventListener("click" , decreaseNumber)
    function decreaseNumber() {
        number--;
    count.textContent = number; 
}


function openMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = 'flex';
}

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = 'none';
}

function next() {
    const scroll = document.querySelector('.scroll');
    scroll.scrollLeft += 1000;
    scroll.style.scrollBehavior = "smooth"
}
  function prv() {
      const scroll = document.querySelector('.scroll');
      scroll.scrollLeft -= 1000;
      scroll.style.scrollBehavior = "smooth"
  }

function hide() {
   let email = document.getElementById("email")
   let hidetext = document.getElementById("hidetext")
   let showtext = document.getElementById("showtext")
   

   if(email.type === "email") {
       email.type = "password"
       hidetext.style.display = 'block'
    
   }else{
       email.type ="email"
       hidetext.style.display = "none"
    
   }
   

    
}

// checkbox js //

function checkbox() {
    const ptag = document.querySelector(".checkbox")
    const checkbox = document.querySelector("#checkbox")
        ptag.style.color = "green"
  
}

document.getElementById('contactForm').addEventListener('submit', function(event){
    console.log("submitButton was clilck")
    
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ptag = document.getElementByClassName("ptag");


});


