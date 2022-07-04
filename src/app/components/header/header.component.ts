import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  links = [
    // { id: 1, name: 'Landing', path: './view-landing' },
    // { id: 2, name: 'Work', path: './view-work' },
    { id: 1, name: 'Home', path: './view-home' },
    { id: 2, name: 'Model', path: './view-model',   },
    { id: 3, name: 'Work Expericence', path: './view-work-two' },
    { id: 4, name: 'Personal Projects', path: './view-gallery' },
  ];

  ngOnInit() {
    console.log('[debug] links', this.links)
  }

  refresh(item: any) {
    if (item === 2) {
      console.log('[debug] BEFORE IF this.router.url', this.router);
        this.router.navigate(['./view-model']).then(x => {
          console.log("[debug] refresh navigate", x);
          window.location.reload();
        });
      }
  }
}
