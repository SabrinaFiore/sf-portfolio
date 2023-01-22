import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  @Input() hideColumn: boolean = false;
  model = this.gltfLoaderService.load('assets/still_life_with_orange/scene.gltf')

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
  }

  ngOnInit(): void {
  }
}
