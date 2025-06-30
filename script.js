gsap.to(".box-green", {rotation: 360, x:100, duration: 1});
gsap.from(".box-purple",{rotation: -360, x:-100, duration:1});
gsap.fromTo(".box-blue", {x: -100},{rotation:360, x: 100, duration:1});