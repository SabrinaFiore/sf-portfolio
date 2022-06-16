import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  links = [
    // { id: 1, name: 'Landing', path: './view-landing' },
    // { id: 2, name: 'Work', path: './view-work' },
    { id: 3, name: 'Home', path: './view-home' },
    { id: 3, name: 'Work Expericence', path: './view-work-two' },
    { id: 3, name: 'Personal Projects', path: './view-gallery' },
  ];

  ngOnInit() { }
}
