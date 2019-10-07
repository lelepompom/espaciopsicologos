import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public assets = '../../../assets/';
  public inmaculadaDataIndex = 0;
  public mariaDataIndex = 0;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

  changeData(member: string, action: string): void {
    switch (action) {
      case 'prev':
        if (member === 'inmaculada') {
          this.inmaculadaDataIndex = this.inmaculadaDataIndex > 0 ? this.inmaculadaDataIndex - 1 : 0;
        } else {
          this.mariaDataIndex = this.mariaDataIndex > 0 ? this.mariaDataIndex - 1 : 0;
        }
        break;
      case 'next':
        this.translate.get('team.members').subscribe(members => {
          if (member === 'inmaculada') {
            this.inmaculadaDataIndex = this.inmaculadaDataIndex < members[member].data.length - 1 ?
              this.inmaculadaDataIndex + 1 :
              members[member].data.length - 1;
          } else {
            this.mariaDataIndex = this.mariaDataIndex < members[member].data.length - 1 ?
              this.mariaDataIndex + 1 :
              members[member].data.length - 1;
          }
        });
        break;
    }
  }
}
