import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {

  public image: string;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('labor.image').subscribe(url => this.image = `url(${assetsFeatureURL + url})`);
  }

}
