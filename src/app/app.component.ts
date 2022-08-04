import { Component, HostListener, AfterViewInit } from '@angular/core';
import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'sabrina-fiore-portfolio';
  top: any;
  expand: boolean = false;
  left: any;
  cursor: any;
  follower: any;
  contactPage: any;

  // TO ACTIVE SUBSCRIBE GET SHOWFOOTER IN TRUE
  showFooter: boolean = false;

  constructor(private hs: HeaderService) {
    this.hs.showFooterSubject.subscribe(x => {
      this.showFooter = x
    })
  }

  ngAfterViewInit(): void {
    this.cursor = document.querySelector('.cursor');
  }

  @HostListener('document:mousemove', ['$event']) onMousemove(event:any) {
    this.cursor.setAttribute("style", "top:" + (event.pageY)+ "px; left:" + (event.pageX - 10) + "px;")
  }

  @HostListener('document:click', ['$event']) onClick(event:any) {
    if (event.type === 'click') {
      this.cursor.classList.add("expand");

      setTimeout(() => {
        this.cursor.classList.remove("expand");
      }, 500)
    }
  }
}
