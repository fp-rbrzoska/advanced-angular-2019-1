import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  logIn() {
    this._isLoggedIn$.next(true);
  }

  logOut() {
    this._isLoggedIn$.next(false);
  }


  // demo
  isLoggedInSubj$ = new Subject<boolean>();
  isLoggedInRSubj$ = new ReplaySubject<boolean>(2);
  isLoggedInASubj$ = new AsyncSubject<boolean>();

  isLoggedInObs1$ = new Observable(obs => {
    obs.next(1);
    obs.next(2);
    obs.complete();
  });
  isLoggedInObs2$ = of(1, 2).pipe(map(x => x*2));
  isLoggedInObs3$ = from([1,2]);


}
