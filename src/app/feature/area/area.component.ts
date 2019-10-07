import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public assets = '../../../assets/';
  public customImage: string;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('area.diagnosis.image').subscribe(url => this.customImage = `url(${this.assets + url})`);
  }

}
