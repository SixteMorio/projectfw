gsap.set(".textMovie p", {
  scale: 0.01
})

const timeline = gsap.timeline();

/*animation h1*/
timeline.to(".textMovie h1", {
  duration: 0.5,
  scale: 1.1,
}, 0);

timeline.to(".textMovie h1", {
  duration: 0.5,
  scale: 1,
});

/*animation texte video*/
timeline.to(".textMovie p", {
  duration: 0.7,
  scale: 1,
}, 0)

/*animation bouton1*/
timeline.to(".textMovie a", {
  duration: 0.5,
  scale: 1.1,
}, 1);

timeline.to(".textMovie a", {
  duration: 0.5,
  scale: 1,
});

/*animation coachtuto*/
gsap.fromTo(".imgTuto", {
  opacity: 0,
  x:-72,
  y:-72,
},{ 
  x:0,
  y:0,
  opacity:1,    
  scrollTrigger: {
    trigger: ".titleActu",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 40%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

/*animation coachmovie*/
gsap.fromTo(".movieTuto", {
  opacity: 0,
  x: -72,
  y: -72,
}, {
  x: 0,
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".titleActu",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 40%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

/*animation coachtext*/
gsap.fromTo(".textTuto",{
  opacity:0,
  x:+500,
  y:+200,
},{
  x:0,
  y:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".titleActu",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 40%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

/*Animation coach */
const timelineCoach = gsap.timeline({
  scrollTrigger: {
    trigger: ".titleCoach",
    markers: false,
    // position des marqueurs
    start: "top 10%",
    end: "bottom 90%",
    // synchroniser avec le scroll
    scrub: 6,
  }
})

timelineCoach.to("#animationCoach", {
  duration: 15,
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  },
  ease: "none"
}, 0);

timelineCoach.to("#animationCoach", { 
  delay:15,  
  scale:0.001,    
}, 1)

timelineCoach.to(".grille", {
  delay:15,
  opacity: 1
}, 2)

/*animation de sortie coach*/

/*premier côté*/
gsap.to(".coachOne",{
  x:-700,
  y:200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachTwo", {
  x: -700,
  y: 200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachThree", {
  delay:4,
  x: -700,
  y: 200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachFour", {
  x: -870,
  y: 0,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

/*Second côté*/ 
gsap.to(".coachFive", {
  x: 870,
  y: -200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachSix", {
  x: 870,
  y: 200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachSeven", {
  x: 700,
  y: 200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".coachHeight", {
  x: 700,
  y: 200,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

gsap.to(".more", {
  opacity:0,
  scrollTrigger: {
    trigger: ".coachFour",
    markers: false,
    // position des marqueurs
    start: "top 20%",
    end: "bottom 50%",
    // synchroniser avec le scroll
    scrub: 2,
  }
});

/*Deuxieme itérations  */

/*dataSpeed pour le texte vidéoAcceuil*/
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 1
  }
});

/*Accorcher les coachs en défilement*/
gsap.to(".container", {
  scrollTrigger: {
    markers: false,
    trigger: ".container",
    start: "top 10%",
    end: "bottom 80%",
    pin: true,
  }
});

/*hover animation actu*/
imgTuto.addEventListener("mouseover", function () {
  console.log("true")
  gsap.to("#imgTuto", {
    duration: 0.7,
    opacity: 0,
    onEnd: function () {
      movieTuto.play()
      console.log("true")
    }
  })
})

imgTuto.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#imgTuto", {
    duration: 0.7,
    opacity: 1,
    onEnd: function () {
      movieTuto.pause()
    }
  })
})



/*hover coach*/

/*boun*/
coachOne.addEventListener("mouseover", function () {
  if(grille.style.opacity == 1){
    console.log("true")
    gsap.to("#bounHover", {
    duration: 1,
    opacity: 1,
    })
  }
})

coachOne.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#bounHover", {
    duration: 1,
    opacity: 0,
  })
})

/*amalia*/
coachTwo.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#amaliaHover", {
      duration: 1,
      opacity: 1,
  })
  }
})

coachTwo.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#amaliaHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Ralph*/
coachThree.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#ralphHover", {
      duration: 1,
      opacity: 1,
    })
  }
})

coachThree.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#ralphHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Jerky*/
coachFour.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#jerkyHover", {
      duration: 1,
      opacity: 1,
    })
  }
})

coachFour.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#jerkyHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Sonia*/
coachFive.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#soniaHover", {
      duration: 1,
      opacity: 1,
    })
  }
})

coachFive.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#soniaHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Angelina*/
coachSix.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#angelinaHover", {
      duration: 1,
      opacity: 1,
    })
  }  
})

coachSix.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#angelinaHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Steven*/
coachSeven.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#stevenHover", {
      duration: 1,
      opacity: 1,
    })
  }  
})

coachSeven.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#stevenHover", {
    duration: 1,
    opacity: 0,
  })
})

/*Dante*/
coachHeight.addEventListener("mouseover", function () {
  if (grille.style.opacity == 1) {
    console.log("true")
    gsap.to("#danteHover", {
      duration: 1,
      opacity: 1,
    })
  }  
})

coachHeight.addEventListener("mouseout", function () {
  console.log("true")
  gsap.to("#danteHover", {
    duration: 1,
    opacity: 0,
  })
})

/*titles animations*/

/*Actu*/
gsap.fromTo(".titleActu", {
  duration:2,
  opacity: 0,
}, {
  duration:2,
  opacity: 1,
  y:30,
  scrollTrigger: {
    markers: false,
    trigger: ".btnOne",
    start: "top 10%",
    end: "bottom 80%",
    scrub: 2,
  }
});

/*coach */
gsap.fromTo(".titleCoach", {
  duration: 2,
  opacity: 0,
}, {
  duration: 2,
  opacity: 1,
  y: 30,
  scrollTrigger: {
    markers: false,
    trigger: ".textTuto",
    start: "top 10%",
    end: "bottom 80%",
    scrub:2,
  }
});