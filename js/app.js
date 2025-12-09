
document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    console.log(ScrollTrigger);

    gsap.from('.main_text',{
        opacity: 0,
        
    })
    
})