import { CardService } from './card.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit, AfterViewInit {
  items: any;
  projects: any;

  constructor(private CardService: CardService) {
    this.items = this.CardService.getItems();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

  initScrollTrigger() {
    gsap.to('.hero--title', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: 'section.one',
        scrub: true,
        start: '70% 60%',
        end: '85% 30%',
      },
    });
    gsap.to('.section.one', {
      scrollTrigger: {
        toggleClass: 'active',
        trigger: 'figure.preview',
        start: '50% 80%',
        end: '85% 20%',
      },
    });
  }
}
