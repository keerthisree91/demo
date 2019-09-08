import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  public isCollapsed = true;
  demo = {
    price: '₹ 1,799.00',
    latestReviewDate: '2018-10-21T00:00:00.000Z',
    domain: 'amazon.in',
    // tslint:disable-next-line:max-line-length
    imageUrl: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg', name: 'Bluetooth Speakers', title: 'JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)',
    sourceCategory: 'Bluetooth Speakers',
    product_id: 'ABCD1234',
    createdAt: '2018-08-31T09:36:08.448Z',
    reviewCount: 3013,
    topScores: [{ topic: 'Sound Quality', score: 4.6 },
    { topic: 'Bass', score: 4.2 },
    { topic: 'Design and Build', score: 4.2 },
    { topic: 'Battery Backup', score: 4.2 }]
  };
  ngOnInit(): void {

  }
  myFunction() {
    const x = document.getElementById('collapseExample');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
}
