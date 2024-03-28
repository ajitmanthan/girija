import { useState } from 'preact/hooks'
import React from 'react'
import axios from 'axios'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';



function Signup() {
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


const [user,setuser]=useState({
    uname:'',upass:''
})

const handleinp = (e)=>{
    let name
    let value
name = e.target.name
value = e.target.value
setuser({...user,[name]:value})

}

const inpsub = async (e)=>{
    // console.log(user);
    e.preventDefault()
await axios.post('/signup',user)
.then((res)=>{
//     if(res.status==212){
//   const mm=document.getElementById('udd')
//   mm.classList.add('border')}
})
.catch(err=>console.log(err))

}


  return (
    <>
    <input type="text" name="uname" onChange={handleinp} value={user.uname} id="udd" />  
    <input type="text" name="upass" id="" onChange={handleinp} value={user.upass} />
    <button type="submit" onClick={inpsub}>Click</button>  




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

export default Signup
