import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.components.scss']
})
export class ViewWorkTwoComponent implements AfterViewInit, OnDestroy {

  constructor() { }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill();
    });
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
