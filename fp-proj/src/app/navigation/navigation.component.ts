import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;
  subscription: Subscription;
  constructor(private _authService: AuthService) {
    this.isLoggedIn$ = this._authService.isLoggedIn$;
    this.subscription = this._authService.isLoggedIn$.subscribe(x => this.isLoggedIn = x);
  }

  ngOnInit() {
  }

  logIn() {
    this._authService.logIn()
  }

  logOut() {
    this._authService.logOut()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


