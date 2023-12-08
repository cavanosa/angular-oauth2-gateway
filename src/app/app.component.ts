import { ResourceService } from './resource.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gateway';
  msguser = '';
  msgadmin = '';


  constructor(
    private resourceService: ResourceService
  ) {}

  user(): void {
    this.resourceService.user().subscribe({
      next: (res: any) => (this.msguser = res.message),
      error: (err: any) => (this.msguser = err.statusText + ': ' + err.status)
    });
  }

  admin(): void {
    this.resourceService.admin().subscribe({
      next: (res: any) => (this.msgadmin = res.message),
      error: (err: any) => (this.msgadmin = err.statusText + ': ' + err.status)
    });
  }

  onLogin(): void {
    window.location.href = '/oauth2/authorization/gateway';
  }
}
