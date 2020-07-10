import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  token_device: string;

  constructor(
    private fcm: AngularFireMessaging
  ) { }

  requestPushNotificationsPermission(): string { // requesting permission
    this.fcm.requestToken // getting tokens
      .subscribe(
        (token) => { // USER-REQUESTED-TOKEN
          // console.log('Permission granted! Save to the server!', token);
          this.token_device = token;
        },
        (error) => {
          console.error(error);
        }
      );

    return this.token_device;
  }

}
