import { Component, OnInit, HostBinding, Input, SimpleChanges } from '@angular/core';

export type CuiformLayoutColumns = 1 | 2 | 3 | '1' | '2' | '3';

@Component({
  selector: 'form-layout',
  templateUrl: './form-layout.component.html',
  host: { class: 'form-layout' }
})

export class FormLayoutComponent implements OnInit {

  /**
   * Add class to manage fields for row
   */
  // tslint:disable-next-line: no-inferrable-types
  @HostBinding('class.form-layout--2-columns') has2fields: boolean = false;
  // tslint:disable-next-line: no-inferrable-types
  @HostBinding('class.form-layout--3-columns') has3fields: boolean = false;
  /**
   * Number of columns of the container.
   *
   * By default is 1
   */
  @Input() columns: CuiformLayoutColumns = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.refreshColumns();
    }
  }

  refreshColumns() {
    switch (this.columns) {
      case 2:
      case '2':
        this.has2fields = true;
        this.has3fields = false;
        break;
      case 3:
      case '3':
        this.has2fields = false;
        this.has3fields = true;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
