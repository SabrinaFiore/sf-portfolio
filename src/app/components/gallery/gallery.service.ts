import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  imgs = [
    { id: '1', url: 'assets/images/img01.JPEG' },
    { id: '2', url: 'assets/images/img02.png' },
    { id: '3', url: 'assets/images/img03.JPEG' },
  ];

  getImages(): any[] {
    return this.imgs;
  }
}
