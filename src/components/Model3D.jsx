import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const Model3D = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Lenis
    const lenis = new Lenis({ lerp: 0.05, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 800);
    });

    gsap.ticker.lagSmoothing(0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load("/bmw_g20_330i.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      if (window.innerWidth < 850) {
        model.scale.set(0.65, 0.65, 0.65);
      } else if (window.innerWidth >= 850 && window.innerWidth < 1000) {
        model.scale.set(0.7, 0.7, 0.7);
      } else {
        model.scale.set(1, 1, 1);
      }

      model.position.set(0, 0, 0);

      model.rotation.x = Math.PI * 2.02;
      model.rotation.y = Math.PI * 1;

      // GSAP
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#speed",
          start: "-80% 20%",
          end: "40% center",
          scrub: true,
        },
      });

      window.innerWidth >= 768
        ? tl.to(mountRef.current, {
            x: 250,
            y: "-15%",
          })
        : tl.to(mountRef.current, {
            y: "-15%",
          });

      tl.to(
        model.rotation,
        {
          y: Math.PI * 1.5,
        },
        "<",
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#driver",
          start: "-60% 40%",
          end: "40% center",
          scrub: true,
        },
      });

      tl2.to(mountRef.current, {
        x: 0,
        y: 0,
      });

      tl2.to(
        model.rotation,
        {
          y: Math.PI * 2,
        },
        "<",
      );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#end",
          start: "-60% 40%",
          end: "40% center",
          scrub: true,
        },
      });

      tl3.to(mountRef.current, {
        y: "-15%",
      });

      tl3.to(model.rotation, {
        y: Math.PI * 3,
      });
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed bottom-[15%] -z-[1] h-[60vh] w-full"
    ></div>
  );
};

export default Model3D;
