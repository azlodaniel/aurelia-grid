import { bindable, inject } from 'aurelia-framework';


@inject()
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

  clickedRow(event, record) {
    if (event.target.id === 'select-row') {
      return true;
    }

    this.records.forEach(r => r.clicked = false);
    record.clicked = true;
    return true;
  }

  selectAllRecords() {
    if (this.allSelected) {
      this.records.forEach(r => r.selected = true);
    } else {
      this.records.forEach(r => r.selected = false);
    }
  }

  selectRow(record) {
    record.selected = record.selected === true ? false : true;
    return true;
  }
}
