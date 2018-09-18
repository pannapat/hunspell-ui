import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  //   <p>
  //     home works! (inline template)
  //   </p>
  // `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordCount: number;
  wordText: string;
  wordList = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this.wordCount = this.wordList.length;
  }

  addWord() {
    this.wordList.push(this.wordText);
    this.wordText = '';
    this.wordCount = this.wordList.length;
  }
}
