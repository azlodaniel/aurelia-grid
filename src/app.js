import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { GridService } from './grid-service';

@inject(GridService)
export class App {
  constructor(gridService) {
    this._gridService = gridService;
    this.gridObj = { };
    this.columnDefinitions = this._gridService.getGridColumns();
    this.gridData = this._gridService.getRecords();
  }

  activate() {
    this.gridObj.allowRowSelection = true;
  }
}
