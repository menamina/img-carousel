import './styles.css';
import art1 from './art1.jpg';
import art2 from './art2.jpg';
import art3 from './art3.jpg';
import art4 from './art4.jpg';
import art5 from './art5.jpg';
import { dotClick } from './dotClick';
import { leftClick, rightClick } from './arrowClick';

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
    const dotNum = Number(e.target.dataset.index);
    dotClick(dotNum, images);

    const dot = e.target;
    document.querySelectorAll(".dot").forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
});


const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");

const nextImage = rightClick(images);
const prevImage = leftClick(images);

rightArrow.addEventListener('click', nextImage);

leftArrow.addEventListener('click', prevImage);