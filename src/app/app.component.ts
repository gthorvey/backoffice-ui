import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chosenFileLoc: string;

  chosenDirLoc: string;

  ngOnInit() { }

  clickFileTree(fileLoc: string): void {
    this.chosenFileLoc = fileLoc;
  }

  clickDirTree(dirLoc: string): void {
    this.chosenDirLoc = dirLoc;
  }
}
