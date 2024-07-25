const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides.length);

//Récupération de tout les éléments 

const bannerImg = document.querySelector(".banner-img"); 
const bannerP = document.querySelector("#banner p"); 
let currentSlide = 0; 

//Flèche de droite

const arrowRight = document.querySelector(".arrow_right") 
	console.log(arrowRight)

	arrowRight.addEventListener("click", function() { 
		
		currentSlide += 1; 
		
		if (currentSlide > 4) 
		currentSlide = 0; 

		bannerImg.src = slides[currentSlide].image;  
		bannerP.innerHTML = slides[currentSlide].tagLine;

		changeSlide();
	});

//Flèche de gauche 

const arrowLeft = document.querySelector(".arrow_left");
	console.log(arrowLeft) 	

	arrowLeft.addEventListener("click", function() {

		if (currentSlide < 0)
		currentSlide = 4;

		currentSlide -= 1;
		bannerImg.src = slides[currentSlide].image;
		bannerP.innerHTML = slides[currentSlide].tagLine;

		changeSlide();
	});

	
//Affichage des points	

const divDots = document.querySelector(".dots") 

for (i = 0; i < slides.length; i++) { 
	const dots = document.createElement('div'); 
	dots.classList.add("dot"); 
	divDots.appendChild(dots); 
}

 // Afficahge de l'indicateur 

const allDots = document.querySelectorAll(".dot")

	for (let i = 0; i < allDots.length; i++) { 
		if (i === currentSlide) {  
		allDots[i].classList.add("dot_selected"); 
		}
	}


 // Défilement de l'indicateur selon la slide dans laquelle on est 
 function changeSlide() {

	for (let i = 0; i < allDots.length; i++) {
		if (i === currentSlide){  
			allDots[i].classList.add("dot_selected");
		} else {
			allDots[i].classList.remove("dot_selected");
		}
	}}


