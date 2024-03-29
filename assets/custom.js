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


  const counter = document.getElementById("product__counter");
  if(counter){
  setInterval(() => {
	  //set day hours
	  const d = new Date();
	  const setTimeOfDay = d.getHours();
	  //set day hours
	  let	date1 = new Date().setHours(08,59,59) 
	  let date2 =  new Date().setHours(14,59,59) 
	  let date3 = new Date().setHours(32,59,59) 
  
	const currentDate = d;
	const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	  const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	  const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			  if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				  if(timeBetweenDates1 < 0) return
				  countTimer(timeBetweenDates1)
			  }
			  else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				  if(timeBetweenDates2 < 0) return
				  countTimer(timeBetweenDates2)
			  }
			  else{
				  if(timeBetweenDates3 < 0) return
				  countTimer(timeBetweenDates3)
			  }
	  }, 1000)
  //add zeros
  function addZero(num) {
	  return ("0" + parseInt(num)).substr(-2);
  }
  function countTimer(time){
	  const seconds = addZero(time % 60)
	  const minutes = addZero(Math.floor(time / 60) % 60)
	  const hours = addZero(Math.floor(time / 3600))
		counter.innerHTML = "<div class='inner'>"+hours+"<span class='dots'>:</span></div><div class='inner'>"+minutes+"<span class='dots'>:</span></div><div class='inner'>"+seconds+"</div>";
  }
  }
  
  
  const closeBtn = document.querySelector(".close__btn");
  const flipBar = document.querySelector(".flip-container");
  
  if(flipBar){
  window.addEventListener("scroll", () => {
	  let scroll = this.scrollY;
	  if(scroll > 699){ flipBar.classList.add("fixed-bottom")
	  }
	  else if(scroll < 500) {flipBar.classList.remove("fixed-bottom")
	}
	});
  if(closeBtn){
	  closeBtn.addEventListener("click", ()=>{
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
  let  minute = 3; // to clear the localStorage after 1 minute
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
  
  setInterval(() => {
	  //set day hours
	  const d = new Date();
	  const setTimeOfDay = d.getHours();
	  //set day hours
	  let	date1 = new Date().setHours(08,59,59) 
	  let date2 =  new Date().setHours(14,59,59) 
	  let date3 = new Date().setHours(32,59,59) 
  
	const currentDate = d;
	const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	  const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	  const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			  if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				  if(timeBetweenDates1 < 0) return
				  flipAllCards(timeBetweenDates1)
			  }
			  else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				  if(timeBetweenDates2 < 0) return
				  flipAllCards(timeBetweenDates2)
			  }
			  else{
				  if(timeBetweenDates3 < 0) return
				  flipAllCards(timeBetweenDates3)
			  }
	  }, 1000)
  
  
  function flipAllCards(time) {
	const seconds = time % 60
	const minutes = Math.floor(time / 60) % 60
	const hours = Math.floor(time / 3600)
  
	flip(document.querySelector("[data-hour-tens]"), Math.floor(hours / 10))
	flip(document.querySelector("[data-hour-ones]"), hours % 10)
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
  }