"use strict";


const imageDB = [
  {src:'https://t3.ftcdn.net/jpg/05/63/76/92/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg',
    alt:'sea'
  },
{
  src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSMvRUhhjJ6VDhI3_kqmzaLEja7wrrhS23g&s',
  alt:'sea 2',
},
{
  src:'https://www.marineinsight.com/wp-content/uploads/2019/04/Shallow-Water-Waves.jpg',
  alt:'sea 3',
},
];
const slider = new Slider(imageDB)

const image = document.querySelector(".slider-container > .slide > img");

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container>button"
);

function upDateSlide(){
  image.src = slider.currentSlide.src
  image.alt = slider.currentSlide.alt;
}
upDateSlide()


prevBtn.addEventListener('click', handlerSlide('prev'))

nextBtn.addEventListener('click',handlerSlide('next'))

function handlerSlide(direction='next'){
 return ()=>{
    slider.currentIndex = slider[direction]
    upDateSlide()
  }
}




// prevBtn.addEventListener('click',()=>{
// slider.currentIndex = slider.prev;
// upDateSlide()
// })
// nextBtn.addEventListener('click',()=>{
//   slider.currentIndex = slider.next
//  upDateSlide()
// })