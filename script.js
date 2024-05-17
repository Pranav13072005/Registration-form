const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const desc = document.getElementById("desc");
const erroru = document.getElementById("erroru");
const errore = document.getElementById("errore");
const errorp = document.getElementById("errorp");
const errorc = document.getElementById("errorc");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const usernamefinal = username.value.trim();
    const emailfinal = email.value.trim();
    const passwordfinal = password.value.trim();
    const cpasswordfinal = cpassword.value.trim();
    const descfinal = desc.value.split(' ').length;

    if (usernamefinal==='') {
            setError(username, 'Username is required!');
    }
    else{
        setRight(username);
    }
    if (emailfinal===''){
        setError(email,'Email id is required!');
    } 
    else if(validateEmail(email)){
        setError(email,'Enter a valid email id');
    }   
    else{
        setRight(email);
    }
    if (passwordfinal===''){
        setError(password,'Password is required!');
    }
    else if (password.length<8){
        setError(password,'Password must have minimum 8 characters!');
    }
    else if ((!passwordfinal.match(/[0-9]/g) && (!passwordfinal.match(/[^A-Za-z0-9]/)))){
        setError(password, 'Password must contain atleast one digit and one spl ch!');
    }
    else if  (!passwordfinal.match(/[0-9]/g)){
        setError(password,'Password must contain atleast one digit');
    }
    else if  (!passwordfinal.match(/[^A-Za-z0-9]/)){
        setError(password,'Password must contain atleast one spl ch');
    }
    else{
        setRight(password);
    }
    if (cpasswordfinal===''){
        setError(cpassword,'Phone number is required!');
    }
    else if (cpasswordfinal.match(/[a-zA-z]/) || cpasswordfinal.match(/[^A-Za-z0-9]/)){
        setError(cpassword,'Enter a valid phone number');
    }
    else if (cpasswordfinal.length !== 10){
        setError(cpassword,'Phone number must contain 10 digits!');
    }
    else{
        setRight(cpassword);
        console.log("ph is right!")
    }
    if (desc===''){
        setError(desc,'Description is required!');
    }
    else if (descfinal>200){
        setError(desc,'Description must be less than 200 words');
    }
    else{
        setRight(desc);
    }
}
function setError(element, message){
    const group = element.parentElement;
    const error = group.querySelector('.error');

    error.innerText = message;
    group.classList.add('error');
    group.classList.remove('success');
}
function setRight(element){
    const group = element.parentElement;
    const error = group.querySelector('.error');

    error.innerText = '';
    group.classList.add('success');
    group.classList.remove('error');
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };