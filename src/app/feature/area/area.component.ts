import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public assets = assetsFeatureURL;
  public customImage: string;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('area.diagnosis.image').subscribe(url => this.customImage = `url(${assetsFeatureURL + url})`);
  }

}
