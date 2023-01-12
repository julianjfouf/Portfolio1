import { useState, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.001,
    2000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setPixelRatio(Math.min(devicePixelRatio, 3));

  camera.position.set(0, 0, 250);

  const triangles = [];

  let mouse = {
    x: 0,
    y: 0,
  };

  const triangleGeometry = new THREE.ConeGeometry(20, 20, 4, 1);
  const triangleMaterial = new THREE.MeshStandardMaterial({
    color: 0x669dec,
    metalness: 0,
    roughness: 0,
  });

  console.time("triangles");
  for (let i = 0; i < 20; i++) {
    const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);

    triangle.position.set(
      Math.random() * 1000 - 500,
      Math.random() * 1000 - 500,
      Math.random() * 1000 - 500
    );

    triangles.push(triangle);

    scene.add(triangle);
  }

  console.timeEnd("triangles");

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 500);

  const backlight = new THREE.DirectionalLight(0xffffff, 1);
  backlight.position.set(0, 0, -500);

  scene.add(backlight);

  scene.add(light);

  scene.add(camera);
  renderer.setSize(innerWidth, innerHeight);

  let frame = 0;

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });

  function animate(triangle) {
    requestAnimationFrame(() => animate(triangle));
    camera.lookAt(0, 0, 0);

    renderer.setSize(innerWidth, innerHeight);

    renderer.setPixelRatio(Math.min(devicePixelRatio, 3));

    const trianglex = triangle.position.x;
    const triangley = triangle.position.y;
    const trianglez = triangle.position.z;

    triangle.position.set(
      trianglex + 0.1 * mouse.x,
      triangley + 0.1 * mouse.y,
      trianglez + 0.1 * mouse.y
    );

    gsap.to(camera.position, {
      x: mouse.x * 500,
      y: mouse.x * 500,
      z: mouse.y * 500,
    });
    frame++;
    triangle.rotation.y += 0.01;
    triangle.rotation.x += 0.01;
    renderer.render(scene, camera);
  }

  scene.background = new THREE.Color(0xf5f5f5);

  triangles.forEach((triangle) => animate(triangle));

  renderer.render(scene, camera);

  useEffect(() => {
    const canvasElement = document.querySelector(".canvas");
    canvasElement.appendChild(renderer.domElement);
  }, []);

  return (
    <>
      <div
        className="App justify-center flex-col"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <nav
          id="top"
          className="top-0 absolute w-full flex justify-center sm:gap-12 gap-6 py-5"
        >
          <a href="#skills" className="flex flex-col group items-start">
            <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
              01
            </span>
            <a
              href="#skills"
              className="leading-5 relative before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
            >
              skills.
            </a>
          </a>
          <a href="#projects" className="flex flex-col group items-start">
            <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
              02
            </span>
            <a
              href="#projects"
              className="leading-5 relative before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
            >
              projects.
            </a>
          </a>
          <a href="#contact" className="flex flex-col group items-start">
            <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
              03
            </span>
            <a
              href="#contact"
              className="leading-5 relative before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
            >
              contact.
            </a>
          </a>
          <a href="#about" className="flex flex-col group items-start">
            <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
              04
            </span>
            <a
              href="#about"
              className="leading-5 relative before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-black before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
            >
              about.
            </a>
          </a>
        </nav>
        <span className="text-[60px] font-semibold leading-10">
          Julian Jfouf
        </span>
        <p style={{ fontSize: "30px" }}>Frontend Developer</p>
        <div className="flex gap-4">
          <a href="https://github.com/julianjfouf" target="_blank">
            <img
              className="w-6 cursor-pointer"
              src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-jfouf-782602250/"
            target="_blank"
          >
            <img
              className="w-6 cursor-pointer"
              src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"
              alt=""
            />
          </a>
        </div>
        <a
          href="#skills"
          className="absolute bottom-4 outline outline-2 outline-black w-4 h-8 rounded-full flex justify-center"
        >
          <div className="rounded-full bg-black w-1.5 h-1.5 scroll absolute top-1"></div>
        </a>
      </div>
      <div
        className="canvas"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          maxHeight: "100vh",
          maxWidth: "100vw",
          zIndex: "-1",
          overflow: "hidden",
        }}
      />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
