import { useState, useEffect } from 'react';
import {Reveal,Animate_1,Animate_2,Animate_3,Animate_4,Animate_5,Animate_6,Animate_7,Animate_8,Animate_9,Animate_10,Animate_11} from './AnimatedContent';

import './assets/css/bootstrap.min.css';

import './assets/css/slicknav.css';
import './assets/css/nivo-lightbox.css';
import './assets/css/animate.css';

import './assets/css/responsive.css';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'framer-motion';





function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  const [active, setActive] = useState("Home"); // Default active item
  const viewNav=(sectionId) =>{
    const element=document.getElementById(sectionId);
    const isInView=useInView(element);
    if(isInView){
      if(sectionId="page2"){
        const temp=document.getElementById("")
      }
    }
  }
  const buttonClick = (item,sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActive(item); // Set clicked item as active
  }
  

  const iconClick = (sectionId) => {
    setIsOpen(!isOpen);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    
  }
  const handleClick = () => {
    if(!isAnimationEnd) return;
    setIsAnimationEnd(!isAnimationEnd);
    setClickCount(true);
    const elements = document.querySelectorAll(".items"); // Target all items
    elements.forEach((element) => {
      element.classList.remove("animate__fadeInDown");
      element.classList.add("animate__fadeOutUp");
    });
    const parts=document.getElementById("cross");
    parts.classList.remove("animate__fadeInRight");
    parts.classList.add("animate__fadeOutRight");
    const parts1=document.getElementById("pop");
    parts1.classList.remove("animate__fadeInLeft");
    parts1.classList.add("animate__fadeOutLeft");
    
    
    
  };
  const [clickCount, setClickCount] = useState(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const animationHandle= () =>{
    
     setIsAnimationEnd(!isAnimationEnd);
     if(clickCount&&!isAnimationEnd) setIsOpen(!isOpen);
    
    
  }
  const looseClick = () => {
    setIsAnimationEnd(false);
    setClickCount(false);
    const elements = document.querySelectorAll(".items"); // Target all items
    elements.forEach((element) => {
      element.classList.remove("animate__fadeOutUp");
      element.classList.add("animate__fadeInUp");
    });
    const parts=document.getElementById("cross");
    parts.classList.remove("animate__fadeOutRight");
    parts.classList.add("animate__fadeInRight");
    const parts1=document.getElementById("pop");
    parts1.classList.remove("animate__fadeOutLeft");
    parts1.classList.add("animate__fadeInLeft");
    setIsOpen(!isOpen);
    

  };
  const pressClick=(item1,elementId)=>{
   
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 });

    if(isInView) document.getElementById("homee").className="elements-active ";
  }
  const stopClick = () => {
    
    const part3=document.getElementById(".dropdown_open");
    part3.style.display="none";
    const part5=document.getElementById(".drop_list");
    
    

  };
  const [descriptionInView,setDescriptionInView]=useState(false);
  const toggleDescrition=()=>{
    setDescriptionInView(!descriptionInView);
  }
  const [descriptionInView1,setDescriptionInView1]=useState(false);
  const toggleDescrition1=()=>{
    setDescriptionInView1(!descriptionInView1);
  }
  const [descriptionInView3,setDescriptionInView3]=useState(false);
  const toggleDescrition3=()=>{
    setDescriptionInView3(!descriptionInView3);
  }
  // const ref=useRef(null);
  // const isInView=useInView(ref,{once:true});
  // const mainControls=useAnimation();
  // useEffect(()=>{
  //   if(isInView){
  //     mainControls.start("visible");
  //   }
  // },[isInView]);

  const timer = setTimeout(() => {
    setVisible(false);
  }, 5000);
  const [visible, setVisible] = useState(true);
  const timer1 = setTimeout(() => {
    setVisible1(false);
  }, 6000);
  const [visible1, setVisible1] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    
  };


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("show"); // Add class when in view
  //         }
  //       });
  //     },
  //     { threshold: 0.2 } // Triggers when 20% of the section is visible
  //   );

  //   const items = sectionRef.current.querySelectorAll(".services-item");
  //   items.forEach((item) => observer.observe(item));

  //   return () => {
  //     items.forEach((item) => observer.unobserve(item));
  //   };
  // }, []);




  return (
    <>
    
    <div id="preloader-backdrop" className={visible1?"":"none-dis"}>
      
     <div id="preloader" className={visible?"":"animate__animated animate__fadeOut"}>
     </div>
     </div>

      <div className={isOpen ? "nav_core_open" : "nav_core"} >
        <div id="logo1">
          <img id="cm-logo"src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" />
          <p id="name"><span id="club">CLUB</span> <span>MATHEMATICA</span></p>
        </div>


      <div id="infi-desc" className={descriptionInView?"opener animate__animated animate__fadeIn":"closer"}>
      <button id="cross"   onClick={toggleDescrition}> &times;  
        
      </button>
      <div id="description1">
      <Animate_6 delay={0}>
          <b>About Infi</b><br />
          </Animate_6>
          <Animate_6 delay={0.3}>
          <p><strong>Infi</strong>, organized by <strong>Club Mathematica, NIT Calicut</strong>, is more than just a math exam—it's a journey that celebrates mathematical curiosity and critical thinking among school students. It offers young minds a platform to challenge themselves and explore the beauty of numbers, logic, and problem-solving.</p>
          </Animate_6>
          <Animate_6 delay={0.5}>
          <p>Through thought-provoking questions and innovative problem sets, <strong>Infi</strong> inspires students to push boundaries and discover the joy of learning beyond the classroom. It’s not just a test; it's an experience designed to ignite a passion for mathematics.</p>
          </Animate_6>
          <Animate_6 delay={0.7}>
          <p>With each edition of <strong>Infi</strong>, we aim to create a community where budding mathematicians can unravel complex concepts, compete with peers, and conquer new challenges with confidence.</p>
          </Animate_6>
          <Animate_6 delay={0.9}>
          <p><strong>Motto:</strong> <em>Unravel. Explore. Excel.</em></p>
          </Animate_6>
          <button className="site2">Visit Site</button>
    </div>
        </div>
        <div id="infi-desc" className={descriptionInView1?"opener animate__animated animate__fadeIn":"closer"}>
      <button id="cross"   onClick={toggleDescrition1}> &times;  

      </button>
      <div id="description1"> 
      <Animate_6 delay={1.1}>
  <p>Conducted as part of <strong>Tathva '24</strong>, South India's largest techno-management fest, <strong>LOGIQ</strong> was an electrifying contest designed to test quick thinking and strategic decision-making.</p>
</Animate_6>

<Animate_6 delay={1.3}>
  <p><strong>The event was structured into two rounds:</strong></p>
  <ul className="list-disc pl-5">
    <li><strong>Preliminary Round:</strong> Teams competed to qualify for the final showdown.</li>
    <li><strong>Final Round:</strong> The top-performing teams faced off in an intense battle of intellect.</li>
  </ul>
</Animate_6>

<Animate_6 delay={1.5}>
  <p><strong>LOGIQ</strong> successfully challenged participants to push their mental limits, where brilliance met fun. The event was a resounding success, with students showcasing exceptional problem-solving abilities and quick thinking.</p>
</Animate_6>
      </div>
        </div>
        <div id="infi-desc" className={descriptionInView3?"opener animate__animated animate__fadeIn":"closer"}>
      <button id="cross"   onClick={toggleDescrition3}> &times;  

      </button>
      <div id="description1">
      <Animate_6 delay={0}>
 
</Animate_6>

<Animate_6 delay={0.3}>
<Animate_6 delay={0.2}>
  <p><strong>Felizora</strong> was a thrilling Christmas-themed logical treasure hunt where participants embarked on a battle of wits and strategy to retrieve stolen gifts and reclaim the festive joy.</p>
</Animate_6>
  <p><strong>Club Mathematica</strong> presented <strong>Game Night</strong> — an evening filled with laughter, excitement, and unforgettable memories. The event celebrated the achievements of the <strong>Felizora winners</strong> and honored the <strong>Game Night champions</strong>, recognizing their brilliance and enthusiasm.</p>
</Animate_6>

<Animate_6 delay={0.6}>
  <p>With dazzling lights and vibrant rhythms, the night captured the spirit of the festive season in a truly unique Christmas ambiance. One of the highlights was the much-anticipated <strong>Christmas Friend</strong> reveal, which brought surprise and joy to everyone.</p>
</Animate_6>

<Animate_6 delay={0.9}>
  <p>The magic truly began the moment guests stepped in — it was a celebration to remember.</p>
</Animate_6>

      </div>
        </div>



        <div className={isOpen ? "nav-menuopen" : "nav-menu"}>


          <p  className={active === "clicked" ? "elements-active elements-active-2" : "elements"}
            onClick={() => buttonClick("clicked","signs")}> Home  </p>


          <p className={active === "infi-click" ? "elements-active" : "elements"}
            onClick={() => buttonClick("infi-click",)}>Infinitum  </p>


          <p className={active === "event-clicked" ? "elements-active" : "elements"}
            onClick={() => buttonClick("event-clicked","events_")}>Events  </p>


          <p className={active === "team-click" ? "elements-active" : "elements"}
            onClick={() => buttonClick("team-click")}>Our Team </p>


          <p className={active === "gallery-clicked" ? "elements-active" : "elements"}
            onClick={() => buttonClick("gallery-clicked","event")}>Gallery  </p>


          <button className={active === "about-clicked" ? "buttons" : "buttons"}
            onClick={() => buttonClick("about-clicked","the_club")}>
            About Us
          </button>


          <button className={active === "contact-clicked" ? "buttons" : "buttons"}
            onClick={() => buttonClick("contact-clicked","last_")}>
            Contact Us
          </button>
          <div className="menu-toggle" onClick={looseClick} >
            ☰
          </div>
        </div>

      </div>
      <div 
  className={isOpen ? 'dropdown_open' : "dropdown"} 
  
>

      
        
       
        <Animate_5  width="50vw" delay={0}>
        <div id='drop_list'>
        <img id="pop" className="animate__animated animate__fadeInLeft"src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" />
        <button id="cross" className="animate__animated animate__fadeInRight"  onClick={handleClick}> ☰
        </button>
        <p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "0.3s" }} onClick={() => iconClick("signs")}>
          
          
        </p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "0.5s" }} onClick={() => iconClick("infi_click")}>Infinitum</p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "1s" }} onClick={() => iconClick("events_")}>Events</p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "1.2s" }} onClick={() => iconClick("team_click")}>Our Team</p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "1.5s" }} onClick={() => iconClick("event")}>Gallery</p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "1.7s" }} onClick={() => iconClick("the_club")}>About Us</p>

<p className='items animate__animated animate__fadeInDown' style={{ animationDelay: "1.9s" }} onClick={() => iconClick("last_")} onAnimationEnd={animationHandle}>Contact Us</p>
        </div>
         </Animate_5>
      </div>
      

     


      <div id="main-pic">
        <div id="blur">
      <div className="carousel-caption d-md-block">
      <div id="signs" className="sign hey">
  <span className="fast-flicker">C</span>lubMat<span className="flicker">he</span>matica
</div>
</div>
</div>

      </div>
      <h1
                className="section-title wow fadeInUp cluboutlooks animated"
                data-wow-delay="0.2s"
                id="the_club"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                <span id="Club">THE</span> CLUB
              </h1>
    <div className='about'>
    <Animate_8 delay={0.3}>
      <img id="pic"src="Component 10.svg"/>
      </Animate_8>


      <Animate_9 >
      <div id="pics">
       
        <div id="description">
         <Animate_6 delay={0}>
          <b>About C M</b><br />
          </Animate_6>
          <Animate_6 delay={0.3}>
          <p>At <strong>Club Mathematica, NIT Calicut</strong> we believe that mathematics is more than just numbers—it’s a language of patterns, a tool for innovation, and a bridge between logic and creativity. As a vibrant cultural club, we create a dynamic space where intellectual curiosity meets exhilarating competition.</p>
          </Animate_6>
          <Animate_6 delay={0.5}>
          <p>Through engaging events, challenging puzzles, and thrilling contests, we inspire students to embrace problem-solving, strategic thinking, and the sheer joy of discovery. Our club thrives on the spirit of collaboration, learning, and the relentless pursuit of excellence. Whether you’re a math enthusiast, a puzzle solver, or just someone who loves a good challenge, <strong>Club Mathematica</strong> is where you belong.</p>
          </Animate_6>
          <Animate_6 delay={0.7}>
          <p>Join us in celebrating the beauty of mathematics beyond textbooks—where logic meets culture, and knowledge turns into an adventure!</p>
          </Animate_6>
          <Animate_6 delay={0.9}>
          <p><strong>Motto:</strong> <em>Unravel. Compete. Conquer.</em></p>
          </Animate_6>
    
          <Animate_7 width="100%" delay={1}>
        <div id="infi_flex">
          
          <img id="infi1" src="./public/Component 4.svg" />
          <button className="site">Visit Site</button>
        </div>
        </Animate_7>

        </div>
       
   
        </div>
        </Animate_9>
      </div>
     
      <div id="team">
    
    <div id="event">

      <b>GALLERIA</b>
    </div>
    <div id="boxes">
    <Animate_2 width="100%" delay={0.2}>
      <div className="box"></div>
      </Animate_2>
      <Animate_2 width="100%" delay={0.6}>
      <div className="box"></div>
      </Animate_2>
      <Animate_2 width="100%" delay={1.1}>
      <div className="box"></div>
      </Animate_2>
      <Animate_2 width="100%" delay={0.2}>
      <div className="box"></div>
      </Animate_2>
      <Animate_2 width="100%" delay={0.6}>
      <div className="box"></div>
      </Animate_2>
      <Animate_2 width="100%" delay={1.1}>
      <div className="box"></div>
      </Animate_2>
  
    </div>

  </div> 
      
      <div id="events_">
        <div id="black-sheet">
          <div id="event_title">
            <span id="our1"><b>EVENTS</b></span>
            <span id="events1"><b>'2024&25</b></span>

          </div>
          <div id="container-head">
          <div id="event-container">
            <Animate_8 width="100%" delay={0}>
          <div className='event-boxes' id="ket1"onClick={toggleDescrition}></div>
          </Animate_8>
          <Animate_11 width="100%" delay={0.3}>
          <div className='event-boxes' id="ket2"onClick={toggleDescrition1}></div>
          </Animate_11>
          <Animate_10 width="100%">
          <div className='event-boxes' id="ket3" onClick={toggleDescrition3}></div>
          </Animate_10>
          </div>
          </div>
        </div>
      </div>
      
      <section id="services"  className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="section-title wow fadeInUp cluboutlooks animated"
                data-wow-delay="0.2s"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                <span id="Club">Club</span> Outlook
              </h1>
            </div>
          </div>
          <div className="services-wrapper">
          <Reveal width="100%" delay={1.2}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1.2s" }}>
              <div className="icon">
                <i className="lni lni-consulting"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Diligent and dependable executives</a></h3>
              </div>
            </div>
            </Reveal>
             <Reveal width="100%" delay={0.2}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.2s" }}>
              <div className="icon">
                <i className="lni lni-network"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Adept and aspiring team</a></h3>
              </div>
              
            </div> 
            </Reveal><Reveal width="100%" delay={0.4}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.4s" }}>
              <div className="icon">
                <i className="lni lni-code-alt"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Proficient technical team</a></h3>
              </div>
              
            </div></Reveal> <Reveal width="100%" delay={0.6}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.6s" }}>
              <div className="icon">
                <i className="lni lni-pallet"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Ingenious and idealistic designers</a></h3>
              </div>
            </div>
            </Reveal> <Reveal width="100%" delay={0.8}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
              <div className="icon">
                <i className="lni lni-bar-chart"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Analytical marketing and event organization team</a></h3>
              </div>
            </div> </Reveal><Reveal width="100%" delay={1}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1s" }}>
              <div className="icon">
                <i className="lni lni-pencil-alt"></i>
              </div>
              <div id="last_"className="services-content">
                <h3><a href="#">Articulate content writers</a></h3>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
       
      </section>
      
      <section id="contact-us" className="section-padding" data-aos="zoom-in">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 id="form-head"className="section-title wow fadeInUp contactuss" data-wow-delay="0.2s">Contact Us</h1>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
                <div className="form-wrapper">
                  <form role="form" action="https://formspree.io/f/xvovqdkl" method="POST">
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input type="text" className="form-control name" id="name1" name="name" placeholder="Name" required data-error="Please enter your name" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input type="email" className="form-control email" id="email" name="_replyto" placeholder="Email" required data-error="Please enter your Email" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input type="tel" className="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                        </div>
                        <div className="form-submit">
                          <button type="submit" className="btn btn-common" value="Send" id="form-submit">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Us Now
                          </button>
                          <div id="msgSubmit" className="h3 text-center hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



 
      <div className='deco'>
      <Animate_1  width="100% " delay={0}>
        <div className="dive">
        <h2 id="head">Dive into the realm of Mathematica!</h2>
        <button className='site1'>Know More!</button>
        </div>
        </Animate_1>
      </div>
      
      <section className="counter-section section-padding">
  <div className="container">
    <div className="row">
      
    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.3">
    <div className="counter wow fadeInRight" data-wow-delay="0.3s">
      <div className="icon"><i className="lni lni-map"></i></div>
      <p>INFINITUM</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.6">
    <div className="counter wow fadeInRight" data-wow-delay="0.6s">
      <div className="icon"><i className="lni lni-timer"></i></div>
      <p>January 2024</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.9">
    <div className="counter wow fadeInRight" data-wow-delay="0.9s">
      <div className="icon"><i className="lni lni-users"></i></div>
      <p>30,000+ Participants</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="1.2">
    <div className="counter wow fadeInRight" data-wow-delay="1.2s">
      <div className="icon"><i className="lni lni-cup"></i></div>
      <p>1 lakh worth prizes</p>
    </div>
  </Animate_4>
</div>
    </div>
  </div>
</section>

<section className="footer-distributed">
  <div className="footer-left">
    
    <img id="nitc-logo"src="./public/logo.png" />

    {/* Footer menu */}
    <p className="footer-links">
  <a href="#" onClick={() => buttonClick(undefined, "signs")}>Home</a> ·
  <a href="#events" onClick={() => buttonClick(undefined, "events_")}>Events</a> ·
  <a href="#gallery" onClick={() => buttonClick(undefined, "event")}>Gallery</a> ·
  <a href="#infinitum" onClick={() => buttonClick(undefined, "infi_click")}>Infinitum</a> ·
  <a href="#contact-us" onClick={() => buttonClick(undefined, "last_")}>Contact Us</a> ·
  <a href="#about-us" onClick={() => buttonClick(undefined, "the_club")}>About Us</a>
</p>

    <p className="footer-company-name">Club Mathematica &copy; 2025</p>
  </div>

  <div className="footer-center">
    {/* Contact details */}
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>NIT Calicut</span> Calicut, Kerala</p>
    </div>
    {/* <div>
      <i className="fa fa-phone"></i>
      <p>9999999999</p>
    </div> */}
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="mailto:clubmath@nitc.ac.in">clubmath@nitc.ac.in</a></p>
    </div>
  </div>

  <div className="footer-right">
    {/* Description */}
    <p className="footer-company-about">
      <span>Club Mathematica</span> Cultural Club at NIT Calicut, Since early 2000s. Provides platform in math and
      logical reasoning to help build student's imaginative powers.
    </p>
    {/* Links to social media */}
    <div className="footer-icons">
      <a href="https://www.facebook.com/clubmathematica/"><i className="fa fa-facebook"></i></a>
      {/* <a href="#"><i className="fa fa-twitter"></i></a> */}
      <a href="https://instagram.com/clubmathematica?igshid=538ktyxsygtp"><i className="fa fa-instagram"></i></a>
      {/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
      <a href="https://www.behance.net/ClubMathematicaNITC"><i className="fa fa-behance"></i></a>
    </div>
  </div>
</section>


    </>

  )
}


export default App;
