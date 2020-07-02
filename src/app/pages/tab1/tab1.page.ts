import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  size: number;
  constructor() { }

  ngOnInit() {
    this.size = window.innerWidth;
  }
  slideOpts = {
    initialSlide: 0,
  };

  slideOpts3 = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 3,
    // when window width is >= 320px
    breakpoints: {
      480: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      800: {
        slidesPerView: 10,
        spaceBetween: 0
      },
    }
  };


  slideOpts1 = {
    initialSlide: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 4,
        spaceBetween: 0
      },
    }
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.size = event.target.innerWidth;
  }

}
