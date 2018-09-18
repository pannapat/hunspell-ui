import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentLanguageCode: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      response => (this.currentLanguageCode = response.lang) // fetch routing parameter inside component class
    );
  }

  ngOnInit() {}
}
