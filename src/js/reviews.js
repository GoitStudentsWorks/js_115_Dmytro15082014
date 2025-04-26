import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import Swiper for viewer reviews
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

const reviewsLists = document.querySelector('.swiper-wrapper');

// create class Reviews
class Reviews {
    constructor({name, review, icon, icon2x}){
        this.name = name,
        this.review = review,
        this.icon = icon,
        this.icon2x = icon2x
    }
}

// create array object reviews
const reviewsData = [
    { name: "Natalia Shevchenko", review: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",
        icon: "../img/reviews/natalia.png",
        icon2x: "../img/reviews/natalia@2x.png",
     },
    { name: "Dmytro Nazarenko", review: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results." ,
        icon: "../img/reviews/dmytro.png",
        icon2x: "../img/reviews/dmytro@2x.png",},
    { name: "Olena Kravchuk", review: "Very satisfied with the collaboration! Attentive to details, always in touch and ready to help. I recommend him as a reliable partner.",
        icon: "../img/reviews/natalia.png",
        icon2x: "../img/reviews/natalia@2x.png", },
    { name: "Andriy Melnyk", review: "Impressed by the professionalism and approach to work. The tasks were completed efficiently and within the agreed deadlines. I will definitely contact again!" ,
        icon: "../img/reviews/dmytro.png",
        icon2x: "../img/reviews/dmytro@2x.png", },
    { name: "Iryna Kovalenko", review: "The cooperation was easy and productive. You can feel the high level of qualification and the desire to help the client. Thank you for the excellent result!",
        icon: "../img/reviews/natalia.png",
        icon2x: "../img/reviews/natalia@2x.png", },
    { name: "Serhiy Tkachenko", review: "I recommend this specialist to everyone who values quality, responsibility and professionalism. The result exceeded my expectations." ,
        icon: "../img/reviews/dmytro.png",
        icon2x: "../img/reviews/dmytro@2x.png", },
    { name: "Yulia Bondarenko", review: "Pleasantly surprised by the attention to my needs and the speed of task completion. A true professional in their field!",
        icon: "../img/reviews/natalia.png",
        icon2x: "../img/reviews/natalia@2x.png", },
    { name: "Viktor Petrenko", review: "Excellent specialist who always finds optimal solutions. The collaboration was effective and brought the desired result." ,
        icon: "../img/reviews/dmytro.png",
        icon2x: "../img/reviews/dmytro@2x.png", }
  
  ];

  // create exemplar class reviews
  const reviewList = reviewsData.map(item => new Reviews(item));
  
  // creale and join HTML text for </ul>
  reviewsLists.innerHTML = reviewList.map(
    item => `<li class="review-cart swiper-slide">
    <p class = "review-text">${item.review}</p>
    <div class="review-bottom">
    <img class="review-avatar"
        src=${item.icon}
        srcset="${item.icon} 1x, ${item.icon2x} 2x"
        width="40"
        height="40"
        alt="${item.name}"
      />
    <p class = "review-autor">${item.name}</p>
    </div>
    </li>`
  ).join('');

  // for use swiper list reviews
  const swiper = new Swiper('.swiper',{
    modules: [Navigation,Keyboard],
    loop: false,
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    keyboard:{
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
  

  