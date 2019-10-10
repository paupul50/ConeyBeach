import { FooterConstants } from './footer.constants';
import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerConstants = FooterConstants;

  constructor(private fb: FacebookService) {
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = {
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

}
