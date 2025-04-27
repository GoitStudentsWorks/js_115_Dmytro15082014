document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', function () {
    const item = this.parentElement;
    const content = item.querySelector('.accordion-content');

    if (item.classList.contains('open')) {
      item.classList.remove('open');
      this.classList.remove('active');
      content.style.maxHeight = null;
      content.classList.remove('open');
    } else {
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger').classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = null;
        i.querySelector('.accordion-content').classList.remove('open');
      });
      item.classList.add('open');
      this.classList.add('active');
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});