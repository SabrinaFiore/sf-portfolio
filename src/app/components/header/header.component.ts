import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  item: any;
  showFooter = false;

  constructor(private router: Router, private hs: HeaderService) {}

  links = [
    { id: 1, name: '', path: './portfolio' },
    { id: 2, name: 'Work', path: './view-work' },
    { id: 3, name: 'Projects', path: './view-gallery' },
    { id: 4, name: 'Contact', path: './view-contact' },
  ];

  ngOnInit() {}

  refresh(item: any) {
    if (item === 1) {
      console.log('[debug] BEFORE IF this.router.url', this.router);
      this.router.navigate(['./portfolio']).then(x => {
        console.log("[debug] refresh navigate", x);
        window.location.reload();
      });
    }

    if (item === 4) {
      console.log('[debug] CONTACT PAGE');
      this.hs.showFooterSubject.next(this.showFooter)
    }
  }
}
