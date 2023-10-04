const errors = document.querySelector('.errors');
const email = document.querySelector('.form input');
const button = document.querySelector('.form button');
const buttonModal = document.querySelector('.modal-button');
const container = document.querySelector('.container');
const containerSuccess = document.querySelector('.container-success');
const spanModal = document.querySelector('.span-email');
const regex = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i;


button.addEventListener('click', () => {

   if (email.value.length < 4 || !email.value.match(regex)) {
      errors.style.opacity = '1';
      email.style.backgroundColor = 'rgb(220,128,128)';
      email.style.border = '3px solid red';
   } else {
      spanModal.innerHTML = email.value;
      container.style.display = 'none';
      containerSuccess.style.display = 'block';
   }
})

buttonModal.addEventListener('click', () => {
   container.style.display = 'flex';
   containerSuccess.style.display = 'none';
   errors.style.opacity = "0";
   email.style.border = '3px solid black';
   email.style.backgroundColor = 'whitesmoke';
   email.value = "";
})