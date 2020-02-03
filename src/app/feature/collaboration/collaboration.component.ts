import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  public collaborations = [];

  constructor(
    public translate: TranslateService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateMetaTags('collaboration');
    this.translate.get('collaboration.items').subscribe(arr => {
      this.collaborations = arr.map((item: any) => ({
        name: item.name,
        logo: assetsFeatureURL + item.logo,
        url: item.url
      }));
    });
  }

}
