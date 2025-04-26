import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
// import Swiper styles

const reviewsLists = document.querySelector('.swiper-wrapper');

class Reviews {
    constructor({name, review}){
        this.name = name,
        this.review = review
    }
}

const reviewsData = [
    { name: "Natalia Shevchenko", review: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations" },
    { name: "Dmytro Nazarenko", review: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results." },
    { name: "Olena Kravchuk", review: "Very satisfied with the collaboration! Attentive to details, always in touch and ready to help. I recommend him as a reliable partner." },
    { name: "Andriy Melnyk", review: "Impressed by the professionalism and approach to work. The tasks were completed efficiently and within the agreed deadlines. I will definitely contact again!" },
    { name: "Iryna Kovalenko", review: "The cooperation was easy and productive. You can feel the high level of qualification and the desire to help the client. Thank you for the excellent result!" },
    { name: "Serhiy Tkachenko", review: "I recommend this specialist to everyone who values quality, responsibility and professionalism. The result exceeded my expectations." },
    { name: "Yulia Bondarenko", review: "Pleasantly surprised by the attention to my needs and the speed of task completion. A true professional in their field!" },
    { name: "Viktor Petrenko", review: "Excellent specialist who always finds optimal solutions. The collaboration was effective and brought the desired result." }
  
  ];

  const reviewList = reviewsData.map(item => new Reviews(item));

  console.log(reviewList);
  
  reviewsLists.innerHTML = reviewList.map(
    item => `<li class="review-cart swiper-slide">
    <p class = "review-text">${item.review}</p>
    <p class = "review-autor">${item.name}</p>
    </li>`
  ).join('');

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
  });
  

  