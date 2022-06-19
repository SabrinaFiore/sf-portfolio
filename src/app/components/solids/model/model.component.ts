import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { PerspectiveCamera, Object3D, Mesh, MeshStandardMaterial } from 'three';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  @Input() set color(value: string) {
    this.applyColorToMaterial(value);
    this.#color = value;
  }

  #color = '';

  controls: any;
  object: any;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  cup$ = this.gltfLoaderService.load('assets/scene.gltf');
  cupMaterial: MeshStandardMaterial | undefined;

  ngOnInit(): void {
  }

  cupReady(object: Object3D) {
    console.log("[debug] Object3D", object);
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.cupMaterial.color.setHex(parseInt('d67600', 16));
    this.applyColorToMaterial(this.#color);
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 10;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 3.5;
    camera.position.setY(3);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }
}
