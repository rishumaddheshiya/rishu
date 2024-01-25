var typed = new Typed(".element",{
    strings:["Web Developer","Web Designer","Programmer","Coding Enthusiast"],
typeSpeed:80,
backSpeed:80,
backDelay:50,
loop:true


});
var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabname){
  
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
 



    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
let outer=document.querySelector(".outer1");
let num=document.querySelector(".num1");

let numstart=0,
numend=90,
speed=25;

let progress=setInterval(() => {
    numstart++;
    num.textContent=`${numstart}%`;
    outer.style.background=`conic-gradient(#38f5f8, ${numstart*3.6}deg, black 0deg)`;
    if(numstart==numend){
        clearInterval(progress);
    }
    console.log(numstart);
}, speed);

let outer2=document.querySelector(".outer2");
let num2=document.querySelector(".num2");

let numstart2=0,
numend2=80,
speed2=25;

let progress2=setInterval(() => {
    numstart2++;
    num2.textContent=`${numstart2}%`;
    outer2.style.background=`conic-gradient(#38f5f8, ${numstart2*3.6}deg, black 0deg)`;
    if(numstart2==numend2){
        clearInterval(progress2);
    }
    console.log(numstart2);
}, speed2);

let outer3=document.querySelector(".outer3");
let num3=document.querySelector(".num3");

let numstart3=0,
numend3=70,
speed3=25;

let progress3=setInterval(() => {
    numstart3++;
    num3.textContent=`${numstart3}%`;
    outer3.style.background=`conic-gradient( #38f5f8, ${numstart3*3.6}deg, black 0deg)`;
    if(numstart3==numend3){
        clearInterval(progress3);
    }
    console.log(numstart3);
}, speed3);


let outer4=document.querySelector(".outer4");
let num4=document.querySelector(".num4");

let numstart4=0,
numend4=70,
speed4=25;

let progress4=setInterval(() => {
    numstart4++;
    num4.textContent=`${numstart4}%`;
    outer4.style.background=`conic-gradient( #38f5f8, ${numstart4*3.6}deg, black 0deg)`;
    if(numstart4==numend4){
        clearInterval(progress4);
    }
    console.log(numstart4);
}, speed4);

let toolnum=document.querySelector(".tooltip1");

let toolnumstart=0,
toolnumend=90,
toolspeed=25;

let toolprogress=setInterval(() => {
    toolnumstart++;
    toolnum.textContent=`${toolnumstart}%`;
    
    if(toolnumstart==toolnumend){
        clearInterval(toolprogress);
    }
    console.log(toolnumstart);
}, toolspeed);

let toolnum2=document.querySelector(".tooltip2");

let toolnumstart2=0,
toolnumend2=80,
toolspeed2=25;

let toolprogress2=setInterval(() => {
    toolnumstart2++;
    toolnum2.textContent=`${toolnumstart2}%`;
    
    if(toolnumstart2==toolnumend2){
        clearInterval(toolprogress2);
    }
    console.log(toolnumstart2);
}, toolspeed2);

let toolnum3=document.querySelector(".tooltip3");

let toolnumstart3=0,
toolnumend3=70,
toolspeed3=25;

let toolprogress3=setInterval(() => {
    toolnumstart3++;
    toolnum3.textContent=`${toolnumstart3}%`;
    
    if(toolnumstart3==toolnumend3){
        clearInterval(toolprogress3);
    }
    console.log(toolnumstart3);
}, toolspeed3);

let toolnum4=document.querySelector(".tooltip4");

let toolnumstart4=0,
toolnumend4=60,
toolspeed4=25;

let toolprogress4=setInterval(() => {
    toolnumstart4++;
    toolnum4.textContent=`${toolnumstart4}%`;
    
    if(toolnumstart4==toolnumend4){
        clearInterval(toolprogress4);
    }
    console.log(toolnumstart4);
}, toolspeed4);

let toolnum5=document.querySelector(".tooltip5");

let toolnumstart5=0,
toolnumend5=60,
toolspeed5=25;

let toolprogress5=setInterval(() => {
    toolnumstart5++;
    toolnum5.textContent=`${toolnumstart5}%`;
    
    if(toolnumstart5==toolnumend5){
        clearInterval(toolprogress5);
    }
    console.log(toolnumstart5);
}, toolspeed5);



  
let speech= new SpeechSynthesisUtterance();
let voices=[];
let voiceselect=document.getElementById("input1");

window. speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[2];
    speech.voice=voices[voiceselect.value];
};
voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value];
})
    document.querySelector("#button1").addEventListener("click",()=>{
        speech.text=document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    
    
    });
     function setPlayPause()
     {
        var butimg=document.getElementById('playimg');
        butimg.src="pause-button.png";
       
         setTimeout(() => {
            var butimg=document.getElementById('playimg');
        butimg.src="video-icon-8031.png";
        },2500)

     }
     