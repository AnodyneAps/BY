/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

  // Get the modal
  var modal = document.getElementById("shippingModal");

  var btns = document.getElementsByClassName('js-modal-btn');
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("sh-close")[0];
  
  // When the user clicks the button, open the modal 

  for (var i = 0;i<btns.length;i+=1){
    var btn = btns[i];
    btn.onclick = function() {
        modal.style.display = "block";
    }
  }
  
  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

///////////////////////////////
// *** TEKST OPEN CLOSE *** //
/////////////////////////////

  var Allreadmore = document.getElementsByClassName('text_area_open');

  for (var i = 0;i<Allreadmore.length;i+=1){
    var btn = Allreadmore[i];
    btn.onclick = function() {
      //var carousel = btn.closest('.carousel')
      //var flkty = Flickity.data(carousel); 
      var commonParrent = this.parentElement;
      commonParrent.classList.toggle('text_area--open');
      console.log(flkty)
      flkty.resize();
    }
  }

  // flkty.on( 'change', function( index ) {
  //   var sliderOpen = this.slider.getElementsByClassName('text_area--open')[0];
  //   if (sliderOpen) {
  //     var button = sliderOpen.getElementsByClassName('text_area_open')[0];
  //     if (button) {
  //       button.click()
  //     }
  //   }
    
  // });


  // blackdays counter 

const closeBtn = document.querySelector(".close__btn");
const flipBar = document.querySelector(".flip-container");
const flipFlopBar = document.getElementById("flipFlop");

window.addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > 699){ flipBar.classList.add("fixed-bottom")
	}
	else if(scroll < 500) {flipBar.classList.remove("fixed-bottom")
}
	
});
if(typeof closeBtn != 'undefined' && closeBtn ){

closeBtn.addEventListener("click", (e)=> {
	localStorage.setItem("className", "show-flip");
	let classFromLocalStorage = localStorage.getItem("className");
	if (!classFromLocalStorage){
		flipBar.classList.add("show-flip")
	}
	flipBar.classList.remove("show-flip");
});
}
const checkCookie = () => {
	let classFromLocalStorage = localStorage.getItem("className");
	if(classFromLocalStorage == "show-flip") {
		flipBar.classList.add("hide");
		flipBar.classList.remove("show-flip");
	} else {
		flipBar.classList.add("show-flip");
		flipBar.classList.remove("hide");
	}
}

window.onload = () =>{
	setTimeout(()=>{
		checkCookie();
	},1000)
}


// clear localStorage after some time 
let  minute = 1; // to clear the localStorage after 1 minute
               // (if someone want to clear after 1 hour multiply by extra 60 or if you want to add more minuttes simply add 10 infront of minute variable)
let now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > minute*60*1000) {
       localStorage.removeItem("className");
        localStorage.setItem('setupTime', now);
    }
}


const dateCollect = flipFlopBar.dataset.collectDate;
const dateStr = dateCollect.replace(' ', 'T');
const countToBlackDays = new Date( dateStr );
let previousTimeBetweenDates
let daysContainer = document.querySelector("[data-days]");
// let dayDots = document.querySelector("[data-dots]");


setInterval(() => {
	const currentDate = new Date()
	const timeBetweenDates = Math.ceil((countToBlackDays - currentDate) / 1000)
	flipAllCards(timeBetweenDates)
	previousTimeBetweenDates = timeBetweenDates
	if (countToBlackDays< currentDate){
		flipFlopBar.style.display = "none";
	} 
	}, 250)


function flipAllCards(time) {

	const days = Math.floor(time * 1000 / (1000 * 60 * 60 * 24));
	const seconds = time % 60
	const minutes = Math.floor(time / 60) % 60
	const hours = Math.floor(time * 1000 / (1000 * 60 * 60))
	const difhours = hours - days * 24
	  if(days < 1){
		daysContainer.style.display = "none"
		// dayDots.style.display = "none"
	  }
	flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
	flip(document.querySelector("[data-days-ones]"), days % 10)
	flip(document.querySelector("[data-hour-tens]"), Math.floor(difhours / 10))
	flip(document.querySelector("[data-hour-ones]"), difhours % 10)
	flip(document.querySelector("[data-minute-tens]"), Math.floor(minutes / 10))
	flip(document.querySelector("[data-minute-ones]"), minutes % 10)
	flip(document.querySelector("[data-second-tens]"), Math.floor(seconds / 10))
	flip(document.querySelector("[data-second-ones]"), seconds % 10)
}

function flip(flipCard, newNumber){

	const topHalf = flipCard.querySelector(".top");
	const startNumber = parseInt(topHalf.textContent);
	if(newNumber === startNumber) return 

	const bottomHalf = flipCard.querySelector(".bottom");
	const topFlip = document.createElement("div");
	topFlip.classList.add("top-flip");
	const bottomFlip = document.createElement("div");
	bottomFlip.classList.add("bottom-flip");


topHalf.textContent = startNumber;
bottomHalf.textContent = startNumber;
topFlip.textContent = startNumber;
bottomFlip.textContent = newNumber;



topFlip.addEventListener("animationstart", e =>{
	topHalf.textContent = newNumber;
})
topFlip.addEventListener("animationend", e =>{
	topFlip.remove();
})

bottomFlip.addEventListener("animationend", e =>{
	bottomHalf.textContent = newNumber;
	bottomFlip.remove();
})

flipCard.append(topFlip, bottomFlip);
}
