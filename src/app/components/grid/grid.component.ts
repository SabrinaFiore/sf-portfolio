import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  model = this.gltfLoaderService.load('assets/still_life_with_orange/scene.gltf')

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
  }

  ngOnInit(): void {
  }

}
