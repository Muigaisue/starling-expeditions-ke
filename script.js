const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name')?.value || '';
  const interest = document.getElementById('interest')?.value || '';
  const message = document.getElementById('message')?.value || '';
  const text = `Hello Starling Expeditions KE! My name is ${name}. I am interested in ${interest}. ${message}`;
  window.open(`https://wa.me/254745947000?text=${encodeURIComponent(text)}`, '_blank');
}
