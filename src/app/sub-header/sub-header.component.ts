import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit, OnChanges {

  @Input() fileLoc2 = 'No File Chosen';

  constructor() { }

  ngOnInit() { }

  ngOnChanges() { }
}
