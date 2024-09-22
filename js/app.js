// console.log('app connected');
let seatCount= [];
const availAbleSeat = document.getElementById('available-seat');
const selectedSeatList = document.getElementById('selected-seat-list');
const totalPriceValue = document.getElementById('total-price');
const couponBtnEl = document.getElementById('btn-coupons');
const couponInputEl = document.getElementById('coupon-field');
const seatCounterTitle = document.getElementById('seat-counter-title');
let totalPrice = 0;
console.log(selectedSeatList);
function selectSeat(event){

    const value = event.innerText
    if(seatCount.includes(value)){
        return alert('Seat already Booked');
    } 
    else if(seatCount.length < 4){
        console.log(event);
        seatCounterTitle.classList.add('hidden');

        event.classList.remove('bg-seatBg');
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        seatCount.push(event.innerText)
        console.log (seatCount);
    
        const seatCounter = document.getElementById('seat-count'); 
        seatCounter.innerText = seatCount.length;
    
        const newAvailAbleSeats = parseInt(availAbleSeat.innerText) - seatCount.length;
        console.log(newAvailAbleSeats);
        availAbleSeat.innerText = newAvailAbleSeats;
    
        // adding seat to the selected seat list 
        document.getElementById('seat-counter-title').style.display = 'none'
        selectedSeatList.innerHTML += `
         <li class="flex justify-between items-center">
        <span>${event.innerText}</span>
        <span>economy</span>
        <span>560 tk</span>
      </li>
    `
        // console.log(availAbleSeat);
    
        // update total price 
     totalPrice += 550;
     totalPriceValue.innerText = totalPrice.toFixed(2); 
    
    // active coupon 
    if(seatCount.length > 3){
        couponBtnEl.removeAttribute('disabled');
        couponInputEl.removeAttribute('disabled');
        console.log(seatCount);
    }
    
    }
    else {
        return alert('only 3 seat can be booked');
    }

   
}
// coupon
document.getElementById('btn-coupons').addEventListener('click', function(){
    if (couponInputEl !== 'NEW50' && !=='Couple 20' ){
        alert('wrong coupon!!');
    }
    if (couponBtnEl==='NEW50'){
        cou
    }
    const couponApplied = document.getElementById('coupon-applied');
    const massage = '1000 discount';
    couponApplied.appendChild(massage);
    console.log(couponApplied);
})
