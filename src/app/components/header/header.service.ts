import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  showFooterSubject = new Subject<any>();
  public showFooter: boolean | undefined;

  constructor() { }
}
