import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg"),
alpha:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

const particles = new THREE.BufferGeometry();

const count = 30000;

const positions = new Float32Array(count*3);

for(let i=0;i<count*3;i++){

positions[i]=(Math.random()-0.5)*20;

}

particles.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
);

const material = new THREE.PointsMaterial({
size:0.03,
color:0x00ffff
});

const points = new THREE.Points(particles,material);

scene.add(points);

function animate(){

requestAnimationFrame(animate);

points.rotation.y+=0.002;
points.rotation.x+=0.001;

renderer.render(scene,camera);

}

animate();