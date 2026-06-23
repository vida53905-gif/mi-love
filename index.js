// Mensajes y pequeñas interacciones para "Wawa"
const loveText = document.getElementById('loveText');
const moreBtn = document.getElementById('moreBtn');
const promises = document.getElementById('promises');
const roseArea = document.getElementById('roseArea');

const extraLines = [
  "Tu voz es mi canción favorita.",
  "Contigo todo se siente más cerca, incluso a distancia.",
  "Cada mensaje tuyo es un abrazo que guardo.",
  "Prometo cuidarte con palabras, risas y detalles."
];

let expanded = false;
moreBtn.addEventListener('click', () => {
  if(!expanded){
    loveText.textContent += " " + extraLines.join(" ");
    moreBtn.textContent = "Menos";
    expanded = true;
  } else {
    loveText.textContent = "Eres mi risa en la mañana, mi paz en la noche. Aunque seamos una pareja virtual, cada mensaje tuyo ilumina mi día.";
    moreBtn.textContent = "Leer más";
    expanded = false;
  }
});

// Generar corazones y rosas animadas
function createHeart(x, delay, size, color){
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${x}%`;
  heart.style.bottom = '-20px';
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDelay = `${delay}s`;
  heart.innerHTML = `<svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-8-6.6-8-11.2C4 6.9 6.7 4 9.5 4 11 4 12 5 12 5s1-1 2.5-1C17.3 4 20 6.9 20 9.8 20 14.4 12 21 12 21z"/></svg>`;
  roseArea.appendChild(heart);
  // remover al terminar la animación
  setTimeout(()=> heart.remove(), (6000 + (delay*1000)));
}

function randomHearts(count=6){
  for(let i=0;i<count;i++){
    const x = Math.random()*80 + 5;
    const delay = Math.random()*3;
    const size = Math.floor(Math.random()*18)+18;
    const color = (Math.random()>0.5) ? '#ff6b9a' : '#ff3b6b';
    createHeart(x, delay, size, color);
  }
}

// inicial: planta una rosa SVG y corazones
function initRoseAndHearts(){
  // rosa central (SVG)
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("class","rose");
  svg.setAttribute("viewBox","0 0 64 64");
  svg.innerHTML = `
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0" stop-color="#ff9db8" />
        <stop offset="1" stop-color="#d83a6b" />
      </linearGradient>
    </defs>
    <g transform="translate(0,2)">
      <path fill="url(#g1)" d="M32 12c-6 0-10 6-8 12 2 6 12 12 12 12s10-6 12-12c2-6-2-12-8-12-3 0-6 2-8 0z"/>
      <rect x="29" y="30" width="6" height="24" rx="3" fill="#5a2b2b" />
      <path d="M24 40c-6 2-12 8-14 14h8c0-6 8-14 6-14z" fill="#255a3b" opacity="0.9"/>
    </g>
  `;
  roseArea.appendChild(svg);

  // animar corazones periódicamente
  randomHearts(6);
  setInterval(()=> randomHearts(4 + Math.floor(Math.random()*4)), 3500);
}

initRoseAndHearts();

// añadir promesas interactivas al hacer clic
promises.addEventListener('click', (e) => {
  if(e.target && e.target.tagName === 'LI'){
    e.target.style.transform = 'scale(1.03)';
    e.target.style.transition = 'transform 180ms';
    setTimeout(()=> e.target.style.transform = '', 220);
  }
});
