import { Component, Input, Output, OnInit, OnChanges, enableProdMode, EventEmitter } from '@angular/core';
import { FileExplorerService } from './file-explorer.service';
import { UserDirectoryComponent } from '../user-directory/user-directory.component';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'],
  providers: [FileExplorerService]
})
export class FileExplorerComponent implements OnInit, OnChanges {

  @Input() directorySelected: string;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  products: any[] = [{
    "id": "100",
    "name": "Choose a directory in the above text box",
    "expand": false,
    "fullPath": "",
    "catagoryId": null
  }];

  currentItem: any;

  constructor(private _service: FileExplorerService) { }

  ngOnInit() { }

  ngOnChanges() {
    const data = [];

    if (this.directorySelected !== undefined) {
      this._service.getProductsObservable(this.directorySelected)
        .subscribe(prds => {
          for (const prd of prds) {
            const treeItem = <any>{
              id: prd.id,
              name: prd.name,
              expand: prd.expand,
              fullPath: prd.fullPath,
              catagoryId: prd.catagoryId
            };
            console.log('Tree Item >> ' + JSON.stringify(treeItem));
            try {
              data.push(treeItem);
            } catch (e) {
              console.log('Inside Error ' + e.name + '-' + e.message);
            }

          }
        });
      this.products = data;
      this.currentItem = this.products[0];
    }
  }

  selectItem(e) {
    const data = e.itemData;
    this.currentItem = <any>{
      id: data.id,
      name: data.name,
      expand: data.expand,
      fullPath: data.fullPath,
      catagoryId: data.catagoryId
    };
    this.itemSelected.emit(this.currentItem.fullPath);
  }

}
