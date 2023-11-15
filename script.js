import { scene, camera } from './three-model.js';

/**
 * GSAP: ScrollTrigger
 */
gsap.registerPlugin(ScrollTrigger);

// scene.rotation.set(0, 1.88, 0);
// camera.position.set(1.5, 0, 5);

ScrollTrigger.defaults({
  immediateRender: false,
  ease: 'power1.inOut',
});

let boxAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-one',
    endTrigger: '.section-four',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
});

boxAnimTl
  .to(scene.rotation, { y: 4.79 })
  .to(camera.position, { x: -0.1 })
  .to(scene.rotation, { z: 1.6 })
  .to(scene.rotation, { z: 0.02, y: 3.1 }, 'simultaneously')
  .to(camera.position, { x: 0.16 }, 'simultaneously')
  .to('#three-container', { opacity: 0, scale: 0 }, 'simultaneously');
