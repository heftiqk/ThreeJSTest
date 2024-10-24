import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as dat from 'dat.gui';

function animate(time) {
    box.rotation.x = time / 1000;
    renderer.render(scene, camera);
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const boxGeometry = new THREE.BoxGeometry(5, 5, 5);
const boxMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const gui = new dat.GUI();
const options = {
    wireframe: false,
}

gui.add(options, "wireframe").onChange((e) => {
    box.material.wireframe = e;
})

renderer.setAnimationLoop(animate);