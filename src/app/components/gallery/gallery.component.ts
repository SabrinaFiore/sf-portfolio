import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  @Input() url: string | undefined;
  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
