import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
import * as dat from "dat.gui";
import gsap from "gsap";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// remove the first /* and the last */ to activate the code

// this code is for the bumpy blue plane that has a spotlight on hover
// and then the colors revert back, also the vertices move aroud on their own
// randomly in simple harmonic motion

/*

// initialize the gui interface
const gui = new dat.GUI();

// create a data set with what we want inside of our gui interface
const world = {
  plane: {
    width: 50,
    height: 50,
    widthSegments: 50,
    heightSegments: 50,
  },
};

// add the width, height, etc.. attritbute of our world's plane to the gui
// interface and allow it to update the plane on change
gui.add(world.plane, "width", 1, 100).onChange(renderPlane);
gui.add(world.plane, "height", 1, 100).onChange(renderPlane);
gui.add(world.plane, "widthSegments", 1, 100).onChange(renderPlane);
gui.add(world.plane, "heightSegments", 1, 100).onChange(renderPlane);

// rerender the plane's geometry every time it is updated through the gui
// interface by first getting rid of the current geometry, and by directing
// that plane's geometry to one with the attributes of the gui interface sliders
function renderPlane() {
  plane.geometry.dispose();
  plane.geometry = new THREE.PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments
  );

  // initialize an array where random values will be stored
  const randomValues = [];

  // loop through the x,y,z vertices of the plane after targeting the array they
  // are stored in and initialize a variable to hold the x (i), y (i + 1), and
  // z(i + 2) points
  for (let i = 0; i < plane.geometry.attributes.position.array.length; i++) {
    if (i % 3 === 0) {
      const x = plane.geometry.attributes.position.array[i];
      const y = plane.geometry.attributes.position.array[i + 1];
      const z = plane.geometry.attributes.position.array[i + 2];

      // change the plane vertice positions in the array at x, y, z to a
      // randomize value in order to create some randomization of the plane's
      // texture and you can subtract by a value in order to allow for some
      // values to be positive or to be negative
      plane.geometry.attributes.position.array[i] = x + Math.random() - 0.5;
      plane.geometry.attributes.position.array[i + 1] = y + Math.random() - 0.5;
      plane.geometry.attributes.position.array[i + 2] = z + Math.random() - 0.5;
    }

    // add a random number to the random values array
    randomValues.push(Math.random() - 0.5);
  }

  // add an attribute to the plane's geometry's position as random values
  plane.geometry.attributes.position.randomValues = randomValues;

  // create an attribute to store the plane's originally generated position
  plane.geometry.attributes.position.originalPosition =
    plane.geometry.attributes.position.array;

  // create an array for colors
  const colors = [];

  // loop through each vertex of the plane's geometry and the amount of values
  // stored within for its vertices
  for (let i = 0; i < plane.geometry.attributes.position.count; i++) {
    // add the color you want your plane to be in r, g, b format
    colors.push(0, 0.3, 0.6);
  }
  // set the attribute of the plane's geometry called color to a new
  // BufferAttribute which will be a new Float32Array that takes in the colors
  // array in sets of 3
  plane.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

// initialize the raycaster which will act as a laser pointer for your mouse cursor
const raycaster = new THREE.Raycaster();

// initialize the scene where the 3D objects will be placed
const scene = new THREE.Scene();

// initialize the camera which will view the scene as a perspective camera, which
// takes in an fov, an aspect ratio, a min view, and a max view
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  2000
);

// initialize what will render the objects on the scene
const renderer = new THREE.WebGLRenderer();

// set the camera's position away from the origin to see the origin
camera.position.set(0, -10, 5);

// add the rendering of the scene to the document in order to see it
document.body.appendChild(renderer.domElement);

// set the size of the renderer to be the screen width and height
renderer.setSize(innerWidth, innerHeight);

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxMesh = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const box = new THREE.Mesh(boxGeometry, boxMesh);
// scene.add(box);

// initialize our first instance of the planeGeometry which will take in the
// initial values set in the gui interface that you select
const planeGeometry = new THREE.PlaneGeometry(
  world.plane.width,
  world.plane.height,
  world.plane.widthSegments,
  world.plane.heightSegments
);

// create the material that the plane will be made out of and some other variables
// will it be double sided? Can you see the depth and the bumps and valleys of the
// plane? is the entire plane one color or is each vertex able to be a different color
const planeMesh = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true,
});

// prepare the plane by meshing the geometry to the material in order to add to the scene
const plane = new THREE.Mesh(planeGeometry, planeMesh);

// add the plane to the scene
scene.add(plane);

// create a light source which will allow us to perceive the phong material and the depth
const light = new THREE.DirectionalLight(0xffffff, 1);

// position the light away from the origin of the scene
light.position.set(0, 5, 5);

//add the light to the scene
scene.add(light);

// create a second directional light with a color of white and intensity of 1 that
// will be positioned behind the plane in order to see the other side with light
const backlight = new THREE.DirectionalLight(0xffffff, 1);
backlight.position.set(0, 0, -5);

// add the backlight to the scene
scene.add(backlight);

// add orbit controls so that the camera is able to move around the canvas and see
// different sides and angles of the scene
new OrbitControls(camera, renderer.domElement);
camera.position.set(0, -10, 5);

// make sure the renderer is rendering the scene at the same pixel ratio as your
// device to make everthing smooth
renderer.setPixelRatio(devicePixelRatio);

// random values which will be generated for each position value, x, y, z of the
// vertices of the plane
const randomValues = [];

// loop through and set the plane's vertex positions to a random value
for (let i = 0; i < plane.geometry.attributes.position.array.length; i++) {
  if (i % 3 === 0) {
    const x = plane.geometry.attributes.position.array[i];
    const y = plane.geometry.attributes.position.array[i + 1];
    const z = plane.geometry.attributes.position.array[i + 2];

    plane.geometry.attributes.position.array[i] = x + Math.random() - 0.5;
    plane.geometry.attributes.position.array[i + 1] = y + Math.random() - 0.5;
    plane.geometry.attributes.position.array[i + 2] = z + Math.random() - 0.5;
  }

  // add random values to the array
  randomValues.push(Math.random() - 0.5);
}

// make an attribute called random values to hold this array
plane.geometry.attributes.position.randomValues = randomValues;

// save the original position of the plane's vertices
plane.geometry.attributes.position.originalPosition =
  plane.geometry.attributes.position.array;

// create a colors array
const colors = [];

// get a color of each vertex of the plane's geometry
for (let i = 0; i < plane.geometry.attributes.position.count; i++) {
  colors.push(0, 0.3, 0.6);
}

// set the color of the plane's geometric vertices to a BufferAttribute that is
// a new Float32Array that holds sets of 3 rgb values for each vertex
plane.geometry.setAttribute(
  "color",
  new THREE.BufferAttribute(new Float32Array(colors), 3)
);

// hold the current location of the mouse
const mouse = {
  x: undefined,
  y: undefined,
};

// listen for changes to the mouse's position and update its values in the
// object
addEventListener("mousemove", (event) => {
  // normalize the mouse value so that it ranges from -1 on the left and 1 on the right
  mouse.x = (event.clientX / innerWidth) * 2 - 1;

  // normalize the mouse value so that it ranges from -1 on the bot and 1 on the top
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

// count the number of frames starting with 0
let frame = 0;

// tell the renderer to render the scene with the camera at the end so that all
// the changes and variables set will be included
renderer.render(scene, camera);

// animate the scene by constantly rerendering by requesting every animation frame
// and recursively calling the function to rerender at every frame
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // increment the frame value in such a way that allows it to be utilized for the
  // motion of another object
  frame += 0.01;
  // box.rotation.x += 0.01;
  // box.rotation.y += 0.01;
  // plane.rotation.y += 0.01;

  // pull the array, originalPosition, and the randomValues from the plane geometry's
  // position
  const { array, originalPosition, randomValues } =
    plane.geometry.attributes.position;

  // loop through the length of the position array and for each instance, update
  // the original position of the plane's vertix to be equal to the initial
  // vertex position + a value that ranges and oscillates back and forth
  // in order to maximize the randomization, we will change the x value of the
  // vertex by doing cosine of the frame + a random number times a smaller number
  // in order to keep the changes at a slower rate that looks best
  for (let i = 0; i < array.length; i += 3) {
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.001;
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i]) * 0.001;
  }

  // indicate that the position attributes should be updated if there are any
  // changes or updates to it
  plane.geometry.attributes.position.needsUpdate = true;

  // use the raycaster to track your mouse position based on the camera and to
  // update accordingly
  raycaster.setFromCamera(mouse, camera);

  // use intersectObject in order to check if your mouse intersects another object
  // in this case the plane
  const intersects = raycaster.intersectObject(plane);

  // if the raycaster is intersecting the plane, then it will pull the color
  // attribute of the first intersected value, then we will make sure
  // that the software knows that it needs to update the colors if a change
  // occurs
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    // the initial color of the plane's vertices is held here
    const initialColor = {
      r: 0,
      g: 0.3,
      b: 0.6,
    };

    // the color we want the plane's vertices to change to on hover will be held
    // here
    const hoverColor = {
      r: 0.1,
      g: 0.5,
      b: 1,
    };

    // and we will use gsap in order to convert the color's of the affected vertices
    // back to the initial color if the mouse does not intersect with the face
    // at a specific point,
    gsap.to(hoverColor, {
      // the r g b values of the verticies will reset to the r g b values initially
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      // this change of colors will take 1 second to occur
      duation: 1,
      // and on any update, we will set the r value of the color at the x coordinate
      // of the vertice to the hover color's r, the g value of the color at the x
      // coordinate of the vertice to the hover color's g, and the b value of the
      // vertice's x coordinate to the hover color's b, then we will move on to the
      // y coordinate of the vertex, then the z and then the whole face will change
      // colors
      onUpdate: () => {
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        
        // we want these colors to update whenever their values are changed
        color.needsUpdate = true;
      },
    });
  }
}

// we want the loop of animation to begin
animate();

*/

//

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   innerWidth / innerHeight,
//   0.1,
//   1000
// );

// camera.position.set(0, 0, 15);

// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({
//   antialias: true,
//   canvas: document.querySelector("canvas"),
// });

// renderer.setPixelRatio(devicePixelRatio);
// const canvasContainer = document.querySelector("#canvasContainer");
// renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);

// const sphere = new THREE.Mesh(
//   new THREE.SphereGeometry(5, 50, 50),
//   new THREE.ShaderMaterial({
//     vertexShader,
//     fragmentShader,
//     uniforms: {
//       globeTexture: {
//         value: new THREE.TextureLoader().load(
//           "https://previews.123rf.com/images/antonshahrai/antonshahrai2007/antonshahrai200700006/151534030-world-texture-satellite-image-of-the-earth-high-resolution-texture-of-the-planet-with-relief-shading.jpg"
//         ),
//       },
//     },
//   })
// );

// const atmosphere = new THREE.Mesh(
//   new THREE.SphereGeometry(5, 50, 50),
//   new THREE.ShaderMaterial({
//     vertexShader: atmosphereVertexShader,
//     fragmentShader: atmosphereFragmentShader,
//     blending: THREE.AdditiveBlending,
//     side: THREE.BackSide,
//   })
// );

// atmosphere.scale.set(1.1, 1.1, 1.1);

// scene.add(atmosphere);

// const group = new THREE.Group();
// group.add(sphere);
// scene.add(group);

// renderer.render(scene, camera);

// let mouse = {
//   x: 0,
//   y: 0,
// };

// addEventListener("mousemove", () => {
//   mouse.x = (event.clientX / innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / innerHeight) * 2 + 1;
// });

// const starGeometry = new THREE.BufferGeometry();
// const starMaterial = new THREE.PointsMaterial({
//   color: 0xffffff,
// });

// const starVertices = [];
// for (let i = 0; i < 10000 - 1; i++) {
//   const x = (Math.random() - 0.5) * 2000;
//   const y = (Math.random() - 0.5) * 2000;
//   const z = -Math.random() * 2000;
//   starVertices.push(x, y, z);
// }

// starGeometry.setAttribute(
//   "position",
//   new THREE.Float32BufferAttribute(starVertices, 3)
// );

// const stars = new THREE.Points(starGeometry, starMaterial);

// scene.add(stars);

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.setSize(innerWidth, innerHeight);
//   renderer.render(scene, camera);
//   sphere.rotation.y += 0.001;
//   gsap.to(group.rotation, {
//     x: -mouse.y * 0.5,
//     y: mouse.x * 0.5,
//     duration: 2,
//   });
// }

// animate();

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   innerWidth / innerHeight,
//   0.001,
//   2000
// );

// const renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setPixelRatio(devicePixelRatio);

// camera.position.set(0, 0, 250);

// const triangles = [];

// let mouse = {
//   x: 0,
//   y: 0,
// };

// for (let i = 0; i < 50; i++) {
//   const triangle = new THREE.Mesh(
//     new THREE.ConeGeometry(10, 10, 3, 1),
//     new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       metalness: 0,
//       roughness: 0,
//     })
//   );

//   triangle.position.set(
//     Math.random() * 1000 - 500,
//     Math.random() * 1000 - 500,
//     Math.random() * 1000 - 500
//   );

//   triangles.push(triangle);

//   scene.add(triangle);
// }

// const light = new THREE.DirectionalLight(0x000000, 1);
// light.position.set(0, 0, 500);

// const backlight = new THREE.DirectionalLight(0xffffff, 1);
// backlight.position.set(0, 0, -500);

// scene.add(backlight);

// scene.add(light);

// scene.add(camera);
// renderer.setSize(innerWidth, innerHeight);

// let frame = 0;

// addEventListener("mousemove", () => {
//   mouse.x = (event.clientX / innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / innerHeight) * 2 + 1;
//   console.log([mouse.x, mouse.y]);
// });

// function animate(triangle) {
//   requestAnimationFrame(() => animate(triangle));
//   camera.lookAt(0, 0, 0);

//   const trianglex = triangle.position.x;
//   const triangley = triangle.position.y;
//   const trianglez = triangle.position.z;

//   triangle.position.set(
//     trianglex + 0.1 * mouse.x,
//     triangley + 0.1 * mouse.y,
//     trianglez + 0.1 * mouse.y
//   );

//   gsap.to(camera.position, {
//     x: mouse.x * 500,
//     y: mouse.x * 500,
//     z: mouse.y * 500,
//   });
//   frame++;
//   triangle.rotation.y += 0.01;
//   triangle.rotation.x += 0.01;
//   renderer.render(scene, camera);
// }

// scene.background = new THREE.Color(0xffffff);

// triangles.forEach((triangle) => animate(triangle));

// renderer.render(scene, camera);

// document.body.appendChild(renderer.domElement);

