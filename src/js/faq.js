const triggers = document.querySelectorAll('.accordion-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isActive = trigger.classList.contains('active');
    
    // Закрыть все
    triggers.forEach(t => {
      t.classList.remove('active');
      t.parentElement.classList.remove('open');
      t.nextElementSibling.style.maxHeight = null;
      t.nextElementSibling.classList.remove('open');
    });
    
    // Открыть, если не был активным
    if (!isActive) {
      trigger.classList.add('active');
      trigger.parentElement.classList.add('open');
      const content = trigger.nextElementSibling;
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});