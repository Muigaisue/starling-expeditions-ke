const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('.nav a').forEach(link =>
    link.addEventListener('click', () => nav.classList.remove('open'))
  );
}

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name')?.value || '';
  const interest = document.getElementById('interest')?.value || '';
  const message = document.getElementById('message')?.value || '';

  const text = `Hello Starling Expeditions KE! My name is ${name}. I am interested in ${interest}. ${message}`;

  window.open(
    `https://wa.me/254745947000?text=${encodeURIComponent(text)}`,
    '_blank'
  );
}


/* =========================
   STARLING BRAND HERO POLISH
   EXISTING PHOTO REMAINS UNCHANGED
========================= */

const brandStyle = document.createElement('style');

brandStyle.textContent = `

.hero{
  min-height:760px;
  padding:155px 7% 90px;
  background-position:center 23%;
}

.hero-overlay{
  background:
    linear-gradient(
      90deg,
      rgba(0,0,0,.82) 0%,
      rgba(0,0,0,.55) 43%,
      rgba(0,0,0,.12) 100%
    ),
    linear-gradient(
      0deg,
      rgba(0,0,0,.42),
      transparent 65%
    );
}

.hero-content{
  max-width:700px;
}

.hero .eyebrow{
  font-size:0;
  margin:0 0 18px;
  letter-spacing:0;
}

.hero .eyebrow::before{
  content:'EXPLORE   •   EXPERIENCE   •   CONNECT';
  display:block;
  font-size:12px;
  letter-spacing:4px;
  font-weight:800;
  color:#fff;
}

.hero h1{
  font-size:0;
  line-height:.88;
  letter-spacing:1px;
  margin:0 0 20px;
}

.hero h1 span{
  display:none;
}

.hero h1::before{
  content:'STARLING';
  display:block;
  color:#fff;
  font-family:Anton,Impact,sans-serif;
  font-size:clamp(78px,8.4vw,128px);
  line-height:.86;
}

.hero h1::after{
  content:'EXPEDITIONS KE';
  display:block;
  color:var(--green);
  font-family:Anton,Impact,sans-serif;
  font-size:clamp(48px,5.25vw,82px);
  line-height:.92;
  margin-top:5px;
}

.hero-copy{
  max-width:510px;
  font-size:16px;
  line-height:1.55;
}

.hero-copy::before{
  content:'EMBRACE NATURE';
  display:block;
  width:max-content;
  max-width:100%;
  color:#fff;
  font-size:17px;
  font-weight:800;
  letter-spacing:7px;
  margin:0 0 25px;
  padding:9px 28px;
  border-top:2px solid var(--green);
  border-bottom:2px solid var(--green);
}

.hero-actions{
  margin-top:28px;
}

.hero-note{
  display:none;
}

.brand img{
  width:155px;
}

@media(max-width:600px){

  .hero{
    min-height:720px;
    padding:145px 6% 65px;
  }

  .hero h1::before{
    font-size:clamp(60px,16vw,86px);
  }

  .hero h1::after{
    font-size:clamp(35px,9.5vw,55px);
  }

  .hero-copy::before{
    font-size:12px;
    letter-spacing:4px;
    padding:8px 14px;
  }

}

`;

document.head.appendChild(brandStyle);
