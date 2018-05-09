import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  parentFolderLoc = 'C:\codebase\poc\backoffice-ui';

  chosenFileLoc: string;

  ngOnInit() { }

  clickFileTree(fileLoc: string): void {
    this.chosenFileLoc = fileLoc;
  }
}
