
function openLinkedin(){
    window.open("https://www.linkedin.com/in/koustubh-tatikondawar-84485a193","_blank")
}
function openInstagram(){
    window.open("https://www.instagram.com/urstrulykoustubh/?hl=en","_blank")
}
function openTwitter(){
    window.open("https://twitter.com/urstrulykoustub","_blank")
}

function submitForm(){
    alert('Submitted')
}

var form = document.getElementById("contact");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    alert('Submitted') 
    event.preventDefault(); 
} 
