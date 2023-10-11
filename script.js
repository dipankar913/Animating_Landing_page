// Shery.imageEffect(element,configurations)
Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    aspect: { value: 2.0532724505327247 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.2, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 18.69, range: [0, 100] },
  },
  gooey: true,
});


//heading animation
var elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", () => {
    if(!animating){
        animating=true;
        gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: () => {
              gsap.set(h1s[index], { top: "100%" });
              index === h1s.length - 1 ? (index = 0) : index++;
      
              gsap.to(h1s[index], {
                top: "0%",
                ease: Expo.easeInOut,
                duration: 1,
              });
              animating = false;
            },
          });
    }
  });
});
