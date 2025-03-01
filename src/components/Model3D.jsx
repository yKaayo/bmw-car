import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Model3D = () => {
  const modelRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load("/bmw_g20_330i.glb", function (gltf) {
      scene.add(gltf.scene);

      gltf.scene.rotation.x = Math.PI * 2.03
      gltf.scene.rotation.y = Math.PI;
    });

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(1, 1, 1);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    modelRef.current.appendChild(renderer.domElement);

    console.log(modelRef.current);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div
      ref={modelRef}
      className="fixed z-[5] h-full max-w-full overflow-hidden"
    ></div>
  );
};

export default Model3D;
