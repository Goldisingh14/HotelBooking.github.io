let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});










   
const apiFatch = (country,city)=>{
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e6678c1945msh73572c00f396b57p1b9576jsnb0d6e9de7044',
		'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
	}
};


fetch(`https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${city}&countryName=${country}` , options)

		.then(response => response.json())
		.then((response) => {
			console.log(response);
			document.querySelector("#apiLiveLink").href=response.link;
            document.getElementById("apiLiveLink").click();

		})
		.catch(err => console.error(err));
}
	

 







logoSearchBtn.addEventListener("click", function (e) {
 console.log("ahdfd");
 console.log(countryname.value);
     console.log(cityname.value);
	e.preventDefault();
    apiFatch(countryname.value,cityname.value)
	
})
