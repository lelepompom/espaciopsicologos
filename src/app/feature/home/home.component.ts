import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsFeatureURL, actionIndicator } from 'src/assets/constants';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public route: string;
  public title: string;
  public description: string;
  public carouselImgs = [];
  public activeImg = 0;
  private carouselIntervalID;

  constructor(
    private translate: TranslateService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateMetaTags('home');
    this.translate.get('home').subscribe(home => {
      this.carouselImgs = home.images.map(img => assetsFeatureURL + img);
      this.title = home.title;
      this.description = home.description;
    });
    this.carouselIntervalID = setInterval(() => this.changeSlide(actionIndicator.next), 3000);
  }

  ngOnDestroy() {
    clearInterval(this.carouselIntervalID);
  }

  public changeSlide(side: string): void {
    switch (side) {
      case actionIndicator.prev:
        this.activeImg = this.activeImg > 0 ? this.activeImg - 1 : this.activeImg = this.carouselImgs.length - 1;
        break;
      case actionIndicator.next:
        this.activeImg = this.activeImg < this.carouselImgs.length - 1 ? this.activeImg + 1 : this.activeImg = 0;
        break;
    }
  }

}
