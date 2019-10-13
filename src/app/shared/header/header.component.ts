import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL } from 'src/assets/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() route: string;

  public background: string;
  public title: string;
  public description: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('menu').subscribe(menu => {
      switch (this.route) {
        case menu.team.key:
        case menu.labor.key:
        case menu.area.key:
        case menu.collaboration.key:
        case menu.contact.key:
          this.background = `url(${assetsFeatureURL + menu[this.route].background}`;
          this.title = menu[this.route].title;
          break;
        default:
          this.background = `url(${assetsFeatureURL + menu.notFound.background}`;
          this.title = menu.notFound.title;
          this.description = menu.notFound.description;
          break;
      }
    });
  }
}
