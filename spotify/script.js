let audioElement = new Audio('songs/6.mp3');
const masterPlay = document.querySelector("#masterplay");
const gif = document.querySelector(".gif");
const plays_small = document.querySelectorAll("#plays");
const range = document.querySelector("#progressBar");
const songIndex = 0;
let songItems =[{songname:"nishant" , src:"songs/1.mp3" , coverImg:"covers/1.jpg"},
                {songname:"sujata" , src:"songs/2.mp3" , coverImg:"covers/2.jpg"},
                {songname:"kisney" , src:"songs/3.mp3" , coverImg:"covers/3.jpg"},
                {songname:"nischal" , src:"songs/4.mp3" , coverImg:"covers/4.jpg"},
                {songname:"sakshyam" , src:"songs/5.mp3" , coverImg:"covers/5.jpg"}                
]
const music_container = document.querySelectorAll(".music-white-container");

music_container.forEach((elements, i)=>{
    
    elements.getElementsByTagName("img")[0].src = songItems[i].coverImg;
    elements.getElementsByTagName("span")[0].innerText = songItems[i].songname;
})





masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.duration<=0){
        audioElement.play();
       
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity= 0;
    }
})


audioElement.addEventListener("timeupdate",function(){
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value =progress;
})

range.addEventListener("change",()=>{
    audioElement.currentTime = range.value*audioElement.duration/100;
})
function makeAllPlays(){
    plays_small.forEach((elements)=>{
        elements.classList.remove('fa-pause');
        elements.classList.add('fa-play');
    })
}
plays_small.forEach((elements)=>{
    elements.addEventListener("click",function(e){
        makeAllPlays();
       
        
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src= 'songs/3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})