import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {

  public image: string;

  constructor(
    public translate: TranslateService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateMetaTags('labor');
    this.translate.get('labor.image').subscribe(url => this.image = `url(${assetsFeatureURL + url})`);
  }

}
