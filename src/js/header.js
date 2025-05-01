// Знаходимо елементи
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.menu-mobile-item a'); // Тепер шукаємо посилання <a> всередині елементів

// Функція відкриття меню
function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Заборона скролу сторінки
}

// Функція закриття меню
function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = ''; // Повертаємо скрол
}
// Перевіряємо, чи елементи існують
if (openMenuBtn && closeMenuBtn && mobileMenu) {   

    // Відкриваємо меню при кліку на бургер
    openMenuBtn.addEventListener('click', openMenu);

    // Закриваємо меню при кліку на кнопку закриття
    closeMenuBtn.addEventListener('click', closeMenu);

    // Закриваємо меню при кліку на пункт меню
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
}

// Плавний скрол до секцій
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change theme

// const changeThemeButton = document.getElementById('theme-change');
// const body = document.body;

// changeThemeButton.addEventListener('click', () => {
//   body.classList.toggle('dark-theme');

//   if (body.classList.contains('dark-theme')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });

// window.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     document.body.classList.add('dark-theme');
//   }
// });
