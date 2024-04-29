'use strict';

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const precedent = document.querySelector(".arrow_left");

const suivant = document.querySelector(".arrow_right");

const dots = document.querySelector(".dots");

const banner = document.getElementById("banner");

const text = document.querySelector("#banner p")



let i = 0;



const createHtmlElements = () => {
	for (let i = 0; i < slides.length; i++) {

		let point = document.createElement("div");
		point.classList.add("dot");
		point.dataset.id = i;
		dots.appendChild(point);
	}

	const imgBanner = document.createElement("img")
	imgBanner.classList.add("banner-img")
	banner.prepend(imgBanner)

	const textBanner = document.createElement("p")
	banner.prepend(textBanner)
    return [imgBanner,textBanner]
} 
const elementsBanner= createHtmlElements();
const imgBanner = elementsBanner[0];
const textBanner = elementsBanner [1];

console.log(textBanner);

const points = document.querySelectorAll(".dot");

const dotClick = () => {

points.forEach((dot, index) => dot.addEventListener
	("click",(e) =>{
		if   (e.target.dataset.id == index) {
		
			imgBanner.src = `./assets/images/slideshow/${slides[index].image}`;		
			textBanner.innerHTML = slides[index].tagLine;
		}
	}  )); 

};

dotClick();


const slider = (i) => {
	
	imgBanner.src = `./assets/images/slideshow/${slides[i].image}`;
	
	textBanner.innerHTML = slides[i].tagLine;

	const dots = banner.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === i) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	});
};

slider(i);


suivant.addEventListener("click", (e) => {
	i++;
	if (i > slides.length - 1) {
		i = 0
	}
	slider(i)
});

precedent.addEventListener("click", () => {
	i--;
	if (i < 0) {
		i = slides.length - 1
	}
	slider(i)
});

const startSlider= setInterval(() => {
	i++;
	if (i > slides.length - 1) {
		i = 0
	}
	slider(i)
}, 3000)

