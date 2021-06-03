import React, { Component } from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default class Model extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#F4F4F4");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(12, width/ height, 1, 1000);
    this.camera.position.z = -20;
    this.camera.position.y = 20;
    this.camera.position.x = 20;

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.maxDistance = 40;
    controls.minDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 10;
    controls.minAzimuthAngle = Math.PI / 2;
    controls.maxAzimuthAngle = Math.PI / 1;

    controls.addEventListener("change", () => {
      if (this.renderer) this.renderer.render(this.scene, this.camera);
    });

    var lights = [];
    lights[0] = new THREE.AmbientLight( 0xF4F4F4 );
    lights[1] = new THREE.PointLight(0x505050, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);

    this.addModels();
    this.renderScene();
    this.start();
  }

  addModels() {
    var mtlLoader = new MTLLoader();
    mtlLoader.load("material.mtl", materials => {
      materials.preload();
      console.log("Material loaded");
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "room.obj",
        object => {
          this.freedomMesh = object;
          this.freedomMesh.position.set(0, 0, 0);
          this.scene.add(this.freedomMesh);
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        error => {
          console.log("An error happened" + error);
        }
      );
    });
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: "100%", height: "100%"}}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}