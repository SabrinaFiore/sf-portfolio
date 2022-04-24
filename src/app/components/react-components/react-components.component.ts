import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as React from 'react';
import { createRoot } from "react-dom/client";
import myReactComponent from '../../myReactComponent'

@Component({
  selector: 'react-components',
  // templateUrl: './react-components.component.html',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./react-components.component.scss']
})
export class ReactComponentsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor() { }

  public rootId = 'rootId';

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {
  }

  private render() {
    // ReactDOM.render(React.createElement(myReactComponent), document.getElementById(this.rootId));

    const container = document.getElementById(this.rootId);
    const root = createRoot(container!); // createRoot(container!) if you use TypeScript
    root.render(React.createElement(myReactComponent));
  }
}
