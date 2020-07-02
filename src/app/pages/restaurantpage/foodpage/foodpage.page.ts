import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.page.html',
  styleUrls: ['./foodpage.page.scss'],
})
export class FoodpagePage implements OnInit {

  isExpanded = false;
  isExpanded1 = false;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

}
