const password = document.getElementById('password');
const checkbox = document.getElementById('show');

checkbox.addEventListener('click', ()=>{
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);
})