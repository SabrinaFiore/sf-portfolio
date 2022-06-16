import { Component, Inject, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'view-landing',
  templateUrl: './view-landing.component.html',
})

export class ViewLandingComponent implements OnInit, OnDestroy {
  paragraph: "I was born in Bari, Southern Italy, on May 19th, 1992. I attended the Academy of Fine Arts in Rome in 2011, where I started to elaborate my interest in photography and graphic arts on a deep level. In 2017 I studied in Barcelona, where I developed my knowledge in coding and I approached the Hi-tech\'s world working as a Front-End Developer. Meantime I never stopped working on my photography and graphic art interests." = "I was born in Bari, Southern Italy, on May 19th, 1992. I attended the Academy of Fine Arts in Rome in 2011, where I started to elaborate my interest in photography and graphic arts on a deep level. In 2017 I studied in Barcelona, where I developed my knowledge in coding and I approached the Hi-tech's world working as a Front-End Developer. Meantime I never stopped working on my photography and graphic art interests.";

  @ViewChild('secondSection', {static: true}) secondSection: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('imageFirst', { static: true }) imageFirst!: ElementRef<HTMLDivElement>;
  // @ViewChild('imageSecond', { static: true }) imageSecond!: ElementRef<HTMLDivElement>;
  // @ViewChild('imageThird', { static: true }) imageThird!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    ScrollTrigger.refresh();
    this.initialAnimations();
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill();
    });
  }

  initScrollAnimations(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center',
      },
      duration: 1.1,
      scale: 1.2,
      height: 250,
    });
    // gsap.to(this.imageSecond.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.imageSecond.nativeElement,
    //     scrub: true,
    //     start: '80% center',
    //   },
    //   duration: 1.1,
    //   scale: 1.2,
    //   height: 380,
    // });
    // gsap.to(this.imageSecond.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.imageSecond.nativeElement,
    //     scrub: true,
    //     start: '80% center',
    //   },
    //   duration: 1.1,
    //   scale: 1.2,
    //   height: 380,
    // });
    gsap.to(this.document.querySelector('.main--heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.main--heading-1'),
        scrub: true,
        start: '120% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.main--paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.main--paragraph'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.main--second-content'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.main--second-content'),
        scrub: true,
        toggleActions: 'play none reverse none',
        start: '-60% bottom',
      },
      y: 100,
      duration: 1.1,
    });
    gsap.to(this.document.querySelector('.info-1__visual'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual'),
        scrub: true,
        toggleActions: 'play none reverse none',
        start: '-80% bottom',
      },
      y: 150,
      height: 200,
      duration: 1.1,
      scale: 1.2,
    });
  }

  initialAnimations(): void {
    gsap.from(this.imageFirst.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    });
    // gsap.from(this.imageSecond.nativeElement, {
    //   duration: 0.7,
    //   opacity: 0,
    //   y: -30,
    //   delay: 0.6,
    // });
    gsap.from(this.document.querySelector('.main--heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.main--caption'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.main--paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    });
    gsap.from(this.document.querySelector('.second-section'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    });
  }
}
