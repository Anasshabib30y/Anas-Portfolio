document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  console.log(ScrollTrigger);
  // nav \\
  tl.from(".logo", {
    x: -100,
    duration: 2,
    ease: "elastic",
    yoyo: true,
    opacity: 0,
  });

  tl.from(
    "#list",
    {
      y: -100,
      opacity: 0,
      duration: 2,
      yoyo: true,
      ease: "back",
      stagger: {
        each: 0.5,
        from: "random",
      },
    },
    "-=2"
  );

  // main_sextion \\

  tl.from(
    ".main_text",
    {
      opacity: 0,
      duration: 2,
      y: 100,
      scale: 2,
      stagger: {
        each: 0.3,
        from: "random",
      },
      ease: "elastic",
    },
    "-=2"
  );
  tl.from(
    "#main_btnn",
    {
      opacity: 0,
      duration: 2,
      y: 100,
      x: 50,
      yoyo: true,
      ease: "back",
    },
    "-=2"
  );
  tl.from(
    "#iconn",
    {
      y: 100,
      ease: "elastic",
      scale: 1,
      yoyo: true,
      opacity: 0,
      duration: 2,
      stagger: {
        each: 0.5,
        // from:'center',
      },
    },
    "-=1"
  );

  // skills \\

  gsap.from("#skills h2", {
    y: 40,
    duration: 2,
    stagger: 0.4,
    opacity: 0,
    ease: "elastic",
    yoyo: true,
    scrollTrigger: {
      trigger: "#main_section",
      start: "center+=200 center",
      end: "bottom center",
      //  scrub:true,
      //  pin:'#skill s',
      //  markers:true,
    },
  });

  gsap.from(".content-cards .card", {
    y: -100,
    duration: 2,
    opacity: 0,
    // ease:'elastic',
    yoyo: true,
    scale: 0.2,
    scrollTrigger: {
      trigger: "#skills",
      start: "top-=100 center",
      end: "center-=150 center",
      scrub: true,
      //  pin:'#skills',
      //   markers:true,
    },
  });

  // projects \\

  gsap.from("#projects h2", {
    y: 40,
    duration: 2,
    stagger: 0.4,
    opacity: 0,
    ease: "elastic",
    yoyo: true,
    // clearProps: "transform",
    clearProps: "transform",
    scrollTrigger: {
      trigger: "#skills",
      start: "center+=200 center",
      end: "bottom center",
      //  scrub:true,
      //  pin:'#skill s',
      //  markers:true,
    },
  });

  gsap.from(".content-projects .card", {
    y: -100,
    duration: 2,
    opacity: 0,
    ease: "elastic",
    // yoyo:true,
    scale: 0.2,
    // repeat:-1,
    // stagger:1,

    clearProps: "transform",
    scrollTrigger: {
      trigger: "#skills",
      start: "center+=250 center",
      end: "bottom+=400 center",
      scrub: true,
      //  pin:'#skills',
      //   markers:true,
    },
  });

  gsap.from("#certificates h2", {
    y: 40,
    duration: 1,
    stagger: 0.4,
    opacity: 0,
    ease: "elastic",
    yoyo: true,
    // clearProps: "transform",
    clearProps: "transform",
    scrollTrigger: {
      trigger: "#projects",
      start: "center+=200 center",
      end: "bottom center",
      //  scrub:true,
      //  pin:'#skill s',
      //  markers:true,
    },
  });

  gsap.from("#certificates .cards .card", {
    y: -50,
    duration: 2,
    ease: "elastic",
    repeat: -1,
    yoyo: true,
    stagger: 0.4,
    clearProps: "transform",
  });

  gsap.from("#contact h2", {
    y: 40,
    duration: 1,
    stagger: 0.4,
    opacity: 0,
    ease: "elastic",
    yoyo: true,
    // clearProps: "transform",
    clearProps: "transform",
    scrollTrigger: {
      trigger: "#certificates",
      start: "center+=200 center",
      end: "bottom center",
      //  scrub:true,
      //  pin:'#skill s',
      //  markers:true,
    },
  });

  gsap.from("#contact .cards .card", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "elastic",
    //   stagger: 0.3,
    repeat: -1,
    yoyo: true,
    clearProps: "transform",
    scrollTrigger: {
      trigger: "#certificates",
      start: "center center",
      end: "bottom+=200 center",
    //   markers: true,
    },
  });

  gsap.from('footer p',{
    x: -100,
    y: 100,
    duration: 2,
    opacity: 0,
    ease: "elastic",
    // repeat: -1,
    // yoyo: true,
    clearProps: "transform",
     stagger:{
        amount:0.4,
        from:'center',
        each:0.5,
    },
    scrollTrigger: {
      trigger: "#contact",
      start: "top+=100 center",
      end: "bottom center",
    //   markers: true,
   
    },
  })

  

    gsap.from('footer i',{
        y: 60,
      ease: "elastic",
      scale: 1,
      yoyo: true,
      opacity: 0,
      duration: 2,
      stagger: {
        each: 0.5,
        // from:'center',
      },
      scrollTrigger: {
      trigger: "#contact",
      start: "top+=100 center",
      end: "bottom center",
    //   markers: true,
   
    },

    })
  

})




