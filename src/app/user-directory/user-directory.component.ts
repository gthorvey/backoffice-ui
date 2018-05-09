import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDirectory } from "../user-directory.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-directory',
  templateUrl: './user-directory.component.html',
  styleUrls: ['./user-directory.component.css'],
})
export class UserDirectoryComponent implements OnInit {

  dir;

  @Output() itemDirSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  model = new UserDirectory('');

  ngOnInit() {
  }

  currentDirectory(directoryForm: NgForm): void {
    this.dir = directoryForm.value.path;
    this.itemDirSelected.emit(this.dir);
  }

}
