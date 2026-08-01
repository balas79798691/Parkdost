// ===============================
// Welcome Message
// ===============================

window.onload = function () {
    console.log("Welcome to ParkDost!");
};

// ===============================
// Live Parking Simulation
// ===============================

const slots = document.querySelectorAll(".slot");

function updateParking() {

    slots.forEach(slot => {

        if (Math.random() > 0.5) {

            slot.classList.remove("occupied");
            slot.classList.add("available");

        } else {

            slot.classList.remove("available");
            slot.classList.add("occupied");

        }

    });

}

// Update every 5 seconds
setInterval(updateParking, 5000);

// ===============================
// Book Parking Button
// ===============================

const bookButton = document.querySelector(".primary-btn");

if(bookButton){

bookButton.addEventListener("click",function(){

alert("🎉 Parking slot booked successfully!\n\nThank you for choosing ParkDost.");

});

}

// ===============================
// Learn More Button
// ===============================

const learnButton = document.querySelector(".secondary-btn");

if(learnButton){

learnButton.addEventListener("click",function(){

window.scrollTo({

top:700,

behavior:"smooth"

});

});

}

// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("📩 Thank you for contacting ParkDost!\nWe'll get back to you soon.");

form.reset();

});

}

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".stat-card h1");

counters.forEach(counter=>{

const target=counter.innerText;

const number=parseInt(target);

if(!isNaN(number)){

let count=0;

const speed=30;

const increment=Math.ceil(number/80);

const update=()=>{

count+=increment;

if(count<number){

counter.innerText=count+"+";
setTimeout(update,speed);

}
else{

counter.innerText=target;

}

};

update();

}

});

// ===============================
// Hover Effect on Parking Slots
// ===============================

slots.forEach(slot=>{

slot.addEventListener("mouseenter",()=>{

slot.style.transform="scale(1.15)";

});

slot.addEventListener("mouseleave",()=>{

slot.style.transform="scale(1)";

});

});

// ===============================
// Greeting Based on Time
// ===============================

const hour=new Date().getHours();

if(hour<12){

console.log("Good Morning! ☀️");

}
else if(hour<18){

console.log("Good Afternoon! 🌤️");

}
else{

console.log("Good Evening! 🌙");

}