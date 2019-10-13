import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  public collaborations = [];

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('collaboration.items').subscribe(arr => {
      this.collaborations = arr.map((item: any) => ({
        name: item.name,
        logo: assetsFeatureURL + item.logo,
        url: item.url
      }));
    });
  }

}
