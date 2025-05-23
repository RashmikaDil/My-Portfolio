import mill from './img/mill.png'
import wind from './img/wind.png'

import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faUser } from '@fortawesome/free-solid-svg-icons';
import react,{useRef} from 'react';

function App() {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

const sectionRef = useRef(null);

const scrollSection = () => {
  sectionRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
  return (
    <>

    <ParallaxProvider>
      <Parallax speed={-10}>
        <div  className='bg-gradient-to-bl from-gray-950 to-gray-900 w-full h-auto md:h-screen text-blue-50'>
        <div className='grid md:grid-cols-4 grid-cols-1  gap-4'>
        <div className='col-span-2 p-20' data-aos="fade-up">
<h1 className='text-8xl font-extrabold  '>Hello,</h1>
<h1 className='text-6xl'>I Am Rashmika</h1>
<h1 className='text-2xl text-blue-100 animate-pulse'>Full Stack Developer</h1>


<div  className="relative w-80 h-auto mt-10 ">

  <img src={mill} alt="mill" className="w-full h-auto drop-shadow-sm drop-shadow-[#251503] " />

  
  <img
    src={wind}
    alt="wind"
    className="drop-shadow-sm drop-shadow-[#251503] absolute left-1/2 top-[90px] w-60 animate-[spin_5s_linear_infinite] transform -translate-x-1/2 -translate-y-1/2 origin-center"
  />
  </div>

  






        </div>
        <div className='grid col-span-2 md:p-10 p-5 md:h-auto h-screen ' data-aos="fade-up">
          <div className='w-full h-auto flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center gap-5 sticky'>
<div className='w-15 h-15 bg-blue-600 rounded-full flex justify-center items-center text-2xl hover:shadow-2xl cursor-pointer'> 
  <FontAwesomeIcon icon={faQuoteRight} /> </div>
<div onClick={scrollSection} className='w-15 h-15 bg-blue-600 rounded-full flex justify-center items-center text-2xl hover:shadow-2xl cursor-pointer'> 
  <FontAwesomeIcon icon={faUser} /> </div>


            </div>
          
<p className='md:pt-20 pt-2 text-center'>
 Motivated IT undergraduate with practical experience in
 full-stack web development. Skilled in HTML, CSS, JavaScript,
 React, Node.js, and MongoDB, with strong abilities in
 problem-solving, collaboration, and fast learning. Seeking a
 Full Stack Developer Intern role to contribute to impactful
 projects and grow professionally in a dynamic tech
 environment.
 </p>
 <button className='bg-blue-600 p-2 md:mb-2 mb-10 m-10 rounded-sm hover:shadow-xl transition-all cursor-pointer'>Download CV</button>
</div>

        </div>
        </div>
      </div>
       </Parallax>

</ParallaxProvider>



<ParallaxProvider>

  <Parallax>
           <div
           ref={sectionRef}
      className=" gap-4 bg-gradient-to-bl from-blue-800 to-blue-950 w-full h-[900px] text-blue-50"
      
    >
      
          <div className='p-10  w-full' data-aos="slide-up" >
            <div className='flex items-center justify-center'>
<div className='col-span-4 grid  justify-center'>

  <h1 className='text-5xl font-extrabold drop-shadow-[0_0_5px_black] ' data-aos="fade-up" ><FontAwesomeIcon className='p-2' icon={faUser}></FontAwesomeIcon>Profile</h1>
</div>
</div>

          </div>
    


       </div>
            </Parallax>
   
    </ParallaxProvider>
    </>
  )
}

export default App
