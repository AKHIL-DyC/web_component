let speech=new SpeechSynthesisUtterance();
let i=0;
document.querySelector("#first").addEventListener("click",()=>{
 i=1;   
console.log("#first");    
speech.text="Hello, I'm Akhil, a passionate individual with a keen interest in technology, particularly in the realm of Linux and web development. Currently studying at MEC, I am not just a student, but also an entrepreneur and the founder of 3WB, a venture that aims to revolutionize the web development landscape. My journey in the world of technology has ignited my curiosity about Linux systems and the vast possibilities they offer. With a strong foundation in web development, I am determined to bring innovative ideas to life. Join me as I explore the endless opportunities that the digital world has to offer";
document.querySelector("#first").addEventListener("click",()=>{
    if(i=1){
    window.speechSynthesis.cancel();
    }
})

window.speechSynthesis.speak(speech);
})
