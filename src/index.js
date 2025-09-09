import './styles.css';
import art1 from './art1.jpg';
import art2 from './art2.jpg';
import art3 from './art3.jpg';
import art4 from './art4.jpg';
import art5 from './art5.jpg';
import { dotClick } from './dotClick';

const images = [art1, art2, art3, art4, art5];
const container = document.querySelector('.imgQueue');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add("picture");
  container.appendChild(img);
});

const dots = document.querySelector(".dots");
dots.addEventListener('click', (e) => {
    const selectedDot = e.target.dataset.index;
    dotClick(selectedDot);

})


const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");

rightArrow.addEventListener('click', () => {

});

leftArrow.addEventListener('click', () => {

});