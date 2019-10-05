import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { LaborComponent } from './labor/labor.component';
import { AreaComponent } from './area/area.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, TeamComponent, LaborComponent, AreaComponent, CollaborationComponent, ContactComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ]
})
export class FeatureModule { }
