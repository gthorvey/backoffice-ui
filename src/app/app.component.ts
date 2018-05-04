import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'ng2-file-tree/ng2-file-tree';

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

  clickFileTree(fileLoc: string): void {
    console.log(fileLoc);

    // Get full file path
    console.log(fileLoc);
    this.chosenFileLoc = fileLoc;
  }
}
