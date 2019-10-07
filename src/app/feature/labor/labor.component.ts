import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {

  public assets = '../../../assets/';
  public image: string;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('labor.image').subscribe(url => this.image = `url(${this.assets + url})`);
  }

}
