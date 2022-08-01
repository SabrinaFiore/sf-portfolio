import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Object3D } from 'three';

@Component({
  selector: 'app-model-obj',
  templateUrl: './model-obj.component.html',
  styleUrls: ['./model-obj.component.scss']
})
export class ModelObjComponent implements OnInit {
  @Input() obj$ = this.gltfLoaderService.load('assets/fiesta_tea/scene.gltf')
  controls: any;
  object: any;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
    console.log("[debug] obj$", this.obj$)
  }

  ngOnInit(): void {
  }

  cupReady(object: Object3D) {
    console.log("[debug] Object3D", object);
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    console.log("[debug] Object3D orbitControls", orbitControls);
  }
}
