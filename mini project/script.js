let cursor=document.querySelector(".cursor")
let html=document.querySelector("html")

html.addEventListener("mousemove",function(dets){

    cursor.style.top=dets.y +"px";
    cursor.style.left=dets.x  +"px";
    cursor.style.transition=" all 0.3s ease-out";
});

let t1=gsap.timeline()

t1.from(".moon img ",
{
   x :-700,
   y:280,
   duration:1.8,
   delay:1,opacity:0.6,
   rotate:"30"
});
t1.to(".main-head h1",
{
    opacity:"100",
    duration:0.4,
    scale:"1.1"
 
})
t1.to(".rocket img",
{
    opacity:"0",
    duration:10,
    delay:0.4,
    x:1000,
    y:-1000,
    repeat:-1
    
})


document.querySelector(".dets1").addEventListener("mouseenter",function(){

    document.querySelector(".main-1 .content1").style.opacity="1"
})
document.querySelector(".dets1").addEventListener("mouseleave",function(){

    document.querySelector(".main-1 .content1").style.opacity="0"



})
document.querySelector(".dets2").addEventListener("mouseenter",function(){

    document.querySelector(".main-2 .content2").style.opacity="1"
})
document.querySelector(".dets2").addEventListener("mouseleave",function(){

    document.querySelector(".main-2 .content2").style.opacity="0"



})
document.querySelector(".main2 #box2").addEventListener("mousemove",function()
{
    document.querySelector(".main2 .rover").style.opacity="1";
    document.querySelector(".main2 .rover").style.tranistion="all ease 3s"
})

gsap.to(".main2",{

    opacity:1,
    duration:2,
    scrub:0.2,
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
        top:"30%"
    }
}
)
gsap.from(".main2 #box1,#box2",
{
    x:-300,
    duration:2,
    scale:0.6,
    delay:1,
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
        top:"110%",
        
    }
})
gsap.from(".main2 #box3,#box4,#box5",
{
    x:300,
    duration:2,
    scale:0.6,
    delay:1,
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
    }
})

gsap.to(".rocket-specs",{
    y:20,
    tranistion:
    "all ease ",
    repeat:-1,
    duration:5
})
let roverh=document.querySelector(".roverh")
let roveri=document.querySelector(".roveri");



gsap.from(".roverh",
{
    
    duration:1,
    scrollTrigger:{
        trigger:".roverh",
        scroller:"body",
        start:"top 10%"
    }
})   
gsap.to(".roveri",
{
    x:-800,
    y:300,
    duration:25,
    delay:1,
    scrollTrigger:{
        trigger:".roverh",
        scroller:"body",
        
    }

})
gsap.from(".roverh .rovern",
{

    y:130,
    scrub:3,
    opacity:"0",
    duration:4,
    delay:1,
    // rotate:"180deg",
    scrollTrigger:{
        trigger:".roverh",
        scroller:"body",
        end:"top",
       
    }


})





// roveri.addEventListener("click",function()
// {   
//     roverh.style.background="black";
//     document.querySelector(".roverh .rovern").style.display="none";
//     gsap.to(".roveri",{

//        x: 200,
//        y:300,
//        scale:"1.8",
//        rotate:"-5deg",
       
//     })

// })


gsap.from(".main5",{
    duration:3,
    tranistion:"all ease-in",
    scrollTrigger:{
      trigger:".main5",
      scroller:"body",
    //   markers:true,
    }
})
gsap.from(".main5 .about",{
    duration:1,
    delay:1,
    y:800,
    scrollTrigger:{
        trigger:".main5",
        scroller:"body",
    }
})

gsap.from(".journey",{
    opacity:0.6,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:".journey",
        scroller:"body",
    }

})


gsap.to(".truck",{
    duration:18,
    scale:1.7
    ,y:10.,
    repeat:-1,
    scrollTrigger:{
        trigger:".journey",
        scroller:"body",
        start:"top 30%",
        
    }

})
gsap.from(".conj",{
    opacity:0,
    y:200,
    duration:4,
    scrollTrigger:{
        trigger:".journey",
        scroller:"body",
        start:"top 30%",
    }

})



gsap.from(".second",
{
 opacity:"0.1",
 duration:3,
 scrub:1,
 scrollTrigger:{
    trigger:".second",
    scroller:"body",   
}

})
gsap.from(".others",
{
 opacity:"0.1",
 duration:3,
 scrub:1,
 scrollTrigger:{
    trigger:".second",
    scroller:"body",
    start:"top",
    
}

})
