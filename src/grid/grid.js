import { bindable } from 'aurelia-framework';

export class Grid {
  @bindable gridData;
  @bindable gridSettings;
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

  clickedHeader(columnHeader) {
    this.columnHeaders.forEach(x => {
      if (x.name !== columnHeader.name) {
        x.sort = null;
      }
    });
    columnHeader.sort = (columnHeader.sort !== 'ascending') ? 'ascending' : 'decending';
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
    this.records.forEach(r => r.selected = this.allSelected);
  }

  selectRow(record) {
    record.selected = record.selected === true ? false : true;
    return true;
  }

  convertToHtmlFriendlyText(text) {
    if (!text) return text;

    let htmlFriendlyText = text.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-');
    return htmlFriendlyText;
  }
}
