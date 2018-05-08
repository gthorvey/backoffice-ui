import { Component, Input, Output, OnInit, OnChanges, enableProdMode, EventEmitter } from '@angular/core';
import { Service } from './file-explorer.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'],
  providers: [Service]
})
export class FileExplorerComponent implements OnInit, OnChanges {

  @Input() parentFolder: string;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  products: any[] = [{
    "catagoryId": null,
    "name": "",
    "expand": false,
    "fullPath": "",
    "id": "100"
  }];

  currentItem: any;

  constructor(private _service: Service) { }

  ngOnInit() {
    this._service.getProductsObservable()
      .subscribe(prds => {
        for (const prd of prds) {
          const treeItem = <any>{
            id: prd.id,
            name: prd.name,
            expand: prd.expand,
            fullPath: prd.fullPath,
            catagoryId: prd.catagoryId
          };
          try {
            this.products.push(treeItem);
          } catch (e) {
            console.log('Inside Error ' + e.name + '-' + e.message);
          }

        }
      });
    this.currentItem = this.products[0];
  }

  ngOnChanges() { }

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
