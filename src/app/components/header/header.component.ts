import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  links = [
    // { id: 1, name: 'Landing', path: './view-landing' },
    { id: 2, name: 'Work', path: './view-work' },
    { id: 3, name: 'Work 2', path: './view-work-two' },
    { id: 3, name: 'Personal Projects', path: './view-gallery' },
  ];

  ngOnInit() { }
}
