import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public assets = assetsFeatureURL;
  public customImage: string;

  constructor(
    public translate: TranslateService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateMetaTags('area');
    this.translate.get('area.diagnosis.image').subscribe(url => this.customImage = `url(${assetsFeatureURL + url})`);
  }

}
