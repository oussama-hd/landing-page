import {Component, OnInit} from '@angular/core';
import {ButtercmssdkService} from '../../../services/buttercmssdk.service';

@Component({
  standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(private bCMSSDKService: ButtercmssdkService) {}

  public menuData :any;

  ngOnInit(): void {
    // this.bCMSSDKService.getButterCMS().content.retrieve(['navigation_menu'])
    //   .then((res:any) => this.menuData = res)
    //   // .catch(_ => this.bCMSSDKService.navigateToNotFound());
  }

  isApiToken(): boolean {
    return true;
  }

}
