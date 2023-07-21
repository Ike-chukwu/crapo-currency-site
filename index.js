const menubtn = document.querySelector(".fa-bars");
const crossbtn = document.querySelector(".fa-times");
const boxArray = document.querySelectorAll(".purple");
const cards = document.querySelector(".features").querySelectorAll(".box");
const btnText = document.querySelector(".features").querySelector(".box-container").querySelectorAll(".button .text");
const countText = document.querySelector(".h-section").querySelector(".box-container").querySelectorAll("h3");
const btns = document.querySelectorAll(".button")


// console.log(countText);

menubtn.onclick = () => {
  document.querySelector(".navlinks").classList.add("active");
};

crossbtn.onclick = () => {
  document.querySelector(".navlinks").classList.remove("active");
};


cards.forEach((card) => {
  card.addEventListener('click', function(){
    cards.forEach((card) => {
      card.classList.remove('active')  
    })
    this.classList.add('active')
    btnText.forEach((text) => {
      text.style.display = 'none'
    })
    this.querySelector('.text').style.display = 'initial'
    btns.forEach((btn) => {
      btn.style.padding = '0'
    })
    this.querySelector('.button').style.padding = '0 2rem'
  })
})


countText.forEach((count) => {
  
  count.innerHTML = "0"

  const updateCount = () => {
    const target = +count.getAttribute('data-count')
    const c = +count.innerHTML
    const increament = target / 1000
    
    if( c < target){
      count.innerHTML = Math.ceil(c + increament)
      setTimeout(updateCount, 10)
    }
    else{
      count.innerHTML = target
      if(target === 30)
        {
          count.innerHTML = `$${target}B`
        }
      else if(target === 190)
      {
        count.innerHTML = `${target}+`
      }
      else if(target === 10)
      {
        count.innerHTML = `${target}M`
      }
    }
  }
  updateCount()
})
