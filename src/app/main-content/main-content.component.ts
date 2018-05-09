import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BmaDataService } from '../bmadata-service/bma-data-service';
import { IBmaParameters } from './dmaparameters';
import { PossibleValues } from './possible-values';
import { ExportableValues } from './Exportable-values';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnChanges {

  @Input() fileLoc = 'C:/data/Door_v6/frame.json';

  bmaParameters: IBmaParameters[] = [];

  errorMessage: string;

  angular2Csv: Angular2Csv;

  possibleValues: PossibleValues[] = [
    { id: 1, selectableValue: 100 },
    { id: 2, selectableValue: 200 },
    { id: 3, selectableValue: 300 },
    { id: 4, selectableValue: 400 },
    { id: 5, selectableValue: 500 }
  ];

  exportableValues: ExportableValues;

  data = [];

  constructor(private _bmaDataService: BmaDataService) { }

  ngOnInit() { }

  ngOnChanges() {
    console.log(this.fileLoc);
     if (this.fileLoc.indexOf('.') >= 0) {
      this._bmaDataService.getData(this.fileLoc)
        .subscribe(bmaParams => {
          this.bmaParameters = bmaParams;
        },
          error => this.errorMessage = <any>error);
    }
  }

  onFormSubmit(exportableValues: ExportableValues) {
    this.exportableValues = exportableValues;
    const keys = [];
    const values = [];

    for (const key in exportableValues) {
      const tempVal = '' + exportableValues[key];
      if (key.startsWith('dmaparameter')) {
        keys.push(tempVal);
      } else if (key.startsWith('paramValue')) {
        values.push(tempVal);
      }
    }

    for (let i = 0; i < keys.length; i++) {
      const tempKey = keys[i];
      const tempVal = values[i];
      this.data.push({ parameter: JSON.stringify({ [tempKey]: tempVal }) });
    }

    new Angular2Csv(this.data, 'My Report');
  }

}

