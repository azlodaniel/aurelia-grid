import { bindable } from 'aurelia-framework';

export class Grid {
  @bindable gridData;
  @bindable gridObj;
  @bindable columnDefinitions;
  constructor() {
  }

  columnDefinitionsChanged(newVal) {
    if (newVal) {
      this._setColumnHeaders();
    }
  }

  _setColumnHeaders() {
    if (this.columnDefinitions && this.columnDefinitions.length > 0) {
      console.log(this.columnDefinitions);
      this.columnHeaders = this.columnDefinitions;
    }
  }

  gridDataChanged(newVal) {
    if (newVal && newVal.length > 0) {
      this.records = newVal;
    }
  }

  getColumnFromRecords() {
    let firstRecord = this.records[0];
    this.columnHeaders = Object.keys(firstRecord);
  }

  clickedLine(record) {
    this.records.forEach(r => r.clicked = false);
    record.clicked = true;
  }

  selectAllRecords() {
    if (this.allSelected) {
      this.records.forEach(r => r.selected = true);
    } else {
      this.records.forEach(r => r.selected = false);
    }
  }

  selectRow(line) {
    line.selected = line.selected === true ? false : true;
  }
}
