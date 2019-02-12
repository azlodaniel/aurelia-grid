import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { GridService } from './grid-service';

@inject(GridService)
export class App {
  constructor(gridService) {
    this._gridService = gridService;
    this.gridObj = { };
    this.columnDefinitions = this._gridService.getGridColumns();
  }

  activate() {
    this.gridObj.allowRowSelection = true;
    let data = this._gridService.getRecords();
    this.gridData = data.Records;
  }
}
