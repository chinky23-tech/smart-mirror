gsap.to(".box-green", {rotation: 360, x:100, duration: 1});
gsap.from(".box-purple",{rotation: -360, x:-100, duration:2});
gsap.fromTo(".box-blue", {x: -360},{rotation:360, x: 100, duration:3});


gsap.to(".smile",{rotation: 360, x: 100, duration:1});
gsap.from(".sad",{rotation: -360, x: -100, duration:1});
gsap.fromTo(".angry",{x:-100},{rotation: 360, x: 100, duration:1});