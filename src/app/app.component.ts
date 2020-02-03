import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private seoService: SeoService
  ) {
    this.translate.setDefaultLang('sp');
    this.seoService.setDefaultMetaTags();
  }
}
