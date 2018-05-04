import { Component, Input, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit, OnChanges {

  @Input() parentFolder: string;

  constructor() { }

  ngOnInit() {
    console.log(this.parentFolder);
  }

  ngOnChanges() {
    console.log('Inside onChanges');
  }
}
