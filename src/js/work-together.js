import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const buttonSend = document.querySelector(".contact-form");

console.log(buttonSend);


buttonSend.addEventListener('submit',pressSend);

function pressSend(event){
    event.preventDefault();
    console.log("ok");
    iziToast.show({
        title: 'Thank you for your interest in cooperation!',
        message: 'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
        position: 'center', // Центр екрана
        timeout: false, // Не закривати автоматично
        close: true, // Без стандартного хрестика
        overlay: true, // Додаємо напівпрозорий фон
        overlayClose: true, // Закривати при кліку на фон
        drag: false, // Заборонити перетягування
        zindex: 9999, // Щоб було поверх усього
        animateInside: true, // Анімація всередині
        transitionIn: 'fadeInDown', // Анімація появи
        transitionOut: 'fadeOutUp', // Анімація зникнення
        class: 'my-modal-izi', // Додаємо свій клас для додаткового стилювання
      });
}