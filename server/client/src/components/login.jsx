
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


function Login() {
  const scroll = new LocomotiveScroll();
  
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
const section = gsap.utils.toArray('.page')
console.log(section);
gsap.to(section,{
        xPercent:-100*(section.length-1),
        ease:'none',
        scrollTrigger:{
            trigger:'.pages',
            pin:true,
            scrub:1,
            end:'+=3000'
        }
})
}); 





  return (
    <>
<div className="h100"><div data-scroll-container>
    <div data-scroll-section>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
    </div>
    <div data-scroll-section>
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
    </div>
</div></div>
<div className="h100">3333333333333333333</div>
<div className="h100">444444444444444444444444</div>
<div className="wrapper">
<div className="pages">
    <div className="page">gwaga</div>
    <div className="page">bbbbb</div>
    <div className="page">cccc</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
</div>
</div>
<div className="h100"></div>









    </>
  )
}

export default Login
