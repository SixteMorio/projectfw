const timeline = gsap.timeline();

/*animation h1*/
timeline.to(".textmovie h1", {
    duration: 0.5,
    scale: 1.1,
}, 0);

timeline.to(".textmovie h1", {
    duration: 0.5,
    scale: 1,
});

/*animation texte video*/
timeline.from(".textmovie p", {
    duration: 1,
    rotate: 360
},0);

/*animation bouton1*/
timeline.to(".textmovie a", {
    duration: 0.5,
    scale: 1.1,
}, 1);

timeline.to(".textmovie a", {
    duration: 0.5,
    scale: 1,
});

/*animation coachtuto*/
gsap.fromTo(".imgtuto", {
    opacity: 0,
    x:-72,
    y:-72,
},{ 
    x:0,
    y:0,
    opacity:1,    
    scrollTrigger: {
        trigger: ".titleactu",
        markers: true,
        // position des marqueurs
        start: "top 20%",
        end: "bottom 40%",
        // synchroniser avec le scroll
        scrub: 2,
    }
});

/*animation coachtext*/
gsap.fromTo(".texttuto",{
    opacity:0,
    x:+500,
},{
    x:0,
    opacity: 1,
    scrollTrigger: {
        trigger: ".titleactu",
        markers: false,
        // position des marqueurs
        start: "top 20%",
        end: "bottom 40%",
        // synchroniser avec le scroll
        scrub: 2,
    }
});
/*
/*Animation coach */
const timelinecoach = gsap.timeline({
    scrollTrigger: {
        trigger: ".titlecoach",
        markers: false,
        // position des marqueurs
        start: "top 10%",
        end: "bottom 90%",
        // synchroniser avec le scroll
        scrub: 6,
    }
})

timelinecoach.to("#animationcoach", {
    duration: 15,
    motionPath: {
        path: "#motionPath path",
        align: "#motionPath path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5]
    },
    ease: "none"
}, 0);

timelinecoach.to("#animationcoach", { 
    delay:15,  
    scale:0.001,    
}, 1)

timelinecoach.to(".grille", {
    delay:15,
    opacity: 1
}, 2)
