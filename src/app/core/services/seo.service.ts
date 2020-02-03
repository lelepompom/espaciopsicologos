import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta, private translate: TranslateService) {}

  public setDefaultMetaTags() {
    this.translate.get('general').subscribe(section => {
      this.title.setTitle(section.title);
      this.meta.addTags([
        {name: 'viewport', content: section.viewport},
        {name: 'author', content: section.author}
      ]);
    });
  }

  public updateMetaTags(page: string) {
    this.translate.get(`${page}`).subscribe(section => {
      this.title.setTitle(section.title);
      this.meta.updateTag({name: 'description', content: section.description});
    });
  }
}
