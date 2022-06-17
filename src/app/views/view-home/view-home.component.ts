import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
  // host: { class: 'home' }
})
export class ViewHomeComponent implements OnInit {
  camera;
  scene;
  renderer;
  cameraX: any;
  cameraY: any;

  container: any;
  geometry: any;
  material: any;
  mesh: any;
  time: any;
  controls: any;
  textureLoader = new THREE.TextureLoader();
  matcapTexture = this.textureLoader.load("https://bruno-simon.com/prismic/matcaps/3.png");
  cursor = { x: 0, y: 0 };
  raycaster = new THREE.Raycaster();
  pickedObject: any;
  pos: any;

  @ViewChild('canvasFlagHtml') canvasFlagHtml!: any;
  @ViewChild('dom', { static: true }) dom!: ElementRef;
  @ViewChild('title', {static: true}) title: any;
  @ViewChild('subtitle', {static: true}) subtitle: any;
  @ViewChild('buttons', {static: true}) buttons: any;

  @HostListener('document:mousemove', ['$event']) documentClickEvent($event: MouseEvent) {
    $event.preventDefault();
    this.pos = this.getCanvasRelativePosition(event);
    this.cursor.x = ($event.clientX / window.innerWidth) * 2 - 1;
    this.cursor.y = ($event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.cursor, this.camera);
  }

  constructor() {
    this.time = 0;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.camera.position.z = 3;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      // alpha: true
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.resize();
    this.setupResize();
    this.addObjects();
    this.render();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.dom.nativeElement.appendChild(this.renderer.domElement);
  }

  ngDoCheck(): void {
    const intersectedObjects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersectedObjects.length) {
      if (this.pickedObject !== intersectedObjects[0].object) {
        // console.log(this.pickedObject);
        this.pickedObject = intersectedObjects[0].object;
      }
      // console.log(this.pickedObject);
    } else {
      this.pickedObject = null;
      // console.log('NULL');
    }
  }

  addObjects() {
    /** Flat cube */
    // this.geometry = new THREE.PlaneBufferGeometry( 100, 100, 10, 10 );

    /** Flat Sphere */
    this.geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 200, 30);
    this.material = new THREE.MeshMatcapMaterial({ matcap: this.matcapTexture });

    // this.material = new THREE.ShaderMaterial({
    //   uniforms: {
    //     time: {value: 0}
    //   },
    //   side: THREE.DoubleSide,
    //   // fragmentShader: fragmentShaderSphere,
    //   // vertexShader: vertexShaderShpere,
    //   wireframe: true,
    // })

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
    // console.log(this.mesh);
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.time += 0.5;
    this.mesh.rotation.x = this.time / 100;
	  this.mesh.rotation.y = this.time / 100;

    let cameraX = this.cursor.x;
    let cameraY = this.cursor.y;

    this.camera.position.x += (cameraX - this.camera.position.x) / 10;
    this.camera.position.y += (cameraY - this.camera.position.y) / 10;

    // this.material.uniforms.time.value = this.time;

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }

  getCanvasRelativePosition($event: any) {
    const el = this.canvasFlagHtml.nativeElement;

    const rect = el.getBoundingClientRect();

    return {
      x: ($event.clientX - rect.left) * this.canvasFlagHtml.width / rect.width,
      y: ($event.clientY - rect.top) * this.canvasFlagHtml.height / rect.height,
    };
  }

  initialAnimations() {
    const tl = gsap.timeline({paused: true, delay: 0.8, easing: "Back.out(2)"});

    tl.from(this.title, {
      opacity: 0,
      y: 20
    })
    .from(this.subtitle, {
      opacity: 0,
      y: 20
    }, "-=.3")
    .from(this.buttons, {
      stagger: {
        each: 0.2,
        from: "start"
      },
      opacity: 0,
      y: 20
    },"-=.3"
    )
    .to(this.material, {
      opacity: 1
    }, "-=.2");

    tl.play();
  }
}
