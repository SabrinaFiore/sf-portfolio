import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  host: { class: 'footer' },
})
export class FooterComponent {

  constructor() { }

  items = [
    {
      id: 1,
      url: 'assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/sabrina-fiore-8437a657/',
    },
    {
      id: 2,
      url: 'assets/icons/github.svg',
      link: 'https://github.com/SabrinaFiore',
    },
    {
      id: 3,
      url: 'assets/icons/instagram.svg',
      link: 'https://www.instagram.com/sabrinafiore_dev/',
    }
  ];
}
