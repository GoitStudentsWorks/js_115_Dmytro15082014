import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const reviewsLists = document.querySelector('.swiper-wrapper');

// Клас адаптовано під API
class Reviews {
  constructor({ author, avatar_url, review }) {
    this.name = author;
    this.review = review;
    this.icon = avatar_url;
  }
}

// Функція завантаження
async function loadReviews() {
  try {
    const { data } = await axios.get('https://portfolio-js.b.goit.study/api/reviews?limit=6');

    const reviewList = data.map(item => new Reviews(item));

    reviewsLists.innerHTML = reviewList
      .map(
        item => `<li class="review-cart swiper-slide">
          <div class="review-inner">
            <p class="review-text">${item.review}</p>
            <div class="review-bottom">
              <img class="review-avatar"
                src="${item.icon}"
                srcset="${item.icon}"
                width="40"
                height="40"
                alt="${item.name}"
              />
              <p class="review-autor">${item.name}</p>
            </div>
          </div>
        </li>`
      )
      .join('');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, something went wrong. Please try again later.',
      position: 'topRight',
    });

    reviewsLists.innerHTML = `<li class="review-cart swiper-slide">
      <div class="review-inner">
        <p class="review-text">Not found</p>
      </div>
    </li>`;
  }
}

// Виклик
loadReviews();

// Swiper ініціалізація
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
});
