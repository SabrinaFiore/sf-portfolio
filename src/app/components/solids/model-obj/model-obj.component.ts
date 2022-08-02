import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-model-obj',
  templateUrl: './model-obj.component.html',
  styleUrls: ['./model-obj.component.scss'],
  host: { class: 'model-obj' },
})
export class ModelObjComponent implements OnInit {
  @Input() obj$ = this.gltfLoaderService.load('assets/fiesta_tea/scene.gltf')
  @Input() fObj: boolean = false;
  @Input() heightObj: boolean = false;

  controls: any;
  object: any;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
  }

  ngOnInit(): void {
  }

  cupReady(object: Object3D) {
    console.log("[debug] Object3D", object);
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    const camera = orbitControls.object as PerspectiveCamera;

    this.obj$.subscribe(res => {
        if (res.asset.extras.title === 'Station B') {
          console.log("[debug] res ENTRA",res.asset.extras.title)
          camera.zoom = 10;
          camera.position.setZ(25);
          orbitControls.autoRotate = true;
          orbitControls.autoRotateSpeed = 3;
        }
      }
    )

    // orbitControls.enableZoom = false;
    // camera.zoom = 10;
    // camera.position.setX(100);
    // camera.position.setZ(50);
  }
}
