import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public logo: string;
  public menuVisibility: boolean;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('menu.logo').subscribe(logo => this.logo = assetsFeatureURL + logo);
    this.menuVisibility = false;
  }

}
