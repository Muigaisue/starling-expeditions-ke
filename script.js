const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your adventure enquiry has been received. We will be in touch soon.");
}
