const langEl = document.querySelector('.langWrap')
  const link = document.querySelectorAll('.lang-a');
const bannerTextEl1 = document.querySelector('.banner-text-1');
const offersclass1 = document.querySelector('.offersclass1');
const offersclass2 = document.querySelector('.offersclass2');
const viewmoreclass1 = document.querySelector('.viewmoreclass1');
const perweekend1 = document.querySelector('.perweekend1');
const perweekend2 = document.querySelector('.perweekend2');
const perweekend3 = document.querySelector('.perweekend3');

const from1 = document.querySelector('.from1');
const from2 = document.querySelector('.from2');
const from3 = document.querySelector('.from3');

const aboutus1 = document.querySelector('.aboutus1');
const aboutus2 = document.querySelector('.aboutus2');

const readmore = document.querySelector('.readmore');
const readmore2 = document.querySelector('.readmore2');
const readmore3 = document.querySelector('.readmore3');

const latblogpost = document.querySelector('.latblogpost');

const happyclients = document.querySelector('.happyclients');

const pricesprev = document.querySelector('.pricesprev');

const pricemenu = document.querySelector('.pricemenu');

const contactus = document.querySelector('.contactus');
const contactus2 = document.querySelector('.contactus2');

const websitevisitcount = document.querySelector('.websitevisitcount');

const fleet = document.querySelector('.fleet');
const fleet2 = document.querySelector('.fleet2');

const homeclass1 = document.querySelector('.homeclass1');

const blog = document.querySelector('.blog');

const team = document.querySelector('.team');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');
//const offersclass1 = document.querySelector('.offersclass1');




  link.forEach(el => {
    el.addEventListener('click', () => {
      langEl.querySelector('.active-language').classList.remove('active-language');
      el.classList.add('active-language');

      const attr= el.getAttribute('language');


      bannerTextEl1.textContent = data[attr].bannerText1;
	  
	  offersclass1.textContent = data[attr].offersclass1;
	  offersclass2.textContent = data[attr].offersclass1;
	  
	  viewmoreclass1.textContent = data[attr].viewmoreclass1;
	  perweekend1.textContent = data[attr].perweekend;
	  perweekend2.textContent = data[attr].perweekend;
	  perweekend3.textContent = data[attr].perweekend;
	  
	  from1.textContent = data[attr].from;
	  from2.textContent = data[attr].from;
	  from3.textContent = data[attr].from;
	  
	  aboutus1.textContent = data[attr].aboutus1;
	  aboutus2.textContent = data[attr].aboutus1;
	  
	  readmore.textContent = data[attr].readmore;
	  readmore2.textContent = data[attr].readmore;
	  readmore3.textContent = data[attr].readmore;
	  
	  latblogpost.textContent = data[attr].latblogpost;
	  
	  happyclients.textContent = data[attr].happyclients;
	  
	  pricesprev.textContent = data[attr].pricesprev;
	  
	  pricemenu.textContent = data[attr].pricemenu;
	  
	  contactus.textContent = data[attr].contactus;
	  contactus2.textContent = data[attr].contactus;
	  
	  websitevisitcount.textContent = data[attr].websitevisitcount;
	  
	  fleet.textContent = data[attr].fleet;
	  fleet2.textContent = data[attr].fleet;
	  
	  homeclass1.textContent = data[attr].homeclass1;
	  
	  blog.textContent = data[attr].blog;
	  
	  team.textContent = data[attr].team;
	  
	  testimonials.textContent = data[attr].testimonials;
	  
	  uslovi.textContent = data[attr].uslovi;
	  
	  
	  offersclass1.textContent = data[attr].offersclass1;
	  offersclass1.textContent = data[attr].offersclass1;
	  offersclass1.textContent = data[attr].offersclass1;
	  offersclass1.textContent = data[attr].offersclass1;
	  offersclass1.textContent = data[attr].offersclass1;
      
    })
  })
  
  var data={
    "english":{
        "bannerText1": "Find your car today!",
		"offersclass1": "Offers",
		"viewmoreclass1": "view more",
		"perweekend": "per weekend",
		"from": "from",
		"aboutus1": "About Us",
		"readmore": "Read More",
		"latblogpost": "Latest Blog Posts",
		"happyclients": "Happy Clients",
		"pricesprev": "Prices",
		"pricemenu": "Download our price menu",
		"contactus": "Contact Us",
		"websitevisitcount": "Website visit count:",
		"fleet": "Fleet",
		"homeclass1": "Home",
		"uslovi": "Terms",
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Testimonials",
		"offersclass1": "Offers",
		"offersclass1": "Offers",
		"offersclass1": "Offers",
		
		
      
    },
    "bosnian":{
        "bannerText1": "Pronađite svoj auto danas!",
		"offersclass1": "Ponude",
		"viewmoreclass1": "vidi još",
		"perweekend": "po vikendu",
		"from": "od",
		"aboutus1": "O Nama",
		"readmore": "Više informacija",
		"latblogpost": "Najnovije na Blogu",
		"happyclients": "Sretni Klijenti",
		"pricesprev": "Cijene",
		"pricemenu": "Skinite meni cijena",
		"contactus": "Kontaktirajte Nas",
		"websitevisitcount": "Brojač posjeta:",
		"fleet": "Flota",
		"homeclass1": "Početak",
		"uslovi": "Uslovi",
		"blog": "Blog",
		"team": "Tim",
		"testimonials": "svjedočenja",
		"offersclass1": "Ponude",
		"offersclass1": "Ponude",
		
    }
  }
