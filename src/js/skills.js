
function marquee(selector, speed) {
  const container = document.querySelector(selector);
  const items = Array.from(container.children);

    
  const track = document.createElement('div');
  track.classList.add('marquee-track');
  items.forEach(item => track.appendChild(item.cloneNode(true)));
  items.forEach(item => track.appendChild(item.cloneNode(true)));

  container.innerHTML = '';
  container.appendChild(track);

  let position = 0;
  animate();

  function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }  
}


window.addEventListener('load', () => {
  marquee('.marquee-container', 0.5);
});


window.addEventListener('load', () => {
  marquee('.marquee-container.box-2', 0.9);
});