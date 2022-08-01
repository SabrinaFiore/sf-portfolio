import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './view-portfolio-home.component.html',
  styleUrls: ['./view-portfolio-home.component.scss'],
  host: { class: 'model' },
})
export class ViewPortfolioHomeComponent implements OnInit {

  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];

  selectedColor = this.colors[0];

  constructor() { }

  ngOnInit(): void {
  }
}
