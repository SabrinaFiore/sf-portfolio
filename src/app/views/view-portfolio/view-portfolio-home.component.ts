import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './view-portfolio-home.component.html',
  styleUrls: ['./view-portfolio-home.component.scss'],
  host: { class: 'model' },
})
export class ViewPortfolioHomeComponent implements OnInit {
  model = this.gltfLoaderService.load('assets/station_b/scene.gltf')

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
  }

  ngOnInit(): void {
  }
}
