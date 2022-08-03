import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'view-gallery',
  templateUrl: './view-gallery.component.html',
})

export class ViewGalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  firstClaim = 'I\'m a Front-End Developer with a graphic-design background and because of my working experience I\'m very fascinated by the design and the programming\'s coexistence and how they work together. Design and Development work better together. Both should be scalable, extensible and also easy to maintain and update. Design and Development\'s worlds have much in common, both do research and collect information about the occuring problems, testing solutions over and over again.';
  secondClaim = 'While Designing is about look and feel and layout, Developing is about codes and site/application\'s functioning. It is interesting to consider that they have similar definitions as it is also important to specify that the design system is a collection of reusable components which can be assembled together to create any number of applications. Instead Design patterns are reusable solutions to ordinary and occurring problems of the software design\'s contest. Building a library of design patterns, rules, and working with design patterns prevent inconsistencies in products at scale. Design System and Design Pattern define a common language which can be used to create an effective scalable solution. Design System works also with components and Design Pattern uses Class and Object (Object-oriented programming).';
  thirdClaim = 'The co-existence of these two worlds and my work experiences inspired me to discover processes to generate new ideas, forms, shapes, colors, or patterns through code and graphics rules. I believe those two worlds work really well together to create an amazing web experience.';
  fourthClaim = 'Is a process, based on exploration, iteration, reflection and discovery.';

  constructor() {}

  ngOnInit(): void {
    // this.initialAnimations();
  }

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
        start: '15% 20%',
        end: '65% 40%',
      },
    });
    gsap.to('.section.one', {
      scrollTrigger: {
        toggleClass: 'active',
        trigger: 'gallery',
        start: '10% 20%',
        end: '65% 40%',
      },
    });
  }

  initialAnimations(): void {
    // gsap.from(this.document.querySelector('.gallery'), {
    //   duration: 0.7,
    //   opacity: 0,
    //   y: -30,
    //   delay: 0.7,
    // });
  }
}
