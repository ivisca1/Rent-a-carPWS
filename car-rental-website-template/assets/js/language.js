const langEl = document.querySelector('.langWrap')
  const link = document.querySelectorAll('.lang-a');
const bannerTextEl1 = document.querySelector('.banner-text-1');

  link.forEach(el => {
    el.addEventListener('click', () => {
      langEl.querySelector('.active-language').classList.remove('active-language');
      el.classList.add('active-language');

      const attr= el.getAttribute('language');


      bannerTextEl1.textContent = data[attr].bannerText1;
      
    })
  })
  
  var data={
    "english":{
        "bannerText1": "Find your car today!",
      
    },
    "bosnian":{
        "bannerText1": "Pronađite svoj auto danas!",
    }
  }