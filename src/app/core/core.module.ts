import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './templates/menu/menu.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NotfoundComponent } from './templates/notfound/notfound.component';
import { MaintenanceComponent } from './templates/maintenance/maintenance.component';



@NgModule({
  declarations: [MenuComponent, HeaderComponent, FooterComponent, NotfoundComponent, MaintenanceComponent],
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
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    MaintenanceComponent
  ]
})
export class CoreModule { }
