import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent implements OnInit {
  @Input() number: any;
  @Input() title: any;
  @Input() claim: any;
  @Input() quote: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
