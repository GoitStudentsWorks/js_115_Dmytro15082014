import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

 document.addEventListener('DOMContentLoaded', function() {
    new Accordion('#accordion', {
      duration: 300, // скорость анимации (в миллисекундах)
      showMultiple: false, // можно ли открывать сразу несколько блоков
      openOnInit: [0], // можно указать, какой аккордеон открыть при загрузке (например, 0 - первый)
      elementClass: 'ac-item', // класс элемента
      triggerClass: 'ac-trigger', // класс триггера
      panelClass: 'ac-panel', // класс панели
      activeClass: 'is-active' // класс для открытого элемента
    });
  });


  