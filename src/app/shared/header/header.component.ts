import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public route: string;
  public background: string;
  public title: string;
  public description: string;
  private assets = '../../../assets/';
  public carouselImgs = [];
  public activeImg = 0;

  constructor(
    private location: Location,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.route = this.location.path();
    if (this.route || this.route === '') {
      this.setHeader();
    }
  }

  private setHeader() {
    this.translate.get('menu').subscribe(menu => {
      switch (this.route) {
        case menu.home.path:
          this.carouselImgs = menu.home.images.map(img => this.assets + img);
          this.background = `url(${this.assets + menu.home.background}`;
          this.title = menu.home.title;
          this.description = menu.home.description;
          break;
        case menu.team.path:
          this.background = `url(${this.assets + menu.team.background}`;
          this.title = menu.team.title;
          this.description = menu.team.description;
          break;
        case menu.labor.path:
          this.background = `url(${this.assets + menu.labor.background}`;
          this.title = menu.labor.title;
          this.description = menu.labor.description;
          break;
        case menu.area.path:
          this.background = `url(${this.assets + menu.area.background}`;
          this.title = menu.area.title;
          this.description = menu.area.description;
          break;
        case menu.collaboration.path:
          this.background = `url(${this.assets + menu.collaboration.background}`;
          this.title = menu.collaboration.title;
          this.description = menu.collaboration.description;
          break;
        case menu.contact.path:
          this.background = `url(${this.assets + menu.contact.background}`;
          this.title = menu.contact.title;
          this.description = menu.contact.description;
          break;
        default:
          this.background = `url(${this.assets + menu.notFound.background}`;
          this.title = menu.notFound.title;
          this.description = menu.notFound.description;
          break;
      }
    });
  }

  public changeSlide(side: string): void {
    switch (side) {
      case 'prev':
        this.activeImg = this.activeImg > 0 ? this.activeImg - 1 : this.activeImg = this.carouselImgs.length - 1;
        break;
      case 'next':
        this.activeImg = this.activeImg < this.carouselImgs.length - 1 ? this.activeImg + 1 : this.activeImg = 0;
        break;
    }
  }

}
