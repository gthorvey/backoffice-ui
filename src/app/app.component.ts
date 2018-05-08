import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  parentFolderLoc = 'C:\codebase\poc\backoffice-ui';

  chosenFileLoc: string;

  ngOnInit() {
    console.log(this.parentFolderLoc);
  }

  clickFileTree(fileLoc2: string): void {
    console.log("From Inside Parent Component clickFileTree "+ fileLoc2);    
    this.chosenFileLoc = fileLoc2;
  }
}
