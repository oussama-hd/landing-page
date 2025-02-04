import {Component, OnInit} from '@angular/core';
import {ButtercmssdkService} from '../../../../services/buttercmssdk.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  standalone : false,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  public pageData = null;
  public posts;

  constructor(private bCMSSDKService: ButtercmssdkService,
              private route: ActivatedRoute,
              public meta: Meta,
              public title: Title) {
  }

  ngOnInit(): void {
  //   const slug = this.route.snapshot.params.slug;
  //   this.bCMSSDKService.getButterCMS().page.retrieve('landing-page', slug?.length ? slug : 'landing-page-with-components')
  //     .then((res:any) => {
  //       this.pageData = res.data.data.fields;

  //       this.title.setTitle("jkljfzd");
  //       this.meta.addTag({name: 'description', content: ' '});

  //       setTimeout(() => {
  //         const f = this.route.snapshot.fragment;
  //         const element = document.querySelector('#' + f);
  //         if (element) {
  //           element.scrollIntoView();
  //         }
  //       }, 500);
  //     })
  //     .catch(_ => this.bCMSSDKService.navigateToNotFound());

  //   this.bCMSSDKService.getButterCMS().post.list({page: 1, page_size: 2})
  //     .then((res:any) => this.posts = res)
  //     .catch(_ => this.bCMSSDKService.navigateToNotFound());
  }

}
