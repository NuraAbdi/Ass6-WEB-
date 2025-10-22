// Toggle sidebar & overlay
(function() {
  const burger = document.getElementById('burger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeSidebar');
  const sideLinks = sidebar.querySelectorAll('a');

  function open() {
    sidebar.classList.add('visible');
    overlay.classList.add('visible');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  }
  function close() {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = sidebar.classList.contains('visible');
    if (isOpen) close(); else open();
  });

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  // close when clicking a link in sidebar
  sideLinks.forEach(a => a.addEventListener('click', close));

  // close on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });
})();


// DATE
// Display current date and time
function updateTime() {
  const now = new Date();
  const options = { 
    year: 'numeric', month: 'long', day: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit' 
  };
  document.getElementById('menuTime').textContent = now.toLocaleString('en-GB', options);
}
setInterval(updateTime, 1000);
updateTime();

// BUTTON
const welcomeButton = document.querySelector('.welcome_button');

// массив цветов для фона
const colors = ['#8E1616', '#e2dbdbff', '#FF8A00', '#4CAF50', '#1E90FF', '#FFD700','#ff09ceee'];

welcomeButton.addEventListener('mouseover', function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.style.backgroundColor = randomColor;

  // менять цвет текста в зависимости от яркости фона
  const r = parseInt(randomColor.slice(1,3),16);
  const g = parseInt(randomColor.slice(3,5),16);
  const b = parseInt(randomColor.slice(5,7),16);
  const brightness = (r*299 + g*587 + b*114)/1000;
  this.style.color = (brightness > 155) ? '#111111' : '#EEEEEE';
});







