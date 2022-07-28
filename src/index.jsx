import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";


class App extends Component {
  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    console.log(window.innerWidth);

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    const geometry = new THREE.CircleGeometry(2, 10);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    let animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
