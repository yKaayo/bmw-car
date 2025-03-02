import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Model3D = () => {
  const modelRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scene = new THREE.Scene();

    const { width, height } = modelRef.current.getBoundingClientRect();

    const loader = new GLTFLoader();
    loader.load('/bmw_g20_330i.glb', function (gltf) {
      scene.add(gltf.scene);
      const model = gltf.scene;

      model.rotation.x = Math.PI * 2.05;
      model.rotation.y = Math.PI * 1;

      gsap.set("#model", {
        x: 0,
        y: "80%",
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#root",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(
        model.rotation,
        {
          x: Math.PI * 2,
          y: Math.PI * 1.5,
        },
        0,
      );

      tl.to(
        "#model",
        {
          x: "25%",
          y: "50%",
        },
        0,
      );

      tl.to(
        "#model",
        {
          x: 0,
          y: "80%",
        },
        0.65,
      );

      tl.to(
        "#model",
        {
          x: "0",
        },
        0.8,
      );

      // // Speed
      // gsap.to(model.rotation, {
      //   x: Math.PI * 2,
      //   y: Math.PI * 1.5,
      //   scrollTrigger: {
      //     trigger: "#speed",
      //     start: "-20% center",
      //     end: "center center",
      //     scrub: true,
      //   },
      // });

      // window.innerWidth >= 768 &&
      //   gsap.to("#model", {
      //     x: "25%",
      //     y: "50%",
      //     scrollTrigger: {
      //       trigger: "#speed",
      //       start: "-20% center",
      //       end: "center center",
      //       scrub: true,
      //       markers: true
      //     },
      //   });
      // // Speed - End

      // // Driver
      // gsap.to("#model", {
      //   x: 0,
      //   y: "80%",
      //   scrollTrigger: {
      //     trigger: "#driver",
      //     start: "-20% center",
      //     end: "center center",
      //     scrub: true,
      //     markers: true
      //   },
      // });
      // // Driver -End
    });

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);

    // if (width < 375) {
    //   camera.position.z = 10;
    // } else if (width >= 375 && width < 768) {
    //   camera.position.z = 10.5;
    // } else if (width >= 768) {
    //   camera.position.z = 4.5;
    // }

    camera.position.z = 4.5;

    const light = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(1, 0, 2);
    scene.add(light);
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    modelRef.current.innerHTML = "";

    modelRef.current.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div
      ref={modelRef}
      id="model"
      className="fixed left-1/2 z-[5] h-[60%] w-[90%] -translate-1/2 sm:w-[60%]"
    ></div>
  );
};

export default Model3D;
