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

let slider = document.querySelector('.switch');

slider.addEventListener('change', changeTheme);

if (localStorage.getItem('darkMode') === 'true') {
    slider.checked = true;
    document.body.classList.add('dark');
}

function changeTheme() {
    if (slider.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
}
