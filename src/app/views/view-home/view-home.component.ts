import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
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

  @ViewChild('canvas') canvas!: any;

  @HostListener('document:mousemove', ['$event']) documentClickEvent($event: MouseEvent) {
    $event.preventDefault();
    this.pos = this.getCanvasRelativePosition(event);
    this.cursor.x = ($event.clientX / window.innerWidth) * 2 - 1;
    this.cursor.y = ($event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.cursor, this.camera)
  }

  // @HostListener('window:mouseout')
  // @HostListener('window:mouseleave') clearPickPosition() {
  //   this.cursor.x = -100000;
  //   this.cursor.y = -100000;
  //   // console.log(this.pickPosition);
  // }

  constructor() {
    this.time = 0;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight);
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
    this.renderer.setSize(window.innerWidth / 2 , window.innerHeight / 2);
    document.body.appendChild(this.renderer.domElement);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    const intersectedObjects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersectedObjects.length) {
      if (this.pickedObject !== intersectedObjects[0].object) {
        // console.log(this.pickedObject);
        this.pickedObject = intersectedObjects[0].object;
      }
      console.log(this.pickedObject);
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
    console.log(this.mesh);
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
    const el = this.canvas.nativeElement;

    const rect = el.getBoundingClientRect();

    return {
      x: ($event.clientX - rect.left) * this.canvas.width / rect.width,
      y: ($event.clientY - rect.top) * this.canvas.height / rect.height,
    };
  }

}
