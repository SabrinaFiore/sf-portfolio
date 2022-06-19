import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-model',
  templateUrl: './view-model.component.html',
  styleUrls: ['./view-model.component.scss']
})
export class ViewModelComponent implements OnInit {

  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];

  selectedColor = this.colors[0];

  constructor() { }

  ngOnInit(): void {
  }

}
