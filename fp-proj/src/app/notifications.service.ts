import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _messages$ = new Subject();
  constructor() { }

  get messages$() {
    return this._messages$.asObservable();
  }

  pushMessage(msg: string) {
    this._messages$.next(msg);
  }
}
