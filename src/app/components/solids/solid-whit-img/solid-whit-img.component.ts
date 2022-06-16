import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import fragmentShader from './shaders/fragment-shader.glsl';
import vertexShader from './shaders/vertex-shader.glsl';

@Component({
  selector: 'app-solid-whit-img',
  templateUrl: './solid-whit-img.component.html'
})
export class SolidWhitImgComponent implements OnInit {

  camera;
  scene;
  renderer;

  container: any;
  geometry: any;
  material: any;
  mesh: any;
  time;
  options: any;
  controls;
  images: any;
  title: any;
  imageStore: any;

  texture = new THREE.TextureLoader().load('../../../../assets/images/img01.01.jpg');

  @ViewChild('dom', { static: true }) dom!: ElementRef;

  constructor() {
    this.time = 0;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.camera.position.z = 2;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      // alpha: true
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.resize();
    this.setupResize();
    this.addImages();
    this.addObjects();
    this.render();
  }

  ngOnInit(): void {
    this.onPageLoad(this.options);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.dom.nativeElement.appendChild(this.renderer.domElement);
  }

  onPageLoad(_options: any) {
    // this.dom.nativeElement.getElementById('dom');
    // this.dom = options.dom;
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  addImages() {
    this.images = [document.querySelectorAll('img')];

    this.imageStore = this.images.map((img: any) => {
      // let bound = img.getBoundingClientRect();
      // console.log(bound);
    })
  }

  addObjects() {
    // this.geometry = new THREE.PlaneBufferGeometry( 100, 100, 100, 10 );
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // this.geometry = new THREE.SphereBufferGeometry( 0.4, 40, 40 );
    this.material = new THREE.MeshNormalMaterial();

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: {value: 0},
        imageTexture: {value: this.texture},
      },
      side: THREE.DoubleSide,
      fragmentShader: fragmentShader,
      vertexShader: vertexShader,
      // wireframe: true,
    })

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
  }

  render() {
    this.time += 0.5;
    this.mesh.rotation.x = this.time / 100;
	  this.mesh.rotation.y = this.time / 100;

    this.material.uniforms.time.value = this.time;

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
