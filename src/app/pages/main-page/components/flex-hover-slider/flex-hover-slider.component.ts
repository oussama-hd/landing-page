import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-flex-hover-slider',
  templateUrl: './flex-hover-slider.component.html',
  styleUrl: './flex-hover-slider.component.scss'
})
export class FlexHoverSliderComponent {
  loading: boolean = true;
  slideStyles = {
    home: { title: { transform: 'rotate(90deg)', top: '15%' }, about: { opacity: '0' } },
    about: { title: { transform: 'rotate(90deg)', top: '15%' }, about: { opacity: '0' } },
    work: { title: { transform: 'rotate(90deg)', top: '15%' }, about: { opacity: '0' } },
    contact: { title: { transform: 'rotate(90deg)', top: '15%' }, about: { opacity: '0' } }
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000); 
  }

  onSlideHover(slide: string): void {
    this.slideStyles[slide].title = { transform: 'rotate(0deg)', top: '10%' };
    this.slideStyles[slide].about = { opacity: '1' };
  }

  onSlideLeave(slide: string): void {
    this.slideStyles[slide].title = { transform: 'rotate(90deg)', top: '15%' };
    this.slideStyles[slide].about = { opacity: '0' };
  }

  getTitleStyle(slide: string): any {
    return this.slideStyles[slide]?.title;
  }

  getAboutStyle(slide: string): any {
    return this.slideStyles[slide]?.about;
  }
}