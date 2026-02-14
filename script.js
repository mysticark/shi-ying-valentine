const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");
const mainPage = document.getElementById("mainPage");
const lovePage = document.getElementById("lovePage");
const typingText = document.getElementById("typingText");
const bgMusic = document.getElementById("bgMusic");

const message = `
From the moment I met you, my world has been brighter 🌍✨
Your smile is my favourite sight 😍
Your laughter is my favourite sound 🎶💞
I cherish every moment we share 💕
and I want to create a million more memories with you 💫💖

So I have a very important question... 🥹💘
`;

let i = 0;
function typeEffect(){
    if(i < message.length){
        typingText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}
typeEffect();

// Music autoplay after interaction
document.body.addEventListener("click", () => {
    bgMusic.play();
},{ once:true });

// No button escape
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Yes button
yesBtn.addEventListener("click", () => {
    celebrate.classList.remove("hidden");

    setTimeout(() => {
        mainPage.classList.add("hidden");
        lovePage.classList.remove("hidden");
    }, 2000);
});

// Countdown to Bali (15 Feb 2026 13:20 MYT)
const baliDate = new Date("2026-02-15T13:20:00+08:00");

function updateCountdown(){
    const now = new Date();
    const diff = baliDate - now;

    if(diff <= 0){
        document.getElementById("countdown").innerHTML = "We're in Bali!!! 🇮🇩💖🌴";
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60)) % 24);
    const minutes = Math.floor((diff/(1000*60)) % 60);
    const seconds = Math.floor((diff/1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} days 💕 ${hours} hrs ⏰ ${minutes} min 💖 ${seconds} sec 💘`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
