window.onload = function() {
  const musica = document.getElementById('musica');
  musica.play().catch(error => {
    console.log('Autoplay bloqueado. Haz clic en la página.');
    const playButton = document.getElementById('playMusic');
    playButton.addEventListener('click', () => {
      musica.play();
      playButton.classList.add('ocultar'); // Desvanecer el botón
    });
  });

  // Crear corazones flotantes
  const fondo = document.querySelector('.corazones-fondo');
  for (let i = 0; i < 30; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-flotante');

    // ——— Mostrar letra de "Perfect" ———
const lyricsDiv = document.getElementById('lyrics');

// Usa la API de lyrics.ovh para obtener la letra
fetch('https://api.lyrics.ovh/v1/Ed Sheeran/Perfect')
  .then(res => res.json())
  .then(data => {
    if (data.lyrics) {
      // Partimos la letra en párrafos
      lyricsDiv.innerHTML = data.lyrics
        .split('\n')
        .map(line => `<p>${line}</p>`)
        .join('');
    } else {
      lyricsDiv.innerHTML = '<p>Letra no disponible.</p>';
    }
  })
  .catch(err => {
    console.error('Error al cargar letra:', err);
    lyricsDiv.innerHTML = '<p>Error al cargar letra.</p>';
  });

    
    // Posición aleatoria horizontal
    corazon.style.left = Math.random() * 100 + 'vw';
    
    // Duración de la animación aleatoria
    corazon.style.animationDuration = (5 + Math.random() * 5) + 's';
    
    // Opacidad aleatoria
    corazon.style.opacity = Math.random();

    // Tamaño aleatorio
    const size = Math.random() * 20 + 10; // entre 10px y 30px
    corazon.style.width = size + 'px';
    corazon.style.height = size + 'px';

    // Forma aleatoria (más gorditos o más largos)
    const skewX = Math.random() * 20 - 10; // entre -10deg y 10deg
    const skewY = Math.random() * 20 - 10; // entre -10deg y 10deg
    corazon.style.transform = `rotate(-45deg) skew(${skewX}deg, ${skewY}deg)`;

    // Color aleatorio
    const colors = ['#ff4d4d', '#ff69b4', '#ff1493', '#ff7f7f', '#ffb6c1', '#e75480'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    corazon.style.background = randomColor;

    fondo.appendChild(corazon);
  }
};

window.onload = function() {
  const musica = document.getElementById('musica');
  const lyricsDiv = document.getElementById('lyrics');

  // Letra de la canción "Perfect" de Ed Sheeran con tiempos para cambiar el color
  const lyrics = [
    { text: 'I found a love me, to carry more than just my secrets', time: 20 },
    { text: 'To carry love, to carry children of our own', time: 35 },
    { text: 'We are still kids, but we\'re so in love', time: 53 },
    { text: 'Fighting against all odds', time: 68 },
    { text: 'I know we\'ll be alright this time', time: 83 },
    { text: 'Darling, just hold my hand', time: 98 },
    { text: 'Be my girl, I\'ll be your man', time: 113 },
    { text: 'I see my future in your eyes', time: 128 },
    { text: 'Baby, I\'m dancing in the dark', time: 143 },
    { text: 'With you between my arms', time: 158 },
    { text: 'Barefoot on the grass', time: 173 },
    { text: 'Listening to our favorite song', time: 188 },
    { text: 'When I saw you in that dress', time: 203 },
    { text: 'Looking so beautiful', time: 218 },
    { text: 'I don\'t deserve this', time: 233 },
    { text: 'Darling, you look perfect tonight', time: 248 },
  ];

  // Función para agregar la letra al div
  function displayLyrics() {
    lyricsDiv.innerHTML = lyrics.map(line => `<p class="lyric-line">${line.text}</p>`).join('');
  }

  // Función para cambiar el color de la línea actual
  function highlightLyric() {
    const currentTime = musica.currentTime;

    // Resaltamos la línea correspondiente con un color aleatorio
    let currentLine = lyrics.find((line, index) => currentTime >= line.time && (lyrics[index + 1] ? currentTime < lyrics[index + 1].time : true));

    const lines = document.querySelectorAll('.lyric-line');
    lines.forEach((line, index) => {
      if (lyrics[index].time === currentLine.time) {
        line.style.color = getRandomColor(); // Cambiar de color
      } else {
        line.style.color = '#333'; // Color normal
      }
    });
  }

  // Función para obtener un color aleatorio
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Inicializa la letra
  displayLyrics();

  // Reproducir música
  musica.play().catch(error => {
    console.log('Autoplay bloqueado. Haz clic en la página.');
    const playButton = document.getElementById('playMusic');
    playButton.addEventListener('click', () => {
      musica.play();
      playButton.classList.add('ocultar'); // Desvanecer el botón
    });
  });

  // Cada vez que la canción avance, actualizar la letra resaltada
  musica.addEventListener('timeupdate', highlightLyric);

  // Crear corazones flotantes
  const fondo = document.querySelector('.corazones-fondo');
  for (let i = 0; i < 30; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-flotante');
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (5 + Math.random() * 5) + 's';
    corazon.style.opacity = Math.random();
    fondo.appendChild(corazon);
  }
};
const musica = document.getElementById('musica');
const mensaje = document.getElementById('mensaje');

const lyrics = [
  { text: 'Feliz cumpleaños amorcito que tenga un bonito dia ', time: 2 },
  { text: 'Te amo', time: 20  }
  
];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

musica.addEventListener('timeupdate', () => {
  const currentTime = musica.currentTime;
  let currentLine = lyrics.find((line, index) => currentTime >= line.time && (lyrics[index + 1] ? currentTime < lyrics[index + 1].time : true));
  if (currentLine) {
    mensaje.textContent = currentLine.text;
    mensaje.style.color = getRandomColor(); // Cambia de color en cada palabra
  }
});





