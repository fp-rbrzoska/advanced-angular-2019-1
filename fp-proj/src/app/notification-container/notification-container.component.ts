import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  compFactory: ComponentFactory<NotificationComponent>;
  constructor(private notificationService: NotificationsService,
    private cfr: ComponentFactoryResolver) {
    this.notificationService.messages$.subscribe(msg => {
        this.compFactory = this.cfr.resolveComponentFactory(NotificationComponent);
        const compRef = this.container.createComponent(this.compFactory);
        compRef.instance.message = msg;
        setTimeout(() => {
          compRef.destroy();
        }, 3000)
      }
    );
  }

  ngOnInit() {
    console.log(this.container)
 }

}
