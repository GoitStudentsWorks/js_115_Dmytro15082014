// function Marquee(selector, speed) {
//   const parentSelector = document.querySelector(selector);
//   const clone = parentSelector.innerHTML;
//   const firstElement = parentSelector.children[0];
//   let i = 0;
//   let marqueeInterval;

//     parentSelector.insertAdjacentHTML('beforeend', clone);
//     parentSelector.insertAdjacentHTML('beforeend', clone);

//   function startMarquee() {
//     marqueeInterval = setInterval(function () {
//       firstElement.style.marginLeft = `-${i}px`;
//       if (i > firstElement.light) {
//         i = 0;
//       }
//       i = i + speed;
//     }, 0);
//   }

//   function stopMarquee() {
//     clearInterval(marqueeInterval);
//   }

//  parentSelector.addEventListener('mouseenter', stopMarquee);
//   parentSelector.addEventListener('mouseleave', startMarquee);

//   startMarquee();
// }

// window.addEventListener('load', () => Marquee('.skills-box', 0.3));

// window.addEventListener('load', () => Marquee('.box-2', 0.5));


