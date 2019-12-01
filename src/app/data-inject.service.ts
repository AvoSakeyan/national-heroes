// import { Injectable } from '@angular/core';


export class DataInjectService {
data = 'Avo Sakeyan';
  constructor() { }
  getData() {
    console.log( this.data);
  }
  updateData(newValue) {
    this.data = newValue;
  }
}
