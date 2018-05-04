import { Component, Input, OnInit, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnChanges {

  @Input() fileLoc = 'No File Chosen';

  constructor() { }

  ngOnInit() {
    console.log(this.fileLoc);
  }

  ngOnChanges() {
    console.log('Inside Maincomponent OnChanges method');
  }

}
