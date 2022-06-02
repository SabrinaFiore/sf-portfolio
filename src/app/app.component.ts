import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'sabrina-fiore-portfolio';
  top: any;
  left: any;
  follower: any;
  expand: boolean = false;

  @HostListener('document:click', ['$event']) onClick($event:any) {
    this.expand = true;

    setTimeout(() => {
      this.expand=false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event']) onMousemove($event:any) {
    this.top= ($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
  }
}
