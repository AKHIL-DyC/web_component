var rect=document.querySelector("#rec");
rect.addEventListener("mousemove",function(details){
   rectcord=rect.getBoundingClientRect();
   /*console.log(details.clientX)
   console.log(rectcord.x)*/
   if(details.clientX>(rectcord.x+(rectcord.width)/2)){
        /*console.log("right")*/
        var greenc =gsap.utils.mapRange((rectcord.x+(rectcord.width)/2),(rectcord.x+rectcord.width),0,255,details.clientX)
        gsap.to(rect,{
            backgroundColor:`rgb(0,${greenc},0)`,
            ease:Power4
        })
     
   }
   else{
    console.log("left")
    var redc =gsap.utils.mapRange(rectcord.x,(rectcord.x+(rectcord.width)/2),255,0,details.clientX)
        gsap.to(rect,{
            backgroundColor:`rgb(${redc},0,0)`,
            ease:Power4
        })
   }
   
},
rect.addEventListener("mouseleave",function(ldetails){
    if(ldetails.isTrusted){
        gsap.to(rect,{backgroundColor:`rgb(255,255,255)`})
    }
})

);
