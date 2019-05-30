import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fp-proj';
  constructor(private notificationService: NotificationsService) {

  }

  showMessage(msg) {
    this.notificationService.pushMessage(msg)
  }
}
